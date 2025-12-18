import { useState } from "react";
import axios from "axios";
import { getBaseEndPoint } from "../../config/config";

const useGetApi = () => {
  const [tableData, setTableData] =  useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const BASEURL = getBaseEndPoint();


interface TableRow {
  created_at: string;
  address: string;
  logged_by: string;
  driver_name: string;
  registration_number: string;
  other_involved_persons: string;
  incident_type: string;
}

interface ApiResponse {
  data: TableRow[];
}

  const getApi = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `${BASEURL}tms_app/health_and_safety/`,
        {
          params: {
            page: 1,
            per_page: 10,
          },
        }
      );

      setTableData(response?.data);
      return response?.data;
    } catch (err) {
      //   setError(err);
      console.error("GET API Error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { getApi, tableData, loading, error };
};
export default useGetApi;
