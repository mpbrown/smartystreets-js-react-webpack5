import './App.css';
import { core } from "smartystreets-javascript-sdk";
import { createAxiosInstanceWithRequire } from './axiosRequire';
import { createAxiosInstanceWithImport } from './axiosImport';

const getSmartyclient = () => {
  let key = 'REPLACE_WITH_KEY';
  if (key === undefined) {
    throw new Error("Missing SMARTY_EMBEDDED_KEY");
  }
  const credentials = new core.SharedCredentials(key);

  let clientBuilder = new core.ClientBuilder(credentials).withLicenses([
    "us-rooftop-geocoding-enterprise-cloud",
  ]);
  let client = clientBuilder.buildUsStreetApiClient();
  return client;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => getSmartyclient()}>Click me to create smarty client</button>
        <button onClick={() => createAxiosInstanceWithRequire()}>Click me to create an axios instance with CommonJS require.default syntax</button>
        <button onClick={() => createAxiosInstanceWithImport()}>Click me to create an axios instance with ES6 import syntax</button>
      </header>
    </div>
  );
}

export default App;
