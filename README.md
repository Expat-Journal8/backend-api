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
<!-- - **[Product Vision Document](#exPat-Journal)**<br>
- **[Proposal](#proposal)**<br>
- **[UX Design](#ux-design)**<br>
- **[Frameworks and Libraries Used](#frameworks-and-libraries)**<br>
- **[Target Audience](#target-audience)**<br>
- **[Research](#research)**<br>
- **[Prototype Key Features](#prototype-key-features)**<br>
- **[Credits](#credits)**<br> -->

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
| GET    | /api/users/:id/stories | returns stories created by user specified by :id |
| PUT    | /api/users/:id         | updates user specified by :id                  |
| DELETE | /api/users/:id         | deletes user specified by :id                  |
| GET    | /api/stories           | returns array of stories                       |
| GET    | /api/stories/:id       | returns stories specified by :id               |
| POST   | /api/stories           | creates & returns new story                    |
| PUT    | /api/stories/:id       | updates stories specified by :id                  |
| DELETE | /api/stories/:id       | deletes stories specified by :id                  |


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
        "id": 4,
        "username": "newb_user",
        "password": "$2a$08$Sp/WntMm7eAZnDn3tp40tOAp77T8CTMUel8bqZGD3CoJcuSrH.NZ6",
        "email": "Jane@gmail.com"
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
    "message": "Welcome to your journal:",
    "user": {
        "id": 12,
        "username": "new_user121212",
        "password": "$2a$08$9MDp4ngPo2WQreDm.Edve.n3DlkHq06wKWXPpOxp/LukM0y6vF402",
        "firstName": "Jane",
        "lastName": "Doe",
        "gender": "female",
        "age": 18,
        "email": "JaneDoe1133@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMiwidXNlcm5hbWUiOiJuZXdfdXNlcjEyMTIxMiIsImlhdCI6MTU5ODQyMDg0NywiZXhwIjoxNTk4NDI4MDQ3fQ.YyR_rrRxYaDVTt3FPM155hPwbUAEFhyaDSOWqVOD8kM"
}
```

## User Endpoints
### GET All Users
```js
GET /api/users
```
### Expected Response: List of all users in database
```js
[
    {
        "id": 1,
        "username": "test1",
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
        "id": 4,
        "username": "newb_user",
        "password": "$2a$08$Sp/WntMm7eAZnDn3tp40tOAp77T8CTMUel8bqZGD3CoJcuSrH.NZ6",
        "email": "Jane@gmail.com",
        "firstName": "Jane"
    }
]
```

### GET User By ID
```js
GET /api/users/:id
```
### Expected Response: User that matches ID
```js
{
    "id": 4,
    "username": "newb_user",
    "password": "$2a$08$Sp/WntMm7eAZnDn3tp40tOAp77T8CTMUel8bqZGD3CoJcuSrH.NZ6",
    "firstName": "Jane",
    "lastName": "Doe",
    "gender": "female",
    "age": 18,
    "email": "Jane@gmail.com"
}
```

### GET User Stories By ID
```js
GET /api/users/:id/stories
```
### Expected Response: Stories that belong to user specified
```js
{
    "id": 1,
    "storyName": "Chinatown",
    "photoLink": "https://i.ibb.co/DVN5Lnx/20200322-213304.jpg",
    "user_id": 1,
    "stories_id": 1
}
```

### POST new story
```js
POST /api/stories
```
### Expected Body:
```js
{
    "storyName": "test",
    "storyCity": "teset",
    "storyCountry": "test",
    "storyDesc": "test",
    "user_id": 3
}
```
### Expected Response
```js
{
    "storyName": "test",
    "storyCity": "teset",
    "storyCountry": "test",
    "storyDesc": "test",
    "storyDate": "2020-08-27 02:27:49",
    "user_id": 3
}
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
### Expected Response:

```js
{
    "remove": 1
}
```

## Stories Endpoints
### GET All stories
```js
GET /api/stories
```
### Expected Response: List of all stories in database
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

### GET Story By ID
```js
GET /api/stories/:id
```
### Expected Response: Story that matches Users ID
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
        "storyName": "ChinaTown"
    }

```
### Expected Response:

```js
{
    "story": 1
}
```

### DELETE User by ID
```js
DELETE /api/stories/:id
```
### Expected Response:

```js
{
    "removed": 1
}
```


# Product Vision Document :tada: