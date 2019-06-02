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
* Remove ingredients safely: removeIngredientHandler with same logic almost, only deducting and add that method controls. In case there are no ingredients we will run into an error if we keep subtracting: check for less or equal to 0 to return. Setup disabling the buttons.
* Display the updated burger price.
* Adding the order button.
* Creating the Order Summary Modal.
* Showing & Hiding the Modal (with Animation!).
* Implementing the backdrop component.
* Adding a custom button component.
* Implementing button component.
* Adding a toolbar.
* Using a Logo in our Application.
* Adding Reusable Naviation Items.
* Creating Responsive SideDrawer and working on responsive adjustments.
* More Responsive Adjustments.
* Reusing the Backdrop
* Adding a SideDrawer Toggle Button.
* Adding a Hamburger Icon.
* Improving Performance.
* Using Component Lifecycle Methods.
> We used shouldComponentUpdate to tell component to update only under certain conditions.
> We'll look at other lifecycle hooks and side-effects in relation to them next.
>"Side Effect" is not a react-specific term. It is a general concept about behaviours of functions. A function is said to have side effect if it trys to modify anything outside its body. For example, if it modidifies a global variable, then it is a side effect. If it makes a network call, it is a side effect as well.
* Changing the Folder Structure
* Understanding HTTP requiests in React.
> In single page apps a strong decoupling happens between your App and the server. Communication still happens but server doesn't send back HTML pages, but JSON data. The server is a restful API exposing endpoints to which you can send data.
* Setting up firebase - syntax that maps api endpoints to database tables. 
* Create axios instance with baseURL from firebase.
* Sending a post request.
* Displaying a spinner while sending a request. Firebase is really fast so this may not be necessary, but we show it in case of any latency, such as user network being slow. [Cool Spinners](https://projects.lukehaas.me/css-loaders/).
* Handling errors.
* Retrieving data from backend.
* Removing old interceptors.
* Building the Checkout Container
* Setting up Routing and Routes.
* Navigating to the Checkout page. Using withRouter to access history and match on props.
* Passing Ingredients via Query Params. 
>The `encodeURIComponent` is a JS helper function that encodes any element passed to it so that it can be used in the URL
* Navigating to the Contact Data
* Order Submission & Passing Data between pages.
> 'render' is passed a function with the `ContactData` component to be rendered.  Using  `rendeer` in place of `component` allows props tp be passed along with the component.  `{...props}` passes all props onto the `ContactData` component, allowing that component access to `props.history.push()`
* Adding an orders page.
* Implementing Navigation Links.
* Fetching Orders.
* Outputting the orders.
* Forms and form validation.
* Creating a custom dynamic input component.
* Setting up a js config for the form.
* Dynamically create inputs based on JS config.
* Adding a dropdown component.
* Handling User Input.
* Handling Form Submission.