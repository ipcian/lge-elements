import React from 'react';
import './App.css';
import {API} from "lge-elements";

function App() {
  // @todo
  // @ts-ignore
  return (<API hideSchemas={true} apiDescriptionUrl={"https://raw.githubusercontent.com/Redocly/museum-openapi-example/main/openapi.yaml"}/>);
}

export default App;
