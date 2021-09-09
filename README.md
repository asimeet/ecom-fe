<p align="center">
  <h3 align="center">The Ecommerce App - Frontend</h3>

  <p align="center">
     This is the frontend implemented with react for a backend implemented with express microservices!
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://gitlab.com/asimeetp/ecom-fe/-/issues">Report Bug</a>
    ·
    <a href="https://gitlab.com/asimeetp/ecom-fe/-/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#development-environment">Development Environment</a></li>
        <li><a href="#production-environment">Production Environment</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a demo frontend application implemented with React. 
This is a single page user interface that shows the product description page of a shoe.

Internally it has 5 main components as described below:

* ProductSlider.js - contains the photo gallery of the shoe. The image urls
are fetched from the product-description-page microservice.
* ProductSpecs.js -  the most enriched component situated at the right of the page 
that shows ratings, available colors it also has logic to show 'Out of Stock' or the price
based on data recieved from the product-description-page microservice.
* ProductDescription.js - shows the information of the product from the data recived from
product-description-page microservice.
* ProductDescriptionLayout.js - just a placeholding component implemented with grid system.
* ToastComponent.ts - as this is demo application, it is important to show that some features are not implemented when certain UI elements are clicked.

### Built With

The following npm libraries have been used in the application:

* [react-helmet](https://www.npmjs.com/package/react-helmet)
  Used for adding and updating metadata tags for SEO.
* [react-image-gallery](https://www.npmjs.com/package/react-image-gallery)
  Used for slide show gallery of product images
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  Used to route to different components internally, not really needed at this point in time.
  However it is needed to extend this application to have different views.
* [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)
  Used to achieve grid system and alignments
* [react-toastify](https://www.npmjs.com/package/react-toastify)
  Used to show toast messages. specifically for 'Not Implemented yet..' toast message in the application.
* [axios](https://www.npmjs.com/package/axios)
  Used to make http requests to product-description-page microservice.
* [lodash](https://www.npmjs.com/package/lodash)
  Used for common js funtions like sorting, getting uniqvalues and getting start-case text.


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://gitlab.com/asimeetp/ecom-fe.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Clone the backend repo
   ```sh
   git clone https://gitlab.com/asimeetp/ecom-be.git
   ```
4. Install NPM packages for backend 'ecom-be'
   ```sh
   npm install
   ```


<!-- USAGE EXAMPLES -->
## Usage

### Development Environment
1. On the ecom-fe folder level use the following command to start frontend
   ```sh
   npm start
   ```
2. On the ecom-be folder level use the following command to start backend
   ```sh
   npm run start-all-dev
   ```
3. Application is ready to use in localhost ideally on port 3000

### Production Environment
1. Set environment variables in the production server
  ```sh
    export REACT_APP_PDP_API_KEY={EXTERNAL_API_KEY set in production environment for backend}
    export REACT_APP_PDP_BASEURL={your production url for product-description-page microservice}
  ```
2. On the ecom-fe folder level use the following command to start frontend
  ```sh
    npm run start-prod
  ```
3. Install pm2 is not already in the production server
  ```sh
    npm install pm2 -g
  ```
4. On the ecom-be folder level use the following command to start backend
  ```sh
    INTERNAL_API_KEY={secret internal api key} EXTERNAL_API_KEY={public api key for pdp microservice}  pm2 start pm2.config.js --env=production --update-env
  ```
5. Application will be ready for use in production server

<!-- CONTACT -->
## Contact

[Asimeet Padhee](https://github.com/asimeet)

Email: [asimeet.ap@gmail.com](mailto:asimeet.ap@gmail.com)








