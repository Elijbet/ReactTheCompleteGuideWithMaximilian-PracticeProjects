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
* Switching between pages.
* Making sure we don't reload the app. Use link instead of a tag so no reaload happens. You can see that reload button never spins now. Now react is rerendering parts of the page, if we reloaded the page we'd loose our state.
* The "withRouter" HOC & Route props.
* Absolute vs relative path. 
>By default, if you just enter to="/some-path"  or to="some-path" , that's an absolute path. Absolute path means that it's always appended right after your domain. Therefore, both syntaxes (with and without leading slash) lead to example.com/some-path .
>Sometimes, you might want to create a relative path instead. This is especially useful, if your component is already loaded given a specific path (e.g. posts ) and you then want to append something to that existing path (so that you, for example, get /posts/new ). <Link to={props.match.url + '/new'}>  will lead to example.com/posts/new
* Styling the active route with NavLink, which appends active class to the link.
* Change the appended class name with activeClassName. You can use activeStyle to apply inline styling to active NavLink.
* Passing route params and extracting route params.
* Query params: <Link to="/my-path?start=5">Go to Start.
* how to navigate to another page programmatically, without using the link.
* Nested routes.
* Creating dynamic nested routes.
* Redirecting requests.
* Conditional redirects. Outside of the switch method we don't use from.
* Using history prop to redirect pushes it to stack, so you can go back to previous page. Using redirect won't keep the last page history. You can use .replace instead of this.props.history.push('/') and this will do the same as redirect.
* Navigation guards for authentication purposes.
* Handling the 404 case (unknown routes).
* Loading Routes Lazily. 
>If we look at network tab in dev tools we'll see that we load bundle.js all the time, which is not a good idea. We don't want to load code for a component the user never visits. We need to upload only what we need by 
'code splitting' or 'lazy loading'. This setup will only work with config 'create react app', bc it depends on Webpack config. So we need to create a higher order component which will load asynchronously. 
* Lazy Loading with React Suspense (16.6)
* Routing and server deployment.



