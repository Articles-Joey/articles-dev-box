import useSWR from "swr";

import axios from "axios";

const fetcher = async (obj) => {
    if (process.env.NODE_ENV === 'development') {
        try {
            const res = await axios.get("http://localhost:3001/api/user/friends", {
                params: {
                    game: obj.game,
                    // user_token: obj.user_token
                },
                headers: {
                    "x-articles-api-key": obj.user_token
                }
            });
            return res.data;
        } catch (err) {
            // Failed to fetch from localhost, fallback to default URL
        }
    }

    return axios.get(obj.url, {
        params: {
            game: obj.game,
        },
        headers: {
            "x-articles-api-key": obj.user_token
        }
    }).then((res) => res.data);
};

const options = {
    dedupingInterval: ((1000 * 60) * 30),
    refreshInterval: 0,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    shouldRetryOnError: false,
    // fallbackData: []
}

const useUserFriends = (params) => {

    const { data, error, isLoading, isValidating, mutate } = useSWR(
        (params?.user_id && params?.user_token) ?
            {
                // url: "/api/community/games/scoreboard",
                url: "https://articles.media/api/user/friends",
                // game: params.game,
                user_token: params.user_token,
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

export default useUserFriends;