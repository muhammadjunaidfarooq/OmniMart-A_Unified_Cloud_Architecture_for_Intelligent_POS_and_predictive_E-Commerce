

# OmniMart: Unified Cloud Architecture for Intelligent POS and Predictive E-Commerce

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Installation](#installation)
- [Usage](#usage)
- [User Roles](#user-roles)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## 🚀 Project Overview
OmniMart is a sophisticated, cloud-native "Unified Commerce" ecosystem designed to bridge the structural and data gaps between physical retail (Point-of-Sale) and digital commerce (E-Commerce). The system synchronizes in-store POS activities with a customer-facing e-commerce storefront in real-time, ensuring absolute consistency in inventory, pricing, and sales data across all channels.

By integrating Retrieval-Augmented Generation (RAG) with Google Gemini 1.5, OmniMart provides intelligent, context-aware assistance for both customers and administrators. The system features an AI-driven chatbot that assists online shoppers with natural language product discovery and order tracking, while providing store managers with sophisticated retail analytics, such as predictive stock alerts and sales trend forecasting.

## ✨ Key Features
- **Real-Time Synchronization**: Single Source of Truth (SSOT) with centralized cloud database
- **Intelligent Information Retrieval**: RAG pipeline for accurate, context-aware product discovery
- **Secure Identity Management**: Role-Based Access Control (RBAC) with Clerk
- **Financial Transaction Lifecycle**: Complete Stripe API integration for secure payments
- **Predictive Inventory Analytics**: Automated stock replenishment alerts using statistical formulas
- **Unified Commerce Experience**: Seamless integration between physical and digital retail channels
- **AI-Powered Assistance**: Customer-facing chatbot and administrative analytics tools

## 🛠 Technology Stack

| Category | Technology | Key Justification |
|----------|------------|-------------------|
| **Framework** | Next.js | Unified frontend/backend with high performance |
| **Language** | TypeScript | Type safety for complex financial calculations |
| **Database** | PostgreSQL | Transactional integrity (ACID compliance) |
| **Vector Search** | Pinecone | Semantic retrieval for AI accuracy |
| **AI Model** | Google Gemini 1.5 | High-reasoning LLM with large context window |
| **Payments** | Stripe | Global payment standard and security |
| **Identity** | Clerk | Secure RBAC and session management |
| **Styling** | Tailwind CSS | Rapid UI development and responsive design |

## 🏗 System Architecture

The system architecture is organized into three distinct logical layers:

1. **Presentation Layer (The Client)**
   - E-Commerce Storefront: Public-facing, SEO-optimized web application
   - Management Dashboard: Private, authenticated interface with high-speed interactivity

2. **Logic Layer (The Middleware & API)**
   - Authentication & Authorization via Clerk
   - Transaction Orchestration between database and Stripe
   - RAG Orchestrator for AI workflows

3. **Data Layer (Persistence)**
   - Relational Database (PostgreSQL) for structured data
   - Vector Database (Pinecone) for unstructured product data

The system follows an **Event-Driven Synchronization Pattern** to achieve real-time updates across all channels.

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Stable internet connection

### Setup Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/OmniMart.git
   cd OmniMart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Configure the following variables:
   ```
   DATABASE_URL=your_postgresql_connection_string
   CLERK_API_KEY=your_clerk_api_key
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   PINECONE_API_KEY=your_pinecone_api_key
   PINECONE_ENVIRONMENT=your_pinecone_environment
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. Run database migrations:
   ```bash
   npm run db:migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### For Customers
1. Browse products on the e-commerce storefront
2. Use the AI chatbot for natural language product discovery
3. Add items to cart and complete checkout with Stripe
4. Track orders through your account dashboard

### For Cashiers
1. Log in to the POS interface with your credentials
2. Scan product barcodes or enter SKUs manually
3. Process payments via Stripe Terminal
4. Generate digital receipts for customers

### For Inventory Managers
1. Access the management dashboard
2. Monitor stock levels and review AI restock alerts
3. Manage product metadata and supplier relationships
4. Analyze sales trends and inventory performance

### For Administrators
1. Configure global system settings
2. Manage user accounts and permissions
3. Review financial analytics and revenue reports
4. Oversee system health and security

## 👥 User Roles

| Role | Permissions | Interface |
|------|-------------|-----------|
| **Administrator** | Full system access, user management, financial settings | Admin Dashboard |
| **Inventory Manager** | Product management, stock oversight, analytics | Management Dashboard |
| **Cashier** | Transaction processing, receipt generation | POS Interface |
| **Customer** | Product browsing, AI assistance, order tracking | E-commerce Storefront |

## 📁 Project Structure

```
OmniMart/
├── components/          # Reusable UI components
├── pages/              # Next.js pages and API routes
├── lib/                # Utility functions and configurations
├── styles/             # Global styles and Tailwind configurations
├── types/              # TypeScript type definitions
├── prisma/             # Database schema and migrations
├── public/             # Static assets
└── docs/               # Additional documentation
```

## 🤝 Contributing

This is a university project developed as part of a Bachelor of Science in Software Engineering. Contributions are not being accepted at this time.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Supervisor**: Ms. Nadia Khan
- **Department**: Software Engineering, Faculty of Computing
- **Institution**: The Islamia University of Bahawalpur
- **Student**: Muhammad Junaid Farooq (M3, F22BSEEN1M01169)

---

For more detailed information, please refer to the [Software Requirements Specification](SRS.md) document.
