import useSWR from "swr";

const fetcher = async (data) => {
    if (process.env.NODE_ENV === 'development') {
        try {
            const params = new URLSearchParams({
                ad_id: data.ad_id,
                user_ad_token: data.user_ad_token
            }).toString();
            const res = await fetch(`http://localhost:3001/api/ads/${data.ad_id}?${params}`);
            const json = await res.json();
            return json.result;
        } catch (err) {
            // Failed to fetch from localhost, fallback to default URL
        }
    }

    const params = new URLSearchParams({ ad_id: data.ad_id }).toString();
    return fetch(`${data.url}?${params}`).then((res) => res.json()).then(json => json.result);
};

const minutes = 60;
const options = {
    dedupingInterval: ((1000 * 60) * minutes),
    errorRetryInterval: ((1000 * 60) * 5),
    // keepPreviousData: true,
    // fallbackData: []
}

const useAd = (ad_id, user_ad_token) => {

    const { data, error, isLoading, mutate } = useSWR(
        ad_id ?
        {
            url: `https://articles.media/api/ads/${ad_id}`, 
            ad_id,
            user_ad_token
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
        mutate,
    };
};

export default useAd;