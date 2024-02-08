<p align="center">Template for Svelte with GitHub pages.</p>

<p align="center"><em>Check the result of this basic version out at <a href="https://spenhouet.com/the-software-engineer-site/">spenhouet.com/the-software-engineer-site</a>.</em></p>

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
