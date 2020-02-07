import {DECODE_TXT_SUCCESS, ENCODE_TXT_SUCCESS} from "./actions";

const initialState = {
  encoded: '',
  decoded: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENCODE_TXT_SUCCESS :
      return {...state, encoded: action.encodedTxt};
    case DECODE_TXT_SUCCESS:
      return {...state, decoded: action.decodedTxt};
    default:
      return state
  }
};

export default reducer;