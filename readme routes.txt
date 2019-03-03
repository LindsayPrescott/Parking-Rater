First, you will have a sign up page (register page) and a sign in page (login page).
 You can take any web application as the blueprint to structure these routes for a 
well-rounded authentication experience. Take the following scenario: A user visits 
your web application, is convinced by your service, and finds the button in the top-level
 navigation to sign in to your application. But the user has no account yet, so a sign-up 
button is presented as an alternative on the sign in page.



Second, there will be a landing page and a home page. The landing page is your default
route (e.g. http://yourdomain/).That’s the place where a user ends up when visiting your
web application. The user doesn’t need to be authenticated to go this route. On the other
hand, the home page is a protected route, which users can only access if they have been
authenticated.You will implement the protection of the route using authorization
mechanisms for this application.



Third, next to the home page, there will be protected account page and admin page as 
well. On the account page, a user can reset or change a password. It is secured by 
authorization as well, so it is only reachable for authenticated users. On the admin page,
a user authorized as admin will be able to manage this application’s users. The admin
page is protected on a more fine-grained level, because it is only accessible for 
authenticated admin users.

Lastly, the password forget component will be exposed on another non-protected page, 
a password forget page, as well. It is used for users who are not authenticated and 
forgot about their password.

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