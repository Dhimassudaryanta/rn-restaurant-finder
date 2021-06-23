export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_FOOD":
            return action.payload;
        default:
            return state;
    }
};
