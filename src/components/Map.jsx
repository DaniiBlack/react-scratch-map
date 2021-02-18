import React from "react";
import { VectorMap } from "react-jvectormap";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import axios from "axios";
import { getName } from "country-list";

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
    title: "",
    titleSet: false,
    choiceIsVisited: true,
    visitedColor: '#00cc00',
    bucketListColor: '#dddd00'
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
    console.log(data);
    axios.post('http://localhost:3000/visits', data, {withCredentials: true});
  }

  deleteVisit = (countryCode) => {
    axios.delete('http://localhost:3000/visits', {data: {country_code: countryCode}});
  }

  componentDidMount() {
    axios.get('http://localhost:3000/visits', {withCredentials: true}).then( (result) => {
      const visitedNames = result.data.visited.map(visited => getName(visited));
      const bucketNames = result.data.bucketList.map(bucket => getName(bucket));
      this.setState({
        countryCodes: [result.visited, result.bucketList],
        countryNames: [visitedNames, bucketNames]
      })
    })
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

    this.removeCountryFromState(otherCodes, otherNames, countryCode);

    if (codes.indexOf(countryCode) === -1) {
      const countryName = getName(countryCode);
      this.postVisit(countryCode, countryName, isVisitedSelected);
      newState.data[countryCode] = isVisitedSelected ? 5 : 1;
      newState.countryCodes[countriesIndex] = [...codes, countryCode];
      newState.countryNames[countriesIndex] = [...names, countryName];
      this.setState(newState);
    } else {
      this.deleteVisit(countryCode);
      this.removeCountryFromState(codes, names, countryCode);
      delete newState.data[countryCode];
      newState.countryCodes[countriesIndex] = codes;
      newState.countryNames[countriesIndex] = names;
      this.setState(newState);
    }
  }

  removeCountryFromState = (countryCodes, countryNames, countryCode) => {
    if (countryCodes.indexOf(countryCode) !== -1) {
      countryCodes.splice(countryCodes.indexOf(countryCode), 1);
      countryNames.splice(countryNames.indexOf(getName(countryCode)), 1);
    }
  }

  render() {
    const { countryNames, data, title, titleSet, visitedColor, bucketListColor } = this.state;
    return (
      <div>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent" // change it to ocean blue: #0077be or a lighter blue which suits green: #00a1ff
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
        <Container>
          <ButtonContainer>
            <button value={true} onClick={this.handleColorChange}>{'Select visited countries'}</button>
            <button value={false} onClick={this.handleColorChange}>{'Select bucket-list countries'}</button>
          </ButtonContainer>
          <div>
            {[...countryNames[0], ...countryNames[1]].map((country, i) => (
              <div key={i}>{country}</div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Map;

const Container = styled.div`
  text-align: center;
  input {
    padding: 10px;
    border-radius: 5px;
    border-shadow: 0;
    border-style: solid;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
`;
