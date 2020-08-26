# backend-api
Back-end RESTful API
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development environment running
`cd` into `server` folder and install dependencies with:

```
yarn or npm install
```

Then launch the api with: 

```
yarn or npm run server
```
## Table of Contents
- **[Installation](#installing)**<br>
- **[Back End Developer](#backend-developers)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Product Vision Document](#exPat-Journal)**<br>
- **[Proposal](#proposal)**<br>
- **[UX Design](#ux-design)**<br>
- **[Frameworks and Libraries Used](#frameworks-and-libraries)**<br>
- **[Target Audience](#target-audience)**<br>
- **[Research](#research)**<br>
- **[Prototype Key Features](#prototype-key-features)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview
- Sharing Stories & Images of users travels

## Back-end Developers

APIS | RDBMS and Data Persistence | Authentication | Form Testing

# API Endpoints
Use Base URL: 

| Method | Route                  | Description                                    |
|--------|------------------------|------------------------------------------------|
| POST   | /api/auth/register     | registers new users                            |
| POST   | /api/auth/login        | logins into user account                       |
| GET    | /api/users             | returns array of users                         |
| GET    | /api/users/:id         | returns users specified by :id                 |
| GET    | /api/users/:id/stories | returns posts created by user specified by :id |
| PUT    | /api/users/:id         | updates user specified by :id                  |
| DELETE | /api/users/:id         | deletes user specified by :id                  |
| GET    | /api/stories             | returns array of stories                         |
| GET    | /api/stories/:id         | returns stories specified by :id                  |
| PUT    | /api/posts/:id         | updates post specified by :id                  |
| DELETE | /api/posts/:id         | deletes post specified by :id                  |


## Register Endpoint
```js
POST /api/auth/register
```
### Expected Body
```js
{
  "username": "new_user", // string, unique, required
  "password": "password", // string, required
  "firstName": "Jane", // text, required
  "lastName": "Doe", // text, required
  "gender": "female", // string, required
  "age": 18, // integer, required
  "email": "JaneDoe@gmail.com" // string, unique, required
}
```

### Expected Response
```js
[
    {
        "user":[
            3
        ]
    }
]
```

## Login Endpoint
```js
POST /api/auth/login
```
### Expected Body
```js
{
  "username": "test_user",
  "password": "password"
}
```
### Expected Response
```js
{
    "message": "Welcome to your journal test_user!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo5LCJ1c2VybmFtZSI6Im5ld191c2UxciIsImlhdCI6MTU5ODMzMDkzOCwiZXhwIjoxNTk4MzM4MTM4fQ.CXtt4QEyrLHfNAWYdNN59fxysdyDAQS1Ujwq5-gCzcc"
}
```

## User Endpoints
### GET All Users
```js
GET /api/users
```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo5LCJ1c2VybmFtZSI6Im5ld191c2UxciIsImlhdCI6MTU5ODMzMDkzOCwiZXhwIjoxNTk4MzM4MTM4fQ.CXtt4QEyrLHfNAWYdNN59fxysdyDAQS1Ujwq5-gCzcc"
}

```
### Expected Response: List of all users in database
```js
[
    {
        "id": 1,
        "username": "test12",
        "password": "password132",
        "email": "test1@gmail.com",
        "firstName": "billy"
    },
    {
        "id": 2,
        "username": "test2",
        "password": "password132",
        "email": "test2@gmail.com",
        "firstName": "jack"
    },
    {
        "id": 3,
        "username": "test3",
        "password": "password132",
        "email": "test3@gmail.com",
        "firstName": "bill"
    },
    {
        "id": 6,
        "username": "Vanya007",
        "password": "testpass",
        "email": "vanya007@gmail.com",
        "firstName": "Vanya"
    },
    {
        "id": 7,
        "username": "lexi3",
        "password": "$2a$08$wiyxgN6GV472AI6XvuFr2edas/ZzxkbAqGB/i4syOe4go8EWkDk8m",
        "email": "lexi@gmail.com",
        "firstName": "lexi"
    },
    {
        "id": 8,
        "username": "new_user",
        "password": "$2a$08$.rWrs.EBB7pvkIBevAqj5OzOTEJz70DNx46/pQp29UlGy1vNnpj6e",
        "email": "JaneDoe@gmail.com",
        "firstName": "Jane"
    },
    {
        "id": 9,
        "username": "new_use1r",
        "password": "$2a$08$f/XN4x4P985H10b9uXldSOADtLHjnNS0rr7kH4lMOpSrr.yz4Hkoq",
        "email": "JaneDoe1@gmail.com",
        "firstName": "Jane"
    }
]
```

### GET User By ID
```js
GET /api/users/:id
```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo5LCJ1c2VybmFtZSI6Im5ld191c2UxciIsImlhdCI6MTU5ODMzMDkzOCwiZXhwIjoxNTk4MzM4MTM4fQ.CXtt4QEyrLHfNAWYdNN59fxysdyDAQS1Ujwq5-gCzcc"
}

```
### Expected Response: User that matches ID
```js
{
    "id": 1,
    "username": "test12",
    "password": "password132",
    "firstName": "billy",
    "lastName": "bob",
    "gender": "female",
    "age": 18,
    "email": "test1@gmail.com"
}
```
### GET User Posts By ID
```js
GET /api/users/:id/stories
```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo5LCJ1c2VybmFtZSI6Im5ld191c2UxciIsImlhdCI6MTU5ODMzMDkzOCwiZXhwIjoxNTk4MzM4MTM4fQ.CXtt4QEyrLHfNAWYdNN59fxysdyDAQS1Ujwq5-gCzcc"
}

```
### Expected Response: Posts that belong to user specified
```js
[
    {
        "id": 1,
        "storyName": "Chinatown",
        "storyCity": "Bangkok",
        "storyCountry": "Thailand",
        "storyDate": 2003,
        "storyDesc": "Out on a nightly excursion looking for something to eat",
        "user_id": 1
    }
]
```

### UPDATE User by ID
```js
PUT /api/users/:id
Only need to add field that you want to update
```
### Expected Body: 
```js

{
    "username": "test123" //updated field
}

```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJ4UzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFsZXhpcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTgzMjA4NjI0LCJleHAiOjE1ODMyMTIyMjR9.fxBJRx5d6ho4AxqUpFbsXuf6x3X65JqihX65_lzMND4"
}

```
### Expected Response:

```js
{
    "user": 1
}
```

### DELETE User by ID
```js
DELETE /api/users/:id
```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJ4UzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFsZXhpcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTgzMjA4NjI0LCJleHAiOjE1ODMyMTIyMjR9.fxBJRx5d6ho4AxqUpFbsXuf6x3X65JqihX65_lzMND4"
}

```
### Expected Response:

```js
{
    "success": "deleted",
    "id": 1
}
```

## Posts Endpoints
### GET All posts
```js
GET /api/posts
```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJ4UzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFsZXhpcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTgzMjA4NjI0LCJleHAiOjE1ODMyMTIyMjR9.fxBJRx5d6ho4AxqUpFbsXuf6x3X65JqihX65_lzMND4"
}

```
### Expected Response: List of all posts in database
```js
[
    {
        "id": 1,
        "storyName": "Chinatown",
        "storyCity": "Bangkok",
        "storyCountry": "Thailand",
        "storyDate": "2020-08-25 05:38:15",
        "storyDesc": "Out on a nightly excursion looking for something to eat",
        "user_id": 1
    },
    {
        "id": 2,
        "storyName": "Sanctuary of Truth",
        "storyCity": "Pattaya City",
        "storyCountry": "Thailand",
        "storyDate": "2020-08-25 05:38:15",
        "storyDesc": "A daytime excursion visiting some local places.",
        "user_id": 2
    },
    {
        "id": 3,
        "storyName": "Beach in Pattaya",
        "storyCity": "Pattaya City",
        "storyCountry": "Thailand",
        "storyDate": "2020-08-25 05:38:15",
        "storyDesc": "Taking a must needed rest after a weekend of fun in Pattaya",
        "user_id": 3
    }
]
```

### GET Post By ID
```js
GET /api/posts/:id
```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJ4UzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFsZXhpcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTgzMjA4NjI0LCJleHAiOjE1ODMyMTIyMjR9.fxBJRx5d6ho4AxqUpFbsXuf6x3X65JqihX65_lzMND4"
}

```
### Expected Response: User that matches ID
```js
{
    "id": 1,
    "storyName": "Chinatown",
    "storyCity": "Bangkok",
    "storyCountry": "Thailand",
    "storyDate": "2020-08-25 05:38:15",
    "storyDesc": "Out on a nightly excursion looking for something to eat",
    "user_id": 1
}
```
### UPDATE User by ID
```js
PUT /api/stories/:id
```
### Expected Body: 
```js

    {
        "storyName": "test", 
        "storyCity": "test", 
        "storyCountry": "test", 
        "storyDesc": "test", 
        "user_id": 1
    }

```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJ4UzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFsZXhpcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTgzMjA4NjI0LCJleHAiOjE1ODMyMTIyMjR9.fxBJRx5d6ho4AxqUpFbsXuf6x3X65JqihX65_lzMND4"
}

```
### Expected Response:

```js
{
    UPDATE!!!
}
```

### DELETE User by ID
```js
DELETE /api/stories/:id
```
### Expected Header: Authorization Token
```js

{
    "Authorization":"eyJhbGciOiJ4UzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFsZXhpcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTgzMjA4NjI0LCJleHAiOjE1ODMyMTIyMjR9.fxBJRx5d6ho4AxqUpFbsXuf6x3X65JqihX65_lzMND4"
}

```
### Expected Response:

```js
{
    "removed": 1
}
```


# Product Vision Document :tada:

## exPat Journal