Creating a new project 
- New Project
- ASP.NET Web Application (.NET Framework)
- ToDo.BackEnd
- Empty Template
    - Check Web API


For our RESTful services, we need two parts:
1. The data for an application
2. A way to interact with our data

We will be using a package called LiteDB to store our data. It will create a file that makes it easy to interact with.

As for a way to interact with our data, we will make controllers. 

Let's think about what kind of resources we want to interact with. For our to-do app, we want to interact with the following things

1. Users
2. Tasks

Let's start with users. First, let's make a way of getting a list of users. 

Right click controllers, add new controller, call it UsersController

We'll use the HttGet attribute so we know it is a GET action. Remember these actions from our front-end AJAX work? This is just the other side of it.

We also need to know what we are returning. We need to define what a user is. 

Right-click Models, add class, make a class called User.

What things do we need on a user?

id
first name
last name
username

Now that we have a model, we can use that in the return of the controller method.

We now have a method returning a user model, but we need to get this user from somewhere. That's where LiteDB comes in.

Right click project, manage nuget packages, and install LiteDB.

Ok, now we have the engine. We need an object that can help us access this data. We'll call this a Data Access Object, or a DAO for short.

- Add a new folder called Data_Access
- Add a new class called UserDAO.cs

Let's add a method called GetAllUsers. Here is the code we need:

```cs
using(var db = new LiteDatabase(@"C:\ToDo\ToDo.db"))
{
    var userCol = db.GetCollection<User>("Users");
    return userCol.FindAll();
}
```

Now, let's new up the UserDao inside our controller method, and access that method.

- Running the application
- Accessing it using postman
- Implement the rest of the crud verbs
    - POST
    - PUT
    - DELETE
- Get a single one by id (using route template)
- Now for the Tasks entities
- Now for comments on tasks