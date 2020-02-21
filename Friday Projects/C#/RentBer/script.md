Steps for adding a feature request

1. Fork the repo to your own GitHub profile
    - This lets you work and commit to a copy of the repo without overriding other people's work
1. Get it running  
    - You can't tell you broke until you try it first. If you make changes before running it, you don't now if it was broke before or after you started
    - Load the backend in Visual Studio. Make sure you open the `.sln` file
    - Load the frontend folder in Visual Studio Code
    - Copy the provided database file to the db location
        - You know where it is supposed to go based on DaoBase
1. Look through the requirements list
    - Understand that there is always more work to do than can get done in a given period of time. Don't freak out that there may be a lot of requirements
    - There may be some "Top Priority" work in the requirements list. You should focus on that first! Once you finish the top priority work, then you can start looking at other requirements to work through.
1. Common themes you might see
    1. Add exiting properties to the frontend
    1. Add some new property
        - This one can be deceptive; a new property requires changes on the frontend and the backend
    1. Order a list 
        - This can be done in either the front or the back end
            - Frontend would require `.sort()` in javascript, or possibly lodash (which we have never covered)
            - Backend requires sorting the array before returning it. You can use `.OrderBy` or `.OrderByDescending` to sort it
    1. Add Create/Update/Delete functionality to the frontend
        - Have to ensure that the backend can handle it, or add that capability
    1. Formatting
        - Formatting includes things like putting dollar signs in front of currency or requiring specific decimal places or coloring changes. This is almost always a purely frontend change.
    1. Bug Fixes
        - The application doesn't work as expected under some condition. These can be difficult to replicate and track down.
        - Make sure you don't break other behavior by fixing the bug
        