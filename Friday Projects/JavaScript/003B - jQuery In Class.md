In Class
1. Look over what everyone did for the Agile Pair Picker
1. Have the class install Node on their machines
  - https://nodejs.org/en/
1. Have the class install live-server
    - `npm install -g live-server`
1. Set up a new page
    - index.html
    - main.js
    - main.css
1. Talk about how index.html references main.js and main.css

## REST

Like I talked about in the video, applications are able to talk in a common language in JSON. The implementation of this conversation are commonly done using a REST API.

Let's look at a REST API I've built for this class.

https://grillberc2.azurewebsites.net/swagger

This is a swagger page, which is just a nice UI on top of my REST API. It also acts as documentation so we know what endpoints are available, and what the expected inputs and outputs are.

Let's look at Tasks. In our application, these tasks are like ToDo items. They are assigned to a user, and have some dates associated with them, as well as the test of the task.

Let's click Tasks, Then look for the GET `/api/v1/Tasks`. Click it to open it up.

Inside, we can see the example model that will be output. This is not real data, but shows us the shape of the expected data. You can see that it is an array, of objects, with an Id, UserId, TaskBody, CreatedDate, CompletedDate, and IsCompleted.

Let's click `Try it out!`

This is actually going to make the REST call, and show us what it returns! You can see we have several tasks in this array. Each task has a unique id (called a GUID or UUID). This is how we can reference a specific task.

If I don't want all the tasks, but only a specific task, I would use the other GET endpoint. Let's copy an Id, and open the GET `/api/v1/Tasks/{taskId}`. Here we can see that the example value is not an array, but just one object. Let's paste the id in the taskId parameter.

Now we have just the one task object, with a ton of data about it!

Ok, what if I want to create a new task? In REST, you use the HTTP Action GET to get a record from the application. To create a new record, we use the HTTP Action POST.

Let's open the POST `/api/v1/Tasks` section. Here, we see that the parameter newTask is required. This parameter is a full JSON blob. To the right of the textbox is an example value. This is a sample object in the shape that the application is expecting. Click the yellow box to copy the JSON blob to the textbox.

If we tried sending this, we get a response code of 400. Different response codes have different meanings in REST.

- 200 means OK
- 400 means BadRequest
- 404 means NotFound
- 500 means InternalServerError
- 418 means I'm a teapot https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418

Ok, back in our POST request, we see that we got a 400, meaning we sent a bad request. Looking in the response body, it gives us a message saying the the UserId must be provided. An empty GUID is all zeros, so it knows we didn't send one. If we send a non-all-zero guid, but one that still isn't valid. `"10000000-0000-0000-0000-000000000000"`

We still get a bad request, but now the message says "No user found with the given UserId". This is saying that it can't create a task without an associated user. Let's just steal a user id from one of the tasks we pulled earlier. And let's give it a useful task body.

There! Now we have a 200 response, and the response body has a task object. You'll notice that the data we got back is more than the data we sent. The application generated an Id for us, as well as setting some details like the created date and the is completed flag.

If we get all tasks again, we will see that our new task now shows up in that list!

Now it's your turn to try adding a new task.

---

Ok, last thing. Let's update a task. In REST, to update a record we use the HTTP Action PUT. Let's copy the task id for our newly created record and open the PUT `/api/Tasks/{taskId}`

Now there are two parameters: taskId and updatedTask. Let's paste in the taskId, and click the yellow example value.

Looks like we can change three things: the TaskBody, the isCompleted flag, and the assigned user. I just want to change the TaskBody, so I'm going to remove the other properties. Then set the new task body.

We can see in the response body that the task body was updated to my new string! And if we pull the full list again, we'll see the updated values.

Let's change a different property. I want to complete the task, and I can do that by setting the IsCompeted flag to `true`.

Notice that the application updates the flag, and sets the CompletedDate for me!

Note where the taskId goes. It is appended to the end of the address. This is important when we build these requests ourselves

Now it's your turn. You need to update the task that you made and assign it to yourself.

---

Ok, the next step is to use this data on a web app. Together, we are going to start a Todo app, where we can see tasks, and mark them complete or incomplete. 

The first step is to get the list of tasks from the REST application. For this, we will use AJAX, which is how we get data after a page has been loaded. Ajax in vanilla javascript is one of the worst things imaginable, so we will be using a JavaScript library to make it extremely simple!

