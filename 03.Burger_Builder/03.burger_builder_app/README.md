[#BURGER BUILDER with Max](https://www.udemy.com/react-the-complete-guide-incl-redux)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Project Roadmap

* Setup the project with eject option for open configuration, so we can enable the CSS modules.
* Project tree.
* Setup Aux functional component so we can wrap multiple tags in it instead of using an enclosing div.
* Build ingredient case function and prop-type validation.
* Get the Burger Ingredients to show up.
* Outputting burger ingredients dynamically by first parsing through an object to make array of ingredients containing an array of items to represent the number of each in the burger.
* transformedIngredients will be an array of empty arrays, making impossible to check for no ingredients. We need this to display "Please add ingredients". Reduce will flatten the array making possible to have the sum dynamically.
* Outputting multiple build controls.
* Connecting state to build controls: addIngredientHandler to update the ingredients and the price and connect that to controls.

