# OVERVIEW OF MY NEWS-APP PROJECT

## HOW TO RUN ON YOUR LAPTOP
1. download zip file
2. install dependencies: npm install
3. create .env file. i already make .env.example for your easy reference. you just need to put your NEWS API key
4. start development server: npm start
5. you can refer the src\data\loginInfo.js to log into my system

## COMPONENTS
1. Login: form handling user authentication.
2. PasswordField: input field with visibility option.
3. ErrorSnackbar: shows error popup message during login.
4. Home: main component rendering the header, fav panel, and results.
5. Header: has search bar, username display, and logout button.
6. MyFavouritesPanel: shows a list of favourite news.
7. DisplayResults: shows search results.
8. CustomCard: shows individual news with option to add to user's favorites.

## TOOLS
1. Material UI for UI components like Card, Button, etc.
2. axios for making HTTP requests to the News API.
3. react-router-dom for navigation btwn pages.
4. prop-types for type-checking props.
5. localStorage for storing login and username.