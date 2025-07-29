# Bajaj Finserv Health Full Stack Development Task

This project is a REST API that processes an array of data and returns a structured response containing classified information based on the input.

## Features

- Separates numbers into even and odd arrays.
- Identifies and extracts alphabets, converting them to uppercase.
- Calculates the sum of all numerical values.
- Concatenates all alphabetical characters in reverse order with alternating capitalization.
- Handles special characters.

## Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.

## API Endpoints

### Health Check

- **GET /**

  A simple health check endpoint to verify that the service is running.

  **Example Response:**

  ```json
  {
    "status": "ok"
  }
  ```

### Process Data

- **POST /bfhl**

  Processes an array of data and returns a detailed analysis.

  **Request Body:**

  ```json
  {
    "data": ["a", "1", "334", "4", "R", "$"]
  }
  ```

  **Successful Response:**

  ```json
  {
    "is_success": true,
    "user_id": "rudraksh_kpr_17091999",
    "email": "rudraksh746.be22@chitkara.edu.in",
    "roll_number": "2210990746",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "Ra"
  }
  ```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js installed on your machine.

### Installation

1.  Clone the repo:

    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```

2.  Install NPM packages:

    ```sh
    npm install
    ```

## Running the Application

To start the server, run the following command in your terminal:

```sh
node index.js
```

The server will start on `http://localhost:5000`.

## Testing

You can test the endpoints using `curl` or any API client like Postman.

### Health Check

```sh
curl -X GET http://localhost:5000/
```

### Process Data

```sh
curl -X POST http://localhost:5000/bfhl \
-H "Content-Type: application/json" \
-d '{ "data": ["a", "1", "334", "4", "R", "$"] }'
```
