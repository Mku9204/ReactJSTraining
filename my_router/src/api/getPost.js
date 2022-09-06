import axios from "axios";
import { useState } from "react";

const useGetPosts = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    async function getPosts() {
        setLoading(true);
        await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                throw new error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return {
        loading,
        data,
        getPosts,
    };
};

export default useGetPosts;