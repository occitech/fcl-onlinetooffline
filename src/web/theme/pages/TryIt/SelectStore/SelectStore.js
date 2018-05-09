import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
import { Icon } from "leaflet";
import EnhanceSelectStore from "./EnhanceSelectStore";
import SelectStoreQuery from "./SelectStoreQuery.gql";
import Select from "react-select";
import "./SelectStore.scss";

const SelectStore = ({
  currentStep,
  gotoStepNumber,
  setTryItState,
  getStepIndex,
  setStepIsFilled,
  collapsed = false,
  loading,
  stores,
  addresses,
  address
}) => {
  return (
    <div className="select-store">
      <div className="select-store__title">
        <span className="select-store__title__pins">
          {getStepIndex("When") + 1}
        </span>
        <span className="select-store__title__content">
          Select a store location on the map
        </span>
      </div>
      {!collapsed ? (
        <Fragment>
          <div className="select-store__searchbar">
            <Select
              value={
                loading
                  ? null
                  : addresses.filter(selectAddress => {
                      return selectAddress.value === address;
                    })
              }
              onChange={value => {
                setStepIsFilled(true);
                setTryItState({ address: value.value });
              }}
              options={loading ? null : addresses}
            />
          </div>
          <div className="select-store__map">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Map
                center={[43.584296, 1.44182]}
                zoom={14}
                style={{ height: "600px", width: "800px", overflow: " hidden" }}
              >
                <TileLayer
                  attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {stores.map(store => {
                  return (
                    <Marker
                      key={store.name}
                      position={[
                        loading ? 0 : store.coordinates.latitude,
                        loading ? 0 : store.coordinates.longitude
                      ]}
                      icon={
                        new Icon.Default({
                          imagePath: "/static/media/",
                          iconUrl: `${icon.replace(/\/static\/media\//, "")}`,
                          shadowUrl: `${shadow.replace(
                            /\/static\/media\//,
                            ""
                          )}`
                        })
                      }
                      onClick={() => {
                        setStepIsFilled(true);
                        setTryItState({ address: store.address });
                      }}
                    >
                      <Popup>
                        <div>
                          <div>Store name ─ {loading ? null : store.name}</div>
                          <div>Email: {loading ? null : store.owner.email}</div>
                          <div>Phone: {loading ? null : store.phone}</div>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </Map>
            )}
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

SelectStore.propTypes = {
  collapsed: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  store: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    owner: PropTypes.shape({
      email: PropTypes.string
    }).isRequired,
    coordinates: PropTypes.shape({
      longitude: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired
    }).isRequired
  })
};

export default EnhanceSelectStore(SelectStoreQuery)(SelectStore);
