import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";
import { useEffect, useState } from "react";

import { DEVID, ROUTE_TYPE_SIGNATURE, TRANSPORT_SIGNATURE } from "@env";

// const busImg = require("../../../assets/images/bus.jpg");
// const tramImg = require("../../../assets/images/tram.jpg");
// const trainImg = require("../../../assets/images/train.jpg");

const devID = String(DEVID);
const routeTypeSignature = String(ROUTE_TYPE_SIGNATURE);
const transportSignature = String(TRANSPORT_SIGNATURE);

const TransportScreen = () => {
  const [rawData, setRawData] = useState([]);
  const [routeType, setRouteType] = useState([]);
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/transportation%2Ftram.jpg?alt=media&token=6a967f1c-a67e-4fe3-8fdc-ebb54b762f0c",
    "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/transportation%2Ftram%20mel.jpg?alt=media&token=0262854a-6571-4927-a0ed-9b5db4ca6bf3",
    "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/transportation%2Ftrain.jpg?alt=media&token=0a326574-5fcd-4b45-a3e9-b50547f8280b",
    "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/transportation%2FD2_5001_(Melbourne_tram)_in_Elizabeth_St_on_route_19_to_City_in_PTV_livery%2C_December_2013.jpg?alt=media&token=e7886a67-2cdc-49d9-8cdc-244b66fcd9b5",
    "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/transportation%2Fbus.jpg?alt=media&token=1944441b-fea0-45b0-876f-48c39c6d1669",
    "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/transportation%2Fimage.jpg?alt=media&token=b756f32b-2b53-42ae-9e9f-f782072efcec",
    "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/transportation%2F4403-4549-mt.jpg?alt=media&token=01646c9d-2659-499b-ae43-44bf964e6f19",
    "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/transportation%2FCitadis_405_n%C2%B0907_%C3%A0_Porte_de_Choisy_par_Cramos%20(1).jpg?alt=media&token=47740880-d215-40fe-a2a5-52e6e445a285",
  ];
  const typeUrl = `http://timetableapi.ptv.vic.gov.au/v3/route_types?devid=${devID}&signature=${routeTypeSignature}`;

  const lat = "-37.8080770201347";
  const long = "144.96268921184907";
  const dataUrl = `http://timetableapi.ptv.vic.gov.au/v3/stops/location/${lat},${long}?devid=${devID}&signature=${transportSignature}`;

  const getRouteType = () => {
    fetch(typeUrl)
      .then((res) => res.json())
      .then((data) => {
        setRouteType(data["route_types"]);
      });
  };

  const getRawData = () => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => {
        setRawData(data["stops"]);
      });
  };

  const defineRouteType = (type) => {
    let routeName = "";
    routeType.map((route) => {
      if (route["route_type"] === type) {
        routeName = route["route_type_name"];
      }
    });
    return routeName;
  };

  const addImg = (type) => {
    let img;
    const transportMode = defineRouteType(type);
    if (transportMode === "Tram") {
      img = tramImg;
    } else if (transportMode === "Train") {
      img = trainImg;
    } else {
      img = busImg;
    }
    return img;
  };

  const getRouteNumAndName = (routes) => {
    const routeInfo = [];
    routes.map((route) => {
      routeInfo.push({
        routeName: route["route_name"],
        routeNum: route["route_number"],
      });
    });
    return routeInfo;
  };

  const processRawData = () => {
    const processedData = [];
    rawData.map((data, index) => {
      processedData.push({
        stopName: data["stop_name"],
        stopLat: data["stop_latitude"],
        stopLong: data["stop_longitude"],
        transportType: defineRouteType(data["route_type"]),
        img: { uri: images[index] },
        routes: getRouteNumAndName(data["routes"]),
      });
    });
    return processedData;
  };

  useEffect(() => {
    getRouteType();
    getRawData();
  }, []);

  // getDistance();
  const categories = ["Distance from RMIT"];

  return (
    <RecommendationTemplate
      data={processRawData()}
      topic="Transportation"
      categories={categories}
      transport
    />
  );
};

export default TransportScreen;
