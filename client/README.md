## Setup
1. Run `npm i` to install required packages.
2. Create a .env file within `/client`, with the following value:
```
API_TOKEN="<YOUR-YELP-API-KEY>"
GOOGLE_MAPS_API_KEY="<YOUR-GOOGLE-MAPS-API-KEY>"
```

You should now be able to use any of the package commands and run a local dev server.

## Usage
Use `npm run [script]` or `yarn [script]` to run the following project scripts:

```
dev           Start a local development sever at http://localhost:3000
build         Generate a production optimized build
storybook     Start Storybook
test          Perform linting and run tests
lambda:dev    Initialize a Netlify Lambda locally to proxy API requests
lambda:build  Initialize a Netlify Lambda when deployed
```

## Project Structure
- /components         - Functional components that only rely on ThemeContext.
- /pages              - Represents the page structure, sets up state and context for child components of the page. Not responsible for handling data fetching.
- /views              - Handle querying data and updating components.
- /contexts           - Contexts we use to maintain app state or pass theme values to components.
- /css                - For the rare instances where we need to include raw CSS.
- /helpers            - Helper functions that are not components.
- /lambda             - Lambdas for Netlify/AWS
- /queries            - GraphQL queries and mutations
- /storybook-helpers  - Functions and mock data for working with Storybook.
- ../tests/           - Integration tests using Enzyme.

## Component Rules
Components are structured based on the following rules:
1. If the component is used by another top-level component, it should reside at the top-level.
2. If the component is used by pages or views outside of /components, then the component should be at the top level.
3. If the component is used within a parent component, but not outside of it, it should reside in the same directory as the parent component.

## Styling
Components are styled with [Styled JSX](https://github.com/zeit/styled-jsx).

This means every component's style is scoped to the component itself, instead of the global CSS namespace.

**Global styles** are located in `/static/global.css` so we can share them between the app and Storybook.

## Deploying to Netlify
Use the following configuration when setting up a Netlify deploy:
```
Base directory: /client
Build command: npm run build
Publish directory: /client/dist
```

When deploying to Netlify, we rely on a lambda to act as a proxy to the Yelp API, and then use a rewrite rule to forward requests from `/api` to the lambda.