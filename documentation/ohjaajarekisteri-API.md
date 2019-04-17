# Authentication

The API uses [JWT (json web token)](https://jwt.io) for authenticating HTTP requests. All authenticated endpoints require that you include a valid JWT in the *Authorization* header, e.g. `Authorization: Bearer <JWT here>`.

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

## Template - short description

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

---