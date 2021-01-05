import {appAPI} from "../api/api";

export const ActionTypes = {
    SET_DATA: 'APP/SET_DATA',
};



export const setData = () => async (dispatch) => {
    const data = await appAPI.getData();
    let json = JSON.stringify(data.data);
    console.log(json)
    dispatch({
        type: ActionTypes.SET_DATA,
        data: json
    });
};