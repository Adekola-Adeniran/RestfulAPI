# RESTful API
A simple REST API using Express.js with full CRUD functionality

## Features
* CRUD operations: Create, Read, Update, Delete
* Validation for input data
* Clean separation of routes and controllers

## Installation
1. Clone the repo:
   ```
   git clone https://github.com/Adekola-Adeniran/RESTfulAPI.git
   cd RESTfulAPI
   ```

2. Install dependencies:
   ```
   npm install express nodemon uuid
   ```

3. Run the server:
   ```
   npm start
   Access the API at: http://localhost:5000
   ```
## API Endpoints

### GET method (/) - Welcome message

### GET method (/users) - Get all users
example: [
  {
  "firstName" : "John",
  "lastName" : "Doe",
  "age" : 26
  },
  {
  "firstName" : "Jane",
  "lastName" : "Doe",
  "age" : 25
  }
]

### GET method (/:id) - Get a specific user
{
  "firstName" : "Jane",
  "lastName" : "Doe",
  "age" : 25,
  "id" : "780c3211-231b-4ed6-80aa-9f10d2b7c2ff"
}

### POST (/users) - Create a new user

### PATCH (/users/:id) - update a user

### DELETE (/users/:id) - delete a user 

## Use POSTMAN to test all endpoints