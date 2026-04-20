import useSWR from "swr";

import { minutesToMilliseconds } from "date-fns";

const fetcher = (url) => fetch(url).then((res) => res.json());

const usePoliticalParties = (params) => {

    const { data, error, isLoading, mutate } = useSWR(
        process.env.NODE_ENV === 'development' ?
            "http://localhost:3001/api/news/resources/political-parties"
            :
            "https://articles.media/api/news/resources/political-parties",
        fetcher,
        params?.preload ?
            {
                dedupingInterval: ((1000 * 60) * 10),
                focusThrottleInterval: minutesToMilliseconds(60),
                errorRetryInterval: ((1000 * 60) * 5),
                fallbackData: params?.preload
            }
            :
            {
                dedupingInterval: ((1000 * 60) * 10),
                focusThrottleInterval: minutesToMilliseconds(60),
                errorRetryInterval: ((1000 * 60) * 5),
                // fallbackData: []
            }
    );

    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default usePoliticalParties;