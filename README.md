This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Adding Sanity For Content Management:

Follow This Easy Steps to add Sanity to youe nextjs project with pnpm:

1. Enter this command in your project directory terminal.

   pnpm create sanity@latest

2. Set the configuration according to your project need.

![alt text](image.png)

3. Make Schema For your Project in the sanity directory along the src directory.

4. Check the schema structure by visiting localhost:3000/studio url, and add this url in cros configuration from sanity.

5. Add data from schema structure and then fetch it from vision option with GROQ query.

6. Now make a new file where you want to fetch this data using that GROQ query.

7. Import this data in your code project where you want to use it.

8. In the last, configure data re-validation through GROQ query and set the time of fetching data.
