<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally and deploy to Vercel.

View your app in AI Studio: https://ai.studio/apps/drive/1E5Pn3GZPj2Tbh4Qn0TC7Xs_12SV1Kk3n

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Set environment variable in Vercel dashboard:
   - Go to your project settings on Vercel
   - Navigate to "Environment Variables"
   - Add `GEMINI_API_KEY` with your API key value

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Set environment variable:
   - Add `GEMINI_API_KEY` with your API key value
6. Click "Deploy"

The project includes a `vercel.json` configuration file that tells Vercel how to build and deploy the application.

## Build Locally

To test the production build locally:

```bash
npm run build
npm run preview
```
