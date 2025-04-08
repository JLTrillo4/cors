const searchInput = document.getElementById('characterName')
const searchBoton = document.getElementById('searchBtn')
const characterList = document.getElementById('characterList')
const linkCharacters = document.getElementById('linkCharacters')
const url = 'http://localhost:4000/characters'

const characters = async () => {
    try {
        const response = await fetch(url)
        const characters = await response. json()
        characters. forEach(character => {
            characterList. innerHTML += `
                <div class="characterDiv">
                    <img src="${character.image}" alt="${character.name}">
                    <li>Name: ${character.name}</li>
                    <li>Status: ${character.status}</li>
                    <li>Species: ${character.species}</li>
                    <li>Gender: ${character.gender}</li>
                    <li>Origin: ${character.originName}</li>
                </div>
            `
        }
        )};
    
    } catch (error) {
        characterList.innerHTML = '<li> Error al obtener informacion </li>'
    }

    const getCharacter = async () => {
        const inputValue = searchInput.value.toLowerCase()
        try {
            const response = await fetch{url}${inputValue}
            const character = await response. json()
            characterList. innerHTML += `
                    <div class="characterDiv">
                        <img src="${character.image}" alt="${character.name}">
                        <li>Name: ${character.name}</li>
                        <li>Status: ${character.status}</li>
                        <li>Species: ${character.species}</li>
                        <li>Gender: ${character.gender}</li>
                        <li>Origin: ${character.originName}</li>
                    </div>
                    `
        } catch (error) {
            characterList.innerHTML = '<li> Error al obtener el personaje </li>'
        }
}