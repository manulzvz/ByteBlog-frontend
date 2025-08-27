# ByteBlog Frontend

Welcome to the ByteBlog Frontend repository! This project is a modern, responsive web application built with React, TypeScript, and TailwindCSS. It serves as the frontend for the ByteBlog platform, showcasing blog posts, projects, and more.

## Features

- **React & TypeScript**: A robust and scalable frontend built with modern technologies.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **React Router**: Client-side routing with server-side data loading.
- **Dynamic Content**: Fetches data from a Strapi backend.
- **Responsive Design**: Optimized for all screen sizes.

## Project Structure

```
.
├── app/
│   ├── components/       # Reusable UI components
│   ├── routes/           # Application routes
│   ├── types.ts          # TypeScript type definitions
│   └── app.css           # Global styles
├── public/               # Static assets
├── .env                  # Environment variables
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manulzvz/ByteBlog-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ByteBlog-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```properties
VITE_API_URL="http://localhost:1337/api"
VITE_STRAPI_URL="http://localhost:1337"
```

### Building for Production

Create a production build:

```bash
npm run build
```

### Deployment

The production build can be deployed to any static hosting service or containerized for platforms like Docker.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with ❤️ by [manulzvz](https://github.com/manulzvz).
