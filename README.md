<h1 align="center" style="color:#4838D1;font-size:70px;font-family:Georgia;text-align:center;">
    Melbourne Backpack
</h1>

<p align="center">
  <strong>React Native + Firebase solution for studying in RMIT Melbourne</strong>
</p>

<p align="center">
  <a href="https://github.com/facebook/react-native/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Melbourne Backpack is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/react-native">
    <img src="https://img.shields.io/npm/v/react-native?color=brightgreen&label=npm%20package" alt="Current npm package version - v16.13.1." />
  </a>
</p>

<p align="center">
  <a href="https://youtu.be/XtpU9N3Mslo" target="_blank">Demo on YouTube <i class="fa-brands fa-youtube"></i></a>
</p>


## 📌Features
This React Native + Firebase + Expo app contains a few key features that all apps backed by Fireabase support:

+ Registration with E-mail & Password
+ Login with E-mail and Password
+ Handling persisted login credentials
+ Navigating between screens (react-native-navigation)
+ Writing to Firestore Database
+ Reading from Firestore Database
+ Creating Firestore indices (for performance)
+ Uploading images to Storage
+ Viewing personlized data for each user
+ Messaging real-time with others in the Melbourne Backpack's chat forum
+ Commenting and rating on the available student living
+ Viewing online Sentiment Analysis internal rating system using reviews scraped from Google and the app user
+ Viewing real-time data Victoria transportation
+ Viewing shopping malls near CBD Melbourne
+ Viewing yours and others' profile information
+ Viewing recommended videos for starting a semester in RMIT Melbourne
+ Filtering base on the content of interest
+ Logout the system



#### 📱 Basic Screen shots
|<a href="#"><img src="https://i.ibb.co/WsMx0y4/splash.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/SB9PkqL/onboarding.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/FVH7hHw/signin.png" alt="Illustration" width="400px"/></a>|
|:--:|:--:|:--:|
|Splash Screen|Onboarding Screen|SignIn Screen|

|<a href="#"><img src="https://i.ibb.co/WKr7JM9/campus.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/6yXyYQv/subjects.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/8D7KkX7/more-info.png" alt="Illustration" width="400px"/></a>|
|:--:|:--:|:--:|
|Personalization Screen: campus|Personalization Screen: subjects|Personalization Screen: further info|

|<a href="#"><img src="https://i.ibb.co/SVkM4RV/housing2.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/2jZFQpf/housing3.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/RTKyK7P/housing4.png" alt="Illustration" width="400px"/></a>|
|:--:|:--:|:--:|
|Housing Screen: house details|Housing Screen: all review's options|Housing Screen: app reviews example|

|<a href="#"><img src="https://i.ibb.co/zS8wXjz/transport.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/JvJqNp2/shopping.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/kGLmpfL/community.png" alt="Illustration" width="400px"/></a>|
|:--:|:--:|:--:|
|Transportation Screen|Shopping Screen|Community Screen|

|<a href="#"><img src="https://i.ibb.co/L6Z66R6/profile.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/txjML6S/copy-othe-uid.png" alt="Illustration" width="400px"/></a>|<a href="#"><img src="https://i.ibb.co/bLyX2FZ/logout.png" alt="Illustration" width="400px"/></a>|
|:--:|:--:|:--:|
|Profile Screen|Copy other's member uid Screen|Logout Screen|

-------------------


#### 📖 Documentation
|<a href="reports/Project Proposal.pdf"><img src="https://i.ibb.co/St3T7Yh/proposal.jpg" alt="Illustration" width="700px"/></a>|<a href="reports/ISYS2101_Team18_FinalReport.pdf"><img src="https://i.ibb.co/J7gkvJS/final-report.jpg" alt="Illustration" width="700px"/></a>|
|:--:|:--:|
|Project Proposal|Final Report|

#### Figma
|<a href="https://www.behance.net/gallery/142820633/Melbourne-Backpack-Cross-platform-mobile-application"><img src="https://i.ibb.co/N3NDMWN/Figma.jpg" alt="Illustration" width="700px"/></a>|
|:--:|
|Figma for design system and prototypes on Behance|

#### Trello
|<a href="https://trello.com/b/c85KQUtQ/team-18-melbourne-backpack-sepm"><img src="https://i.ibb.co/28x7W2G/Trello.jpg" alt="Illustration" width="700px"/></a>|
|:--:|
|Trello for collaboration tool that organizes our project into boards|

#### Academic Poster
|<a href="https://ibb.co/bFjK40n"><img src="https://i.ibb.co/dts5NTy/Melbourne-Backpack-Academic-Poster.png" alt="Academic Poster" width="700px"/></a>|
|:--:|
|Academic Poster|

