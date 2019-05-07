# User guide for Admin

This web application is used for recruiting students as course assistants. This guide will go through most use cases.

### Logging in

Type in your username and password and click login. Students use their University of Helsinki credentials.

Admin username and password have to inserted into the database by administration. Contact administration if you do not have them
or have forgotten them. 

![login](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-7%20kello%2019.19.15.png)

### Course list view

After login course list is shown. On this page you can view upcoming courses. 

![courseview](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.40.50.png)

By clicking Study Programme or Period buttons, you can filter shown courses. For example, by selecting "CS-Bachelor" and Period "1",
only bachelor courses on period 1 are shown.

![filtered courseview](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.40.58.png)

### Single course view

By clicking on course code, single course view is shown.

![single course](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.42.57.png)

In this view, admin can
* select students as assistants
* assign a number of groups to a student
* email to selected students via outlook webmail

By clicking "Accepted" checkbox, a student is marked to be accepted as an assistant. By clicking "Check all" under the most
bottom student, all students' "Accepted" box is checked.
![checked students](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.41.39.png)

However, changes to accepted status do not last unless user clicks "Save". Email button is also blocked until changes are saved.
Checking emailboxes do not work until changes are saved.

![title](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.41.46.png)

After saving changes to accepted and group status, user can send email to students. There are two prefilled forms, one for accepted
and one for refused applications. Sending emails to students is done byy checking "Email to" checkboxes, and then clicking one
of the email buttons. Button opens a new tab to outlook webmail, with student email addresses, topic and message prefilled.

![email to](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.41.59.png)

### Student view

By clicking student number, user is directed to single student page. Here user can see more detailed information about student.

![single student view](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.42.24.png)

### Deleting a student

If a student requests his or hers data to be removed, it can be done by clicking "Delete Student" on the navigation bar, and then
typing in student number and clicking "Delete Student". This will remove all data of the student from the database. 

![title](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.41.22.png)

### Summary view

By seleting "Summary" from navigation panel, user can see all courses with applications and/or assistants in a single page, with
students list.Pending means that the student has applied, but has not been accepted. When student is accepted, status will change
to "Accepted". It is possible for student to apply to assist in courses in both English and Finnish or only Finnish. Language status is represented
by a flag in the Summary view. UK flag means that student is prepared to assist in English aswell, Finnish flag means that only in Finnish.

![Summary](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.41.16.png)

The view has same filters as in course view, with the addition of search field. Typing in field filters out courses that do not match
the typed letters.

![Summary with word filter](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-6%20kello%2020.42.57.png)

### Chaning password

Changing password is done by Selecting "Change password" from navigation panel. Type in old password and new password in both
fields to change it. Password can be recovered ONLY by system administration. 

![change password](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/pictures/Näyttökuva%202019-5-7%20kello%2020.45.19.png)

