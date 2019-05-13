#[React - The Complete Guide with Maximillian](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8125770#questions/6946374)

## Making HTTP request

### To run locally
`npm start`

### Project Roadmap

* Understanding the project and introducing axios.
* Creating HTTP requests to get data.
> There is one lifecycle hook that should be used for side-effects: componentDidMount(). But not for updating states since it triggers a rerender, unless that is what you want.

Sidenote: The file from the class didn't have node modules in the gitignore. Here are the steps to undo the commited node modules for future reference, since we don't want to push these to Github. 

Undo last commit:
`git reset --soft HEAD~1`

How to remove cached node_modules:
#add 'node_modules' to .gitignore file

`git rm -r --cached node_modules`
`git commit -m 'Remove the now ignored directory node_modules'`
`git push origin master`

* Rendering Fetched Data to the screen.
* Transforming data.
* Making Post selectable.
* Fetching Data on Update without creating an infinite loop. 

> We want to fetch data in componentDidUpdate hook, but not update the state since then we'll enter an infinite loop.

* Posting data to the server.
* Sending a delete request.
* Handling errors locally.
* Adding interceptors to execute code globally.
* Setting a default global configuration for axios.
* Creating and using axios instances.
* React is a component creation library - we're making it into a framework by adding a Routing package to it.
* Routing and SPAs. We don't have multiple html files, but js to render different paths. We rerender parts of that single page. Routing is parsing the route/URL to render appropricate components. 
* Setting up links.
* Setting up the router package. React-router vs react-router-dom.
* Preparing the project for routing: some app restructuring.
* Rendering components for routes.