***

## 📋 Requirements
This React Native app may target iOS 11.0 and Android 5.0 (API 21) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS. We used [Expo](https://expo.io) to test in the development environment.


## 🎉Local Environment Setup
We used WebStorm as our IDE, but an IDE is not needed if you only want to run the project. 
Please ensure that you have **node** `v16.13.1`, **expo-cli** `5.3.0`  installed on your system. No other software or libraries are required.

* Step 1: `git clone https://github.com/Melbourne-Backpack/melbourne-backpack.git` OR Download ZIP & Unzip .zip file to a location of your choice.
* Step 2: Use the command line to navigate to the folder mentioned above, E.g. `cd melbourne-backpack/`
* Step 3: Run `npm install`: Install NPM packages with your package manager of choice
* Step 4: Start the app, and run `npm start`  from the project's root.
* Step 5: Download the Expo app on your phone
* Step 6: Scan the QR code in the terminal and open the app on Expo


The `.csv` and `.json` database files that we gave you for `Firebase` reference can be found in `https://github.com/Melbourne-Backpack/datasets.git` in our organization

## 🧑‍🤝‍🧑Authors👭

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/tnathu-ai"><img src="https://i.ibb.co/zZKb9g9/Thu.jpg" width="100px;" alt=""/><br /><sub><b>Tran Ngoc Anh Thu</b></sub></a><br /><sub><b>Project Manager, Designer, Full Stack Developer</b></sub></td>
    <td align="center"><a href="https://github.com/doanyennhi"><img src="https://i.ibb.co/r7nm18b/Nhi.jpg" width="100px;" alt=""/><br /><sub><b>Doan Yen Nhi</b></sub></a><br /><sub><b>Full Stack Developer, Github Administrator</b></sub></td>
    <td align="center"><a href="https://github.com/rider3458"><img src="https://i.ibb.co/LhzjHQC/manh.jpg" width="100px;" alt=""/><br /><sub><b>Du Duc Manh</b></sub></a><br /><sub><b>Full Stack Developer, Meeting Minutes Taker</b></sub></td>
    <td align="center"><a href="https://github.com/hlinh88"><img src="https://i.ibb.co/qCmg569/Linh.jpg" width="100px;" alt=""/><br /><sub><b>Nguyen Hoang Linh</b></sub></a><br /><sub><b>Full Stack Developer, Github Administrator</b></sub></td>
        </tr>
</table>

## Folder Structure & Architecture

```
├── __tests__                   // test for components, services etc. inside of related folder.
│   ├── App-test.js
|
├── node_modules
|
├── .gitignore                  // Used by git to determine what files to ignore, when committing changes.
|
├── assets                      // store all images, vectors, fonts, etc.
│  ├── images
|
├── reports                     // contains project's documentations
│  ├── Project Proposal.pdf
|
├── src                         // main container of all the code inside your application.
│   ├── api
│   │  ├── getData
│   │  ├── handleData.js
│   │  ├── handleData.js
|   |   
│   ├── components              // store any common component that you use through the app (e.g: alert modal)
│   │  ├── atoms
│   │  ├── molecules
│   │  ├── organisms
|   |
│   ├── config                  // Firebase configuration
│   │  ├── firebase.js
|   |
│   ├── navigations                   // store the navigators
│   │  ├── AppNavigator.js            // RootNavigator
│   │  ├── content-navigator.js       // AppNavigator
|   |
│   ├── screens
│   │  ├── login
│   │  │	 ├── index.js // LoginScreen
│   │  ├── home
│   │  │	 ├── index.js // HomeScreen
│   │  ├── about
│   │  │	 ├── index.js // AboutScreen
|   |
│   ├── styles
│   │  ├── index.js        // Export all
│   │  ├── colors.js       // Colors pallet
│   │  ├── spacing.js      // Paddings, margins and scale
│   │  ├── typography.js   // Fonts types and sizes
|   |
│   ├── utils              // store any common function such as calcutate distance, different date and string formatting functions
│   ├── index.js
|
├── App.js                 // Main component that starts the whole app.
├── app.json
├── babel.config.js
├── package.json
└── README.md                   // The first page the user will see when visiting the repo.
```

**Modify the environment variables files in root folder `.env` file**

## 📄 License

This mobile application is MIT licensed, as found in the [LICENSE][l] file.

React Native documentation is Creative Commons licensed, as found in the [LICENSE-docs][ld] file.

[l]: https://github.com/facebook/react-native/blob/HEAD/LICENSE
[ld]: https://github.com/facebook/react-native/blob/HEAD/LICENSE-docs
