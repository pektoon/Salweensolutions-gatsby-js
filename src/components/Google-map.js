import React, {Component} from 'react'
import styled from 'styled-components'
import GoogleMapReact from "google-map-react"
import PinMarker from "../images/Map-icon-01.png"

const GoogleWrapper = styled.div`
  height: 720px;
  width: 100%;
  display: block;
  color: #333;
  text-align: left;
  position: relative;
  z-index: 9;
  overflow: hidden;
`
const Header = styled.h1`
  color: #fff;
  padding-left: 25px;
  margin: 0 0 10px;
  font-size: 20px;
  background: url(${PinMarker}) no-repeat left top;
  background-size: 20px 20px;
`

const TextMap = styled.p`
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
}
`
const Marker = props => (
  <React.Fragment>
    <div
      style={{
        backgroundImage: "url(" + "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png" + ")",
        height: 43,
        width: 27,
      }}
    />

    {props.show && (
      <div
        style={{
          width: 650,
          height: 250,
          backgroundColor: "#F4821F",
          padding: 30,
          position: 'absolute',
          left: -300,
          bottom: 5,
        }}
      >
        <div>
          <Header>Salween Solutions Co., Ltd.</Header>,
          <TextMap>
            3 Promphan 3 Building, 13th Floor,
            <br />
            Unit 1308 - 1312 Lat Phrao Soi 3,
            <br /> Lat Phrao Road, Chompol, Chatuchak, <br />
            Bangkok 10900, Thailand{" "}
          </TextMap>
          ,
          <TextMap>
            Feel free to chat to us via email at inquiries@salweensolutions.com
          </TextMap>
        </div>
      </div>
    )}
  </React.Fragment>
)

class GoogleMap extends Component {

    constructor(props) {
      super(props)
      this.state = {
        center: {
          lat: 13.8122707,
          lng: 100.5645161,
        },
        zoom: 17,
        show: true,
      }
    }
  render() {
    return (
      <GoogleWrapper style={{ height: "100vh", width: "100%" }} name="CONTACT">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDx3M35j0LjFuPMG3D-yctlekGKfHtmV84" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onChildClick={this._onChildClick}
        >
          <Marker
            lat={13.8122707}
            lng={100.5645161}
            show={this.state.show}
          />
        </GoogleMapReact>
      </GoogleWrapper>
    )
  }



}

export default GoogleMap

