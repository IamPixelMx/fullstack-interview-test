# fullstack-interview-test

> # Welcome to Pixel | GitHub Explore

<br />
<div align="center">
<a href="https://pixel-github-explorer.herokuapp.com/" target="_blank">
    <img src="public/logo.png" alt="Logo" width="140">
</a>
  <h3 align="center"><b>GitHub Explore</b></h3>
</div>

<br />

<div align="center">
  <p>
Hi👋, my name is Itzel!!  <em>Pixel | GitHub Explore</em> is a web app that allows you to explore all details related to this repo   
</p>
  <a  href="https://pixel-github-explorer.herokuapp.com/" target="_blank">Go to the site >></a>
</div>

<br />

<div align="center">
    <a href="https://github.com/IamPixelMx/fullstack-interview-test/tree/master/components" >Explore proyect</a>
     ·
    <a href="https://github.com/IamPixelMx/fullstack-interview-test/issues">Report an issue</a>
     ·
  </div>

 <br />

---

## **Content**

- [Personal notes](#personal-notes)
- [Pages](#pages)
- [Using Context for Router and State management](#using-context-for-router-and-state-management)
- [Improve developer dxperience](#improve-developer-experience)
- [Biggest challenges](#biggest-challenges)

- [**Run project**](#run-project)

---

<br/>

### **Personal notes**

- I used fewer dependencies than usual because I wanted to try some custom hooks
- Added an extra action button which is a direct merge of two branches to spice it up
- The project mostly used tables to show the API responses because they are an easy way to display data, neat and fast
- Previously I had in mind to use style modules to add some UI identity but I didn't have that much time to do it so, that's is something I would do given the time... besides unit testing, of course!
- I really enjoyed building this project and I was surprised how easy it is to enable some GitHub functionalities inside a project, I learned a lot and I'm thankful for that! <3
- I also enjoyed creating the error handlers. It's an aler that displays info and confirmations to the user, very handy even for me as a developer user :D

  <br/>
### **Pages**

The wep-app consists of 6 pages:

- **Home**: Just to say welcome
- **Branches**: A list of all existing branches inside the repo
- **Branch**: When user clicks on one of the branches this view will show a list of all existing commits inside that branch
- **Commit**: When user clicks on one commit this view will display all the details about that commit
- **Compare**: User can select a base branch and a head branch, add some title and description and, directly merge two branches, create a new PR with the two branches or create PR and merge it, if there is no conflict

  <br/>

### **Using Context for Router and State management**

Create a Router with React Context and history library to manage the history object
Create custom hooks and components such as _Link_ to manipulate the routing.

Create a State management using React Context and useRducer

Create a lot of custom hooks to read and manipulate the state and the router

  <br/>

### **Improve developer experience**

Add _`baseUrl`_ property to _`tsconfig.json`_ file to make the imports scripts easier to read for the developer.

  <br/>

### **Biggest challenges**

- Error handler: I tried to think in all scenarios, to manage showing all the posible info to the user
- Create manipulate the route paths, as these will depend on the selected branch or commit.
- Decide the stack and the structure that I wanted to work with
- Create custom hooks

</br>
</br>

## **Run project**

To run locally you need to clone this repository and run:

```
$ npm install
```

then you will be able to locally run the project:

```
$ npm start
```

Which runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br/>

Although, you will have only a limited available amount of API calls but it's ok, if you want you can add your own .env file you just need to add your own GitHub _`API_KEY`_ and the _`BASE_URL`_ from your favorite GitHub repository, like this:

File
>_`.env`_
```
REACT_APP_API_KEY={YOUR_API_KEY}

REACT_APP_BASE_URL=https://api.github.com/repos/{owner}/{repo}
```

or, simply, you can go to the [repo's website >>](https://pixel-github-explorer.herokuapp.com) to play as much as you want!

<br/>

Please, let me know what you think and I hope you enjoy it! 🚀
