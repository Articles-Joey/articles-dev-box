import useSWRImmutable from 'swr/immutable'

// import fetcher from "@/libs/fetcher";

import useSWR from 'swr';

const fetcher = (data) => {
    const params = new URLSearchParams({
        user_id: data.user_id
    }).toString();
    return fetch(`${data.url}?${params}`).then((res) => res.json());
};

const options = {
    dedupingInterval: ((1000 * 60) * 1),
    focusThrottleInterval: ((1000 * 60) * 1),
    // fallbackData: []
}

const usePublicUserData = (params) => {

    const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
        params?.user_id ?
        {
            url: 
            process.env.NODE_ENV === 'development' ?
            "http://localhost:3001/api/user-public/getUserDetails"
            :
            "https://articles.media/api/user-public/getUserDetails",
            // "/api/user-public/getUserDetails",
            user_id: params.user_id
        }
        :
        null,
        fetcher,
        options
    );

    return {
        data,
        error,
        isLoading,
        isValidating,
        mutate,
    };
};

export default usePublicUserData;