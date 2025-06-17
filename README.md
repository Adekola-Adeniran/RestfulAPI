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

### GET method (/items) - Get all items

### GET method (/:id) - Get item by id

### POST (/items) - Create a new item

### PUT (/items/:id) - update a item by id

### DELETE (/items/:id) - delete item by id

## Request 
POST /items body
{
   "firstName":"Adekola",
   "lastName": "Adeniran",
   "age": 26
}

## Notes

### In memory data (resets on restart)
### Use Postman for testing