This library is called jQuery. https://jquery.com/

jQuery is extremely powerful, not only allowing us to make ajax simple, but makes DOM manipulation easier as well as providing cross browser compatibility. Also, it is completely free!

First, we need to tell our page to reference jQuery. Luckily, jQuery also provides a CDN for us to use. https://code.jquery.com/

We want jQuery 3.x minified. Minification is the process of taking a javascript file, and reducing it as much as possible by changing things like variable and function names to single characters, removing all white-space, and other space saving techniques. It makes it extremely hard for a human to read, but is much smaller to send across the internet.

We'll copy the script tag from the pop-up. The important part here is the src attribute. We will keep the integrity and crossorigin, but they are not needed.

We'll paste the script tag before our main.js reference. That way main.js can use the jQuery library.

Excellent. Now, in main.js, we will access the jQuery library by using the magic variable `$`. Why $? Good question, but I don't know why. But it is now well known as the jQuery variable.

So, we'll type $, dot, then we want to make an ajax request. Easy, we'll use the ajax method!

`$.ajax("https://grillberc2.azurewebsites.net/api/v1/Tasks")`

This simply means to call the url that was passed it. Excellent! This should get all of the tasks from the REST API. But now we have to deal with async methods. So far, you have only ever used synchronous methods, which means that the whole method runs and returns the data before the program goes on. With async methods, we start the method, go on and do something else, and then tell the method what to do when it completes. 

Ajax is async because we have to wait for the call to be made down the network, to the server, the app has to receive the network call, process the request, send it back down the network, then our app has to do something with the data that comes back. If this wasn't async, the whole browser would freeze while all this was happening!

Luckily, the jQuery ajax method returns a promise, which allows us to add chain a function that needs to run once the promise (in this case the network call) is done. This method is called done. So, after the ajax method, we will add a dot done. The done method expects a function that it will call when it is done. The done method will pass the data it receives to this function, but we can name it whatever we want.

```js
$.ajax("https://grillberc2.azurewebsites.net/api/v1/Tasks")
  .done(function (data) {
    console.dir(data)
  };
```

Let's run the page, and check the console to see what happens. There, we can see the same thing we saw in the swagger page. and array of objects, which are the tasks we need to show. However, you'll notice that the JSON blob automatically turned into javascript objects. Pretty cool!

Ok, now we want to do something with this data. Let's make a div tag, giving it an id of dataDropLoc. Then, we will for loop over every task in the array. Then we will set a variable to a virtual node using jQuery. `$("<p>")` This will create a virtual p element. Then, let's set the text as the TaskBody `elem.text(task.TaskBody)`. Then, let's append this virtual element to the div we made. `dataDropLoc.append(elem)`. Appending the virtual node to a real DOM element will make it real.

```js
$.ajax("https://grillberc2.azurewebsites.net/api/v1/Tasks")
  .done(function (data) {
    console.dir(data)
    var dataDropLoc = $("#dataDropLoc");
    dataDropLoc.empty();
    for (var task of data) {
      var elem = $("<p>");
      elem.text(task.TaskBody);
      elem.data("taskId", task.Id)
      dataDropLoc.append(elem);
    }
  };
```

Awesome! Ok, now I want you to also put the name of the User the task is assigned to next to the TaskBody.

---

Ok, Next thing is to let users create their own tasks. For this, we will use an alternative parameter to the ajax method. We'll pass it an object with the settings we want to set. 

```js
function createNewTask() {
    $.ajax({
        url: "https://grillberc2.azurewebsites.net/api/Tasks/",
        method: "POST",
        data: {
            "UserId": "hard coded user id here",
            "TaskBody": $("#newTaskBody").val()
        }
    }).done(function (newTaskData) {
        GetAndReplaceTasks();
    });
}
```

The method has to be POST, because that is the HTTP Action we use to create a new resource. The url is the same. And the data is an object that the REST API is expecting to make this new task. And again, we have the done function, which if you remember will get the task that was created.

However, you'll notice that we need a valid user id to create a new task. We will use a select element (which is just a drop down list), but we need to populate it with all the options available (which are all the users available on the REST API). 

Your next task is to get all the users, create all the option elements inside the select element (with the username as the text in the option, and the UserId as the value), and then use the selected option in the data of the createNewTask();

---

Ok, now it's time for you to go on your own! Finish out the ToDo app on your own, using what we have worked on together as a jumping off point!