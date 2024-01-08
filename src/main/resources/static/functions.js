$(document).ready(function(){
    loadUsers();
    $("#search-user-form").submit(function(event){
        event.preventDefault();
        var cedula = $('#sCEDULA').val();
        loadUsers(cedula);
    });

    $("#edit-user-form").submit(function(event){
        event.preventDefault();
        $.ajax({
            type: "PUT",
            url: "https://estudiante.azurewebsites.net/api/edit/"+$('#eCEDULA').val(),
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                "nombre": $('#eNOMBRE').val(),
                "apellido": $('#eAPELLIDO').val(),
                "direccion": $('#eDIR').val(),
                "telefono": $('#eTELEFONO').val()
            }),
            success: function(response) {
                loadUsers();
            }
        });
    });

    $("#tblUsers").on('click', '.btnEdit', function(){
        var currentRow = $(this).closest("tr");

        $('#eCEDULA').val(currentRow.find("td:eq(0)").text());
        $('#eNOMBRE').val(currentRow.find("td:eq(1)").text());
        $('#eAPELLIDO').val(currentRow.find("td:eq(2)").text());
        $('#eDIR').val(currentRow.find("td:eq(3)").text());
        $('#eTELEFONO').val(currentRow.find("td:eq(4)").text());
    });

    $("#tblUsers").on('click', '.btnDelete', function(){
        var currentRow = $(this).closest("tr");
        var cedula = currentRow.find("td:eq(0)").text();
        $.ajax({
            url: "https://estudiante.azurewebsites.net/api/delete/" + cedula,
            type: "DELETE",
            success: function(){
                loadUsers();
            }
        });
    });
});

function loadUsers(cedula) {
    var url = "https://estudiante.azurewebsites.net/api/all";

    if (cedula && cedula.trim() !== "") {
        url = "https://estudiante.azurewebsites.net/api/search/" + cedula;
    }

    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(data){
            var btnEdit = '<button type="button" class="btn btn-primary btnEdit"'+
                          'data-bs-toggle="modal" data-bs-target="#editUserModal">Editar</button>';
            var btnDelete = '<button type="button" class="btn btn-danger btnDelete">'+
                            'Eliminar</button>';
            var htmlTable = "";

            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    htmlTable += "<tr><td>"+ data[i].cedula +"</td><td>"+
                                    data[i].nombre +"</td><td>" +
                                    data[i].apellido +"</td><td>" +
                                    data[i].direccion +"</td><td>" +
                                    data[i].telefono +"</td><td>" +
                                    btnEdit + " " +
                                    btnDelete + "</td></tr>";
                }
            } else {
                htmlTable = "<tr><td colspan='6'>Estudiante no encontrado</td></tr>";
            }

            $("#tblUsers tbody").html(htmlTable);
        },
        error: function(xhr, status, error){
            console.error("Error al cargar estudiantes:", error);
            var htmlTable = "<tr><td colspan='6'>Error al cargar estudiantes</td></tr>";
            $("#tblUsers tbody").html(htmlTable);
        }
    });
}


