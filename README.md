# fullstack-interview-test

> # Welcome to Pixel | GitHub Explore

<br />
<div align="center">
  <h3 align="center"><b>GitHub Explore</b></h3>
<a href="https://pixel-github-explorer.herokuapp.com/">
    <img src="public/logo.png" alt="Logo" width="140">
</a>
</div>
<div align="center">
  <a href="https://pixel-github-explorer.herokuapp.com/">Go to the site</a>
</div>
<br/>
<div>
  <p>
Hi👋, my name is Itzel!!  <em>Pixel | GitHub Explore</em> is a web app that allows you to explore all details related to this repo   
</p>

 <br />
    <a style="float:left" href="https://github.com/IamPixelMx/fullstack-interview-test/tree/master/components" >Explore proyect</a>
    <a style="float:right" href="https://github.com/IamPixelMx/fullstack-interview-test/issues">Report an issue</a>
  </div>

 <br />

---

## **Content**

- [Personal notes](#personal-notes)
- [Pages](#pages)
- [Context for Router](#context-for-router)
- [Using Context for Router and State managementt](#using-context-for-router-and-state-management)
- [Improve Developer Experience](#improve-developer-experience)
- [Biggest Challenges](#biggest-challenges)

- [**Run the porject**](#run-the-project)


---

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

</br>

### **Using Context for Router and State management**

Create a Router with React Context and history library to manage the history object
Create custom hooks and components such as _Link_ to manipulate the routing.

Create a State management using React Context and useRducer

Create a lot of custom hooks to read and manipulate the state and the router

</br>

### **Improve Developer Experience**

Add `baseUrl` property to `tsconfig.json` file to make the imports scripts easier to read for the developer.

Eslint disabled two lines of code since I cannot add an external function inside a dependency array otherwise it would generate an infinite loop of re-renders.

</br>

### **Biggest Challenges**

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

Which runs the app in the development mode.\
So, just open [http://localhost:3000](http://localhost:3000) to view it in the browser. Although, you will have only a limited amount of API calls available but it's ok, if you want to keep playing yo can add your own .env file with your own `API_KEY` and you can also add Github repo of your preference using `BASE_URL` like this:

```
REACT_APP_API_KEY={YOUR_API_KEY}
REACT_APP_BASE_URL=https://api.github.com/repos/{owner}/{repo}

```

or you can got to the [repo's website](https://pixel-github-explorer.herokuapp.com) to play as much as you want!

Please, let me know what you think and I hope you enjoy it! 🚀
