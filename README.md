# Getting Started with React Resume Template & Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About This Project

An open-source template, built with React and TypeScript, designed to provide users with a professional and customisable 
web-based resume project. The template is intended to facilitate easy access to a modern and polished resume that can 
be tailored to meet individual needs and preferences. With its modular architecture, the template provides a solid foundation 
for creating a high-quality, user-friendly resume website that can be easily maintained and updated.

[View live demo](react-resume-69e.pages.dev/)

## Customising the Data & Layout

The rendered data is stored in the src/data/structure.json file, which includes the following:

-User details.
-User Avatar Preference Toggle.
-User Links.
-Rendered Sections & Section Content.

To edit any of the above, simply modify the provided strings and booleans to your liking.

For direct CSS editing, please follow the clearly named component structure starting from the App.tsx file located in /src.
All components are built with Styled Components and can be modified in their relevant styled component.

Please make sure to update your favicon (favicon.ico), apple touch icon (logo512.png) & App Icon (logo192.png) - 
replace the icons with your desired icons, but keep the naming convention the same.

Please also make sure to edit your title & description metadata in src/public/index.html

## Attributions

Social media link icons found at [FlatIcon](https://www.flaticon.com), designed by [Pixel Perfect](https://www.flaticon.com/authors/pixel-perfect)

UI Icons found at Google fonts - Icons, [Material Symbols](https://fonts.google.com/icons)

Fonts Provided by [Google Fonts](https://fonts.google.com/)

Fonts Used:
[Roboto](https://fonts.google.com/specimen/Roboto?query=roboto),
[Space Mono](https://fonts.google.com/specimen/Space+Mono?query=space+mono)


## License & Use

[The MIT License (MIT)](https://opensource.org/license/mit/)

Copyright (c) 2015 Greg J Bales

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Available Scripts

In the project directory, you can run:

### `npm start`
or
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
or 
### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
or
### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
