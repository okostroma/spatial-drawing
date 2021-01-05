import React from 'react';
import {GeoJSON, MapContainer} from "react-leaflet";
import './style.css';



const gradient = {
  "3.0": "#D9F5FB",
  "3.25": "#AAE5FA",
  "3.5": "#64CDF8",
  "3.75": "#3AC0F7",
  "4": "#00AEF5",
  "4.25": "#009DF4",
  "4.5": "#008DEF",
  "4.75": "#007FD7",
  "5": "#0071BF",
  "5.25": "#0063AB",
  "5.5": "#005797",
  "5.75": "#174C84",
  "6.5": "#283D6C",
}

const testArr = ["3.0", "3.25", "3.5", "3.75", "4", "4.25", "4.5", "5", "5.25", "5.5", "5.75", "6.5"]

class Map extends React.Component {

  setColor = () => {
    return {
      fillColor: "#F2F3F4",
      fillOpacity: 1,
      weight: 1,
    }
  }
  render() {
    const { data } = this.props;
    console.log(data);

    return (
        <div className="Map">
          <MapContainer >
            <GeoJSON
                     style={this.setColor}
                     data={data}
            />
          </MapContainer>
        </div>
    );
  }
}


export default Map;
