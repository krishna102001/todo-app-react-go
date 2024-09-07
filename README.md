<h1>Todo App</h1>

## Overview

This repository contains a full stack Todo App where frontend part is done with `React + chakra-ui` and backend part is done with `Go` lang

## Features

- user can add the item
- user can mark its done
- user can delete todo item

## Getting Started

1. Clone the repository and navigate to the directory:

   ```bash
   git clone https://github.com/krishna102001//todo-app-react-go.git
   ```

### Frontend

 1. In terminal run the command:

   ```bash
   cd client
   npm i
   ```
 2. Start the frontend server:

   ```bash
   npm run dev
   ```
  The frontend server should now be running on `http://localhost:5173`.
  
### Backend

1. Create a `.env` files in root directory and add the following environment variables:

   ```env
   PORT=4000
   MONGODB_URI={mongoDB URL }
   ENV=development
   ```

2. Start the backend server:

   ```bash
   go run main.go
   ```
   The backend server should now be running on `http://localhost:4000`.
