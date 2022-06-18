import {useEffect, useState} from "react";
import {DISTANCE_CALCULATOR_KEY} from "@env";

const calculateDistanceWithAddress = (addressList, origin) => {
    const destination = origin;
    const key = String(DISTANCE_CALCULATOR_KEY);
    const [distanceList, setDistanceList] = useState([]);
    useEffect(() => {
        addressList.map((address) => {
            let url = `http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=${address}&wayPoint.2=${destination}&key=${key}`;
            return fetch(url, {
                method: "GET",
            })
                .then((res) => {
                    return res.json();
                })
                .then((housingData) => {
                    setDistanceList((prevState) => [
                        ...prevState,
                        housingData["resourceSets"][0]["resources"][0]["travelDistance"],
                    ]);
                });
        });
    }, []);
    return distanceList;
};

export {calculateDistanceWithAddress};
