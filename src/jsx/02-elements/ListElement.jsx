const ListElement = ({loading, data}) => {

    return(
        <div className='form__list'>
            { 
            loading ? 
                <span className="form__loader">searching...</span>
                :                
                <div className="form__word">
                    <h2 className='form__word-title'>{data.word}</h2>

                    <div className='form__word-row'>
                        <span className="form__word-label">meaning/significado: </span> 
                        <p className="form__word-text">{data.meaning}</p>
                    </div>

                    <div className='form__word-row'>
                        <span className="form__word-label">example/ejemplo: </span>
                        <p className="form__word-text"> {data.example}</p>
                    </div>

                    <div className='form__word-row form__word-row--synonyms'>
                        <span className="form__word-label">synonyms/sinónimos: </span>
                        { data.synonyms.map( (s, index) => <span className='form__word-text' key={index}>&#129042; {s}</span>) }
                    </div>

                    { data.audio && <audio className='form__word-audio' src={data.audio} controls></audio> }
                </div>
            }
        </div>
    )
}

export { ListElement }