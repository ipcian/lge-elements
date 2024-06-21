import React from 'react';
import './App.css';
import {API} from "lge-elements";

function App() {

  return (<API
      apiDescriptionUrl={"https://raw.githubusercontent.com/Redocly/museum-openapi-example/main/openapi.yaml"}
      hideSchemas={true}
  />);

}

export default App;
