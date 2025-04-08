const express = require('express')
const axios = require('axios')
const cors = require('cors')
//cors -- > install + use

const app = express()
const PORT = 4000

app.use(cors())

let characters = []

app.get('/characters', async (req, res) => {
    const url = 'https://rickandmortyapi.com/api/character'
    
    try{
        const response = await axios.get(url)
        const dataCharacters = response.data. results

        for (const character of dataCharacters) {
            const { id, name, status, species, gender, origin : { name : originName }, image } = character;
            characters.push({ id, name, status, species, gender, origin : { name : originName }, image })
        }


        res.json(characters)
    } catch (error) {
        res.status(404).json({ error: 'Página no encontrada' })

    }
})

app.get('/characters/:name', async (req, res) => {
        const characterName = req.params.name;
        try {
            const response = await axios.get('${url}/${characterName}')
            const dataCharacters = response.data. results[0]

            if (dataCharacters) {
                const { id, name, status, species, gender, origin : { name : originName }, image } = dataCharacters;
                res.json({ id, name, status, species, gender, origin : { name : originName }, image })
            } else {
                res.status(404).json({ error: 'Personaje no encontrado' })
            }
        } catch (error) {
            res.status(404).json({ error: 'Personaje no encontrado' })
        }   
})


app.listen (PORT, () => console.log('Server listening on http://localhost:${PORT}'))