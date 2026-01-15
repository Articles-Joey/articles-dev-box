import useSWR from "swr";

import axios from "axios";
import { minutesToMilliseconds } from "date-fns";

const fetcher = async (data) => {
    if (process.env.NODE_ENV === 'development') {
        try {
            const res = await axios.get("http://localhost:3001/api/ads", {
                params: {
                    // ad_id: data.ad_id
                }
            });
            return res.data;
        } catch (err) {
            // Failed to fetch from localhost, fallback to default URL
        }
    }

    return axios.get(data.url, {
        params: {
            // ad_id: data.ad_id
        }
    }).then((res) => res.data);
};

const minutes = 60;
const options = {
    dedupingInterval: minutesToMilliseconds(minutes),
    focusThrottleInterval: minutesToMilliseconds(minutes),
    // keepPreviousData: true,
    // fallbackData: []
}

const useAds = (params) => {

    const { data, error, isLoading, mutate } = useSWR(
        (params?.loading || params?.disabled) ? 
        null 
        :
        {
            url: `https://articles.media/api/ads`, 
            // ad_id
        },
        fetcher,
        options
    );

    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default useAds;