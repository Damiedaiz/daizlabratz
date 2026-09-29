# DaizLabRatZ.Online — 21-Day Sprint

A Vercel-ready Next.js landing page for the DaizLabRatZ Expert-to-Expert 21-Day Sprint.

## Stack

- Next.js App Router
- React
- TypeScript
- CSS
- Vercel deployment ready

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1 — GitHub
1. Create a GitHub repository.
2. Upload this project.
3. Import the repository into Vercel.
4. Framework preset: **Next.js**
5. Build command: `npm run build`
6. No environment variables are required.

### Option 2 — Vercel CLI

```bash
npm install
npm install -g vercel
vercel
```

## Payment flow

The page currently displays:

- Amount: ₦150,000
- Bank: Moniepoint
- Account: 8106367710
- Entity: DaizSign Multimedia Ltd
- Receipt email: daizsign@gmail.com

The **Confirm Transmission** button opens the user's mail client with a prefilled subject for the payment receipt.

## Important

This project intentionally keeps the landing page lightweight. There is no database, authentication, API route, payment gateway, or admin panel in this version.

If a real payment gateway is added later, the payment confirmation flow should be moved from manual receipt submission to server-side verified payment events.
