import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useUserToken = (port) => {

    const { data, error, isLoading, mutate } = useSWR(
        // "http://localhost:3012/api/auth/session",
        process.env.NODE_ENV === "development" ? `http://localhost:${port}/api/token` : "/api/token",
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

export default useUserToken;