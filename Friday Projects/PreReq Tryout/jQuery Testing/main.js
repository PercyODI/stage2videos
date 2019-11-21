// Define functions
function GetAndReplaceTasks() {
    $.ajax("https://grillberc2.azurewebsites.net/api/v1/Tasks")
        .done(function (data) {
            var dataDropLoc = $("#dataDropLoc");
            dataDropLoc.empty();
            for (var task of data) {
                let elem = $("<p>");
                elem.text(task.TaskBody);
                elem.data("taskId", task.Id)
                dataDropLoc.append(elem);

                // Now get the user
                $.ajax("https://grillberc2.azurewebsites.net/api/v1/Users/" + task.UserId)
                    .done(function (getUserData) {
                        elem.append(" for " + getUserData.Username);
                    })
            }
        });
}

function createNewTask() {
    console.dir($("#newTaskBody").text())
    $.ajax({
        url: "https://grillberc2.azurewebsites.net/api/v1/Tasks/",
        method: "POST",
        data: {
            "UserId": $("#selectedUserName").children("option:selected").val(),
            "TaskBody": $("#newTaskBody").val()
        }
    }).done(function (newTaskData) {
        GetAndReplaceTasks();
    }).fail(function(xhr){
        alert(xhr.responseJSON.Message);
    });
}

// Function to run on Document Ready
$(function () {
    // Get initial data
    GetAndReplaceTasks();

    $.ajax("https://grillberc2.azurewebsites.net/api/v1/Users/")
        .done(function (getAllUsersData) {
            var dropDownElem = $("#selectedUserName");
            dropDownElem.empty();
            for (let user of getAllUsersData) {
                let newDropDownOption = $("<option>");
                newDropDownOption.text(user.Username);
                newDropDownOption.attr("value", user.Id)
                dropDownElem.append(newDropDownOption);
            }
        })

    // Attach events to initial dom
    $("#newTaskBtn").click(createNewTask);
});