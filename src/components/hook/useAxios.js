import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (api) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const axiosData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(api);
            setLoading(false);
            setData(response.data); 
        } catch (error) {
            setLoading(false);
            console.error("Error fetching data:", error);
        }
    }, [api]);

    useEffect(() => {
        axiosData();
    }, [axiosData]);

    return { data, loading };
};
