# Taking lesson a few steps further

## Project

This started as a project for a course on React Router. Right at the beginning of the
lesson it was stated that it was intended for the previous version RR v5. I completed it
as intended with relative ease. The next part is where it got interesting...

## hosting

First pushed it from GitHub to Netlify with out issue. Next up GitHub Pages...

## GitHub

Quickly learned about how GH Pages only supports static pages and all that goes into converting into an accepted
format. Sounds easy when you read on how to use the gh-pages npm package. Im sure it had to do with the combination of me not creating the initial application and not having experience with the process. After finding all the different ways how not to get it to work I figured out the file path nuances. Now the page was there but no info to populate it...

## Service worker

At the start of this I did'nt know what one was. I had realized earlier that the project had dummy data but
didn't connect the dots that the api calls would have to be intercepted even on the local host. Took a while to stumble
on to adding the new url to the startup of the service worker call but in the end the v5 version is up and running on gitHub with some css tweaks so it did'nt break when using a phone to visit the site.

## v6

Now that everything was finally up and running time to upgrade. The update was'nt overly difficult but there are some little quirks. Like having to use a callback to make a link have custom styles and Having to use an extra Route to make a link active when the page loads. The way the app was designed was to have the all pets section just be the homepage rather than
a dedicated component. That would'nt have been my choice but it did make it a little more interesting to get working right.

## Take Away

By doing it the longer way I've learned way more than was intended!
