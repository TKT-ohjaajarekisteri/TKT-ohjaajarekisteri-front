# Authentication

The API uses [JWT (json web token)](https://jwt.io) for authenticating HTTP requests. All authenticated endpoints require that you include a valid JWT in the *Authorization* header, e.g. `Authorization: Bearer <JWT here>`.

Roles used for authentication on endpoints are: `Login` (user needs to be logged in to access the endpoint), `User` (Only the *owner* of the requested data may access that data using that endpoint), and `Admin` (Only users with *admin* status may access the endpoint).

# Endpoint index

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| [`/api/login`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#login---authenticate-user) | POST | None | Used for requesting access tokens and user information.|
| [`/api/admins`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#admin---update-admin-password) | PUT | Admin | Used for changing admin credentials. Admin JWT required. |
| [`/api/courses`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#courses---get-current-courses) | GET | Login | Used for fetching currently available courses. If the user is an admin they will also receive all courses with `"hidden":"true"`, which are not sent to student users. `students:[]` field is only returned if user is an admin. |
| [`/api/courses/all`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#courses---get-all-courses-in-database) | GET | Login | Used for fetching all courses. |
| [`/api/courses/summary`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#courses---get-all-courses-and-applicants-related-to-those-courses) | GET | Admin | Used for getting all courses and applicants of those courses to get an overview of the data and relations in the database. |
| [`/api/:id`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#courses---get-one-course) | GET | Login | Used for fetching one course based on its `course_id` |
| [`/api/:id/students`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#courses---get-all-applicants-to-a-course) | GET | Admin | Used for fetching all students that have applied to the course. |
| [`/api/:id/students`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#courses---modify-applications-groups-and-accepted-state) | POST | Admin | Used for updating the state of applications. Only the fields included in the objects passed in the request body are updated, e.g. if `groups` is missing from an object, then it was not updated. |
| [`/api/:id/hide`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#courses---hide-a-course) | PUT | Admin | Used for hiding a course from the view of applicants. |
| [`/api/students`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---get-all-students) | GET | Admin | Used for fetching all students in database. |
| [`/api/students/:id`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---get-one-student) | GET | User | Used for fetching a specific student based on their `user_id`. |
| [`/api/students/:id/info`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---get-one-student-1) | GET | Admin | Used by admin for fetching a specific student based on their `student_id`. |
| [`/api/students/:id/courses`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---get-courses-related-to-student) | GET | User | Used for fetching courses that the user has applied to. |
| [`/api/students/:id/courses/apply`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---apply-to-courses) | POST | User | Used creating applications for student to courses. Applications are created to courses listed in the `course_ids` field of the request body. |
| [`/api/students/:id/courses/:course_id`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---remove-application-from-course) | DELETE | User | Used removing an application by student. Course from which the application shall be removed is identified by the param `course_id`. |
| [`/api/students/:id`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---update-contact-details) | PUT | User | Used for updating the user's contact details. |
| [`/api/students/:id`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---remove-student-from-db) | DELETE | User | Used for deleting the record of the student from the database. |
| [`/api/students/:id/:course_id/hide`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#students---remove-student-from-db-1) | PUT | User | Used for hiding an application to a course from the student's view. The endpoint will set the `hidden` field for the application of the student as hidden (true) if it is not hidden and makes it visible (false) if it is hidden. |
| [`/api/tokenCheck/login`](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-front/blob/master/documentation/ohjaajarekisteri-API.md#token---check-that-jwt-is-still-valid) | GET | Login | Used for checking if JWT is valid. |

# Endpoints

## Login - authenticate user

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/login` | POST | None | Used for requesting access tokens and user information.|

#### Parameters

```json5
body: {
  "username": "tester",
  "password": "password"
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json

If credentials are admin:
Data: {
  "token": "aaksjdhf123jk4hl4kj676t21kj34h178234t12hj4bkj",
  "user": {
    "user_id": 1,
    "role": "admin"
  }
}

If credentials are student:
Data: {
  "token": "aaksjdhf123jk4hl4kj676t21kj34h178234t12hj4bkj",
  "user": {
    "user_id": 1,
    "role": "student",
    "email": true // depends on the user having supplied an email address
  }
}
```

#### Error responses

```json5
status: 400 data: { "error": "missing username or password" }
status: 401 data: { "error": "incorrect credentials" } // if password or username is wrong
status: 500 data: { "error": "authentication error" } // if an authentication func throws an error
```

---

## Admin - update admin password

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/admins` | PUT | Admin | Used for changing admin credentials. Admin JWT required. |

#### Parameters

```json5
body: {
  "oldPassword": "oldPassword",
  "newPassword": "newPassword"
}
```

#### Response

```json5
Status: 200 OK
```

#### Error responses

```json5
status: 400 data: { "error": "old password does not match" }
status: 400 data: { "error": "bad req" }
```

---

## Courses - get current courses

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/courses` | GET | Login | Used for fetching currently available courses. If the user is an admin they will also receive all courses with `"hidden":"true"`, which are not sent to student users. `students:[]` field is only returned if user is an admin. |

#### Parameters

```json5
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: [
  {
    "course_id": 567,
    "learningopportunity_id": "CSM12109",
    "course_name": "Algorithms in Molecular Biology",
    "period": 4,
    "year": 2019,
    "groups": 3,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z",
    "students": [
      {
        "student_id": 1,
        "Application": {
          "accepted": false,
        }
      },
    ]
  },
  ...
  {
    "course_id": 642,
    "learningopportunity_id": "TKT20007",
    "course_name": "Ohjelmistotuotantoprojekti",
    "period": 4,
    "year": 2019,
    "groups": null,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z",
    "students": []
  },
]
```

#### Error responses

```json5
status: 400 data: { "error": "malformatted json" }
```

---

## Courses - get all courses in database

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/courses/all` | GET | Login | Used for fetching all courses. |

#### Parameters

```json5
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: [
  {
    "course_id": 1,
    "learningopportunity_id": "CSM11002",
    "course_name": "Computer Science Colloquium",
    "period": 1,
    "year": 2018,
    "groups": null,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z"
  },
  ...
  {
    "course_id": 113,
    "learningopportunity_id": "DATA14001",
    "course_name": "Big Data Frameworks",
    "period": 3,
    "year": 2019,
    "groups": null,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z"
  },
  ...
]
```

#### Error responses

```json5
-
```

---

## Courses - get all courses and applicants related to those courses

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/courses/summary` | GET | Admin | Used for getting all courses and applicants of those courses to get an overview of the data and relations in the database. |

#### Parameters

```json5
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: [
  {
    "course_id": 19,
    "learningopportunity_id": "CSM12109",
    "course_name": "Algorithms in Molecular Biology",
    "period": 4,
    "year": 2019,
    "groups": null,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z",
    "students": [
      {
        "student_id": 1,
        "student_number": "012345678",
        "first_names": "Timo *Teppo Tellervo",
        "last_name": "Testaaja",
        "no_english": false,
        "experience": "",
        "phone": "213412341",
        "email": "tite@helsinki.fi",
        "createdAt": "2019-04-17T09:43:28.967Z",
        "updatedAt": "2019-04-17T10:22:18.228Z",
        "Application": {
          "groups": 0,
          "accepted": false,
          "hidden": false,
          "createdAt": "2019-04-17T10:22:28.920Z",
          "updatedAt": "2019-04-17T10:22:28.920Z",
          "course_id": 19,
          "student_id": 1
        }
      },
    ]
  },
  ...
]
```

#### Error responses

```json5
status: 400 data: { "error": "malformatted request" }
```

---

## Courses - get one course

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/:id` | GET | Login | Used for fetching one course based on its `course_id` |

#### Parameters

```json5
params: {
  "id": 42 // the id of the queried course
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: {
    "course_id": 42,
    "learningopportunity_id": "TKT20007",
    "course_name": "Ohjelmistotuotantoprojekti",
    "period": 4,
    "year": 2019,
    "groups": null,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z"
}
```

#### Error responses

```json5
-
```

---

## Courses - get all applicants to a course

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/:id/students` | GET | Admin | Used for fetching all students that have applied to the course. |

#### Parameters

```json5
params: {
  "id": 42 // the id of the queried course
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: [
  {  
    "email": "tite@helsinki.fi",
    "experience": "",
    "first_names": "Timo *Teppo Tellervo",
    "last_name": "Testaaja",
    "no_english": false,
    "phone": "213412341",
    "student_id": 1,
    "student_number": "012345678",
    "accepted": true,
    "groups": 2
  },
  ...
]
```

#### Error responses

```json5
-
```

---

## Courses - modify applications' groups and accepted state

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/:id/students` | POST | Admin | Used for updating the state of applications. Only the fields included in the objects passed in the request body are updated, e.g. if `groups` is missing from an object, then it was not updated. |

#### Parameters

```json5
params: {
  "id": 42 // the id of the queried course
}

body: [
  {
    "student_id":1,
    "accepted":false,
    "groups":0
  },
  {
    "student_id":2,
    "accepted":true,
    "groups":5
  },
  {
    "student_id":4,
    "accepted":false,
  },
  {
    "student_id":8,
    "groups":5
  }
]
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: [ // returns all applicants including the modifications made to some
  {  
    "email": "tite@helsinki.fi",
    "experience": "",
    "first_names": "Timo *Teppo Tellervo",
    "last_name": "Testaaja",
    "no_english": false,
    "phone": "213412341",
    "student_id": 1,
    "student_number": "012345678",
    "accepted": false, <-- modified
    "groups": 0 <-- modified
  },
  ...
]
```

#### Error responses

```json5
status: 400 data: { "error": "malformatted request" }
```

---

## Courses - hide a course

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/:id/hide` | PUT | Admin | Used for hiding a course from the view of applicants. |

#### Parameters

```json5
params: {
  "id": 42 // the id of the queried course
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: {
    "course_id": 42,
    "learningopportunity_id": "TKT20006",
    "course_name": "Ohjelmistotuotanto",
    "period": 2,
    "year": 2019,
    "groups": null,
    "hidden": true, <-- modified
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z"
}
```

#### Error responses

```json5
status: 400 data: { "error": "bad req" }
```

---

## Students - get all students

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students` | GET | Admin | Used for fetching all students in database. |

#### Parameters

```json5
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: [
  {
    "student_id": 1,
    "student_number": "012345678",
    "first_names": "Timo *Teppo Tellervo",
    "last_name": "Testaaja",
    "no_english": false,
    "experience": "",
    "phone": "213412341",
    "email": "tite@helsinki.fi",
    "createdAt": "2019-04-17T09:43:28.967Z",
    "updatedAt": "2019-04-17T10:22:18.228Z"
  },
  ...
]
```

#### Error responses

```json5
status: 400 data: { "error": "Could not get studentlist from db" }
```

---

## Students - get one student

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students/:id` | GET | User | Used for fetching a specific student based on their `user_id`. |

#### Parameters

```json5
params: {
  "id": 1 // the user_id of the student
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: {
    "student_id": 1,
    "student_number": "012345678",
    "first_names": "Timo *Teppo Tellervo",
    "last_name": "Testaaja",
    "no_english": false,
    "experience": "",
    "phone": "213412341",
    "email": "tite@helsinki.fi",
    "createdAt": "2019-04-17T09:43:28.967Z",
    "updatedAt": "2019-04-17T10:22:18.228Z"
}
```

#### Error responses

```json5
status: 400 data: { "error": "Could not get student from db" }
```

---

## Students - get one student

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students/:id/info` | GET | Admin | Used by admin for fetching a specific student based on their `student_id`. |

#### Parameters

```json5
params: {
  "id": 1 // the student_id of the student
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: {
    "student_id": 1,
    "student_number": "012345678",
    "first_names": "Timo *Teppo Tellervo",
    "last_name": "Testaaja",
    "no_english": false,
    "experience": "",
    "phone": "213412341",
    "email": "tite@helsinki.fi",
    "createdAt": "2019-04-17T09:43:28.967Z",
    "updatedAt": "2019-04-17T10:22:18.228Z"
}
```

#### Error responses

```json5
status: 400 data: { "error": "Could not get student from db" }
```

---

## Students - get courses related to student

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students/:id/courses` | GET | User | Used for fetching courses that the user has applied to. |

#### Parameters

```json5
params: {
  "id": 1 // the user_id of the student
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: [
  {
    "course_id": 24,
    "learningopportunity_id": "CSM12114",
    "course_name": "Automated Logical Reasoning",
    "period": 4,
    "year": 2019,
    "groups": null,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z",
    "Application": {
      "groups": 0,
      "accepted": false,
      "hidden": false,
      "createdAt": "2019-04-17T10:22:28.932Z",
      "updatedAt": "2019-04-17T10:22:28.932Z",
      "course_id": 24,
      "student_id": 1
    }
  },
  ...
]
```

#### Error responses

```json5
status: 400 data: { "error": "Could not get the course list from db" }
```

---

## Students - apply to courses

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students/:id/courses/apply` | POST | User | Used creating applications for student to courses. Applications are created to courses listed in the `course_ids` field of the request body. |

#### Parameters

```json5
params: {
  "id": 1 // the user_id of the student
}
body: {
  "course_ids": [125, ... ]
}
```

#### Response

```json5
Status: 201 Created
Content-Type: application/json
Data: [
  {
    "course_id": 125,
    "learningopportunity_id": "DATA16001",
    "course_name": "Network Analysis",
    "period": 3,
    "year": 2019,
    "groups": null,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z"
  },
  ...
]
```

#### Error responses

```json5
status: 400 data: { "error": "bad req" }
```

---

## Students - remove application from course

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students/:id/courses/:course_id` | DELETE | User | Used removing an application by student. Course from which the application shall be removed is identified by the param `course_id`. |

#### Parameters

```json5
params: {
  "id": 1, // the user_id of the student
  "course_id": 42
}
```

#### Response

```json5
Status: 204 No Content
```

#### Error responses

```json5
status: 400 data: { "error": "bad request" }
```

---

## Students - update contact details

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students/:id` | PUT | User | Used for updating the user's contact details. |

#### Parameters

```json5
params: {
  "id": 1, // the user_id of the student
}
body: {
  "email": "test@helsinki.fi", 
  "phone": "123456789", 
  "experience": "This is what I have done so far...", 
  "no_english": false
}
```

#### Response

```json5
Status: 200 OK
```

#### Error responses

```json5
status: 400 data: { "error": "bad req" }
```

---

## Students - remove student from DB

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students/:id` | DELETE | User | Used for deleting the record of the student from the database. |

#### Parameters

```json5
params: {
  "id": 1 // the user_id of the student
}
```

#### Response

```json5
Status: 200 OK
```

#### Error responses

```json5
status: 400 data: { "error": "bad req" }
```

---

## Students - remove student from DB

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/students/:id/:course_id/hide` | PUT | User | Used for hiding an application to a course from the student's view. The endpoint will set the `hidden` field for the application of the student as hidden (true) if it is not hidden and makes it visible (false) if it is hidden. |

#### Parameters

```json5
params: {
  "id": 1, // the user_id of the student
  "course_id": 24
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: {
    "course_id": 24,
    "learningopportunity_id": "CSM12114",
    "course_name": "Automated Logical Reasoning",
    "period": 4,
    "year": 2019,
    "groups": null,
    "hidden": false,
    "createdAt": "2019-04-16T19:45:24.731Z",
    "updatedAt": "2019-04-16T19:45:24.731Z",
    "Application": {
      "groups": 0,
      "accepted": false,
      "hidden": true, <-- modified (when it was false previously)
      "createdAt": "2019-04-17T10:22:28.932Z",
      "updatedAt": "2019-04-17T10:22:28.932Z",
      "course_id": 24,
      "student_id": 1
    }
}
```

#### Error responses

```json5
status: 400 data: { "error": "bad req" }
```

---

## Token - check that JWT is still valid

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/tokenCheck/login` | GET | Login | Used for checking if JWT is valid. |

#### Parameters

```json5
// Only the JWT in the authorization header is required
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: {
   "message":"success"
}
```

#### Error responses

```json5
status: 401 data: { "error": "token missing or invalid" }
status: 500 data: {
  "error": {
    "name": "TokenExpiredError",
    "message": "jwt expired",
    "expiredAt": "2019-04-17T19:43:28.000Z"
  }
}
```

---

<!-- ## Template - short description

| Endpoint                      | Method | Authentication | Description |
| ----------------------------- | ------ | -------------- | ----------- |
| `/api/` |  |  |  |

#### Parameters

```json5
body: {
}
```

#### Response

```json5
Status: 200 OK
Content-Type: application/json
Data: {}
```

#### Error responses

```json5
status: 404 data: { "error": "" }
```

--- -->
