(this["webpackJsonpreact-scratch-map"]=this["webpackJsonpreact-scratch-map"]||[]).push([[0],{10:function(e,t,_){"use strict";_.d(t,"a",(function(){return a}));var a="http://localhost:3000"},34:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14),_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_jvectormap__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(35),react_jvectormap__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jvectormap__WEBPACK_IMPORTED_MODULE_6__),_emotion_styled__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(71),axios__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9),axios__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__),country_list__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(23),country_list__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(country_list__WEBPACK_IMPORTED_MODULE_9__),_config__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__),Map=function(_React$Component){Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Map,_React$Component);var _super=Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Map);function Map(){var _this;Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Map);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={countryCodes:[[],[]],countryNames:[[],[]],data:{blank:5},choiceIsVisited:!0,visitedColor:"#ffffbf",bucketListColor:"#fc8d59"},_this.handleColorChange=function(e){_this.setState({choiceIsVisited:eval(e.target.value)})},_this.postVisit=function(e,t,_){var a={countryCode:e,countryName:t,has_visited:_,on_bucket_list:!_};axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_10__.a,"visits"),a,{withCredentials:!0})},_this.deleteVisit=function(e){axios__WEBPACK_IMPORTED_MODULE_8___default.a.delete("".concat(_config__WEBPACK_IMPORTED_MODULE_10__.a,"visits"),{data:{country_code:e},withCredentials:!0})},_this.handleClick=function(e,t){_this.state.choiceIsVisited?_this.addCountryToState(0,t,_this.state.choiceIsVisited):_this.addCountryToState(1,t,_this.state.choiceIsVisited)},_this.addCountryToState=function(e,t,_){var a=_this.state.countryCodes[e],s=_this.state.countryNames[e],r=_this.state.countryCodes[(e+1)%2],n=_this.state.countryNames[(e+1)%2],c={countryCodes:_this.state.countryCodes,countryNames:_this.state.countryNames,data:_this.state.data};if(_this.removeCountryFromState(r,n,t,c),-1===a.indexOf(t)){var o=Object(country_list__WEBPACK_IMPORTED_MODULE_9__.getName)(t);_this.postVisit(t,o,_),c.data[t]=_?5:1,c.countryCodes[e]=[].concat(Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(a),[t]),c.countryNames[e]=[].concat(Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(s),[o]),console.log(c.data),_this.setState(c),console.log(_this.state.data)}else _this.deleteVisit(t),_this.removeCountryFromState(a,s,t,c),c.countryCodes[e]=a,c.countryNames[e]=s,console.log(c.data),_this.setState(c),console.log(_this.state.data)},_this.removeCountryFromState=function(e,t,_,a){-1!==e.indexOf(_)&&(e.splice(e.indexOf(_),1),t.splice(t.indexOf(Object(country_list__WEBPACK_IMPORTED_MODULE_9__.getName)(_)),1),delete a.data[_])},_this}return Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Map,[{key:"componentDidMount",value:function(){var e=this;axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_10__.a,"visits"),{withCredentials:!0}).then((function(t){t.data.forEach((function(t){var _=e.state.data;t.has_visited?(_[t.country.country_code]=5,e.setState({countryCodes:[[].concat(Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e.state.countryCodes[0]),[t.country.country_code]),e.state.countryCodes[1]],countryNames:[[].concat(Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e.state.countryNames[0]),[t.country.name]),e.state.countryNames[1]],data:_})):(_[t.country.country_code]=1,e.setState({countryCodes:[e.state.countryCodes[0],[].concat(Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e.state.countryCodes[1]),[t.country.country_code])],countryNames:[e.state.countryNames[0],[].concat(Object(_Users_jyeharry_Projects_project2_react_scratch_map_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e.state.countryNames[1]),[t.country.name])],data:_}))}))}))}},{key:"render",value:function(){var e=this.state,t=e.countryNames,_=e.data,a=e.visitedColor,s=e.bucketListColor;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jvectormap__WEBPACK_IMPORTED_MODULE_6__.VectorMap,{map:"world_mill",backgroundColor:"#91bfdb",zoomOnScroll:!1,containerStyle:{width:"100%",height:"520px"},onRegionClick:this.handleClick,containerClassName:"map",regionStyle:{initial:{fill:"#e4e4e4","fill-opacity":.9,stroke:"none","stroke-width":0,"stroke-opacity":0},hover:{"fill-opacity":.8,cursor:"pointer"},selected:{fill:"#e4e4e4"},selectedHover:{}},regionsSelectable:!0,series:{regions:[{values:_,scale:[s,a],normalizeFunction:"polynomial"}]}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{class:"button-section",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button",{class:"buttons",value:!0,onClick:this.handleColorChange,children:"Select visited countries"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button",{class:"buttons",value:!1,onClick:this.handleColorChange,children:"Select bucket-list countries"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{class:"float-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{class:"float-child",className:"countries-list",children:["Countries Visited:",t[0].map((function(e,t){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{class:"list1",children:e},t)}))]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{class:"float-child",className:"countries-list",children:["Countries I Want to Visit:",t[1].map((function(e,t){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{class:"list2",children:e},t)}))]})]})]})}}]),Map}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Map},41:function(e,t,_){},42:function(e,t,_){},49:function(e,t,_){},50:function(e,t,_){},72:function(e,t,_){"use strict";_.r(t);var a=_(1),s=_.n(a),r=_(33),n=_.n(r),c=(_(41),_(11)),o=_(12),i=_(14),l=_(13),u=(_(42),_(4)),d=_(0);var h=function(e){return Object(d.jsxs)("div",{class:"form",children:[e.name,"'s Profile",Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"})]})};var m=function(){return Object(d.jsxs)("div",{id:"homepage",children:[Object(d.jsx)("h2",{id:"tagline",children:"Keep track of what countries you've visited with Travel Tracker! Get in touch with fellow travellers and exchange travel tips!"}),Object(d.jsx)("img",{src:"https://worldmapwithcountries.net/wp-content/uploads/2018/07/winter_world_physical_giclee_lg.jpg",alt:"world map"})]})};var p=function(e){return e.loggedIn?Object(d.jsxs)("nav",{children:[Object(d.jsx)(u.b,{to:"/",children:Object(d.jsx)("h2",{children:"Home"})}),Object(d.jsx)(u.b,{to:"/map",children:Object(d.jsx)("h2",{children:"My Map"})}),Object(d.jsx)(u.b,{to:"/profile",children:Object(d.jsx)("h2",{children:"My Profile"})}),Object(d.jsxs)("button",{onClick:e.logOut,children:["Logout ",e.name]})]}):Object(d.jsxs)("nav",{children:[Object(d.jsx)(u.b,{to:"/",children:Object(d.jsx)("h2",{children:"Home"})}),Object(d.jsx)(u.b,{to:"/register",children:Object(d.jsx)("h2",{children:"Sign up"})}),Object(d.jsx)(u.b,{to:"/login",children:Object(d.jsx)("h2",{children:"Login"})})]})},b=(_(49),function(e){Object(i.a)(_,e);var t=Object(l.a)(_);function _(){var e;Object(c.a)(this,_);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},e.nameChange=function(t){e.setState({name:t.target.value})},e.emailChange=function(t){e.setState({email:t.target.value})},e.passwordChange=function(t){e.setState({password:t.target.value})},e.confirmPasswordChange=function(t){e.setState({confirmPassword:t.target.value})},e.handleRegister=function(t){t.preventDefault();var _={name:e.state.name,email:e.state.email,password:e.state.password,confirmPassword:e.state.confirmPassword};console.log("NEW MINION ATTAINED",_),e.props.onRegister(_)},e}return Object(o.a)(_,[{key:"render",value:function(){return Object(d.jsxs)("form",{class:"form",onSubmit:this.handleRegister,children:[Object(d.jsxs)("label",{className:"registerLabel",children:["Name:",Object(d.jsx)("input",{required:!0,name:"name",onChange:this.nameChange})]}),Object(d.jsxs)("label",{className:"registerLabel",children:["Email:",Object(d.jsx)("input",{type:"email",required:!0,name:"email",onChange:this.emailChange})]}),Object(d.jsxs)("label",{className:"registerLabel",children:["Password:",Object(d.jsx)("input",{type:"password",required:!0,name:"password",onChange:this.passwordChange})]}),Object(d.jsxs)("label",{className:"registerLabel",children:["Confirm Password:",Object(d.jsx)("input",{type:"password",required:!0,name:"confirmPassword",onChange:this.confirmPasswordChange})]}),Object(d.jsx)("button",{type:"submit",id:"register",children:"Sign Up!"})]})}}]),_}(s.a.Component)),j=(_(50),function(e){Object(i.a)(_,e);var t=Object(l.a)(_);function _(){var e;Object(c.a)(this,_);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.emailChange=function(t){e.setState({email:t.target.value})},e.passwordChange=function(t){e.setState({password:t.target.value})},e.handleLogin=function(t){t.preventDefault();var _={email:e.state.email,password:e.state.password};e.props.onLogin(_)},e}return Object(o.a)(_,[{key:"render",value:function(){return Object(d.jsxs)("form",{class:"form",onSubmit:this.handleLogin,children:[Object(d.jsxs)("label",{class:"label",className:"loginLabel",children:["Email:",Object(d.jsx)("input",{type:"email",required:!0,name:"email",onChange:this.emailChange})]}),Object(d.jsxs)("label",{class:"label",children:["Password:",Object(d.jsx)("input",{type:"password",required:!0,name:"password",onChange:this.passwordChange})]}),Object(d.jsx)("button",{type:"submit",id:"register",children:"Login"})]})}}]),_}(s.a.Component)),O=_(9),E=_.n(O),C=_(34),g=_(10),P=_(3),y=function(e){Object(i.a)(_,e);var t=Object(l.a)(_);function _(){var e;Object(c.a)(this,_);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={checkedSession:!1,loggedIn:!1,user:{}},e.userLogout=function(){E.a.delete("".concat(g.a,"login"),{withCredentials:!0}).then((function(t){e.logOut()}))},e.userLogin=function(t){E.a.post("".concat(g.a,"login"),t,{withCredentials:!0}).then((function(t){e.loginSuccess(t.data)})).catch((function(){return e.loginFail()}))},e.userRegistered=function(t){E.a.post("".concat(g.a,"users"),t,{withCredentials:!0}).then((function(t){e.loginSuccess(t.data)})).catch((function(){return e.loginFail()}))},e}return Object(o.a)(_,[{key:"loginSuccess",value:function(e){this.setState({checkedSession:!0,user:e,loggedIn:!0}),this.props.history.push("/map")}},{key:"loginFail",value:function(){this.setState({checkedSession:!0,user:{},loggedIn:!1})}},{key:"logOut",value:function(){this.setState({checkedSession:!0,user:{},loggedIn:!1}),this.props.history.push("/")}},{key:"componentDidMount",value:function(){var e=this;E.a.get("".concat(g.a,"login"),{withCredentials:!0}).then((function(t){e.loginSuccess(t.data)})).catch((function(){return e.loginFail()}))}},{key:"render",value:function(){return this.state.checkedSession?Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{logOut:this.userLogout,loggedIn:this.state.loggedIn,name:this.state.user.name}),Object(d.jsxs)(P.c,{children:[Object(d.jsx)(P.a,{path:"/profile",children:Object(d.jsx)(h,{name:this.state.user.name,email:this.state.user.email})}),Object(d.jsx)(P.a,{path:"/register",children:Object(d.jsx)(b,{onRegister:this.userRegistered})}),Object(d.jsx)(P.a,{path:"/login",children:Object(d.jsx)(j,{onLogin:this.userLogin})}),Object(d.jsx)(P.a,{path:"/map",children:Object(d.jsx)(C.a,{})}),Object(d.jsx)(P.a,{path:"/",children:Object(d.jsx)(m,{})})]})]}):Object(d.jsx)("div",{children:"Loading ... "})}}]),_}(s.a.Component),f=Object(P.f)(y);var M=function(){return Object(d.jsx)(u.a,{children:Object(d.jsx)(f,{})})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.ba3a412e.chunk.js.map