import { createSignal, onMount } from 'solid-js';

import { globalState } from '../../store';
import { get } from '../../api/apiClient';

interface LocationData {
  id: number;
  wikiDataId: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number;
  longitude: number;
  population: number;
}

interface Links {
  rel: string;
  href: string;
}

interface Metadata {
  currentOffset: number;
  totalCount: number;
}

interface GeoDataResponse {
  data: LocationData[];
  links: Links[];
  metadata: Metadata;
}

const ComponentA = () => {
  const buttonStyle = {
    'background-color': 'blue',
    color: 'white',
    padding: '8px 16px',
    border: '1px solid black',
    'border-radius': '4px',
    cursor: 'pointer',
    margin: '10px 0',
  };
  return (
    <div>
      <h2>Component A</h2>
      <p>Global Count: {globalState.globalState.count}</p>
      <button style={buttonStyle} onClick={globalState.incrementCount}>
        Increment Global Count
      </button>
    </div>
  );
};

// Component B
const ComponentB = () => {
  const inputStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  return (
    <div>
      <h2>Component B</h2>
      <p>Global Message: {globalState.globalState.message}</p>
      <input
        type="text"
        value={globalState.globalState.message}
        onInput={(e) =>
          globalState.updateMessage((e.target as HTMLInputElement).value)
        }
        style={inputStyle}
      />
    </div>
  );
};

const Global = () => {
  /*eslint-disable */
  const [locations, setLocations] = createSignal<LocationData[]>([]);
  const fetchData = async () => {
    try {
      const response = await get<GeoDataResponse>("v1/geo/adminDivisions", {
        params: {},
        headers: {
          "X-RapidAPI-Key":
            "978bfe2f3dmsh0df7373f5f4dda3p192911jsndf378e98ac62",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      });
      setLocations(response.data);
      //   console.log('Response:', response.data);
      // Process the response data as needed
    } catch (error) {
      console.error("Error in API call:", error);
    }
  };
  onMount(() => {
    fetchData();
  });

  return (
    <div>
      <ComponentA />
      <ComponentB />
      <div>asdome</div>
      <h2
        style={{ "font-size": "24px", "font-weight": "bold", margin: "20px 0" }}
      >
        Api implementation
      </h2>
      <ul>
        {locations().map((location) => {
          return (
            <li
              style={{
                border: "1px solid black",
                padding: "8px",
                width: "fit-content",
                margin: "10px 0 10px 20px",
              }}
            >
              <div>Name: {location.name}</div>
              <div>Country: {location.country}</div>
              <div>Region: {location.region}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Global;
