# FindaDoc (prototype)

## Introduction

This application aims to allow its users to find medical care services and providers online in their nearest location. Our AI model delivers optimal care outcomes, lowers costs, and enhances access to high-quality healthcare for people across all socioeconomic levels.

## Purpose

This prototype has the initial view of a web application allowing a user to enter the various conditions, location, and insurance information, and then be taken to a screen that shows the best available doctors in their area with upcoming appointments.

## Technology

### User Interface

This prototype is built mainly with [Next.js](https://nextjs.org/) (TypeScript) on the front end.
Several other UI libraries are used for different purposes:

- [NextUI](https://nextui.org/) (a React UI library)
- [Tailwind](https://tailwindcss.com/) (a utility-first CSS framework)
- [Framer Motion](https://www.framer.com/motion/) (animation library)
- [Google-map-react](https://github.com/google-map-react/google-map-react?tab=readme-ov-file#readme) (Google Maps library for React)
- [Zipcode-perogi](https://www.npmjs.com/package/zipcodes-perogi) (a zipcode lookup node module)

### Backend

The backend functionally has not been implemented for this prototype but we can develop API and database for future versions.

Here are a few suggestions:

### API

- [Node.js](https://nodejs.org/) (JavaScript runtime environment)
- [Express.js](https://expressjs.com) (minimal and flexible Node.js framework)

### Auth

Authentication can be implemented manually using libraries such as [jwt](https://jwt.io/) (JSON Web Token). However, frameworks like [auth.js](https://authjs.dev/) or [passport.js](https://www.passportjs.org/) make that process much easier and more secure. The provides the possibility to add OAuth from known platforms (Google, GitHub, etc.).

### Database

- [MongoDB](https://www.mongodb.com/) (non-relational database)
- [GraphQL](https://graphql.org/) (query language for API)

### DevOps

- [Git](https://git-scm.com/) (Version control)

### Links

Repository: [https://github.com/payamdowlatyari/find-a-doc-app](https://github.com/payamdowlatyari/find-a-doc-app)
Demo: [https://find-a-doc-app.vercel.app/](https://find-a-doc-app.vercel.app/)

### Run the demo locally

First, clone or download the repo:

```bash
git clone https://github.com/payamdowlatyari/find-a-doc-app
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
