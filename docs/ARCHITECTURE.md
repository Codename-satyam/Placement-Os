# Architecture

Placement OS starts as a modular monolith in a pnpm/Turborepo workspace.
`apps/web` owns the Next.js App Router UI and `apps/api` owns REST endpoints
and business modules. Shared contracts belong in `packages/types`.

PostgreSQL is shared by tenants, with tenant ownership represented explicitly
in every university-owned model. Prisma is the data access layer; authorization
and tenant context will be enforced in the API as modules are added.
