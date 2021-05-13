import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
    const [map, setMap] = useState({});
    const API = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDzMACJRl85gFqze_ojfl8BDwm0TJnOHqU`);

    useEffect(() => {
        const getData = async () => {
            const response = await axios(API);
            setMap(response.data.results[0].geometry.location);
        };
        getData();
    }, []);
    return map;
};

export default useGoogleAddress;
