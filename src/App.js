import './App.css';
import { core } from "smartystreets-javascript-sdk";

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
      </header>
    </div>
  );
}

export default App;
