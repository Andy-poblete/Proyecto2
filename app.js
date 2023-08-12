function validateForm() {
    let email = document.getElementById('inputEmail').value;
    let nombre = document.getElementById('inputNombre').value;
    let numero = document.getElementById('inputNumero').value;

    //a continuacion se van a validar los campos
    if (email == "") {
        alert("Uno de los campos esta vacio");
        return false;
    }
    else if(!email.includes('@')){
        alert("Debe agregar un @ al campo");
        return false;
    }

    else if (nombre == "") {
        alert("Uno de los campos esta vacio");
        return false;
    }

    else if (numero == "") {
        alert("Uno de los campos esta vacio");
        return false;
    }

    //se valida de que ningun dato este vacio
    return true;
}

function showData() {
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }
    else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    let html = "";
    listPeople.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.nombre + "</td>";
        html += "<td>" + element.numero + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar Dato</button><button onclick="updateData(' + index + ')" class="btn btn-warning">Editar Dato</button> </td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;

}

document.onload = showData();


function addData() {
    if (validateForm() == true) {
        let email = document.getElementById('inputEmail').value;
        let nombre = document.getElementById('inputNombre').value;
        let numero = document.getElementById('inputNumero').value;
        
        let listPeople;
        console.log(listPeople)
        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];
        }
        else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
            console.log(listPeople)
            
        }

        listPeople.push({
            email: email,
            nombre: nombre,
            numero: numero
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));
        showData();

        document.getElementById('inputEmail').value= "";
        document.getElementById('inputNombre').value= "";
        document.getElementById('inputNumero').value= "";
        console.log(listPeople)
    }
}

function deleteData(index) {
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }
    else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    showData();

}

function updateData(index) {
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';

    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }
    else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    document.getElementById('inputEmail').value = listPeople[index].email;
    document.getElementById('inputNombre').value = listPeople[index].nombre;
    document.getElementById('inputNumero').value = listPeople[index].numero;

    document.querySelector('#btnUpdate').onclick= function () {
        if (validateForm() == true){

            listPeople[index].email.getElementById('inputEmail').value;
            listPeople[index].nombre.getElementById('inputNombre').value;
            listPeople[index].numero.getElementById('inputNumero').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            showData();

            document.getElementById('inputEmail').value = "";
            document.getElementById('inputNombre').value = "";
            document.getElementById('inputNumero').value = "";

            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnUpdate').style.display = 'none';
        }


    }
}