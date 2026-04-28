# React SaaS Dashboard Analytics

![Dashboard](./screenshots/Dashboard.png)

A modern SaaS dashboard built with React that integrates multiple backend services and a forecasting microservice.

## 🎯 Project Purpose

This project simulates a real-world SaaS environment where multiple backend services interact with a unified frontend.

It demonstrates:
- Integration of heterogeneous backends (Java, Node.js)
- Use of a Python microservice for data-driven forecasting
- Scalable frontend architecture for analytics dashboards

## 🧠 Multi-Backend Concept

This frontend is designed to work with multiple backend implementations of the same domain:

* Node.js (TypeScript)
* Java (Spring Boot)

Both backends provide the same business capabilities, allowing the frontend to remain **decoupled and flexible** regardless of the underlying technology.

## 🚀 Features

* Manage users and organizational hierarchy
* Visualize business performance through dashboards
* Analyze pipeline stages and trends
* Predict future metrics using machine learning
* Seamless integration with multiple backend systems
* Reusable and scalable UI components

## 🧠 Key Highlights

- Clean architecture with separated layers (features, services, components)
- Scalable and reusable component design
- Multi-backend architecture (Java + Node.js + Python)
- Integration with a forecasting microservice
- Focus on real-world SaaS patterns

## 🏗️ Architecture

![Architecture](./screenshots/Architecture%20frontend.png) 

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- TypeScript

## 📸 Screenshots

### Forecast Analytics
> Data-driven forecasting powered by a FastAPI microservice

📊 Sales Dashboard
Overview of KPIs and business metrics

![Dashboard](./screenshots/Dashboard.png)

📈 Forecast Analytics
Data-driven predictions powered by FastAPI

![Forecast](./screenshots/Forecast.png)

👥 User Management
Manage users, roles, and hierarchy

![Users](./screenshots/Users.png)

🧾 User Modal
Create and update users with validation

![Modal](./screenshots/Modal.png)

## 🧠 Key Takeaway

This project demonstrates how to build a modern frontend application that:

Integrates multiple backend technologies
Remains decoupled from implementation details
Supports analytics and machine learning workflows
Follows scalable and maintainable design principles