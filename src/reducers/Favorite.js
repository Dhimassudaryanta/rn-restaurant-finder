export default (state = [], action) => {
    switch (action.type) {
        case "SAVE_FOOD":
            return [...state, action.payload];
        case "REMOVE_FOOD":
            return state.filter(getId => getId.id !== action.payload);
        default:
            return state;
    }
};
