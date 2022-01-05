const URL = "http://191.252.93.122/desafio-front-end/api/"
const editButton = document.getElementById("editButton")
let selectId = document.getElementById("selectId")


function getData(){
    selectId.innerHTML = '<option value="" disabled selected hidden>--Nenhum valor selecinado--</option>'

    fetch(`${URL}index.php`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then((json) => {
        // let table = document.querySelector("#data-table"), 
        bodyTable = document.getElementById('tBody')

        bodyTable.innerHTML = ""
        json.forEach(function(results){
            bodyTable.innerHTML += `
            <tr>
                <td>${results.id}</td>
                <td>${results.origem}</td>
                <td>${results.destino}</td>
                <td>${results.estado}</td>
            </tr>
            `
          selectId.innerHTML += `<option value="${results.id}">${results.id}</option>`

        })

    })

    .catch(erro =>{
        alert(erro)
    })
}

function editData(id) {
  // alert(selectId.value+1)
  fetch(
    `${URL}/update.php?id=${encodeURIComponent(id)}&estado=default`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((res) => alert(`estado: ${res.status}`))
}


setInterval(getData, 60000)
editButton.addEventListener('click', () =>{
  editData(selectId.value)
})