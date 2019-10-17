## Setup
1. Run `npm i` to install required packages.
2. Create a .env file within `/client`, with the following value:
```
GRAPHQL_API_KEY="<YOUR-YELP-API-KEY>"
```

You should now be able to use any of the package commands.

## Usage
Use `npm run [script]` or `yarn [script]` to run the following project scripts:

```
dev         Start a local development sever at http://localhost:3000
build       Generate a production optimized build
storybook   Start Storybook
test        Perform linting and run tests
```

## Styling
Components are styled with [Styled JSX](https://github.com/zeit/styled-jsx).

This means every component's style is scoped to the component itself, instead of the global CSS namespace.

**Global styles** are located in `/static/global.css` so we can share them between the app and Storybook.