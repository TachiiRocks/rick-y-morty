const api = {
    RecibirPersonajes() {
        return fetch('https://rickandmortyapi.com/api/character' , {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(response => {
            return response
        })
    },

    InformacionPersonaje(id){
        return fetch(`https://rickandmortyapi.com/api/character/${id}` , {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(response => {
            return response
        })
    }
}


export default api