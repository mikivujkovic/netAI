# netAI

netAI is the constrained landing-page generation system used in the study:

> **Constraints are all you need: Exploring AI-powered landing page design**
> Vujković M, Popović T, Jovović I, Drakić-Grgur M. *PLOS ONE* (under review). Manuscript PONE-D-25-55869.

The data, analysis scripts, prompts, and generated pages for the study are in a separate repository:
**https://github.com/mikivujkovic/Constraints**

## What this repository contains

A Next.js web app that generates a landing page from a short business description. Instead of asking an LLM for a whole page, netAI splits generation into stages and constrains each one with a prompt and a JSON schema. The content is then rendered with fixed, pre-designed components.

| Path | Purpose |
|---|---|
| `app/prompts.ts` | Stage prompts: color schema, hero, problem, benefits, call to action |
| `app/schemas.ts` | Zod schemas that constrain each stage's output |
| `app/actions.ts` | Server actions running the multi-stage pipeline via the OpenAI API (`@ai-sdk/openai`, `generateObject`) |
| `app/content.ts` | Static content and fallbacks |
| `components/landing/` | Fixed landing-page components (Hero, Problem, Benefits, CTA, Footer). Files ending in `_old` are earlier variants |
| `app/home/`, `app/[domain]/` | Product home page and rendering of generated sites per subdomain/custom domain |
| `app/app/` | Authenticated dashboard (sites, posts, settings) |
| `lib/`, `middleware.ts`, `prisma/` | Auth (NextAuth + GitHub), domain handling, database schema (Prisma/PostgreSQL) |

## Origin

The app is built on the [Vercel Platforms Starter Kit](https://github.com/vercel/platforms) (MIT, © Steven Tey / Vercel), which provides the multi-tenant routing, authentication, dashboard, and editor. The generation pipeline (`app/prompts.ts`, `app/schemas.ts`, `app/actions.ts`, `components/landing/`) is the research contribution of this work.

## Running locally

Requires Node.js 18+, a PostgreSQL database, and an OpenAI API key.

```bash
npm install
# create .env.local with the variables below
npm run dev
```

Environment variables (never commit these; `.env*` is git-ignored):

| Variable | Purpose |
|---|---|
| `OPENAI_API_KEY` | LLM generation |
| `POSTGRES_PRISMA_URL`, `POSTGRES_URL_NON_POOLING` | PostgreSQL connection (Prisma) |
| `NEXTAUTH_URL`, `NEXTAUTH_SECRET` | NextAuth (local dev URL: `http://app.localhost:3000`) |
| `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET` | GitHub OAuth login |
| `NEXT_PUBLIC_ROOT_DOMAIN` | Root domain for multi-tenant routing |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob image uploads |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | Vercel KV rate limiting (AI editor endpoint) |
| `AUTH_BEARER_TOKEN`, `PROJECT_ID_VERCEL`, `TEAM_ID_VERCEL` | Vercel Domains API (custom domains) |

## Reproducing the paper

The stimuli in the paper were generated on 17 February 2025 with the pipeline in this repository (OpenAI API).

**Models.** All five pipeline stages call `chatgpt-4o-latest` through the OpenAI API (`app/actions.ts`). This is a rolling alias, not a pinned snapshot, so the underlying model may have changed since generation. Before commit `550dab9` (17 Feb 2025) the pipeline used `gpt-3.5-turbo`; the study used the `chatgpt-4o-latest` version. The `gpt-3.5-turbo` call in `app/api/generate/route.ts` is inherited template code for the editor's text-autocomplete feature and is not part of the landing-page pipeline.

Because LLM outputs are non-deterministic and model versions change, re-running it will not give identical pages; the generated pages used in the study, together with the data and statistics scripts, are archived in the [Constraints](https://github.com/mikivujkovic/Constraints) repository.

## Citation

```bibtex
@article{vujkovic_constraints,
  title   = {Constraints are all you need: Exploring AI-powered landing page design},
  author  = {Vujkovi\'c, Miodrag and Popovi\'c, Tomo and Jovovi\'c, Ivan and Draki\'c-Grgur, Maja},
  journal = {PLOS ONE},
  note    = {Manuscript PONE-D-25-55869, under review},
  year    = {2025}
}
```

## License

MIT, see [LICENSE](LICENSE).
