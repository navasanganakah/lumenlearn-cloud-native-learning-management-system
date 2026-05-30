# LumenLearn LMS

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/navasanganakah/lumenlearn-cloud-native-learning-management-system)

A modern, full-stack Learning Management System built with React and Cloudflare Workers. This project demonstrates a production-ready architecture featuring persistent storage with Durable Objects, a type-safe API layer, and a polished React frontend.

## Features

- **React + Vite Frontend**: Responsive UI with Tailwind CSS, shadcn/ui components, and smooth animations
- **Cloudflare Workers Backend**: Hono-powered API with TypeScript and built-in error handling
- **Durable Objects Persistence**: Entity-based storage system with indexed entities for Users and ChatBoards
- **Real-time Chat Demo**: Fully functional chat system showcasing messaging between users
- **Theme Support**: Dark/light mode with system preference detection
- **Production Ready**: Includes error boundaries, API client utilities, and Cloudflare deployment configuration

## Tech Stack

**Frontend**
- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router, TanStack Query, Immer
- Framer Motion, Lucide icons, Sonner toasts

**Backend**
- Cloudflare Workers + Hono
- Durable Objects for stateful data
- TypeScript with strict configuration
- Shared types between client and worker

**Infrastructure**
- Wrangler for deployment
- Vite plugin for Cloudflare integration

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+

### Installation

Clone the repository and install dependencies:

```bash
bun install
```

### Development

Start the local development server:

```bash
bun run dev
```

The app will be available at `http://localhost:3000`. The Cloudflare Workers API runs alongside the Vite dev server.

### Building

Create a production build:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

### Linting

Run the linter:

```bash
bun run lint
```

## API Endpoints

The backend exposes the following REST endpoints under `/api`:

- `GET /api/health` – Health check
- `GET /api/users` – List users (with pagination)
- `POST /api/users` – Create a new user
- `DELETE /api/users/:id` – Delete a user
- `POST /api/users/deleteMany` – Bulk delete users
- `GET /api/chats` – List chats
- `POST /api/chats` – Create a new chat
- `GET /api/chats/:chatId/messages` – Get messages for a chat
- `POST /api/chats/:chatId/messages` – Send a message
- `DELETE /api/chats/:id` – Delete a chat
- `POST /api/chats/deleteMany` – Bulk delete chats

## Deployment

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/navasanganakah/lumenlearn-cloud-native-learning-management-system)

Deploy to Cloudflare Workers using Wrangler:

```bash
bun run deploy
```

This command builds the application and deploys it using your Wrangler configuration (`wrangler.jsonc`).

### Environment Variables

No additional secrets are required for the default setup. Configure custom variables in `wrangler.jsonc` or via the Cloudflare dashboard.

## Project Structure

```
├── src/                  # React frontend
│   ├── components/       # UI components and layout
│   ├── pages/            # Route pages
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities and API client
├── worker/               # Cloudflare Workers backend
│   ├── entities.ts       # Durable Object entity definitions
│   ├── user-routes.ts    # API route handlers
│   └── core-utils.ts     # Storage and entity base classes
├── shared/               # Shared TypeScript types and mocks
├── wrangler.jsonc        # Cloudflare configuration
└── vite.config.ts        # Vite + Cloudflare plugin config
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.