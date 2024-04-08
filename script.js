function buscar() {
    var input = document.getElementById('Pokemon').value
    fetch("https://pokeapi.co/api/v2/pokemon/" + input)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('nome').innerHTML = data.name
            document.getElementById('foto').src = data.sprites.front_default


            var tipos = data.types
            var tiposDiv = document.getElementById('tipos')
            tiposDiv.innerHTML = ''
            for(var i = 0; i < tipos.length; i++) {
                var tipo = document.createElement('p')
                tipo.innerHTML = tipos[i].type.name
                tiposDiv.appendChild(tipo)
            }
            
        })
        .catch(error => console.log(error))


}