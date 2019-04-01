Songs is a experiment project where I try to discover reactjs.<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>

Application list songs which is fetched from static json file.<br>

- Songs items are listed with the help of [virtual-repeat](https://github.com/bvaughn/react-window-infinite-loader) and [infinite-loader](https://github.com/bvaughn/react-window) to work with big data without performance problem.

- Filtering part of the application is using [debounce](https://lodash.com/docs/4.17.11#debounce) to cancel extra rendering while user is typing.

- All core components are using [React Hooks](https://reactjs.org/docs/hooks-intro.html).

- With the usage of flexbox it has good responsive desing.

- There are also some tests (which will be increased when enzyme solves hooks implementation) which has quite a good coverage percentage.

I used gitflow so you can get better insight how I progress with the project from [here](https://github.com/wickY26/songs/network).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.