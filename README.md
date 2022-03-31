## CRWN-Clothing
![Crwn-clothing](https://i.imgur.com/2BZ7sKi.png)

[View it Live](https://crown-clthing.herokuapp.com/)

Clothing shop made using React & firebase with Stripe payments implemented. It features Authentication with Google account , Authentication with email & password, Persistant data with local storage, Asynchronous events handling, Paypal payments with Stripe, Performance improvement with lazy loading.

**Deployment**: _Heroku_  
**Design**: _Sass & Styled Components_  
**Authentication**: _Firebase auth_  
**Database**: _Firebase Firestore_  
**Backend**: _Firebase & NodeJs_  
**Libraries**:  
- **redux-logger**: console logging redux data flow  
- **redux**: state management  
- **redux-thunk**: handling asynchronous events  
- **redux-saga**: handling asynchronous events keeping actions pure  
- **axios**: implement api requests with ease  
- **reselect**: reusing redux selectors in a performant way  
- **redux-persist**: storing data in local storage  
- **styled-components**: styling components with SCSS
- **react-router-dom**: page navigation
- **react-stripe-checkout**: stripe integration

## How to navigate this project  
- The `root`folder of the project two separate folders, one is `client`, which contains all code for the frontend part of the project, and the root folder which contains the backend code.
- the `client` `src` folder is broken down into:
		- `assets` - contains all images used by the app
		- `components` - all reusable components of the web app
		- `firebase` - firebase configuration and utils
		- `redux` - redux reducers, actions, sagas
- The project uses SCSS and styled-components for the overall look of the frontend part of the app. [Example of the cart dropdown component](https://github.com/obleey/crwn-clothing/blob/main/client/src/components/cart-dropdown/cart-dropdown.styles.jsx)
- Redux logic is broken down into folders for each part of the app: [See shop folder with all Redux logic](https://github.com/obleey/crwn-clothing/tree/main/client/src/redux/shop)
- All separate pages are found [here](https://github.com/obleey/crwn-clothing/tree/main/client/src/pages). The app uses React-router-dom

## If I had more time I would change this  
- Write all tests using Jest
- Since I realized that more and more projects don't use Redux anymore, i would implement GraphQL (which i did [here](https://github.com/obleey/crwn-clothing-graph-ql) ) or  react-query for data managment.
- use a CSS framework like TailwindCSS or MaterialUI
 
## Available Scripts  
First of all clone or fork this repo and install all the needed dependencies using `npm` or `yarn`

    #1. clone this project
    ~ git clone git@github.com:obleey/crwn-clothing.git

    #2. cd into it
    ~ cd crwn-clothing

    #3. install dependencies
    ~ yarn
    
    #3. install client dependencies
    ~ cd client && yarn
    
    #4. run app (both client & server)
    ~ yarn start

## Authors
[Miha Oblišar - @mihaoblisar](www.linkedin.com/in/miha-obli%C5%A1ar-8b177610a)

## Licence
This project is open-sourced under the [MIT license](https://opensource.org/licenses/MIT).

