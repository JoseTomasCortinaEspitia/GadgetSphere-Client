import { GET_GADGETS } from "../redux/actions";

const initialState = {
    allGadgets: []
};

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_GADGETS:
            return {
                ...state,
                allGadgets: payload
            };
        default:
            return state;
    }
};

export default rootReducer