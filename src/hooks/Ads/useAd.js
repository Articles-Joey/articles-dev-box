import useSWR from "swr";

import axios from "axios";

const fetcher = async (data) => {
    if (process.env.NODE_ENV === 'development') {
        try {
            const res = await axios.get(`http://localhost:3001/api/ads/${data.ad_id}`, {
                params: {
                    ad_id: data.ad_id
                }
            });
            return res.data.result;
        } catch (err) {
            // Failed to fetch from localhost, fallback to default URL
        }
    }

    return axios.get(data.url, {
        params: {
            ad_id: data.ad_id
        }
    }).then((res) => res.data.result);
};

const minutes = 60;
const options = {
    dedupingInterval: ((1000 * 60) * minutes),
    // keepPreviousData: true,
    // fallbackData: []
}

const useAd = (ad_id) => {

    const { data, error, isLoading, mutate } = useSWR(
        ad_id ?
        {
            url: `https://articles.media/api/ads/${ad_id}`, 
            ad_id
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