import { initialState } from "./initialState";
import{
    WORD_REQUEST,
    WORD_SUCCESS,
    WORD_FAILURE
} from './types'

const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case WORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case WORD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case WORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
      
        default:
            return state
    }
}

export { wordReducer }