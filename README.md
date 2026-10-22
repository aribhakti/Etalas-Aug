# Etalas: IT Staff Outsourcing Landing Page

Landing page for Etalas IT staff outsourcing and team augmentation, with features that use the Gemini API.

## Tech stack

- React and TypeScript
- Vite
- Google Gen AI SDK (`@google/genai`)
- Lucide React for icons

## Run locally

```bash
npm install
npm run dev
```

If a feature calls the Gemini API, set your own API key in a local `.env.local` file. Never commit keys to the repository.

Other scripts: `npm run build`, `npm run preview`.

## Structure

```
.
├── components/   UI sections
├── contexts/     shared state
├── services/     API clients
├── types.ts      TypeScript types
├── App.tsx       page layout
└── index.tsx     entry point
```
