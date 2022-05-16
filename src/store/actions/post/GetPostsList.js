import axios from "axios";

const GetPostsList = () => {
    return async (dispatch) => {
        // Loading
        dispatch({
            type: "POST/GET_POST_LIST",
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // Get Api
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
            dispatch({
                type: "POST/GET_POST_LIST",
                payload: {
                    loading: false,
                    data: result.data,
                    errorMessage: false,
                },
            });
        } catch (err) {
            dispatch({
                type: "POST/GET_POST_LIST",
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message,
                },
            });
            console.log(err);
        }
    };
};

export default GetPostsList;
