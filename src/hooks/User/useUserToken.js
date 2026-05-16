import useSWR from "swr";

const fetcher = (url) =>
    fetch(url).then((res) => {
        if (res.status !== 200) {
            return false;
        }
        return res.json();
    });

const useUserToken = (port) => {

    const { data, error, isLoading, mutate } = useSWR(
        // Open source games should not attempt to fetch a token, doing this in a opt in way
        process.env.NEXT_PUBLIC_ENABLE_ARTICLES !== "false" ?
            process.env.NODE_ENV === "development" ? `http://localhost:${port}/api/token` : "/api/token"
            :
            false,
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            shouldRetryOnError: false,
            errorRetryInterval: ((1000 * 60) * 1),
            dedupingInterval: (1000 * 60) * 5, // 5 minute
        }
    );

    return {
        data,
        error,
        isLoading,
        mutate,
    };

};

export default useUserToken;