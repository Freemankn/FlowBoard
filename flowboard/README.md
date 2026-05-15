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
git branch: shows all branches
git pull: Updates the program from the website to your local computer
git checkout -b (your made up branch name) origin/(branch your pulling from the website)
git fetch: I think this just gets all of the branches and stuff that may not have existed before I opened the VSCode window
           - Do it before switching to a new branch that Freeman made
git branch -a: Shows all branches in the repository

HomePageRefactor

CHALLENGES: Having to understand what the file layout actually meant, specifically for AppLayout.tsx and App.tsx. AppLayout.tsx is supposed to be for the entire visual side, where I thought that was what App.tsx was for. I put all of the companenets into that file.App.tsx is kind of like the director of when you put in the link to a specific place, App.tsx routes your computer
5/14
Installed react-router-dom


---------------------------------------------------------------------------------------------------------------------------------
FREEMAN'S NOTES:

## Progress Notes

### 5/14 - Freeman's Contributions

#### Contributions

- Helped fix the issue where the outer box was not displaying correctly.
- Added the `TaskTable` component to begin displaying tasks in a structured table format.
- Worked on understanding how the main React layout flow connects across the project, especially through `App.tsx` and `AppLayout.tsx`.
- Began connecting the task-related files/components so the task page can eventually display task data clearly.

#### Files/Areas Worked On

##### `App.tsx`

`App.tsx` acts as one of the main entry points for the React application. It helps control what main components are rendered and connects the overall app structure together.

In this stage, we focused on understanding how `App.tsx` connects to the layout and page components so that new task-related components could be added without breaking the overall structure.

##### `AppLayout.tsx`

`AppLayout.tsx` controls the shared page layout of the application. This includes the outer structure that wraps around the main page content.

One challenge was understanding why the outer box was not displaying correctly. Fixing this required tracing how the layout was structured and how child components were being rendered inside the layout.

##### `TaskTable`

The `TaskTable` component was added to display task information in a table-like format. This is an important step toward organizing task data visually instead of showing it as unstructured content.

The table is intended to support task-related information such as:

- Task name
- Task status
- Task priority
- Due date
- Assigned user or owner

This component will likely be expanded later as the task data model becomes more complete.

##### `task.ts`

The `task.ts` file is related to defining the structure of task data. This file helps keep task objects consistent across the project.

Instead of writing task data differently in multiple components, `task.ts` can define a shared `Task` type or interface. This makes the project easier to maintain because every task follows the same structure.



```ts

export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskEnergy = "low" | "medium" | "high";
export type TaskPriority = "low" | "medium" | "high";  

export type TaskCategory =
  | "school"
  | "work"
  | "personal"
  | "health"
  | "finance"
  | "chores"
  | "other";

export type TaskTag =
  | "urgent"
  | "important"
  | "quick"
  | "deep-work"
  | "follow-up"
  | "waiting"
  | "blocked";

export type Task = {
  id: string;
  title: string;
  category: TaskCategory;
  priority: TaskPriority;
  energy: TaskEnergy;
  estTime: number;
  status: TaskStatus;
  tag: TaskTag[];
};

```
#### Challenges:
- Needed to understand the role of App.tsx and how it controls the main application rendering.
- Needed to understand how AppLayout.tsx wraps and displays the page content.
- Had to debug why the outer box was not appearing correctly.
- Had to connect the task table work with the existing app structure without disrupting the layout.
- Needed to begin thinking about how task data should be structured through files like task.ts.
