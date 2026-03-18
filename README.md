#Notegraph
 A minimal note viewer built with Next.js featuring a sidebar-driven navigation system.

##preview
  <img width="1345" height="995" alt="image" src="https://github.com/user-attachments/assets/2186f345-f50f-4cc9-b0f0-c664ea2973b2" />
## Features (v0)
- Sidebar navigation
- Query-based note selection
- Dynamic content rendering
- Basic layout with Navbar, Sidebar, Body

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS

  ## Getting Started

```bash
git clone <repo-url>
cd notegraph
npm install
npm run dev

---

## 6. Project Structure (very useful for devs)
```md
## Project Structure

/app
  /components
    sidebar.tsx
    body.tsx
    navbar.tsx
  page.tsx
/data
  notes.js


## Limitations (v0)
- Uses query params instead of dynamic routing
- No active state in sidebar
- Basic UI (no responsiveness yet)

## Roadmap
- [ ] Switch to dynamic routes (/notes/[slug])
- [ ] Add active sidebar state
- [ ] Improve UI/UX
- [ ] Add markdown support for notes

## Versions
- v0: Basic functionality with sidebar + query params
