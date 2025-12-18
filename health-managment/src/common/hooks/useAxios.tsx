// import { useState, useCallback } from "react";
// import axios from "axios";
// import { getBaseEndPoint } from "../../config/config";



// export const useHttp = () => {
//     const [data, setData] = useState<any>(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<any>(null);
//     const BASE_URL = getBaseEndPoint()

//     const request = useCallback(async ({
//         endpoint,
//         method = "GET",
//         // data,
//         // headers = {},
//         filters = [],
//         page,
//         perPage,
//     }: any) => {
//         setLoading(true);
//         setError(null);
//         try {
//             const response = await axios({
//                 url: `${BASE_URL}${endpoint}`,
//                 method,
//                 headers: {
//                     // ...headers,
//                     ...(filters && {
//                         "x-filters": JSON.stringify(filters),
//                     }),
//                 },
//                 params: {
//                     ...(page && { page }),
//                     ...(perPage && { per_page: perPage }),
//                 },
//                 // data,
//             });
//             setData(response.data);
//             return response.data;
//         } catch (err) {
//             setError(err);
//             throw err;
//         } finally {
//             setLoading(false);
//         }
//     },
//         []
//     );
//     return {
//         data,
//         loading,
//         error,
//         request,
//     };
// };
