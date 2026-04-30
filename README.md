# React SaaS Dashboard Analytics

![Dashboard](./screenshots/Dashboard.png)

Modern SaaS dashboard built with **React** that integrates multiple backend implementations and a forecasting microservice.

---

## 🎯 Project Purpose

This project simulates a real-world SaaS environment where multiple backend services interact with a unified frontend.

It demonstrates:

- Integration of heterogeneous backends (Java, Node.js)  
- Use of a Python microservice for data-driven forecasting  
- Scalable frontend architecture for analytics dashboards  

---

## 🧠 Multi-Backend Concept

This frontend is designed to work with **multiple backend implementations of the same business domain**:

- Node.js (TypeScript)
- Java (Spring Boot)

Both backends:

- Provide the same business capabilities  
- Expose similar APIs  
- Can be used interchangeably  

This allows the frontend to remain **fully decoupled from backend technology choices**.

---

## 🚀 Features

- User and organizational hierarchy management  
- Business performance dashboards (KPIs)  
- Pipeline stage analysis  
- Trend visualization over time  
- Forecasting using machine learning (FastAPI)  
- Integration with multiple backend systems  
- Reusable and scalable UI components  

---

## 🧠 Key Highlights

- Clean architecture (features, services, components)  
- Scalable and reusable component design  
- Multi-backend integration (Node.js + Java)  
- Integration with a forecasting microservice (Python)  
- Focus on real-world SaaS patterns  

---

## 🏗️ Architecture

```bash
                   ┌──────────────────────────────┐
                   │        Frontend (React)      │
                   │   SaaS Dashboard (UI Layer)  │
                   └──────────────┬───────────────┘
                                  │
        ┌─────────────────────────┴─────────────────────────┐
        │                                                   │    
    Node.js API                                     Spring Boot API 
    (TypeScript)                                         (Java)
        ┴──────────────────────────────────────────────────┴
                                 ↓
                      Database (PostgreSQL / MySQL)
                                  ↘
                                    FastAPI (Forecast Microservice)
```

This frontend acts as the **presentation layer**, consuming:

- Backend APIs (Node.js / Spring Boot)  
- Forecast Microservice (FastAPI)  

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- TypeScript

---

## 📦 Installation

```bash
git clone <repo>
cd react-saas-dashboard-analytics
npm install

npm run dev
```

---

## 📸 Screenshots

### Forecast Analytics

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

---

## 🧠 Key Takeaway

This project demonstrates how to build a modern frontend application that:

- Integrates multiple backend technologies
- Remains decoupled from implementation details
- Supports analytics and machine learning workflows
- Follows scalable and maintainable design principles

---

# 👨‍💻 Author

Project focused on demonstrating:

- Frontend architecture for SaaS applications
- Integration with distributed backend systems
- Real-world analytics and visualization patterns
- Clean, scalable UI design