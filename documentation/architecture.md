# Software architecture


## Technologies used
* Front: React, Javascript
* Back: NodeJS
* Database: PostgreSQL
* DevOps: Docker
* Server: students.cs.helsinki.fi

## Client (React)

### Components
- takes care of views
	- /student
	- /course

### Services / Controller (axios)
- takes care of database communication
	- /services
	
### State management (Redux)
- manages states
	- /reducers
	- store.js

### Tests
- Contains all client-end tests
	- /tests


## Server (Node + PSQL)

### Routes (Express)
- Controller routes express routes
	- /controllers

### Models (PSQL Database)
- Models PSQL database using Sequalize
	- /models

### Utils
- helper methods
	- /utils
	
	
## Database
### User - Student - Admin
Application keeps record of registered students. When student logs in with University of Helsinki credentials, a new user is created and added to both user table and student table. Upon first login, student is asked to enter email, phone number and whether he/she is prepared to teach in english. After a valid email is given, student registration is complete. Admin is created via seeding it to the database by administrator. Forgotten admin password has to be reseted by the administration.

User role is either 'Admin' or 'Student'. Role_id value is either student_id or admin_id, both of which are created automatically by sequelize.

### Courses
List of all Computer Science courses is retrieved from [opetushallinto](https://opetushallinto.cs.helsinki.fi/organizations/500-K005/filtered_courses.json)
as a json. List is parsed by the application into a database, which is updated every day at midnight. Period information for filtering courses is given via a json file.

### Application
Student may apply to assist in a course. Admin can view all applications for a selected course, and accept students' applications. Accepted student applications are updated as 'accepted', after which they cannot be deleted. Admin can also assign a number of courses to an accepted student.

![model](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/database%20model.png)

## Dataflow

Front end uses redux states to store information for application. Services use axios to get data from backend. Services can also be configured to use mock data for testing. Data is passed to action creators, which invoke reducers to dispatch data to store. Store can be utilized by the application. When data is updated, components call action creators to create new state with updated data.

### Example: SingleCourse page for Admin

![dataflow chart](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/dataflow.png)
Component SingleCourse.js creates the page layout. Course applicants are initialized via initializeSingleCourse, which gets them from database using course Service. Course Service uses axios to connect to backend API. After courses are returned to courseService.js from API, they are passed back to initializeSingleCourse, which creates a new set of applicants. This set is forwarded to Single Course Reducer. Reducer updates the old state by creating a new state with the new set of applicants. 

When admin clicks checkbox to accept a student as a assistant, SetStudentAccepted passes new student to state via reducer. When modifications are saved, setAcceptedModified is called to update database via course service. Then list of updated students is passed to reducer, which creates a new state for singleCourse component. 
