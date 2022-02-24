
# fullstack-interview-test

># Welcome to Pixel | GitHub Explore

<br />
<div align="center">
  <h3 align="center"><b>GitHub Explore</b></h3>
<a href="https://pixel-task-manager.herokuapp.com/">
    <img src="public/logo.png" alt="Logo" width="140">
</a>
</div>
<div align="center">
  <a href="https://pixel-task-manager.herokuapp.com/">Go to the site</a>
</div>
<br/>
<div>
  <p>
Hi👋, my name is Itzel!!  <em>Pixel | GitHub Explore</em> is a web app that allows you to explore all details related to this repo   
</p> 

<p>
Some things to keep in mind:

* I tried to use as less dependencies that usual just because I really like to play with my own custom hooks


 </p>

 <br />
    <a style="float:left" href="https://github.com/iampixel/pixel-taskmanager/tree/master/components" >Explore proyect</a>
    <a style="float:right" href="https://github.com/iampixel/pixel-taskmanager/issues">Report an issue</a>
  </div>

 <br />

---

## **Content**

[**Notes**](#notes)
  - [Views](#)
  - [Context for Router](#context-for-router)
  - [Context for State Management](#context-for-state-management)
  - [Improve Developer Experience](#improve-developer-experience)
  - [Biggest Challenges](#biggest-challenges)
  
[**Scripts**](#scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)

---

## **Notes :**

<br/>

### **Views**

The UI consists of 5 views:

* **Overview**: Displays a list of all the groups along with their completion status. Clicking on 
  a group should render the detail screen.

* **Detail**: Displays a list of all the tasks in the selected group and allows the user to toggle 
  the completion status of unlocked tasks.

</br>


### **Context for Router**

Create a router using React Context and React Reducer

Create custom hooks and components such as _Link_ to manipulate the browse history.

</br>

### **Context for State Management**

Create the app state management using React Context and history library to manage the browse history

Create custom hooks to create actions that will help us to manipulate the state.

</br>

### **Improve Developer Experience**

Add `baseUrl` property to `tsconfig.json` file to make the imports scripts easier to read for the developer.

Eslint disabled two lines of code since I cannot add an external function inside a dependency array otherwise it would generate an infinite loop of re-renders.

</br>

### **Biggest Challenges**

* Create the dynamic route paths, as these will depend on the existing and selected branch or commit.
  
</br>

</br>

## **Scripts**

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Deliverables

The main objects we'll be dealing with are:
- Commits
- Authors
- Branches
- PRs

We'd like to see a visual representation of the git history of this repo as a **JS web-app**, using the API previously described. To be specific, we'd like to see the following:
- A view where we can see the existing branches
- A branch detail view where we can see all the commits to one specific branch, with commit messages, authors and timestamps.
- A commit detail view where we can see the commit message, timestamp, number of files changed and author names / emails.
- A "PR" create view, where we can choose two branches (base and compare), and merge them together, just like Pull Requests work in Github. 
- A "PR" list view, where we see all created PRs and the following info: Author, Title, Description and Status (`Open`, `Closed`, `Merged`). If the status is `Open`, there should be a button that allows us to mark it as `Closed`.

For the **PR create view**, we'll ask the user for a PR title and description, and we'll give them 2 options: either save it (Status = `Open`), or merge it. Note that merge operations can fail due to conflicts or other reasons, so make sure you handle and show whatever error happens when merging. There's no need to do something about these errors other than show them in the frontend. After a successful merge, the PR should move to a `Merged` status.

 Thanks for your consideration, please let me know what you think. I hope you enjoy it! 🚀