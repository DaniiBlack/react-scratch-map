import React from "react";
import { VectorMap } from "react-jvectormap";
// import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import axios from "axios";
import { getName } from "country-list";
import { host } from '../config'

class Map extends React.Component {
  state = {
    countryCodes: [
      [], // visited countries go here
      []  // bucket list countries go here
    ],
    countryNames: [
      [], // visited countries go here
      []  // bucket list countries go here
    ],
    data: {blank: 5},
    choiceIsVisited: true,
    visitedColor: '#ffffbf',
    bucketListColor: '#fc8d59'
  };

  handleColorChange = e => {
    this.setState({ choiceIsVisited: eval(e.target.value) });
  };

  postVisit = (code, name, isVisitedSelected) => {
    const data = {
      countryCode: code,
      countryName: name,
      has_visited: isVisitedSelected,
      on_bucket_list: !isVisitedSelected
    }
    axios.post(`${host}visits`, data, {withCredentials: true});
  }

  deleteVisit = (countryCode) => {
    axios.delete(`${host}visits`, {data: {country_code: countryCode}, withCredentials: true});
  }

  componentDidMount() {
    axios.get(`${host}visits`, {withCredentials: true}).then( (result) => {
      result.data.forEach((entry) => {
        const newData = this.state.data;
        if (entry.has_visited) {
          newData[entry.country.country_code] = 5;
          this.setState({
            countryCodes: [
              [...this.state.countryCodes[0], entry.country.country_code],
              this.state.countryCodes[1]
            ],
            countryNames: [
              [...this.state.countryNames[0], entry.country.name],
              this.state.countryNames[1]
            ],
            data: newData
          });
        } else {
          newData[entry.country.country_code] = 1;
          this.setState({
            countryCodes: [
              this.state.countryCodes[0],
              [...this.state.countryCodes[1], entry.country.country_code]
            ],
            countryNames: [
              this.state.countryNames[0],
              [...this.state.countryNames[1], entry.country.name],
            ],
            data: newData
          });
        }
      });
    });
  }


  handleClick = (e, countryCode) => {
    const VISITED_COUNTRIES = 0, BUCKET_LIST_COUNTRIES = 1;
    if (this.state.choiceIsVisited) {
      this.addCountryToState(VISITED_COUNTRIES, countryCode, this.state.choiceIsVisited);
    } else {
      this.addCountryToState(BUCKET_LIST_COUNTRIES, countryCode, this.state.choiceIsVisited);
    }
  };

  addCountryToState = (countriesIndex, countryCode, isVisitedSelected) => {
    let codes = this.state.countryCodes[countriesIndex];
    let names = this.state.countryNames[countriesIndex];

    let otherCodes = this.state.countryCodes[(countriesIndex + 1) % 2];
    let otherNames = this.state.countryNames[(countriesIndex + 1) % 2];

    const newState = {
      countryCodes: this.state.countryCodes,
      countryNames: this.state.countryNames,
      data: this.state.data
    };

    this.removeCountryFromState(otherCodes, otherNames, countryCode, newState);

    if (codes.indexOf(countryCode) === -1) {
      const countryName = getName(countryCode);
      this.postVisit(countryCode, countryName, isVisitedSelected);
      newState.data[countryCode] = isVisitedSelected ? 5 : 1;
      newState.countryCodes[countriesIndex] = [...codes, countryCode];
      newState.countryNames[countriesIndex] = [...names, countryName];
      console.log(newState.data);
      this.setState(newState);
      console.log(this.state.data);
    } else {
      this.deleteVisit(countryCode);
      this.removeCountryFromState(codes, names, countryCode, newState);
      newState.countryCodes[countriesIndex] = codes;
      newState.countryNames[countriesIndex] = names;
      console.log(newState.data);
      this.setState(newState);
      console.log(this.state.data);
    }
  }

  removeCountryFromState = (countryCodes, countryNames, countryCode, newState) => {
    if (countryCodes.indexOf(countryCode) !== -1) {
      countryCodes.splice(countryCodes.indexOf(countryCode), 1);
      countryNames.splice(countryNames.indexOf(getName(countryCode)), 1);
      delete newState.data[countryCode];
    }
  }

  render() {
    const { countryNames, data, visitedColor, bucketListColor } = this.state;
    return (
      <div>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#91bfdb" // change it to ocean blue: #0077be or a lighter blue which suits green: #00a1ff
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "520px"
          }}
          onRegionClick={this.handleClick} // gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selected: {
              fill: "#e4e4e4" // color for the clicked country
            },
            selectedHover: {}
          }}
          regionsSelectable={true}
          series={{
            regions: [
              {
                values: data, // this is the map data
                scale: [bucketListColor, visitedColor], // your color name's here
                normalizeFunction: "polynomial"
              }
            ]
          }}
        />
          <div class='button-section'>
            <button class='buttons' value={true} onClick={this.handleColorChange}>{'Select visited countries'}</button>
            <button class='buttons' value={false} onClick={this.handleColorChange}>{'Select bucket-list countries'}</button>
          </div>

        <div class='float-container'>
          <div class='float-child' className='countries-list'>
            Countries Visited:
            {countryNames[0].map((country, i) => (
              <div class="list1" key={i}>{country}</div>
            ))}
          </div>
          <div class='float-child' className='countries-list'>
            Countries I Want to Visit:
            {countryNames[1].map((country, i) => (
              <div class="list2" key={i}>{country}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Map;

// const Container = styled.div`
//   text-align: left;
//   column-count: 2;
//   column-gap: 1px;
//   -moz-column-count: 2;
//   -webkit-column-count: 2;
//   color: white;
//   input {
//     padding: 10px;
//     border-radius: 5px;
//     border-style: solid;
//     font-size: 40px;
//     &:focus {
//       outline: none;
//     }
//   }
// `;
//
// const Container = styled.div`
//   border: 3px solid #fff;
//   padding: 20px;
// `;
//
// const ListContainer = styled.div`
//   color: pink;
//     width: 50%;
//     float: left;
//     padding: 20px;
//     border: 2px solid red;
//   `;

// const ListContainer2 = styled.div`
//     color: limegreen;
//     margin-left: 35%;
//     margin-bottom: 5%;
//     width: 50%;
//     float: left;
//     padding: 20px;
//     border: 2px solid red;
//     `;
//
// const ButtonContainer = styled.div`
//   position: relative;
// `;
