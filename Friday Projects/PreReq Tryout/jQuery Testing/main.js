GetAndReplaceTasks();

$.ajax("https://grillberc2.azurewebsites.net/api/Users/")
    .done(function (getAllUsersData) {
        var dropDownElem = $("#selectedUserName");
        dropDownElem.empty();
        console.dir(getAllUsersData);
        for (let user of getAllUsersData) {
            let newDropDownOption = $("<option>");
            newDropDownOption.text(user.Username);
            newDropDownOption.attr("value", user.Id)
            dropDownElem.append(newDropDownOption);
        }
    })

function GetAndReplaceTasks() {
    $.ajax("https://grillberc2.azurewebsites.net/api/Tasks")
        .done(function (data) {
            console.dir(data)
            var dataDropLoc = $("#dataDropLoc");
            dataDropLoc.empty();
            for (var task of data) {
                let elem = $("<p>");
                elem.text(task.TaskBody);
                elem.data("taskId", task.Id)
                dataDropLoc.append(elem);

                // Now get the user
                $.ajax("https://grillberc2.azurewebsites.net/api/Users/" + task.UserId)
                    .done(function (getUserData) {
                        console.dir(getUserData)
                        elem.append(" for " + getUserData.Username);
                    })
            }
        })
}


function createNewTask() {
    console.dir($("#newTaskBody").text())
    $.ajax({
        url: "https://grillberc2.azurewebsites.net/api/Tasks/",
        method: "POST",
        data: {
            "UserId": $("#selectedUserName").children("option:selected").val(),
            "TaskBody": $("#newTaskBody").val()
        }
    }).done(function (newTaskData) {
        GetAndReplaceTasks();
    });
}