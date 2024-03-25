import { Code } from "@nextui-org/react";

// documented details of the project, technologies used, and plan for future iterarions
export default function AboutPage() {
  return (
    <div className="flex flex-col justify-evenly m-auto p-4 max-w-4xl">
      <h1 className="text-3xl my-10 font-semibold">FindaDoc</h1>
      <div className="p-2 justify-start">
        <h2 className="text-xl uppercase font-semibold">Introduction</h2>
        <p className="text-small p-1">
          This application aims to allow its users to find medical care services
          and providers online in their nearest location. Our AI model delivers
          optimal care outcomes, lowers costs, and enhances access to
          high-quality healthcare for people across all socioeconomic levels.
        </p>
      </div>
      <div className="p-2 justify-start">
        <h2 className="text-xl uppercase font-semibold">Purpose</h2>
        <p className="text-small p-1">
          This prototype has the initial view of a web application allowing a
          user to enter the various conditions, location, and insurance
          information, and then be taken to a screen that shows the best
          available doctors in their area with upcoming appointments.
        </p>
      </div>
      <h2 className="text-xl uppercase font-semibold p-1 mt-2">Technology</h2>
      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold mt-2">User Interface</h3>
        <p className="text-small p-2">
          This prototype is built mainly with
          <a
            className="text-primary hover:text-primary-500 duration-300 px-1 font-semibold"
            href="https://nextjs.org/"
            target="_blank"
          >
            {" "}
            Next.js{" "}
          </a>
          (TypeScript) on the front end. Several other UI libraries are used for
          different purposes:
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://nextui.org/"
            target="_blank"
          >
            NextUI
          </a>{" "}
          (a React UI library)
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind
          </a>
          (a utility-first CSS framework)
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://www.framer.com/motion/"
            target="_blank"
          >
            Framer Motion
          </a>{" "}
          (animation library)
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://github.com/google-map-react/google-map-react?tab=readme-ov-file#readme"
            target="_blank"
          >
            google-map-react
          </a>{" "}
          (Google Maps library for React)
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://www.npmjs.com/package/@demark-pro/react-booking-calendar"
            target="_blank"
          >
            react-booking-calendar
          </a>{" "}
          (Booking library for React)
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://www.npmjs.com/package/zipcodes-perogi"
            target="_blank"
          >
            zipcode-perogi
          </a>{" "}
          (a zipcode lookup node module)
        </p>
      </div>
      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">Backend</h3>
        <p className="text-small p-2">
          The backend functionality has not been implemented for this prototype
          but we can develop API and database for future versions. Here are some
          suggestions:
        </p>
      </div>
      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">API</h3>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://nodejs.org/"
            target="_blank"
          >
            Node.js
          </a>{" "}
          (JavaScript runtime environment)
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://expressjs.com"
            target="_blank"
          >
            Express.js
          </a>{" "}
          (minimal and flexible Node.js framework)
        </p>
      </div>
      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">Auth</h3>
        <p className="text-small p-2">
          Authentication can be implemented manually using libraries such as
          <a
            className="text-primary hover:text-primary-500 duration-300 px-1 font-semibold"
            href="https://jwt.io/"
            target="_blank"
          >
            jwt
          </a>
          (JSON Web Token). However, frameworks like
          <a
            className="text-primary hover:text-primary-500 duration-300 px-1 font-semibold"
            href="https://authjs.dev/"
            target="_blank"
          >
            auth.js
          </a>
          or
          <a
            className="text-primary hover:text-primary-500 duration-300 px-1 font-semibold"
            href="https://www.passportjs.org/"
            target="_blank"
          >
            passport.js
          </a>
          make that process much easier and more secure. The provides the
          possibility to add OAuth from known platforms (Google, GitHub, etc.).
        </p>
      </div>
      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">Data Models</h3>

        <p className="text-small p-2">
          Static data models have been used for the purpose of testing the demo
          Here is the basic schema:
        </p>

        <p className="text-small p-2 overflow-auto">
          <Code size="sm" className="max-w-4xl">
            {`Doctor = {
            id: 'number',
            name: 'string',
            specialty: 'string',
            address: 'string',
            zipcode: 'string',
            status: 'string',
            ratings :'number[]',
            visit: 'string[]',
            phone: 'string',
            avatar: 'string',
            email: 'string',
            insurances: 'string[]',
        }`}
          </Code>
        </p>
        <p className="text-small p-2 overflow-auto">
          <Code size="sm" className="max-w-4xl">
            {`
        Specialty = {
            id: 'number',
            title: 'string',
            conditions: 'string[]',
        }`}
          </Code>
        </p>
        <p className="text-small p-2 overflow-auto">
          <Code size="sm" className="max-w-4xl">
            {`
        
        Conditions = {
            id: 'number',
            name: 'string',
            doctor: 'string',
        }`}
          </Code>
        </p>
        <p className="text-small p-2 overflow-auto">
          <Code size="sm" className="max-w-4xl">
            {`
        
        Cities = {
            id: 'number',
            name: 'string',
        }`}
          </Code>
        </p>
        <p className="text-small p-2 overflow-auto">
          <Code size="sm" className="max-w-4xl">
            {`
        
        Insurance = {
            id: 'number',
            name: 'string',
        }`}
          </Code>
        </p>
      </div>
      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">Database</h3>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://www.mongodb.com/"
            target="_blank"
          >
            MongoDB
          </a>{" "}
          (non-relational database)
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://graphql.org/"
            target="_blank"
          >
            GraphQL{" "}
          </a>
          (query language for API)
        </p>
      </div>

      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">DevOps</h3>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://git-scm.com/"
            target="_blank"
          >
            Git
          </a>{" "}
          (Version control)
        </p>
      </div>
      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">Links</h3>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://github.com/payamdowlatyari/find-a-doc-app"
            target="_blank"
          >
            Repository{" "}
          </a>
        </p>
        <p className="text-small pl-2 font-semibold">
          <a
            className="text-primary hover:text-primary-500 duration-300"
            href="https://find-a-doc-app.vercel.app/"
            target="_blank"
          >
            Demo{" "}
          </a>
        </p>
      </div>

      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">Future iterations and todos</h3>
        <p className="text-small p-2">
          Calendar needs to be fully implemented and tested
        </p>
        <p className="text-small p-2">
          Doctors locations should be implemented on the map and tested
        </p>
        <p className="text-small p-2">
          Booking functionality needs to be added
        </p>
      </div>

      <div className="p-3 justify-start">
        <h3 className="text-lg font-semibold">Run the demo locally</h3>
        <p className="text-small p-2">First, clone or download the repo:</p>
        <Code size="sm">
          git clone https://github.com/payamdowlatyari/find-a-doc-app
        </Code>
        <p className="text-small p-2">Install packages:</p>
        <Code size="sm">npm i</Code> or
        <Code size="sm">yarn</Code> or
        <Code size="sm">pnpm</Code>
        <p className="text-small p-2">Run the development server:</p>
        <Code size="sm">npm run dev</Code> or
        <Code size="sm">yarn dev</Code> or
        <Code size="sm">pnpm dev</Code>
      </div>
    </div>
  );
}
