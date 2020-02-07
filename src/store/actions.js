import axiosApi from "../axiosApi";

export const ENCODE_TXT_SUCCESS = 'ENCODE_TXT_SUCCESS';
export const encodeTxtSuccess = encodedTxt => ({type: ENCODE_TXT_SUCCESS, encodedTxt});

export const DECODE_TXT_SUCCESS = 'DECODE_TXT_SUCCESS';
export const decodeTxtSuccess = decodedTxt => ({type: DECODE_TXT_SUCCESS, decodedTxt});

export const encodeTxt = (txt) => {
  return async (dispatch) => {
    const response = await axiosApi.post('/encode', txt);
    dispatch(encodeTxtSuccess(response.data))
  }
};
export const decodeTxt = txt => {
  return async (dispatch) => {
    const response = await axiosApi.post('/decode', txt);
    dispatch(decodeTxtSuccess(response.data))
  }
};