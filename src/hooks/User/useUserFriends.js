import useSWR from "swr";

const fetcher = async (obj) => {
    if (process.env.NODE_ENV === 'development') {
        try {
            const params = new URLSearchParams({ game: obj.game }).toString();
            const res = await fetch(`http://localhost:3001/api/user/friends?${params}`, {
                headers: {
                    "x-articles-api-key": obj.user_token
                }
            });
            return await res.json();
        } catch (err) {
            // Failed to fetch from localhost, fallback to default URL
        }
    }

    const params = new URLSearchParams({ game: obj.game }).toString();
    return fetch(`${obj.url}?${params}`, {
        headers: {
            "x-articles-api-key": obj.user_token
        }
    }).then((res) => res.json());
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