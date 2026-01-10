import useSWR from "swr";

import axios from "axios";

const fetcher = async (obj) => {
    if (process.env.NODE_ENV === 'development') {
        try {
            const res = await axios.get("http://localhost:3001/api/user/friends", {
                params: {
                    game: obj.game,
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
        params?.game ?
            {
                // url: "/api/community/games/scoreboard",
                url: "https://articles.media/api/user/friends",
                game: params.game,
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