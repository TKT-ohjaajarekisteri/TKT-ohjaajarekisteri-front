# Authentication

The API uses [JWT (json web token)](https://jwt.io) for authenticating HTTP requests. All authenticated endpoints require that you include a valid JWT in the *Authorization* header, e.g. `Authorization: Bearer <JWT here>`.

# Endpoints

## Login - authenticate user

| Endpoint                      | Method | Description |
| ----------------------------- | ------ | ----------- |
| `/api/login` | POST | Used for requesting access tokens and user information.|

#### Parameters

```json5
body: {
  "username":"tester",
  "password":"password"
}
```

#### Response.data

```json5
Status: 200 OK
Content-Type: application/json

If credentials are admin:
{
  "token":"aaksjdhf123jk4hl4kj676t21kj34h178234t12hj4bkj",
  "user": {
    "user_id": 1,
    "role": "admin"
  }
}

If credentials are student:
{
  "token":"aaksjdhf123jk4hl4kj676t21kj34h178234t12hj4bkj",
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

## Admin - get all courses

| Endpoint                      | Method | Description |
| ----------------------------- | ------ | ----------- |
| `/api/` |  ||

#### Parameters

```json5
body: {
}
```

#### Response.data

```json5
Status: 200 OK
Content-Type: application/json

{

}
```

#### Error responses

```json5
status: 404 data: { "error": "" }
```

---
