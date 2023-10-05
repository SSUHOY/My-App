import { GET_SEARCH_TEXT } from "../actions/types/tracks"


const initialState = {
  searchText: '',
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      }
    default:
      return state
  }
}

export default filterReducer