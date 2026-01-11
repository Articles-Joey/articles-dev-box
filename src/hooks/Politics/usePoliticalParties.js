import useSWR from "swr";

import axios from "axios";
import { minutesToMilliseconds } from "date-fns";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const options = {
    dedupingInterval: minutesToMilliseconds(60),
    focusThrottleInterval: minutesToMilliseconds(60),
    fallbackData: []
}

const usePoliticalParties = (params) => {

    const { data, error, isLoading, mutate } = useSWR(
        process.env.NODE_ENV === 'development' ?
            "http://localhost:3000/api/news/resources/political-parties"
            :
            "https://articles.media/api/news/resources/political-parties",
        fetcher,
        params?.preload ?
            {
                dedupingInterval: ((1000 * 60) * 10),
                fallbackData: params?.preload
            }
            :
            {
                dedupingInterval: ((1000 * 60) * 10),
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