import useSWR from "swr";

const fetcher = async (obj) => {
    if (process.env.NODE_ENV === 'development') {
        try {
            const params = new URLSearchParams({ game: obj.game }).toString();
            const res = await fetch(`http://localhost:3001/api/community/games/scoreboard?${params}`);
            return await res.json();
        } catch (err) {
            // Failed to fetch from localhost, fallback to default URL
        }
    }
    
    const params = new URLSearchParams({ game: obj.game }).toString();
    return fetch(`${obj.url}?${params}`).then((res) => res.json());
};

const options = {
    dedupingInterval: ((1000 * 60) * 30),
    refreshInterval: 0,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    shouldRetryOnError: false,
    // fallbackData: []
}

const useGameScoreboard = (params) => {

    const { data, error, isLoading, isValidating, mutate } = useSWR(
        params?.game ?
            {
                // url: "/api/community/games/scoreboard",
                url: "https://articles.media/api/community/games/scoreboard",
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

export default useGameScoreboard;