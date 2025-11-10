# Full-Stack Todo Application

This is a full-stack "Todo" application built to demonstrate the separation of concerns between a back-end RESTful API and a front-end single-page application (SPA).

The back-end is a robust API built with Python, Django, and Django REST Framework. The front-end is a dynamic user interface built with React that consumes the data from the API.

## Project Structure

-   `/backend`: Contains the Django project that serves the REST API.
-   `/frontend`: Contains the React application that serves as the user interface.

## Features

### Backend

-   **RESTful API:** Provides a clean, browsable API for listing and retrieving "Todo" items.
-   **CORS Enabled:** Pre-configured with `django-cors-headers` to allow cross-origin requests from the front-end application.
-   **Admin Panel:** Leverages the built-in Django Admin for easy and secure management of todo items (CRUD operations).

### Frontend

-   **Dynamic UI:** A responsive user interface built with React.
-   **Live Data Fetching:** Uses `axios` to make live HTTP requests to the Django back-end to fetch and display the list of todos.
-   **Component-Based Architecture:** The UI is structured using modern React class components.

## Technologies Used

| Area      | Technology / Library        |
| --------- | --------------------------- |
| **Backend** | Python, Django, Django REST Framework, SQLite |
| **Frontend**| React, JavaScript (ES6+), `axios`, npm |
| **Tools**   | Git, venv, nvm (recommended)  |

## Local Development Setup

Follow these instructions to get both the backend and frontend servers running on your local machine.

### Prerequisites

-   Python 3.8 or higher
-   Node.js (LTS version recommended) & npm
-   Git

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/todo-api-react-project.git
cd todo-api-react-project
```

### 2. Set Up the Backend

```bash
# Navigate to the backend directory
cd backend

# Create and activate a Python virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py migrate
```

### 3. Set Up the Frontend

```bash
# Navigate to the frontend directory from the root
cd frontend

# Install JavaScript dependencies
npm install
```

## Running the Application

To run the full application, you must start both the backend and frontend servers in **two separate terminals**.

### Terminal 1: Start the Backend Server

```bash
# Navigate to the backend directory
cd backend

# Activate the virtual environment
source venv/bin/activate

# Start the Django development server
python manage.py runserver```
The backend API will now be running at `http://127.0.0.1:8000/`.

### Terminal 2: Start the Frontend Server

```bash
# Navigate to the frontend directory
cd frontend

# Start the React development server
npm start
```
The React application will open automatically in your browser at `http://localhost:3000/`.

You should now see the list of "todos" fetched from your backend API displayed on the page.

## API Endpoints

| Endpoint      | HTTP Method | Description                  |
| ------------- | ----------- | ---------------------------- |
| `/apis/`      | `GET`       | Retrieves a list of all todos. |
| `/apis/<id>/` | `GET`       | Retrieves a single todo by its ID. |```