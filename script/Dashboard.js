$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        // data:JSON.stringify(req),
        success: function (response) {
            console.log(response);
            $("tbody").empty();
            console.log(response);
            var icon = document.createElement('td');

            var DetailsTbody = "";
            for (var i = 0; i < response.length; i++) {
                DetailsTbody += '<tr>';
                DetailsTbody += '<td>' + response[i].name + '</td>';
                DetailsTbody += '<td>' + response[i].gender + '</td>';
                DetailsTbody += '<td>' + response[i].department + '</td>';
                DetailsTbody += '<td>' + response[i].salary + '</td>';
                DetailsTbody += '<td>' + response[i].startDate + '</td>';
                DetailsTbody += '<td >' + response[i].note + '</td>';

                var btn = document.createElement('button');
                btn.innerText = 'New button';
                document.body.appendChild;

                var button = $('<i> </i>').click("DeleteDetails")
                button.addClass("fa fa-trash")
                var editicon = $('<i>  <i/>').click("UpdateDetails")
                editicon.addClass("fa fa-pen")
                DetailsTbody += '<td>' + button + "  " + editicon + '</td>';
            };
            $("tbody").append(DetailsTbody);

        },
        failure: function (response) {
            alert(response.responseText);
            alert("Failure");
        },
        error: function (response) {
            alert(response);
            alert("Error");
        }
    });

    function DeleteDetails() {
        console.log("hello")
        $.ajax({
            type: "DELETE",
            url: "http://localhost:3000/employees/17",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        })
    };

    function UpdateDetails() {
        console.log("hello")
        $.ajax({
            type: "PUT",
            url: "http://localhost:3000/employees/1",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        })
    };
});