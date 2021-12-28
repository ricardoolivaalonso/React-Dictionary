import{
    WORD_REQUEST,
    WORD_SUCCESS,
    WORD_FAILURE
} from './types'

const WORD_REQUEST_ACTION = () => ({
    type: WORD_REQUEST
})

const WORD_SUCCESS_ACTION = (word) => ({
    type: WORD_SUCCESS,
    payload: word
})

const WORD_FAILURE_ACTION = (error) => ({
    type: WORD_FAILURE,
    payload: error
})

export{
    WORD_REQUEST_ACTION,
    WORD_SUCCESS_ACTION,
    WORD_FAILURE_ACTION
}