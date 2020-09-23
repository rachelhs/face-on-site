## About
Website for Looking for the Cloud project, build using Gatsby and based from the Gatsby starter, Absurd.

## Installation
Clone this git repo and then install the dependencies:

### `npm install`

Run the development server:
### 'gatsby develop'

Production build to `/public`:
### `yarn build`

## Content

Each of the sections in the site are placed in `src/components/sections`
Data is usually separated out into objects/arrays to be rendered in the component.

The chatbots are placed in `src/components/chatbots`. Edit the chatbot scripts from here. 
Each chatbot component is then imported to individual pages for each chatbot in `src/pages`

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.

Each section also have seperate CSS Modules Stylesheets
