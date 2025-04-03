# Rividco Company - Internal System

## Overview

This is an **internal system** developed for **Rividco** company to manage various operations such as **customers**, **vendors**, **employees**, and **projects**. The system is implemented with an **Admin** role for managing different entities like **customer**, **vendor**, **vendor items**, **employee**, **project**, and **project items**.

---

## Tech Stack

- **Backend:** C# .NET Core (ASP.NET Core Web API)
- **Frontend:** React (TypeScript) with Tailwind CSS
- **Database:**  MySQL
- **Authentication:** JWT (JSON Web Token) for secure login
- **Role-based Authorization:** Admin-only access
- **API Documentation:** Swashbuckle (Swagger UI)

---

## Features

### **1️⃣ Admin Role**
- **Manage Customers:** Create, update, and delete customer records
- **Manage Vendors:** Create, update, and delete vendor records
- **Manage Vendor Items:** Assign and manage items for vendors
- **Manage Employees:** Create, update, and delete employee records
- **Manage Projects:** Create and manage projects
- **Manage Project Items:** Assign items to projects

---

## Database Models & Relationships

The system uses **Entity Framework Core** for database management, with **Lazy Loading** and **ModelBuilder** to define relationships. The database follows a **monolithic architecture**, all entities are linked under a single database.

### Key Entities:
- **Customer**
- **Vendor**
- **VendorItem**
- **Employee**
- **Project**
- **ProjectItem**

---

## Authentication & Authorization

- **Admin-Only Role:** All actions are restricted to the **Admin** role.
- **JWT Bearer Authentication:** Secure authentication with JSON Web Token (JWT).
- **Role-Based Authorization:** Only admins can access the backend APIs and manage entities.

---


