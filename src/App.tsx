import React from 'react';
import './App.css';
import {API} from "./lge-elements";

function App() {
  // @todo
  // @ts-ignore
  return (<API apiDescriptionUrl={"https://raw.githubusercontent.com/Redocly/museum-openapi-example/main/openapi.yaml"}></API>);
}

export default App;
