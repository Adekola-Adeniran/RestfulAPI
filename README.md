# RESTful API

A simple REST API built with Express.js that allows you to perform full CRUD (Create, Read, Update, Delete) operations on an in-memory collection of items. The API includes input validation, clean separation of routes and controllers, and custom middleware for logging and error handling. Data is stored in memory and resets on server restart. You can test all endpoints using Postman or any other API client.

## Features
* CRUD operations: Create, Read, Update, Delete
* Validation for input data
* Clean separation of routes and controllers

## Project Structure

```
/controllers
  items.js
/middlewares
  logger.js
  errorHandler.js
  validateItem.js
/routes
  items.js
express.js
README.md
```

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
   "id": (generated from uuid),
   "name":"Adekola",
   "description": "Adeniran"
}

## Validation

- `name` (string, required)
- `description` (string, required)

## Error Handling

- Returns `404` if item not found
- Returns `400` for invalid input data

## Environment Variables

- `PORT`: Set the port for the server (default: 5000)

## Notes

### In memory data (resets on restart)
### Use Postman for testing

