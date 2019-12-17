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
We download and install Connect from the npm registry by using the following command :

> `npm install connect@3.4.0`

We then then add a minimal "Hello World" Connect application to try it out.

```js
const app = require('connect')();
app.use((req, res, next) => {
   res.end('Hello World!');
});
app.listen(3000);
```

### Understanding how Connect middleware works

In Connect, a ***middleware component*** is a **JavaScript function** that by convention accepts three (3) arguments: a **request object**, a **response object**, and an argument commonly named ***next**.   
Next is a _callback function_ indicating that the component is done and the subsequent middleware component can be executed.

Before the middleware runs, Connect uses a **dispatcher** that takes in requests and hands them off to the first middleware component added to the application.

![Life cycle of two HTTP requests making their way through the Connect server](/assets/requests_lifecycle.png "Connect HTTP request life cycle")

The design of the middleware API means that more-complex behavior can be composed of smaller building blocks. In the next section we will see how to do this by combining components.

### Combining middleware

