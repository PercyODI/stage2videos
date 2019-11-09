function submitUsername() {
    console.log("submitUsername was clicked!")
    console.dir($("input[name='username']")[0])
    var inputVal = $("input[name='username']")[0].value
    if (inputVal != "") {
        $("#title").text("Welcome to RealTimeDiary, " + inputVal + "!")
    }
    else {
        $("#title").text("Welcome to RealTimeDiary")
    }
}

$.ajax({
    url: "https://stage2cohort2blob.blob.core.windows.net/realtimediary/data_02.json",
})
    .done(function (data) {
        var entriesWrapper = $("#entriesWrapper")
        console.log(data);
        var parsedData = JSON.parse(data)
        for (let entry of parsedData) {
            let html = $("<div>" +
                "<h3>" + entry.title + " on " + entry.date + "</h3>" +
                "<p>" + entry.entry + "</p>" +
                "</div><br>")
            entriesWrapper.append(html)
        }
    });