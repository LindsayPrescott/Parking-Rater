in RatingHTML the style element has to refrence an object, so create a CSS stylesheet for it to refrence. No CSS should
be in the components, use a stylesheet

in Main, since we no longer have a login or register page, there are some empty hrefs that don't really make sense . Either
change it back to having seperate login and register pages or fix the code to work with the changed implementation. 
I'm happy to make fixes I know but I don't understand whats going on there at all to fix it.  AL:so theerror about the $. 
You'll need to figure out how say that in react. Make sure its not something that just needs to be in a seperate CSS
sheet. I dunno what it is so just a guess.

in NavBarMain, it still has links to About and Login if those pages aren't used anymoe? Return 
to old implementation or fix it up so it makes sense with new implementation. Please refer to
src/Navigation/index.js to see how you can create it easily and just use a stype sheet to make it
look good.

