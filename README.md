# OmniMart: Unified Cloud Architecture for Intelligent POS and Predictive E-Commerce

<div align="center">

<!-- ![OmniMart Logo](https://via.placeholder.com/150x60.png?text=OmniMart+Logo) -->

_A sophisticated, cloud-native ecosystem bridging physical retail and digital commerce with AI-driven intelligence._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org/)

</div>

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Problem Statement & Solution](#problem-statement--solution)
- [Core Features](#core-features)
- [The AI Engine: A Deep Dive into the RAG Pipeline](#the-ai-engine-a-deep-dive-into-the-rag-pipeline)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Development Workflow](#development-workflow)
- [API Documentation](#api-documentation)
- [User Roles & Permissions](#user-roles--permissions)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🚀 Project Overview

OmniMart is a capstone project for the Bachelor of Science in Software Engineering at The Islamia University of Bahawalpur. It is a fully integrated retail platform that unifies in-store Point-of-Sale (POS) operations with a customer-facing e-commerce storefront. The system's core philosophy is to eliminate data silos and create a **Single Source of Truth (SSOT)** for all retail operations, ensuring real-time consistency in inventory, orders, and customer data.

By leveraging a modern cloud stack and advanced AI, OmniMart transforms traditional retail management into a proactive, data-driven, and intelligent experience.

### Problem Statement & Solution

**The Problem:** Traditional retail suffers from "Data Silos," where physical store inventory is disconnected from the online storefront. This leads to stock discrepancies, overselling, manual reconciliation errors, and an inefficient procurement process.

**The Solution:** OmniMart engineers a unified ecosystem where every transaction, whether a barcode scan at a physical counter or a "Buy Now" click online, updates a centralized cloud database in real-time. It further enhances this with a Retrieval-Augmented Generation (RAG) AI that provides grounded, context-aware assistance for both customers and managers, democratizing advanced AI for Small and Medium Enterprises (SMEs).

---

## ✨ Core Features

#### 🔄 Real-Time Synchronization & Data Integrity

Utilizes a centralized PostgreSQL database with **Optimistic Locking** to manage concurrent transactions. If an item is sold via POS, its e-commerce availability is adjusted within milliseconds, preventing overselling and ensuring absolute data integrity across all channels.

#### 🤖 Intelligent Information Retrieval (RAG Pipeline)

A core innovation where product metadata is transformed into high-dimensional vectors stored in Pinecone. The Google Gemini 1.5 LLM performs semantic searches against this data, ensuring the AI chatbot provides accurate, inventory-grounded responses instead of generic, unverified information.

#### 🔐 Secure Identity and Role Management (RBAC)

Leverages **Clerk** for robust, token-based authentication. The system enforces strict permission sets for four distinct user classes: **Administrators**, **Inventory Managers**, **Cashiers**, and **Customers**, ensuring users only see data and actions relevant to their role.

#### 💳 Financial Transaction Lifecycle

Integrates the **Stripe API** to manage the complete, secure payment lifecycle. This includes handling Payment Intents, 3D Secure authentication for web transactions, and using asynchronous Webhooks to verify payment success before updating the internal order state.

#### 📈 Predictive Inventory Analytics

Moves beyond basic management by analyzing historical sales data to automate procurement logic. The system implements statistical formulas for **Safety Stock** and **Reorder Points (ROP)**, providing proactive restock alerts to inventory managers.

#### 🛒 Unified Commerce Experience

Provides a seamless experience for both the business and the end-user. Managers get a 360-degree view of their operations, while customers enjoy a consistent brand experience whether they shop online or in-person.

---

## 🧠 The AI Engine: A Deep Dive into the RAG Pipeline

The "magic" behind our intelligent features is the Retrieval-Augmented Generation (RAG) pipeline. Here's how it works:

1.  **Ingestion:** Product information (descriptions, categories, specs) from PostgreSQL is chunked and converted into numerical representations called **embeddings** using a Google AI model.
2.  **Indexing:** These embeddings are stored in a **Pinecone Vector Database**, which is optimized for high-speed similarity searches.
3.  **Query:** A user (e.g., a customer) asks a natural language question like, _"What's a good waterproof jacket for cold weather?"_
4.  **Retrieval:** The system vectorizes the user's query and uses it to search Pinecone for the most semantically similar product embeddings. The top-K results are retrieved.
5.  **Augmentation & Generation:** The original product metadata for the top-K results is retrieved from PostgreSQL and passed as context to the **Google Gemini 1.5 LLM** along with the user's query.
6.  **Response:** Gemini generates a natural, helpful, and factually-grounded response, complete with product links and "Add to Cart" buttons.

**Result:** An AI assistant that never "hallucinates" and always provides answers based on your actual, live inventory.

---

## 🛠 Technology Stack

| Category      | Technology                                                                          | Justification                                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)             | Enables Server-Side Rendering (SSR) for SEO and Incremental Static Regeneration (ISR) for performance. Unifies frontend and backend. |
| **Language**  | ![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)      | Provides type safety, critical for complex financial calculations and AI pipeline logic, reducing runtime errors.                    |
| **Database**  | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue?logo=postgresql)     | Chosen for strict **ACID compliance**, essential for preventing inventory corruption during concurrent sales.                        |
| **Vector DB** | ![Pinecone](https://img.shields.io/badge/Pinecone-Vector%20DB-green)                | Purpose-built for high-speed similarity searches, the core of our RAG-based AI chatbot's performance.                                |
| **AI Model**  | ![Google AI](https://img.shields.io/badge/Gemini%201.5-AI-blue?logo=google)         | Offers a superior context window, allowing the system to pass extensive product metadata for grounded, factual responses.            |
| **Payments**  | ![Stripe](https://img.shields.io/badge/Stripe-Payments-purple?logo=stripe)          | The industry standard for secure payments. Offloads PCI-DSS compliance and handles complex transaction states.                       |
| **Identity**  | ![Clerk](https://img.shields.io/badge/Clerk-Auth-blueviolet)                        | Provides a pre-built, secure identity layer with Role-Based Access Control (RBAC) out-of-the-box.                                    |
| **Styling**   | ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css) | A utility-first CSS framework for rapid UI development and creating responsive, custom designs.                                      |

---

### Layer Breakdown

1.  **Presentation Layer (Client):** Built with Next.js and React. Renders the public storefront and the private, authenticated dashboards.
2.  **Logic Layer (Middleware & API):** The brain of the system. Hosted on Vercel, it handles authentication, business logic, transaction orchestration, and the RAG workflow.
3.  **Data Layer (Persistence):** Employs a **Polyglot Persistence** strategy.
    - **PostgreSQL:** For structured, transactional data (orders, inventory, users).
    - **Pinecone:** For unstructured vector data (product embeddings).

---

## 📦 Prerequisites

Before you begin, ensure you have the following:

- **Node.js**: Version 18.17 or later.
- **pnpm, npm, or yarn**: A package manager.
- **PostgreSQL Database**: A running instance (e.g., locally, on Supabase, or AWS RDS).
- **External Service Accounts**: You will need active accounts and API keys for:
  - [Clerk](https://clerk.com/)
  - [Stripe](https://stripe.com/)
  - [Pinecone](https://www.pinecone.io/)
  - [Google AI Studio](https://aistudio.google.com/app/apikey) (for Gemini API)

---

## 🚀 Installation & Setup

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/OmniMart.git
    cd OmniMart
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Environment Variables**
    Create a `.env.local` file in the root of the project and add the following variables. You can find these in your respective service dashboards.

    ```env
    # Database
    DATABASE_URL="postgresql://username:password@host:port/database"

    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
    CLERK_SECRET_KEY="sk_test_..."
    CLERK_WEBHOOK_SECRET="whsec_..."

    # Stripe Payments
    STRIPE_SECRET_KEY="sk_test_..."
    STRIPE_WEBHOOK_SECRET="whsec_..."
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

    # Pinecone Vector Database
    PINECONE_API_KEY="..."
    PINECONE_ENVIRONMENT="..."
    PINECONE_INDEX_NAME="product-vectors" # You must create this index in Pinecone

    # Google Gemini AI
    GEMINI_API_KEY="..."
    ```

4.  **Database Setup**
    This project uses Prisma as the ORM. Run the following commands to set up your database schema.

    ```bash
    # Generate Prisma client
    npx prisma generate

    # Push the schema to your database (creates tables)
    npx prisma db push
    ```

5.  **Pinecone Index Setup**
    - Log in to your Pinecone dashboard.
    - Create a new index. Name it whatever you set in `PINECONE_INDEX_NAME`.
    - Set the dimensions to match the embedding model you use (e.g., 768 for `text-embedding-004`).
    - Set the metric to `cosine`.

6.  **Run the Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🛠 Development Workflow

- `npm run dev`: Starts the development server with hot-reloading.
- `npm run build`: Creates an optimized production build of the application.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code style and potential errors.
- `npm run type-check`: Runs the TypeScript compiler to check for type errors without emitting files.

---

## 📚 API Documentation

For technical stakeholders and future extensibility, the system includes comprehensive API documentation. Once the development server is running, you can access the interactive Swagger/OpenAPI documentation at:
`http://localhost:3000/api-docs`

---

## 👥 User Roles & Permissions

| Role                  | Description                                  | Permissions                                                                        | Primary Interface     |
| --------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------- |
| **Administrator**     | Business owner or high-level technical user. | Full system access, user management, global financial settings, revenue analytics. | Admin Dashboard       |
| **Inventory Manager** | Supply chain professional focused on stock.  | Manage products/suppliers, view AI restock alerts, perform stock audits.           | Management Dashboard  |
| **Cashier**           | Store personnel in a fast-paced environment. | Process POS sales, scan barcodes, issue receipts.                                  | POS Interface         |
| **Customer**          | Public user of the e-commerce site.          | Browse catalog, use AI chatbot, manage personal orders.                            | E-commerce Storefront |

---

## 📁 Project Structure

```
OmniMart/
├── app/                  # App Router (Next.js 13+)
│   ├── (auth)/           # Routes for authentication (login, register)
│   ├── (dashboard)/      # Routes for POS, Admin, Manager dashboards
│   ├── api/              # API routes (e.g., /api/stripe/webhook)
│   └── globals.css       # Global styles
├── components/           # Reusable React components
│   ├── ui/               # Base UI components (buttons, inputs)
│   ├── forms/            # Form components
│   └── layout/           # Layout components (header, sidebar)
├── lib/                  # Utility functions and configurations
│   ├── db.ts             # Prisma database client instance
│   ├── stripe.ts         # Stripe client configuration
│   ├── clerk.ts          # Clerk client configuration
│   └── utils.ts          # General helper functions
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema definition
├── public/               # Static assets (images, icons)
└── types/                # Global TypeScript type definitions
```

---

## 🤝 Contributing

This is a university project developed as part of a Bachelor of Science in Software Engineering. As such, we are not accepting external contributions at this time. However, feel free to fork this repository for your own learning or projects.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Department**: Software Engineering, Faculty of Computing
- **Institution**: The Islamia University of Bahawalpur

---
