# Software architecture

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
	
	
## DATABASE MODEL

	CREATE TABLE student (
	 student_id serial PRIMARY KEY,
	 first_name VARCHAR (50),
	 last_name VARCHAR (50),
	 nickname VARCHAR (50),
	 phone VARCHAR (50) NOT NULL,
	 email VARCHAR (120),
	 date_created TIMESTAMP,
	 date_modified TIMESTAMP
	)
	
	CREATE TABLE course (
	 course_id serial PRIMARY KEY,
	 learningopportunity_id VARCHAR (20) NOT NULL,
	 course_name VARCHAR (127) NOT NULL,
	 period integer NOT NULL,
	 year integer NOT NULL,
	 date_created TIMESTAMP NOT NULL,
	 date_modified TIMESTAMP
	)
	
	CREATE TABLE student_course (
	 student_course_id integer PRIMARY KEY,
	 student_id integer REFERENCES student(student_id),
 	 course_id integer REFERENCES course(course_id)
	)
