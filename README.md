# CONNECT AND EXPRESS IN DEPTH

Welcome in this repository about learning [Connect](https://www.npmjs.com/package/connect) and [Express](http://expressjs.com/) . I have built a simple Express application in the repository called article reader where I just touch a glimpse of what express is and how it can be used to craft a web application rapidly.

In this repository, we are dive in more deeply in Express and Connect world. These two popular Node modules are used by many web developers.

We will study the following:

- Understand what Connect and Express are for,
- Using and creating middleware,
- Creating and configuring an Express application,
- Using key Express techniques for error handling, views and forms rendering,
- Using Express architectural techniques for routes, REST API, and authentication.

We will start by creating a basic Connect application. Later we will see how to build more complex Express application by using express popular techniques.

## Connect

According to npm registry website [npmjs](https://www.npmjs.com/), [Connect](https://www.npmjs.com/package/connect) is :

> is an extensible HTTP server framework for node using "plugins" known as middleware.

We will see how its middleware can be used to build simple web applications and how ***middleware ordering*** matters. This will help us build more modular Express applications later.

### Setting up a Connect application

**Express** is build on top of **Connect**. But we can use Connect alone to build a fully functionally web app.