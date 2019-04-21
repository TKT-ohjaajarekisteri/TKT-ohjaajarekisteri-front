### Database
## User - Student - Admin
Application keeps record of registered students. When student logs in with University of Helsinki credentials, a new user is created
and added to both user table and student table. Upon first login, student is asked to enter email, phone number and whether he/she
is prepared to teach in english. After a valid email is given, studentregistration is complete. Admin is created via seeding it to the
database by administrator. Forgotten admin password has to be reseted by the administration. 

## Courses
List of all Computer Science courses is retrieved from [opetushallinto](https://opetushallinto.cs.helsinki.fi/organizations/500-K005/filtered_courses.json)
as a json. List is parsed by the application into a database, which is updated every day at midnight. Period information for filtering
courses is given via a json file.

## Application
Student may apply to assist in a course. Admin can view all application for a selected course, and accept students' applications.
Accepted students application is updated as 'accepted', after which it cannot be deleted. Admin can also assign a number of courses to
an accepted student.

![model](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/database%20model.pptx)
