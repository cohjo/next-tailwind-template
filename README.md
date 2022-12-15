# NextJS 13 Template with Tailwind
This is a template to bootstrap NextJS w/ experimental features along with Tailwind.
This is not a finished product, just a tool to get moving faster.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

For a production build, run:

```bash
npm run build && npm run start
# or
yarn run build && yarn run start
# or
pnpm run build && pnpm run start
```

If you'd like to use [Turbopack](https://turbo.build/pack), get started by following here:
1. uncomment the import of `output.css` in `/app/layout.tsx, and comment out the import of `globals.css`
2. run with either of the following:

```bash
npm run dev-turbo
# or
yarn dev-turbo
# or
pnpm run dev-turbo
```

Note: `pnpm` is used here, but feel free to use whichever package manager you like.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
