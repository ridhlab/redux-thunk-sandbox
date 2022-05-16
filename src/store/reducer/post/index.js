const initState = {
    PostListResult: false,
    PostListLoading: false,
    PostListError: false,
};

const postReducer = (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case "POST/GET_POST_LIST":
            const { payload } = action;
            return {
                ...state,
                PostListResult: payload.data,
                PostListLoading: payload.loading,
                PostListError: payload.errorMessage,
            };
        default:
            return state;
    }
};

export default postReducer;
