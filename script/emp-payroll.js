function addEmp() {
    {
        var Name = document.getElementById("s1").value
        console.log("Name = " + Name)

    }
    var gen = document.getElementsByClassName("genderm")
    for (i = 0; i < gen.length; i++) {
        if (gen[i].checked)
            var ans = gen[i].value
        console.log("Gender = " + ans)

    } {
        selectElement = document.querySelector('#sal');
        salary = selectElement.value;
        console.log("Salary = " + salary)

    } {
        selectElement = document.querySelectorAll('.prof');
        for (i = 0; i < selectElement.length; i++) {
            if (selectElement[i].checked)
                var cbox = selectElement[i].value;
            console.log("deparment = " + cbox)
        }
    } {
        Day = document.querySelector('#date');
        day = Day.value;
        Month = document.querySelector('#month');
        month = Month.value;
        Year = document.querySelector('#year');
        year = Year.value;

        console.log("Start Date = " + day + month + year)
    } {
        var Notes = document.getElementById("s2").value
        console.log("Notes = " + Notes)

    }
    let req = {
        "name": Name,
        "image":image,
        "gender": ans,
        "department": cbox,
        "salary": salary,
        "startDate": day + month + year,
        "note": Notes
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/employees",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(req),
        success: function (response) {
            console.log(response);

            $("#MemberList").empty();
            console.log(response);
            var ListValue = "";
            var i;
            for (i = 0; i < response.length; ++i) {
                ListValue += "<li>" + response[i].MemberName + " --- " + response[i].PhoneNumber
            }
            $("#MemberList").append(ListValue);
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
}