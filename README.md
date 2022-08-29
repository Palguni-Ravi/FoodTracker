# FoodTracker
Tracking and managing food ordering of employees in a company.

* Localhost server setup has to be made at port 4000

* Executing cmd 'mongod' for starting mongodb server
* cmd 'nodemon index.js' in terminal for running javascript file in the node environment

* Home page displayed at route '/' by index.ejs file
* Clicking on about us in navbar executes textfile.js file
* Clicking on login in navbar displays login.ejs file
* Registration of new user shown by register.ejs file

* While logging-in, these are checked 
1) Whether email is already present in database
2) Whether entered password is correct 

* During registration of a new user, following conditions are checked
1) Whether email is unique
2) Whether password is of minimum 8 characters
3) Whether password and confirm password fields match

* After successful log-in of an already existing user or successful registration of a new user, 
optionpage.ejs is displayed
* Choice between Breakfast and Evening snacks is asked..
* Number of employees who opted for Breakfast and evening snacks are displayed seperately

* After the user provides his/her choice, the app will be redirected to home page 
