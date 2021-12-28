const FetchHelper = async(lang, word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
    const res = await fetch(url)
    const [data] = await res.json()

    const myWord = {
        word: data.word,
        meaning: data.meanings[0].definitions[0].definition,
        example: data.meanings[0].definitions[0].example,
        synonyms: data.meanings[0].definitions[0].synonyms,
        audio: data.phonetics[0].audio
    }

    if(!res.ok) throw new Error({myStatus: res})

    return myWord
}


export { FetchHelper }