import useSWR from "swr";

const fetcher = (params) => {
    const searchParams = new URLSearchParams({
        token: params.token
    }).toString();
    return fetch(`${params.url}?${searchParams}`).then((res) => res.json());
};

const useUserDetails = (params) => {

    const { data, error, isLoading, mutate } = useSWR(        
        params.token ?
            {
                // url: "/api/details",
                // url: "http://localhost:3012/api/auth/session",
                url: (process.env.NODE_ENV === "development" ? "http://localhost:3012" : "https://accounts.articles.media") + '/api/auth/session',
                token: params.token,
            }
            :
            null,
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

export default useUserDetails;