# FxStemTech website

A React and Vite website built with JavaScript and CSS. The project lives
directly in this folder and uses `nextgentech-website` as its npm package name.

## Run the website on your computer

Open a terminal in this folder and run:

```powershell
npm install
npm run dev
```

`npm install` downloads the project's dependencies. You only need to run it
again if the dependencies change. `npm run dev` starts Vite's local development
server. Open the local URL printed in the terminal (usually
`http://localhost:5173`) in your browser. Press `Ctrl+C` in the terminal to
stop the server.

## Pages and project files

- `src/pages/` contains the Home, About, Projects, and Contact pages.
- `src/components/` contains shared navigation, project cards, and icons.
- `src/data/projects.js` contains the featured project details.
- `src/App.css` contains page layouts and responsive styles.
- `src/index.css` contains the brand colors and global styles.
- `public/images/` contains the supplied FxStemTech logo artwork.

The Contact page includes WhatsApp and email links and a form that sends to
`fxstemtech@gmail.com` through FormSubmit. Before the form can deliver messages,
FormSubmit requires the inbox owner to confirm its first verification email.
The website is not published online. A next step toward publishing is to create
a GitHub repository and deploy it using a host such as Vercel or Netlify.
