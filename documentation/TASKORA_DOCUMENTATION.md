# Taskora — Smart Task & Productivity Management Platform

## 1. Project Overview

**Taskora** is a full-stack task and productivity management application designed to help users organize their daily, academic, personal, and professional tasks.

The application combines task management, priority-based planning, calendar scheduling, progress tracking, visual progress snaps, dashboards, authentication, authorization, and gamification into one platform.

The system is designed initially for individual productivity but can later be extended into a team and workplace task management platform.

---

## 2. Project Objectives

The main objectives of Taskora are:

* Organize tasks in one centralized platform.
* Allow users to create, update, complete, and delete tasks.
* Prioritize tasks based on urgency and importance.
* Schedule tasks using a calendar.
* Track task progress.
* Upload progress and completion snaps as visual evidence.
* Provide dashboards for productivity analysis.
* Reward users for completing tasks.
* Maintain streaks, XP, levels, and badges.
* Provide secure authentication and authorization.
* Support Google authentication.
* Protect user data and private tasks.
* Provide a foundation that can later support team/workplace task management.

---

## 3. Planned Features

### Authentication

* User registration
* Username/email and password login
* Secure password hashing
* JWT-based authentication
* Continue with Google
* Logout
* Protected routes

### Authorization

* User roles
* User-level permissions
* Admin-level permissions
* Ownership-based task access
* Protected backend APIs

### Task Management

* Create tasks
* Edit tasks
* Delete tasks
* Complete tasks
* Task status
* Priority levels
* Due dates
* Categories
* Search and filtering

### Calendar

* View tasks by date
* Schedule tasks
* Due-date tracking
* Calendar-based task creation

### Progress Tracking

* Task progress percentage
* Progress status
* Progress snaps
* Completion snaps
* Task history

### Dashboard

* Total tasks
* Completed tasks
* Pending tasks
* Overdue tasks
* Completion percentage
* Productivity statistics
* Weekly/monthly progress

### Rewards

* XP points
* Levels
* Completion rewards
* Daily streaks
* Achievement badges

### Future Workplace Features

* Workspaces
* Teams
* Task assignment
* Manager/team-lead roles
* Team dashboards
* Shared tasks

---

## 4. Technology Stack

| Layer             | Technology                       |
| ----------------- | -------------------------------- |
| Frontend          | React.js                         |
| Build Tool        | Vite                             |
| Backend           | Node.js                          |
| API Framework     | Express.js                       |
| Database          | MongoDB                          |
| ODM               | Mongoose                         |
| Authentication    | JWT                              |
| Password Security | bcrypt                           |
| Google Login      | Google OAuth                     |
| API Testing       | Postman                          |
| Version Control   | Git                              |
| Repository        | GitHub                           |
| Deployment        | To be selected during deployment |

---

## 5. Why These Technologies?

### React.js

React is used to build the interactive frontend of Taskora.

It allows the application to be divided into reusable components such as:

* Navbar
* Sidebar
* Login
* Dashboard
* Task Card
* Calendar
* Reward Card

### Vite

Vite provides a fast development environment for React.

It is lightweight and provides fast development startup and builds.

### Node.js

Node.js allows JavaScript to run on the server side.

It is used as the runtime environment for the Taskora backend.

### Express.js

Express is used to build the backend server and REST APIs.

It simplifies routing, middleware, request handling, and API development.

### MongoDB

MongoDB stores Taskora's application data.

Potential collections include:

* Users
* Tasks
* Rewards
* Progress Snaps
* Workspaces
* Notifications

### Mongoose

Mongoose provides a structured way to work with MongoDB from Node.js.

It will help us define schemas, validate data, and interact with MongoDB collections.

### JWT

JSON Web Tokens will be used to authenticate users when they access protected APIs.

### bcrypt

bcrypt will be used to securely hash passwords before storing them in the database.

Passwords will never be stored as plain text.

### Google OAuth

Google authentication will allow users to sign in using their Google account.

---

## 6. High-Level Architecture

```text
                    TASKORA
                       |
                       v
                React Frontend
                       |
                  HTTP / REST API
                       |
                       v
               Node.js + Express
                       |
          +------------+------------+
```
7. Security Design

Taskora will use two major security concepts.

Authentication

Authentication answers:

Who is the user?

The system will verify the user's identity using:

Username/email and password
Password hashing
JWT
Google authentication
Authorization

Authorization answers:

What is the user allowed to access or modify?

For example, a normal user should only be able to access their own private tasks.

Backend authorization will be used instead of relying only on frontend restrictions.

8. Development Method

Taskora will be developed incrementally.

The development workflow will be:

Plan
  ↓
Build
  ↓
Understand
  ↓
Test
  ↓
Capture useful screenshot
  ↓
Update documentation
  ↓
Git commit
  ↓
Git push
  ↓
Next feature

Screenshots will be stored in the project's screenshots folder whenever they provide useful evidence of development progress, testing, or completed features.

9. Current Development Status
Completed
Project root folder created
React frontend created using Vite
Express backend created
Basic Express server created
Backend server tested successfully
Screenshots folder created
Initial documentation created
In Progress
Git initialization
GitHub repository setup
Upcoming
Backend development setup
Frontend/backend connection
Login UI
Registration
MongoDB connection
Authentication
Authorization
Google login
Task management
Calendar
Progress snaps
Dashboard
Rewards
Testing
Deployment
10. Screenshot Organization

Development screenshots will be stored under:

screenshots/

Example naming convention:

01_backend_server_running.png
02_react_frontend_running.png
03_project_structure.png
04_login_page_initial.png
05_login_page_final.png
06_mongodb_connection.png

Task-related evidence inside the application may use names such as:

task_progress_01.png
task_progress_02.png
task_completion.png
11. Version Control

Git will be used to track the development history of Taskora.

Meaningful milestones will be committed separately instead of uploading the entire project only at the end.

Example:

docs: add initial project documentation
feat: create react frontend
feat: create express backend
feat: implement authentication
feat: add task management
feat: add calendar
feat: add progress snaps
feat: add rewards system
12. Future Deployment

The final application will be deployed so that it can be accessed through the internet.

The deployment architecture will contain:

User Browser
     |
     v
Deployed React Frontend
     |
     v
Deployed Express Backend
     |
     v
MongoDB Database

Environment variables will be used for sensitive configuration such as database credentials, JWT secrets, and OAuth credentials.

13. Future Enhancements

Potential future improvements include:

Team collaboration
Workspaces
Task assignment
Notifications
Email reminders
Recurring tasks
Productivity analytics
Advanced role-based access control
Mobile application
AI-based task suggestions
AI productivity insights
Calendar integrations

14. Project Vision

Taskora is intended to grow beyond a basic student project.

The long-term goal is to create a secure and practical productivity platform that can be used for personal tasks and eventually adapted for academic teams, software projects, and workplace task organization.