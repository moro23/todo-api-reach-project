# Full-Stack Todo Application (Backend API)

This repository contains the back-end API for a full-stack Todo application. The API is built with Python using the Django and Django REST Framework, and it is designed to be consumed by a front-end application (e.g., React).

The project currently provides a read-only API for listing and retrieving "Todo" items.

## Project Structure

-   `/backend`: Contains the Django project that serves the REST API.
-   `/frontend`: (Planned) Will contain the React application that consumes the API.

## Backend Features

-   **Read-Only API for Todos:** Provides endpoints to list all todos and retrieve a single todo by its ID.
-   **Browsable API:** Includes Django REST Framework's user-friendly browsable API for easy interaction and testing in the browser.
-   **CORS Pre-configured:** Comes with `django-cors-headers` set up to allow requests from `http://localhost:3000`, making it ready for a local React front-end.
-   **Admin Integration:** The `Todo` model is registered with the Django admin, allowing for easy content management (CRUD operations) out of the box.
-   **Unit Tests:** Includes basic model tests to ensure data integrity and model logic.

## API Endpoints

The following endpoints are available:

| Endpoint      | HTTP Method | Description                  |
| ------------- | ----------- | ---------------------------- |
| `/apis/`      | `GET`       | Retrieves a list of all todos. |
| `/apis/<id>/` | `GET`       | Retrieves a single todo by its ID. |

## Technologies Used

-   **Backend:** Python, Django
-   **API Framework:** Django REST Framework
-   **Database:** SQLite (default)
-   **CORS:** `django-cors-headers`

## Backend Setup and Installation

Follow these instructions to get the backend server running on your local machine.

### Prerequisites

-   Python 3.8 or higher
-   pip (Python package installer)
-   Git

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/todo-api-react-project.git
cd todo-api-react-project
```

### 2. Set Up the Backend Environment

Navigate to the backend directory to perform the setup.

```bash
cd backend
```

### 3. Create and Activate a Virtual Environment

**On macOS/Linux:**

```bash
python3 -m venv venv
source venv/bin/activate
```

**On Windows:**

```bash
python -m venv venv
.\venv\Scripts\activate
```

### 4. Install Dependencies

Install all the required Python packages.

```bash
pip install -r requirements.txt
```

### 5. Apply Database Migrations

Create the database schema based on the models defined in the code.

```bash
python manage.py migrate
```

### 6. Create a Superuser

This is required to access the Django admin panel.

```bash
python manage.py createsuperuser
```

Follow the prompts to create a username and password.

### 7. Run the Development Server

```bash
python manage.py runserver
```

The API server will now be running at `http://127.0.0.1:8000/`.

## Usage

Once the server is running, you can interact with the application in two ways:

1.  **Browsable API:**
    -   Navigate to `http://127.0.0.1:8000/apis/` in your browser to view the list of all todos.
    -   Click on an individual todo to access its detail view (e.g., `http://127.0.0.1:8000/apis/1/`).

2.  **Django Admin Panel:**
    -   Navigate to `http://127.0.0.1:8000/admin/` and log in with your superuser credentials.
    -   Here you can add, edit, and delete todos, which will be immediately reflected in the API.

## Next Steps

-   [ ] Develop the React front-end to consume this API.
-   [ ] Expand the API to include **Create**, **Update**, and **Delete** functionality (`ListCreateAPIView`, `RetrieveUpdateDestroyAPIView`).
```