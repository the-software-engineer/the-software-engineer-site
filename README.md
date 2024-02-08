<p align="center">
  <a href="https://github.com/Spenhouet/svelte-gh-pages-quickstart/actions/workflows/deploy.yml"><img src="https://github.com/Spenhouet/svelte-gh-pages-quickstart/actions/workflows/deploy.yml/badge.svg" alt="Build Status"></a><a href="https://github.com/Spenhouet/svelte-gh-pages-quickstart/actions/workflows/pages/pages-build-deployment"><img src="https://github.com/Spenhouet/svelte-gh-pages-quickstart/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Deploy Status"></a>
</p>

<p align="center">Template for Svelte with GitHub pages.</p>

<p align="center"><em>Check the result of this basic version out at <a href="https://spenhouet.com/svelte-gh-pages-quickstart/">spenhouet.com/svelte-gh-pages-quickstart</a>.</em></p>

Quickstart project to develop and deploy a static Svelte page to GitHub pages.

## Features

- Static page builds
- GitHub pages support
- Playwright for e2e testing
- Tailwind for styling
- Headless UI for basic UI components
- PostCSS support
- Typed Javascript

## How to locally serve the page?

To see if everything is working you can start it up like that.

```shell
npm run dev -- --open
```

If everything worked correct, your browser should open `http://localhost:3000/`.

You can also use the VS code launch configuration `Debug Svelte App` via `F5` to debug the application.

## How do I run tests?

Execute:

```shell
npm test
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
Note: Because of absolute path resolution of assets, the static page does not work on local execution.
