import useSWR from "swr";

import { minutesToMilliseconds } from "date-fns";

const fetcher = async (data) => {
    if (process.env.NODE_ENV === 'development') {
        try {
            const res = await fetch("http://localhost:3001/api/ads");
            return await res.json();
        } catch (err) {
            // Failed to fetch from localhost, fallback to default URL
        }
    }

    return fetch(data.url).then((res) => res.json());
};

const minutes = 60;
const options = {
    dedupingInterval: minutesToMilliseconds(minutes),
    focusThrottleInterval: minutesToMilliseconds(minutes),
    errorRetryInterval: ((1000 * 60) * 5),
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