export const notes: Note[] = [
  {
    slug: "nextjs-frontend-setup",
    title: "Setting up a Next.js Frontend",
    content: `
Next.js is a React framework used to build fast web applications.

Basic setup steps:

1. Create a new app:
   npx create-next-app@latest

2. Navigate into the project:
   cd your-app-name

3. Start development server:
   npm run dev

4. Project structure:
   - app/ → routing & pages
   - components/ → reusable UI
   - public/ → static assets

Key concept:
Next.js uses file-based routing. Each folder inside "app" becomes a route.

Why use Next.js?
- Built-in routing
- Server-side rendering (optional)
- Static site generation
- Optimized performance
    `
  },

  {
    slug: "git-repo-setup",
    title: "Setting up a Git Repository",
    content: `
Git is a version control system used to track changes in code.

Basic steps to set up a repository:

1. Create a repository on GitHub:
   - Go to github.com
   - Click "New Repository"
   - Give it a name (e.g., notegraph)

2. Initialize Git in your project:
   git init

3. Add files to staging:
   git add .

4. Make your first commit:
   git commit -m "Initial commit"

5. Connect to remote repository:
   git remote add origin <repo-url>

6. Push to GitHub:
   git push -u origin main

Key concepts:
- Repository → project with version history
- Commit → snapshot of changes
- Branch → separate line of development

Why use Git?
- Track changes
- Collaborate with others
- Revert mistakes safely
    `
  },

  {
    slug: "file-based-routing",
    title: "File-based Routing",
    content: `
File-based routing means routes are defined by folder structure.

Example:

app/
  page.tsx        → /
  about/page.tsx  → /about
  note/[slug]/page.tsx → dynamic route

Dynamic routes:
[slug] allows rendering different content based on URL.

Why this matters:
- No need for manual route config
- Easy to scale
- Predictable structure
    `
  },

  {
    slug: "react-components",
    title: "React Components",
    content: `
Components are reusable pieces of UI.

Types:
- Functional components (modern standard)
- Class components (older)

Example:

function Button() {
  return <button>Click me</button>
}

Key idea:
UI is built by composing components together.

Best practices:
- Keep components small
- Reuse logic where possible
- Separate UI and logic when needed
    `
  },

  {
    slug: "props-and-state",
    title: "Props vs State",
    content: `
Props:
- Passed from parent to child
- Read-only

State:
- Managed inside component
- Can change over time

Example:

function Counter() {
  const [count, setCount] = useState(0)
}

Key difference:
Props → external data
State → internal data

When state changes:
→ component re-renders
    `
  },

  {
    slug: "ssr-vs-ssg",
    title: "SSR vs SSG",
    content: `
SSR (Server Side Rendering):
- Page generated on each request
- Good for dynamic data

SSG (Static Site Generation):
- Page generated at build time
- Fast and cacheable

In Next.js:
- You can choose per page

Tradeoff:
SSR → fresh data, slower
SSG → fast, but static
    `
  },

  {
    slug: "project-structure",
    title: "Project Structure in Next.js",
    content: `
Common folders:

app/:
- Routing and pages

components/:
- Reusable UI elements

lib/ or utils/:
- Helper functions

public/:
- Static assets (images, icons)

data/:
- Static data (like your notes)

Why structure matters:
- Makes scaling easier
- Improves readability
- Helps teams collaborate
    `
  },
  {
  slug: "nextjs-params-and-query",
  title: "Params and Query in Next.js",
  content: `
Next.js supports dynamic routing and query parameters.

Dynamic Params (Route Params):

Defined using folder names:

app/note/[slug]/page.tsx

Access params:

export default function Page({ params }) {
  console.log(params.slug)
}

Example:
URL: /note/react
→ params.slug = "react"


Query Parameters:

Passed in URL like:

/note/react?tab=code

Access in client components:

"use client"
import { useSearchParams } from "next/navigation"

const searchParams = useSearchParams()
const tab = searchParams.get("tab")

→ tab = "code"


Navigation with params:

<Link href="/note/react">Open</Link>

Navigation with query:

<Link href="/note/react?tab=code">Open Code Tab</Link>


Key difference:

Params:
- part of route structure
- required for page

Query:
- optional
- used for filters, UI state


Use cases:

Params:
- blog slug
- product id

Query:
- search filters
- tabs
- sorting
  `
}
]