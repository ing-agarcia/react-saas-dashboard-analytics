# React SaaS Dashboard Analytics

![Dashboard](./screenshots/Dashboard.png)

A modern SaaS dashboard built with React that integrates multiple backend services and a forecasting microservice.

## 🎯 Project Purpose

This project simulates a real-world SaaS environment where multiple backend services interact with a unified frontend.

It demonstrates:
- Integration of heterogeneous backends (Java, Node.js)
- Use of a Python microservice for data-driven forecasting
- Scalable frontend architecture for analytics dashboards

## 🚀 Features

- User Management (CRUD)
- Hierarchical User Structure (Manager relationships)
- Data-driven Forecast Analytics (FastAPI microservice)
- Reusable Components (DataTable, Modals, Charts)
- Modern UI with Tailwind CSS
- Multi-backend integration (Java, Node.js, FastAPI)

## 🧠 Key Highlights

- Clean architecture with separated layers (features, services, components)
- Scalable and reusable component design
- Multi-backend architecture (Java + Node.js + Python)
- Integration with a forecasting microservice
- Focus on real-world SaaS patterns

## 🏗️ Architecture

- Frontend: React + Tailwind CSS
- Backend Services:
  - Java (Spring Boot) → core business logic
  - Node.js → API services / integrations
- ML Service:
  - FastAPI (Python) → Forecasting via Linear Regression
- Communication:
  - REST APIs between services

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- TypeScript

## 📸 Screenshots

### Forecast Analytics
> Data-driven forecasting powered by a FastAPI microservice

![Forecast](./screenshots/Forecast.png)

### User Management
![Users](./screenshots/Users.png)

### User Modal
![Modal](./screenshots/Modal.png)