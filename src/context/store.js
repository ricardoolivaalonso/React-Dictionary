import { initialState } from "./initialState"
import { wordReducer } from "./reducers"
import { createContext, useReducer } from "react"

const WordContext = createContext()

const WordProvider = ({children}) => {
    const [stateFetch, dispatchFetch] = useReducer(wordReducer, initialState)

    return(
        <WordContext.Provider value={[stateFetch, dispatchFetch]}>
            {children}
        </WordContext.Provider>
    )
}

export { WordContext, WordProvider }