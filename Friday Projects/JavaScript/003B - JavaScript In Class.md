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

Let's click Tasks, Then look for the GET `/api/Tasks`. Click it to open it up.

Inside, we can see the example model that will be output. This is not real data, but shows us the shape of the expected data. You can see that it is an array, of objects, with an Id, UserId, TaskBody, CreatedDate, CompletedDate, and IsCompleted.

Let's click `Try it out!`

This is actually going to make the REST call, and show us what it returns! You can see we have several tasks in this array. Each task has a unique id (called a GUID or UUID). This is how we can reference a specific task.

If I don't want all the tasks, but only a specific task, I would use the other GET endpoint. Let's copy an Id, and open the GET `/api/Tasks/{taskId}`. Here we can see that the example value is not an array, but just one object. Let's paste the id in the taskId parameter.

Now we have just the one task object, with a ton of data about it!

Ok, what if I want to create a new task? In REST, you use the HTTP Action GET to get a record from the application. To create a new record, we use the HTTP Action POST.

Let's open the POST `/api/Tasks` section. Here, we see that the parameter newTask is required. This parameter is a full JSON blob. To the right of the textbox is an example value. This is a sample object in the shape that the application is expecting. Click the yellow box to copy the JSON blob to the textbox.

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

Ok, last thing. Let's update a task. In REST, to update a record we use the HTTP Action PUT. Let's copy the task id for our newly created record and open the PUT `/api/Tasks/{taskId}`

Now there are two parameters: taskId and updatedTask. Let's paste in the taskId, and click the yellow example value.

Looks like we can change three things: the TaskBody, the isCompleted flag, and the assigned user. I just want to change the TaskBody, so I'm going to remove the other properties. Then set the new task body.

We can see in the response body that the task body was updated to my new string! And if we pull the full list again, we'll see the updated values.

Let's change a different property. I want to complete the task, and I can do that by setting the IsCompeted flag to `true`.

Notice that the application updates the flag, and sets the CompletedDate for me!

Note where the taskId goes. It is appended to the end of the address. This is important when we build these requests ourselves

---

