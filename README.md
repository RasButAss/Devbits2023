# Weldright
<p>WeldRight is a comprehensive stock buying and selling website that provides its users with the essential features required to make informed decisions in the stock market. Our platform includes a user-friendly interface, allowing users to easily navigate through the various features of the website. With WeldRight, users can manage their portfolios, view real-time stock quotes, and access a wealth of trading tools and research to help them make informed decisions. </p>
Our platform also provides users with news and analysis, enabling them to stay up-to-date with the latest market trends and insights. 
For out future update we plan to add consumer support. With this, users can access reliable customer support, ensuring that their concerns are addressed and resolved quickly. Our website is the perfect platform for investors, from beginners to experienced professionals, to take advantage of the stock market and maximize their returns.



### Tech-Stack:BACKEND
1. react
2. Flask APIs
3. MySQL Database

## BACKEND
<ol>
 <li>@app.route('/sign_up_user',methods={'POST'}) -->REGISTER A NEW USER</li>
 <li>@app.route('/login',methods={'POST'})   --> LOGIN AN OLD USER</li>
<li>@app.route('/add_to_watchlist',methods={'POST'})  --> ADD A COMPANY PROFILE TO USER'S WATCHLIST</li>
<li>@app.route('/buy',methods={'POST'})  -->BUY A COMPANY'S STOCK</li>
<li>@app.route('/sell',methods={'POST'})  -->SELL A COMPANY'S STOCK</li>
<li>@app.route('/get_user_info',methods={'GET'}) --> GET CURRENT HOLDINGS AND BALANCE OF A USER</li>
<li>@app.route('/get_user_buys',methods={'GET'}) --> GET HISTORY OF ALL THE STOCKS EVER BOUGHT</li>
<li>@app.route('/get_user_sale',methods={'GET'})  --> GET HISTORY OF ALL THE STOCKS EVER SOLD</li>
<li>@app.route('/get_user_watchlist',methods={'GET'}) --> GET ALL THE PROFILES IN USER'S WATCHLIST</li>
</ol>
## DEPLOYMENT OF BACKEND
http://prachi003.pythonanywhere.com/

## FRONTEND
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`



Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
