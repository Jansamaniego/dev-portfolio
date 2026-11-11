/**
 * Static text content for each project, keyed by slug.
 * Keep all verbose strings (descriptions, overviews, features, contributions) here.
 * The lean project metadata lives in projects.ts.
 */

export type ProjectContent = {
  /** One-line summary shown on the project card. */
  description: string;
  /** Extended overview shown at the top of the details page. Falls back to description. */
  overview?: string;
  /** Key capabilities or highlights of the project. */
  features: string[];
  /** What you personally built or owned on this project — one bullet per item. */
  contribution: string[];
};

export const projectContent: Record<string, ProjectContent> = {
  "lg-rsu-dm": {
    description:
      "Enterprise Remote Software Update (RSU/OTA) platform for software distribution and device management across LG's connected-device ecosystem.",
    overview:
      "An enterprise-grade platform that manages the full software update lifecycle for LG's connected devices, covering package distribution, device management, and secure cloud-based delivery across multiple interconnected services.",
    features: [
      "End-to-end software update lifecycle across the DM Manager, Package Manager, Push Manager and DM Core components",
      "REST APIs, package management workflows and asynchronous processing for device management operations",
      "Software package storage and distribution with metadata management and secure downloads on AWS (S3, DynamoDB, CloudFront, Lambda)",
      "RSU Portal with user management, approval workflows, authentication, tenancy and administrative functionality",
      "Device-server communication over SyncML and MQTT",
    ],
    contribution: [
      "Contributed to the development and maintenance of the platform from February to August 2026",
      "Built and maintained backend services in Java 17, Spring Boot, Maven and MariaDB",
      "Implemented REST APIs and package management workflows",
      "Developed RSU Portal features using React and Spring Boot",
      "Supported production maintenance and releases across interconnected services, including version synchronization, component indexing, troubleshooting, compatibility management and technical documentation",
    ],
  },

  lexphere: {
    description:
      "Multi-tenant law management platform covering case management, timesheets, contracts, invoices, expenses and incentive workflows.",
    overview:
      "A production-grade, multi-tenant SaaS platform built for law firms. Scales to hundreds of attorneys, thousands of clients and cases, and tens of thousands of timesheets — handling the full spectrum of legal operations from case intake to attorney compensation.",
    features: [
      "Case, timesheet, contract, invoice and expense management in one platform",
      "Multi-tenant architecture with role-based access control and tenant-level resource isolation",
      "Secure authentication with JWT, NextAuth, access and refresh tokens and cookie-based sessions",
      "Excel and PDF exports, time and billing reconciliation, automated financial reporting and attorney compensation calculations",
      "English and Korean localization with responsive, accessible interfaces",
      "Running in production at the scale of hundreds of attorneys, thousands of clients and cases, and tens of thousands of timesheets",
    ],
    contribution: [
      "Primary contributor from June 2024 to August 2026",
      "Started as a Frontend Developer and moved into a full-stack role, becoming the sole Backend Developer and the last remaining founding team member",
      "Owned system architecture, database design, API contracts and long-term maintenance",
      "Built services with NestJS, RabbitMQ, Prisma, PostgreSQL and Redis, including RBAC, transaction-safe operations, background jobs and schema evolution",
      "Built the frontend with Next.js, TanStack Query, Zustand, PrimeReact, Tailwind CSS, TipTap and Next-Intl",
      "Improved reliability and developer workflows with GitHub Actions/Jenkins CI/CD, SonarQube, Jest, React Testing Library, Docker and Dokploy",
      "Handled production troubleshooting and performance work",
    ],
  },

  evandis: {
    description:
      "Customizable content management system for building landing pages and managing visual branding.",
    overview:
      "A CMS focused on empowering non-technical users to build and manage branded landing pages. Prioritizes flexible layout configuration, efficient media management, and smooth content delivery.",
    features: [
      "Landing page creation with a focus on visual branding",
      "Upload, manage and organize images and media assets used across dynamic landing pages",
      "Page configuration tools so non-technical users can customize layouts, visuals and content without developer intervention",
      "Optimized image delivery and smooth content updates for marketing and promotional use cases",
    ],
    contribution: [
      "Solo full stack developer — started the project and built both the Next.js frontend and the NestJS backend",
      "Worked on the project from April to June 2024",
      "Built the entire CMS UI, including uploading, managing and organizing images, media assets, and themes",
      "Built the template UI, with assets and themes configurable through the CMS",
      "Implemented the page configuration tools",
      "Kept asset handling efficient across the frontend and backend",
      "Improved the usability and performance of the platform",
    ],
  },

  comake: {
    description:
      "AI-assisted legal document analysis system that parses contracts and evaluates clause quality against predefined legal requirements.",
    overview:
      "A system that automates the review of legal contracts by parsing documents, classifying clauses against legal benchmarks, and producing a structured quality report with an overall document score.",
    features: [
      "Contract parsing from PDF and DOCX files, with OCR-based text extraction",
      "Clause classification into positive, cautionary and negative findings",
      "Overall document quality score computed from the clause findings",
      "Backend APIs and database models for student records, class relationships and role-based access",
    ],
    contribution: [
      "Worked on the project from February to April 2024 as the sole Frontend Developer",
      "Built the platform with Next.js, shadcn/ui and React Query",
      "Implemented Next.js Server API endpoints for PDF/DOCX parsing and OCR text extraction",
      "Implemented the clause classification and document scoring logic",
    ],
  },

  philist: {
    description:
      "Online academy platform for digital learning, allowing teachers to conduct classes, manage students, and administer examinations.",
    overview:
      "A centralized web application that facilitates digital learning for online academies. Brings together virtual classrooms, student-teacher interaction, and examination management in one platform.",
    features: [
      "Homepage and landing experience establishing the platform's primary user interface and core features",
      "Authentication system and user access workflows for both teachers and students",
      "Virtual classrooms supporting interactive student-teacher engagement",
      "Online examination management integrated into the classroom experience",
    ],
    contribution: [
      "Designed and developed the homepage and landing experience from the ground up, establishing the application's primary UI and introducing its core features",
      "Implemented the frontend authentication system and user access workflows on the homepage UI"
    ],
  },
};
