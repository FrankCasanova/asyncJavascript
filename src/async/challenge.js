
const fechtData = require('../utils/fetchData')

const API = 'https://rickandmortyapi.com/api/character/'

const anortherFunction = async (url_api) =>{
    try{
        const data = await fechtData(url_api)
        const character = await fechtData(`${API}${data.results[0].id}`)
        const origin = await fechtData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)

        
    }catch (error){
        console.error(error)
    }
} 


console.log('before')
anortherFunction(API)
console.log('after')