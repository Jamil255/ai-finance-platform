# Welth

Welth is a modern web application built with Next.js and integrates advanced tools like Prisma, TailwindCSS, Clerk for authentication, and several Radix UI components. This project also leverages tools like generative AI, email components, and data visualization libraries to create a seamless user experience.

<img width="1470" alt="Screenshot 2024-12-10 at 9 45 45 AM" src="https://github.com/user-attachments/assets/1bc50b85-b421-4122-8ba4-ae68b2b61432">
## Features

- ✨ **Authentication**: Powered by Clerk for user management and authentication.
- 🤖 **Generative AI**: Integrates Google Generative AI to provide intelligent features.
- 🗄️ **Database Management**: Prisma for database handling and schema management.
- 🎨 **UI Components**: Radix UI and TailwindCSS for a highly customizable and responsive UI.
- ✉️ **Email Support**: React Email components for crafting beautiful emails.
- 📊 **Data Visualization**: Recharts for interactive data representations.
- 🔧 **Server-side Functions**: Includes server-side scripts and APIs.
- ⚡ **Asynchronous Workflows**: Powered by Inngest for managing event-driven workflows.
- 🛠️ **Linting & Formatting**: Ensures code quality with ESLint.

## Prerequisites

Ensure you have the following installed:

- 🖥️ Node.js (>= 18.x)
- 📦 npm (>= 8.x)
- 🐘 PostgreSQL (if using Prisma locally)

## Installation

Clone the repository and navigate into the project directory:

```bash
git clone <repository-url>
cd welth
```

Install dependencies:

```bash
npm install ---legacy-peer-deps
```

Set up environment variables by creating a `.env` file in the root directory. Use the following format:

```env
DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api_key
CLERK_API_KEY=your_clerk_api_secret
INNGEST_API_KEY=your_inngest_api_key
```

## Scripts

- 🏗️ `npm run dev`: Starts the development server with Turbopack.
- ✉️ `npm run email`: Starts the email development server.
- 🏢 `npm run build`: Builds the application for production.
- 🚀 `npm run start`: Starts the production server.
- 🔍 `npm run lint`: Runs ESLint for code linting.
- 🛠️ `npm run postinstall`: Generates Prisma Client after installation.

## Usage

1. 🚀 Start the development server:

   ```bash
   npm run dev
   ```

2. 🌐 Access the app at [http://localhost:3000](http://localhost:3000).

3. 🏗️ Build the app for production:

   ```bash
   npm run build
   ```

4. 🚀 Start the production server:

   ```bash
   npm run start
   ```

## Tech Stack

### Frontend

- ⚡ [Next.js](https://nextjs.org/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 🧩 [Radix UI](https://www.radix-ui.com/)
- ⚛️ [React](https://reactjs.org/)

### Backend

- 🗄️ [Prisma](https://www.prisma.io/)
- 🔑 [Clerk](https://clerk.dev/)
- 🐘 [Supabase](https://supabase.com/) (if integrated)

### Tools

- 🤖 [Google Generative AI](https://developers.google.com/ai)
- 📊 [Recharts](https://recharts.org/)
- ✉️ [React Email](https://react.email/)
- ⚡ [Inngest](https://www.inngest.com/)

## Folder Structure

```
welth/
├── app/                # Application routes and components
├── prisma/             # Prisma schema and migrations
├── public/             # Public assets
├── styles/             # Global styles
├── lib/                # Utility libraries
├── pages/              # Legacy pages directory (if used)
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! Follow these steps:

1. 🍴 Fork the repository.
2. 🌱 Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. 💾 Commit your changes:
   ```bash
   git commit -m "Description of feature"
   ```
4. 📤 Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. 🔁 Open a pull request.

## Acknowledgments

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 📖 [Prisma Documentation](https://www.prisma.io/docs)
- 📖 [Clerk Documentation](https://clerk.dev/docs)
- 📖 [Radix UI Documentation](https://www.radix-ui.com/docs)
- 📖 [Inngest Documentation](https://www.inngest.com/docs)

