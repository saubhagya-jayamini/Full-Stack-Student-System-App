# Full-Stack-Student-System-App

## Overview
A full-stack student system application with a React frontend, Spring Boot backend, and MySQL database.

## Tech Stack
- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: MySQL

## Setup Instructions

### Frontend
1. Navigate to the `frontend/` directory:
   cd frontend

2. Install dependencies:
    npm install

3. Run the development server:
    npm start

### Backend
1. Navigate to the `backend/` directory:
    cd backend

2. Build the Spring Boot application:
    mvn clean install

3. Run the application

### Database

1. Set up a MySQL database using XAMPP.

2. Create a schema

3. Configure database credentials in the application.properties file:
   
    spring.datasource.url=jdbc:mysql://localhost:3306/database_name
   
    spring.datasource.username=username
   
    spring.datasource.password=password

