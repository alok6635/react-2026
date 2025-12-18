import axios from "axios";
import { useState } from "react"
import { getBaseEndPoint } from "../../config/config";

const useVehicle = () => {
    const [loading, setLoading] = useState();
    const [vehicleList, setVehicleList] = useState([]);
    const BASEURL = getBaseEndPoint();

    const getVehicles = async () => {
        try {
            const response = await axios.get(`${BASEURL}tms_app/vehicles_reg_dropdown`);
            setVehicleList(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return { vehicleList, loading, getVehicles };
}
export default useVehicle;