function validateForm(){

    //obtengo valores de los campos
    let email = document.getElementById('inputEmail').value;
    let name = document.getElementById('inputName').value;
    let phone =document.getElementById('inputPhone').value;
    //validar
    if(email==""){
        alert('El correo es requerido');
        return false;
    }else if(!email.includes("@")){
        alert('El correo no es valido');
        return false;

    }
    //validar el campo nombre
    if(name==""){
        alert('El nombre es requerido');
        return false;
    }
    //validar el campo telefono
    if(phone==""){
        alert('El telefono es requerido');
        return false;
    }
    //Si pasa todas las validaciones
    return true;


}
function showData(){
    let listPeople;
    if(localStorage.getItem('listPeople')==null){
        listPeople=[];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }
    let html="";
    listPeople.forEach(function(element, index){
        html += "<tr>";
        html += "<td>"+element.email+"</td>";
        html += "<td>"+element.name+"</td>";
        html += "<td>"+element.phone+"</td>";
        html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar Dato</button> <button onclick="updateData('+index+')" class="btn btn-warning">Editar Dato</button></td>';
        html += "</tr>";
    });
    document.querySelector('#tableData tbody').innerHTML = html;

}
document.onload = showData();


function addData(){
    if(validateForm()==true){
        //obtengo valores de los campos
    let email = document.getElementById('inputEmail').value;
    let name = document.getElementById('inputName').value;
    let phone =document.getElementById('inputPhone').value;

    let listPeople;

    if(localStorage.getItem('listPeople')==null){
        listPeople=[];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    listPeople.push({
        email:email,
        name:name,
        phone:phone,
    });

    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    showData();

    document.getElementById('inputEmail').value="";
    document.getElementById('inputName').value="";
    document.getElementById('inputPhone').value="";

    }



}
function deleteData(index){
    let listPeople;
    if(localStorage.getItem('listPeople')==null){
        listPeople=[];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }
    listPeople.splice(index, 1);
    localStorage.setItem('listPeople',JSON.stringify(listPeople));
    showData();

}
function updateData(index){
    document.getElementById("btnAdd").style.display='none';
    document.getElementById("btnUpdate",btnAdd).style.display='block';

    let listPeople;

    if(localStorage.getItem('listPeople')==null){
        listPeople=[];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }
    //relleno el formulario con la data a editar
    document.getElementById('inputEmail').value = listPeople[index].email;
    document.getElementById('inputName').value = listPeople[index].name;
    document.getElementById('inputPhone').value = listPeople[index].phone;
    //funcion para actualizar datos
    document.querySelector("#btnUpdate").onclick=function(){
        if(validateForm()==true){
            //actualizar datos de la lista
            listPeople[index].email =document.getElementById('inputEmail').value
            listPeople[index].name =document.getElementById('inputName').value
            listPeople[index].phone =document.getElementById('inputPhone').value

            //guardamos la lista actualizada en el localstorage
            localStorage.setItem('listPeople', JSON.stringify(listPeople));

            //actualizamos la tabla
            showData();
            document.getElementById('inputEmail').value="";
            document.getElementById('inputName').value="";
            document.getElementById('inputPhone').value="";

            //cambiar visibilidad de los botones
            document.getElementById("btnAdd").style.display='block';
            document.getElementById("btnUpdate",btnAdd).style.display='none';

        }
    };

}