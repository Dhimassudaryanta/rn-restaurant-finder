const InitialValue = {
    id: null,
    name: null,
    picture: null
};

export default (state = InitialValue, action) => {
    switch (action.type) {
        case "FACEBOOK_LOGIN_SUCCESS":
            return action.payload;
        case "FACEBOOK_LOGOUT":
            return InitialValue;

        default:
            return state;
    }
};
