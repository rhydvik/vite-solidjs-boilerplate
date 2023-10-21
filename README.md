## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)


## Directory Structure:

Inside the src directory, structure your folders in a modular fashion:

```folder structure
src/
├── assets/              # Static assets like images, fonts, etc.
├── components/          # Reusable components
├── hooks/               # Custom hooks
├── lib/                 # Utilities and libraries
├── routes/              # Components specific to routes or pages
├── store/               # State management related logic
├── App.tsx              # Main App component
└── index.tsx            # Entry point where you render the App component
```

2. State Management:
```folder structure
store/
├── userStore.ts         # Example store for user-related data and actions
├── todoStore.ts         # Example store for todo-related data and actions
└── index.ts             # Consolidate all stores for easy importing
```
3.
