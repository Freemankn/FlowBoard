# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


---------------------------------------------------------------------------------------------------------------------------------
DAVID'S NOTES:


TIMELINE:

5/11
OVERALL: Getting everything set up.

Learning basics
cd into flowboard folder
npm run dev: Makes a server
copy link to see the website on google chrome

File	        Purpose
main.jsx	    Starting point of the React app
App.jsx	Main    component shown on the page
index.css	    Global styling
package.json	Stores dependencies and scripts

Learning the layout of everything I need to do for HomePage
HomePage.tsx
 - Sidebar.tsx
 - Topbar.tsx

Apparently the code that's in App.tsx is just default starter code that Vite put.

Learning syntax:
h1 - heading
h2 - smaller heading than h1
p - paragraph
main - container for main content of the page

Langauge(s) - TypeScript + JSX
TypeScript = JavaScript with extra type features
JSX = HTML-looking code written inside React
function HomePage() = TypeScript/JavaScript
<main>, <h1>, <p> = JSX / HTML-like markup


CONTRIBUTIONS: Started on the home page, set the background and font. 
CHALLENGES: Learning the syntax, file layout, file purposes, commands to run

REALIZATIONS: Anytime I learn something new I dive into making the product, in this case, it's for me, the HomePage as of right now for this desktop websbite. I get enough context on what's going on, and then dive into doing the objective, and if I get confused along the way, I ask ChatGPT questions, and those questions lead to more questions until I get my own satifaction and understanding of what I need to know. Then I keep moving. I charge head on at the problem, and deal with those obstacles along the way, and if they break into more obstacles, I deal with them too. I eventually get to the main problem with all this understanding and tackle it efficiency. 

Right now, I'm learning the objective, the syntax, file layout, commands, and it all blends in. I write notes to remember how I understand what's going on with each problem so they don't become issues later, and these notes get ingrained into my memory after everytime I use these skills. It's the ultimate hands on learning process. Get the problem, break it down, still bad? Break it down more. Then build it all back up to the top to tackle the main problem. Technically all of these mini problems are just steps to solving the main issue. Once all of the problems are solved, the objective is finished.


5/12

<div> - square shape

CHALLENGES: Visually trying to understand what components go in what file, example: Top bar and left bar

5/14
Installed react-router-dom