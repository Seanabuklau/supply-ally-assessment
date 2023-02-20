# **SupplyAlly SWE Technical Test**
## 1. **Introduction**
This project is a web based frontend application for Supply Company to support its existing functions. 
## 2. **Motivation**
This project was built as part of GovTech GDS' Web Application Technical Assessment.
## 3. **Build Status**
Presently, only the frontend for 4 screens i.e. Login, Track, Tracking Details, and Statistics are done up.  

Note that most of the dynamic content i.e. tracking details shown are hardcoded and not rendered via an API call to the backend. 
## 4. **Tech Stack**
1. Frontend framework: 
    - React.js
2. Programming languages: 
    - TypeScript, CSS, HTML
3. IDE: 
   - VS Code 
## 5. **Extra Features**
Some sanity checks were added to the frontend of the web application. For instance, buttons such as *Login* are disabled by default unless the user correctly inputs a name in alphabetical letters.  

This ensures only names are accepted as the login input. Moreover, warning statments are also added to inform users of incorrect inputs, for example typing in less than *10* numbers for the tracking number will trigger an error message. 
## 6. **Tests**
Tests were conducted using the JavaScript Jest library.  

Unix testing was carried out on important components and pages of the web application. However, only a handful of the test cases passed.  

A bulk of the failure was attributed to the following errors:  
-  ```useNavigate() may be used only in the context of a <Router> component``` as a result of making use of the ```useNavigate()``` hook to route to different pages.  
-  ```Warning: ReactDOM.render is no longer supported in React 18``` as the version of React used in this project is 18.2.0

## 7. **Hosting**
This project is hosted on GitHub and can be accessed by clicking on the URL below:  
-  http://seanabuklau.github.io/supply-ally-assessment
## 8. **Installation**
1. Download the project code into your computer
2. Ensure the codes are saved into a projects directory
3. Open the folder in an IDE i.e. VS Code. Ensure the terminal points to the right projects folder
4. To start the project in a development environment, type ```npm install``` in the terminal to install the required dependencies
5. Once done, type ```npm start``` to run the project
## 9. **How to Use**
The project is still in the development stage at the moment, so it can only be run for viewing/testing purposes.   
## 10. **Contributors**
Sean Woon