# Placement OS

Placement OS is a multi-tenant university placement management platform. The
repository is a pnpm/Turborepo monorepo with a Next.js web application,
NestJS API, and Prisma/PostgreSQL data layer.

## Prerequisites

- Node.js 20+
- pnpm 9+ (`corepack enable`)
- Docker and Docker Compose

## Development

```bash
cp .env.example .env
pnpm install
docker compose up -d postgres
pnpm db:generate
pnpm dev
```

The web app runs at [http://localhost:3000](http://localhost:3000). The API
runs at [http://localhost:3001](http://localhost:3001), with a liveness check
at `/health` and a database connectivity check at `/health/ready`.

Useful commands:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm db:studio
docker compose down
```

## Repository layout

```text
apps/web       Next.js App Router frontend
apps/api       NestJS REST API
packages/types Shared API types
prisma         Prisma schema and migrations
infrastructure Local development services
```

Environment variables are documented in `.env.example`. Secrets belong in a
local `.env` file or the deployment secret manager and must never be committed.