import { useState } from "react";
import axios from "axios";
import { getBaseEndPoint } from "../../config/config";

const useDriver = () => {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(false);
    const BASEURL = getBaseEndPoint();

    const getDriver = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${BASEURL}vehicle_maintenance/vehicle_defect/driver_list/`
            );
            setDrivers(response?.data);
        } catch (err) {
            console.error("GET Driver API Error:", err);
        } finally {
            setLoading(false);
        }
    };
    return { getDriver, drivers, loading };
};
export default useDriver;




