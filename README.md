# Flowers Shop

A polished single-page flower storefront built with React and Vite. The project delivers a modern e-commerce browsing experience with product discovery, search, product detail pages, and a persistent shopping cart.

## Live Demo

https://flowers-boutique.netlify.app/

## Overview

Flowers Shop is a frontend-focused boutique floral store interface designed to showcase curated flower arrangements in a clean, responsive shopping experience. Product data is loaded from a remote mock API, while cart state is stored locally in the browser for a smoother user journey.

## Features

- Responsive storefront with dedicated pages for home, shop, about, contact, login, and signup
- Product catalog powered by remote API data
- Product detail pages with quantity selection and related product suggestions
- Search flow for finding bouquets by name
- Persistent shopping cart using `localStorage`
- Client-side routing with graceful not-found handling
- Loading and error states for a more reliable browsing experience

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Axios
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The app will typically be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint across the project

## Project Structure

```text
src/
  components/   Reusable UI building blocks
  contexts/     Shared application state
  hooks/        Custom React hooks
  pages/        Route-level page components
  imgs/         Local image assets
```

## Data and State Management

- Product data is fetched from a remote mock API endpoint
- Cart state is managed through React context
- Cart contents are persisted in browser `localStorage`

## Notes

This project is currently focused on the frontend experience. Authentication, checkout processing, and backend order management are not implemented as production services.
