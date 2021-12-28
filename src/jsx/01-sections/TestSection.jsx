import{ 
    WORD_REQUEST_ACTION, 
    WORD_SUCCESS_ACTION, 
    WORD_FAILURE_ACTION
} from '../../context/actions.js'
import { WordContext } from "../../context/store"
import { useContext, useEffect, useState } from "react"
import { FetchHelper } from '../00-helpers/FetchHelper.jsx'
import { ListElement } from "../02-elements/ListElement"

const TestSection = () => {
    const [ stateFetch, dispatchFetch ] = useContext(WordContext)
    const { loading, data } = stateFetch
    const [ input, setInput ] = useState({
        lang: 'en',
        word: stateFetch.data.word
    })

    const updateInput = (e) => {
        setInput({ 
            ...input,
            [e.target.name]: e.target.value 
        })
    }

    const sendForm = (e) => {
        e.preventDefault()
        WORD_FETCH()
    }   
    
    // const WORD_FETCH = () => {
    //     dispatchFetch( WORD_REQUEST_ACTION() )
    //     FetchHelper(input.lang, input.word)
    //         .then( word => dispatchFetch( WORD_SUCCESS_ACTION(word)) )
    //         .catch( error => {
    //             console.log("=>" + error)
    //             dispatchFetch( WORD_FAILURE_ACTION(error)) 
    //         })
    // }

    const WORD_FETCH = async() =>{
        dispatchFetch( WORD_REQUEST_ACTION() )
        try {
            const word = await FetchHelper(input.lang, input.word)
            dispatchFetch( WORD_SUCCESS_ACTION(word) )
        } catch (error) {
            console.log("=>" + error)
            dispatchFetch( WORD_FAILURE_ACTION(error) ) 
        }
    }

    useEffect(() => {
        WORD_FETCH()
    }, [])

    console.log()

    
    return(
        <main>
            <h1 className='main-title'>Minimal <span>Dicti</span>onary</h1>

            <form className='form' onSubmit={(e)=>sendForm(e)} >
                <input className='form__input' type="text" name="word" value={input.word} onChange={(e)=>updateInput(e)} placeholder='Search/Buscar'/>
                <button className='form__button'>search</button>
                <div className='form__lang'>
                    <div className='form__row'>
                        <label className='form__label' htmlFor="en-lang">en</label>
                        <input className='form__radio' type="radio" name="lang" id="en-lang" value="en" defaultChecked onChange={(e)=>updateInput(e)}/>
                    </div>
                    <div className='form__row'>
                        <label className='form__label' htmlFor="es-lang">es</label>
                        <input className='form__radio' type="radio" name="lang" id="es-lang" value="es" onChange={(e)=>updateInput(e)}/>
                    </div>
                </div>
            </form>

            <ListElement loading={loading} data={data}/>
        </main>
    )
}

export { TestSection }