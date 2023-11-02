## Project Development Guide 🚀
Welcome to the SolidJS project! This README serves as a comprehensive guide to the tools and configurations we've set up. Dive in to learn more.

# 📖 Table of Contents
- [Solid with Vite](https://github.com/solidjs/vite-plugin-solid)
- [Solid Router](https://docs.solidjs.com/guides/how-to-guides/routing-in-solid/solid-router)
- [SUID - A port of Material-UI (MUI) built with SolidJS.](https://suid.io/getting-started/installation) 
- [ESLint and Prettier Configuration]()
- [Husky Hooks]()
- [Storybook-Figma-plugin](https://storybook.js.org/addons/storybook-addon-designs/)
- [Storybook](https://storybook.js.org/)
- [Component Showcase in Storybook]()
- [Code Comments]()
- [Code Restrictions]()
- [Component Implementation & Storybook]()
- [Lazy Loading]()
- [Commit Guidelines]()
- [Utility Functions]()
- [Deployment]()
- [Directory Structure]()
- [Example UI design system]()
- [Available Scripts]()
- [Usage]()
- [Installation]()
- [Running the app]()
- [Test]()
- [Project Development Guide]()
- [React ➡️ Solid - Easy convertors to see how react code will look in SolidJs](https://suid.io/tools/react-to-solid)


### Learn more on the [Solid Website](https://solidjs.com)


## 🛠 Solid with Vite
SolidJS utilizes Vite for rapid development and building, offering enhanced hot-reloading and a streamlined development experience.

## 🌐 Solid Router
For seamless route handling within our application, we employ Solid Router. Here's a quick peek at our typical configuration:

```javascript
import { Router, Route } from 'solid-app-router';

function App() {
return (
<Router>
<Route path="/" component={Home} />
<Route path="/about" component={About} />
</Router>
);
}
```

## 🧹 ESLint and Prettier Configuration
We harness the power of ESLint and Prettier to enforce consistent code quality and style. Make sure to integrate the required extensions/plugins in your editor for an optimum experience.
```coffeescript
# enforced all eslint rule for the project
# different kind of eslint configs are added in .eslintrc.json file
eslintPlugin({
  cache: false,
  exclude: ['node_modules', '/virtual:/'],
})
```
## 🚫 Husky Hooks
Husky ensures our code adheres to the gold standard by invoking tests and linters prior to any commit or push.
Please don't use -n flag while committing, it will skip the husky hooks.
- we have added husky hooks for pre-commit and pre-push
````coffeescript
# on commit it will do linting and prettier check along with some other checks
➜  solid-atg git:(main) ✗ gc -m 'added story book'
✅ Preparing lint-staged...
✅ Running tasks for staged files...
✅ Applying modifications from tasks...
✅ Cleaning up temporary files...
✅ Preparing lint-staged...
✅ Running tasks for staged files...
✅ Applying modifications from tasks...
✅ Cleaning up temporary files...
````
## 🎨 Storybook
We utilize Storybook for the independent crafting and visual assessment of UI components, enabling enhanced component development and verification.

## 🎭 Component Showcase in Storybook
Prior to introducing a new component, don't forget to peruse our dedicated Storybook page showcasing all pre-existing components. This encourages reusability and keeps designers in the loop regarding our UI repertoire.

```coffeescript
# example component for a button
import { JSX } from 'solid-js';

export type ButtonProps = {
  class: string;
  children: JSX.Element;
};
function Button(props: ButtonProps) {
  return (
    <button>
      <div style={{ border: '1px solid red' }}>{props.children}</div>
    </button>
  )
}

export default Button

📚 # story book implementation for the same button
import { JSX } from 'solid-js';

import { Button } from '../components/Button';

export default {
  title: 'Components/Button', # Specify the component for auto-generation of controls Define the story grouping and name
  component: Button # Specify the component for auto-generation of controls
}

# Define a template for creating stories
const Template: (
  args: JSX.ButtonHTMLAttributes<HTMLButtonElement> & { children: JSX.Element },
) => JSX.Element = (args) => <Button {...args} />;

# Create the actual stories
export const Primary = Template.bind({});
Primary.args = {
  class: 'primary',
  children: <>Primary Button</>,
};

# this is this secondary button example
export const Secondary = Template.bind({});
Secondary.args = {
  class: 'secondary',
  children: <>Secondary Button</>,
};
```

## 💬 Code Comments
### What kind of code comments we are using?

Major files like index.ts come annotated with comprehensive comments elucidating the flow, 
crucial sections, and pointers to external documents:
```coffeescript
You can add comments like this in your code - ideally this excercise should be done in start so that it 
gives end to end idea of the flow and entire code. Look at below example

# NOTE: To understand more about this flow, please refer to the following link:
# [https://solidjs-table.vercel.app/]
# Ensure you're familiar with the details provided in the link to make any modifications or enhancements.
# here is the design doc for this feature https://docs.feature.repo/refature/office
# format can be a link of design, few lines about the flow, important points to be noted
#

# We can write comments like below as well to explain the code

/**
 * why this kind of module will be used?
 * 1. To explain new team members easily about code, example: how data grid works
 * 2. To make sure that we are following the best practices
 * 3. To make sure that we are not repeating the same code
 * 4 To give them resources to make them understand the code, that eliminates the need of multiple KT
 * gives developer perspective to understand the that is present per feature explain about te core logic of the flow
 */

# Don't write and leave TO-DO comments, it will throw linting error. TO-DO comments  should be added
# when a developer is working on a flow and it writes a improvement and wants to do it later. It MUST be done before PR
# creation or it will throw linting error

# if a TO DO block is added it should be removed before pushing
# TO DO this is a cleanup to do that I need to push before
onCleanup(() => {
// Cleanup tasks...
})

# you will see below error if you don't remove the TO-DO comments
➜  solid-atg git:(main) ✗ gc -m 'added story book'
src/components/Header/Header.tsx:27: 
# You have TO DO or fix-me comments in your changes


```


## ⛔ Code Restrictions
### What kind of code restrictions we are using?
We are enforcing some of the best eslint rules, you can find more rules in .eslintrc.json file some of the main rules are below

```json
    "import/no-unused-modules": "error",
    "require-await": "error",
    "no-return-await": "error",
    "complexity": ["error", { "max": 10 }],
    "max-depth": ["error", 3],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "require-atomic-updates": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",         // Disallows using non-boolean values as conditions
    "@typescript-eslint/no-floating-promises": "error",               // Requires Promise-like values to be handled appropriately
    "@typescript-eslint/no-unnecessary-type-assertion": "error",      // Disallows unnecessary type assertions
    "@typescript-eslint/no-unnecessary-condition": "error",           // Disallows unnecessary conditions
    "@typescript-eslint/no-unsafe-call": "error",                     // Disallows calling an any type value
    "@typescript-eslint/no-unsafe-return": "error",                   // Disallows returning any from a function
    "@typescript-eslint/no-unsafe-member-access": "error",            // Disallows member access on any typed variables
    "@typescript-eslint/no-unsafe-assignment": "error",               // Disallows assigning any to variables and properties
    "@typescript-eslint/no-unsafe-argument": "error"                  // Disallows calling an any type value
```

## 🌌 Lazy Loading
Lazy loading is a cornerstone of SolidJS, predominantly used for infrequently accessed applications. 
The backend facilitates control of this feature.

‼️ Be very careful about which pages you are adding lazy loading, it should be added to less visited pages only
```coffeescript
# example of lazy loading
import { lazy, JSX } from 'solid-js';

// below will load office when we go to office route
const Offices = lazy(
  () => import('./Offices') as Promise<{ default: () => JSX.Element }>,
);

```

## 📝 Commit Guidelines
Crafting descriptive commit messages that align with our conventions is crucial. This aids in efficiently tracking modifications and drafting release notes.

```bash
# Template of a commit message
TICKET-NUMBER: commit message

# example of a commit message
TMS4-1234: added story book

‼️ need to add checks for commit message in the codef

```

## 🛍 Utility Functions
For enhanced code clarity and debugging, don't hesitate to exploit our utility functions
```coffeescript
# example of a utility function to console the log which can be turned off it env is production
export function printLog(message: string | Record<string, unknown>) {
  if (process.env.NODE_ENV !== 'local') return; # this can be controlled by env variable
  console.log(JSON.stringify(message, null, 2))
}
```

## Available Scripts

```bash
  "scripts": {
    "start": "vite",
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx .",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
```

## Usage
Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
$ npm run dev # Runs the app in the development mode
$ npm run build # Builds the app for production to the `dist` folder
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment
We will use a docker based approach possibly.


##  📂 Directory Structure

Inside the src directory, structure your folders in a modular fashion:

```folder structure
src/
├── assets/              # Static assets like images, fonts, etc.
├── components/          # Reusable components
├── utils/               # Reusable components that are not dependent on other components
├── hooks/               # Custom hooks
├── lib/                 # Utilities and libraries
├── routes/              # Components specific to routes or pages
├── store/               # State management related logic
├── App.tsx              # Main App component
└── index.tsx            # Entry point where you render the App component
```

### add other approaches for views and redux like store

```folder structure
store/
├── userStore.ts         # Example store for user-related data and actions
├── todoStore.ts         # Example store for todo-related data and actions
└── index.ts             # Consolidate all stores for easy importing
```


## Example UI design system:
https://rev.webkul.design/kit/ <br />
Ideally this should be coming from the design team, but for now we can use this as a reference

## Installation

```bash
$ npm install # or pnpm install or yarn install
```

##### [Emojis](https://gist.github.com/roachhd/1f029bd4b50b8a524f3c) are taken from here, please use them in commit messages if needed

# <img src="https://playwright.dev/img/playwright-logo.svg" alt="Alt text" width="35" height="35"/> Setting up Playwright
To integrate Playwright into your project, follow these steps:

### Install Playwright via npm:
```bash
npm i -D playwright
```
After installation, you can create a test file with a .spec.ts extension.

### Writing Your First Test
Create a file named example.spec.js in your test directory and add the following code:


```javascript
const { test, expect } = require('@playwright/test');

test('example test', async ({ page }) => {
// Go to the starting URL.
await page.goto('https://example.com');

// Assert that the title is correct.
await expect(page).toHaveTitle(/Example Domain/);
});
```

This simple test checks that when navigating to "https://example.com", the title of the page matches "Example Domain".

### Running Tests
```bash
# Execute your tests by running the following command:
npx playwright test
```

You can also run tests for a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

For more advanced use cases, refer to the [Playwright]() documentation.


## 📢 Final Words
🌟 Let's build something amazing! <br />
😎 If you write one line a day write it in best possible way so that you don't have to come back to it again and again.<br />
🙏 Feel free to add more guidelines and best practices in this document.<br />
🧹 Leave the compound cleaner than you found it. <br />
👀 Write the code as if the next person who is going to maintain it is a psychopath who knows where you live. - this is a joke, don't take it seriously. <br />
📃 Keep this README as your trusty sidekick, ensuring you're always in sync with the tools and protocols in place. <br />

