import axios from 'axios';

export const GET_GADGETS = "GET_GADGETS";

export const getGadgets = () => async (dispatch) => {
    try {
        const response = await axios.get('https://gadgetsphere-server-production.up.railway.app/gadgets');
        dispatch({ type: GET_GADGETS, payload: response.data });
    } catch (error) {
        console.log(error);
    }
}