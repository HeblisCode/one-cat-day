# A new cat GIF everyday!

### [Live Preview](https://hebliscode.github.io/one-cat-day/) <br>

A small project to start getting used to promises and async javascript in general. <br>
The website is built using webpack and fetches the GIF images using Giphy API. <br>
Once a GIF is fetched, the program starts a timer (using easytimer.js) and displays a new image once 24h have passed. <br>
Finally, the program saves the current GIF, an array of the last 50 GIFs (to avoid duplicates), and the time of the fetch using localStorage.
