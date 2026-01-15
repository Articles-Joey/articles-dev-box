import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

// Used to warn user if a local connection cant be made to main site as it would impact functionality of the dev-box

const useMainSiteStatus = (params) => {

    const { data, error, isLoading, mutate } = useSWR(
        // "http://localhost:3012/api/auth/session",
        (process.env.NODE_ENV === "development" && !params?.disable) ? `http://localhost:3001/api/config` : null,
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            shouldRetryOnError: false,
        }
    );

    return {
        data,
        error,
        isLoading,
        mutate,
    };

};

export default useMainSiteStatus;