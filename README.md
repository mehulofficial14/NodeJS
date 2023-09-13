# Backend in NodeJS

## Getting Started

1. **Welcome**
* Complete Node course

2. **What is Node**
* Also known as NodeJS
* Open Source
* Cross Platform runtime environment
* Execute Javascript code outside of a browser
* Used to build backend services known as Application Programming Interfaces (APIs) that power the client applications (web app inside a web browser or mobile app running inside a mobile device) seen and interacted with by the user (just a surface)
* Services sitting on a server or in the cloud interact with the client applciations to store data, send emails, push notifications, kick of workflows
* Ideal for building fast, highly scalable, data-intensive, real-time apps to power client applications
* Easy to get started
* Used for prototyping and agile development
* Build superfact and highly scalable services
* Used in production by large companies
* Easy for Javascript developers to learn
* Largest ecosystem of open-source libraries

3. **Node Architecture**

* Javascript code that runs inside a browser that provides a runtime environment
* Browser has a Javascript Engine that converts Javascript code to Machine code
* Edge uses Chakra
* Firefox uses SpiderMonkey
* Chrome uses v8 (fastest Javascript Engine)
* Javascript behaves differently in different browsers
* The "document" object provides an environment in which the code can run but not present inside Node
* The v8 engine inside a C++ program is Node.exe that executes the Javascript code present in the environment provided by Node
* The "fs" object helps with working on file system
* The "http" object helps in listening to requests
* The environment provided by Node is different from the Chrome environment but the v8 engine is same
* Node is neither a language nor a framework

4. **How Node Works**

* The non-blocking/asynchronous nature of Node
* Single thread is used to handle multiple requests
* ASP.NET and Rails are synchronous nature where a single thread waits for a request to be completed before moving on to the next request
* Wait for availablity of threads in case of synchronous types of frameworks
* While a single thread is executing a query in the databse as a part of a request, it will also be used for another request while the query is executing
* Result of each request is put in an event queue and when Node finds it data-ready, it will process it
* Built for applications involving disk, network access, I/O intensive, realtime, data-intensive applications
* Not used for CPU-intensive applications like video encoding, image manipulation service as calculations are done by CPU

5. **Installing Node**

* To check the existance and version of node
```
node --version
```

6. **Your First Node Program**

* To run a javascript file (i.e. app.js)
```
node app.js
```
* Browser environement objects like window and document do not exist
* Other objects to work with files, operating system, network

7. **Course Structure**

* This README is in order of the course structure

## Node Module System

1. **Introduction**

* Learn about the Node Module System and different modules in the core of Node like os, fs, events, http
* Create own modules

2. **Global Object**

* Used log function to log on the console
```
console.log()
```
* The console object is a global object (can be accessed anywhere)
* Some global functions are setTimeout() (used to call after a delay), clearTimeout(), setInterval() (repeatedly call a function after an interval), clearInterval() (Used to stop calling the function repeatedly)
* Browsers have window object that represents global scope
* The function "console.log()" is prefixed automatically by the Javascript engine with "window" so it is treated like "window.console.log()"
* The below code declaring a variable like "var x = 1" is also present in the window object like "window.x" which is 1 in this case
* In Node, window objject is not present
* Use "global" in Node but this does NOT store variables