# Next.js Hello World

A simple Next.js application ready for deployment to Vercel.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

### Quick Deploy

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Deploy with Vercel CLI

Alternatively, you can deploy using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

That's it! Your app will be live on Vercel.

## Project Structure

```
.
├── pages/
│   ├── _app.js      # App component wrapper.
│   └── index.js     # Home page (Hello World).
├── public/          # Static assets.
├── next.config.js   # Next.js configuration.
└── package.json     # Dependencies and scripts.
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
