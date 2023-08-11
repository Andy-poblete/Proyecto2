function Validador()
{
    let Nombre = document.getElementById('idNombre').value;
    let Apellido = document.getElementById('idApellido').value;

    //a continuacion se van a validar los campos
    if(Nombre=="")
    {
        return false;
    }

    if(Apellido=="")
    {
        return false;
    }

    //se valida de que ningun dato este vacio
    return true;
}

function addData()
{
    if(validateForm()==true)
    {
        let Nombre = document.getElementById('idNombre').value;
        let Apellido = document.getElementById('idApellido').value;
        let listaRegistro;
    }
    if(localStorage.getItem('listaRegistro')==null)
    {
        listaRegistro=[];
    }
    else
    {
        listaRegistro = JSON.parse(localStorage.getItem("listaRegistro"));
    }
}