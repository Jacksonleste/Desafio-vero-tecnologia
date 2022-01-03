

setInterval(buscar, 60000)


function buscar(){
    fetch('http://191.252.93.122/desafio-front-end/api/index.php', {
        method: 'GET'
    })
    .then(Response => Response.json())
    .then(function(json){
        console.log(json)
        let tabela = document.querySelector("#tabela-dados"), 
        headTable = document.createElement('tr'), 
        bodyTable = document.createElement('tbody')
        tabela.innerHTML = ""
        headTable.innerHTML = "<th>ID</th> <th>Origem</th> <th>Destino</th> <th>Estado</th>"
        tabela.appendChild(headTable)
        tabela.appendChild(bodyTable)

        console.log(json.length)
        

        // setInterval


        // let headerTable = tabela.appendChild('tr')

        bodyTable.innerHTML = ""
        json.map(function(results){
            bodyTable.innerHTML += `
            <tr>
                <td>${results.id}</td>
                <td>${results.origem}</td>
                <td>${results.destino}</td>
                <td>${results.estado}</td>
            </tr>
            `
        })

    })
}