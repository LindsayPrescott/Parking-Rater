

The best way to start is implementing a Navigation component that will be used in the 
App component. The App component is the perfect place to render the Navigation component, 
because it always renders the Navigation component but replaces the other components (pages)
based on the routes. Basically, the App component is the container where all your fixed
components are going (e.g. navigation bar, side bar, footer), but also your components
that are displayed depending on the route in the URL (e.g. account page, login page, 
password forget page).

First, the App component will use the Navigation component that is not implemented yet.
Also, it uses the Router component provided by React Router. The Router makes it possible 
to navigate from URL-to-URL on the client-side application without another request to a web
server for every route change. The application is only fetched once from a web server, after
 which all routing is done on the client-side with React Router.