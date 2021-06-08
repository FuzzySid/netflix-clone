# Netflix Clone

[Fuzzy Netflix Clone](https://fuzzy-netflix-clone.web.app/) is a simple clone of [Netflix's](http://netflix.com/) home page built using ReactJS, Flexbox CSS for layouts and styling and MaterialUI for icons. It's a fully responsive web page and fetches all the details of the shows and movies from [TMDB API](https://developers.themoviedb.org/3). It also has the ability to play trailers for some of the TV Shows and Movies. The project is hosted live on Firebase. 

![Video Demo](https://media.giphy.com/media/gwniBTolRUK8UU9yCu/giphy.gif)



This project demonstrates -

- Creating reusable components in ReactJS
- Creating Responsive Layouts using CSS Flexbox
- Integrating third party APIs using Axios in ReactJS



## Features

1. Stunning UI design picked originally from Netflix's web page. The banner has a fading background effect at the bottom. 

![Banner](https://ik.imagekit.io/pibjyepn7p9/Netflix_Clone_Screenshot_GjnwypIb-.PNG)



2. Scrolling sticky navbar animation with thumbnails for movies and TV shows organized by category. 

![Sticky Navbar and Movie Thumbnails](https://ik.imagekit.io/pibjyepn7p9/image_3NJbFLYbJ.png)



3. Mobile Responsive layout using pure CSS Flexbox.

![Mobile Responsive Layout](https://ik.imagekit.io/pibjyepn7p9/Netflix_Clone_Mobile_Responsive_-6aGqFHon.jpeg)

## Setup

If you wish to run the project locally, follow the steps below:

Run the following command to clone the repository locally

```shell
git clone https://github.com/FuzzySid/netflix-clone.git
```

Inside the directory, run

```shell
npm i
```

To install all the dependencies. If you run into any errors while installing packages, run the following command instead

```shell
npm i --legacy-peer-deps
```

Then run the following command to open a development server

```shell
npm start
```

To fetch data from the TMDB API, you'll need to get an API key. You can create a `key.js` file inside the root directory with the following

```javascript
export const API_KEY=<YOUR_API_KEY>;
```

For security reasons, `key.js` file is not included in the public repo. 

## Project Structure

![Directory Structure Screenshot](https://ik.imagekit.io/pibjyepn7p9/Netflix_Clone_Folder_Structure_BfIP_mVdD.PNG)

The root directory consists of `App.js` that renders all the external components. `axios.js` fetches data from various API endpoints of TMDB APIs. The various endpoints for fetching movies on the basis of genre or tv shows are inside `requests.js`. 

Other UI components and functional elements are inside the `components` folder. All these components are made reusable using `props`. 

