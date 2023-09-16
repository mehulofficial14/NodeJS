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
* In Node, window object is not present
* Use "global" in Node but this does not store variables

3. **Modules**

* A function defined in browser can be overwritten by the function of the same name declared in another file
* The "window" object overwrites the function
* Building modules (encapsulation) eleminates overwriting of functions and variables
* Every file in Node is a module and the functions and variables are private to the module
* The export is used to use functions and variables outside a module by making it public
* The "module" object is not global

4. **Creating a Module**

* Create a file having a function and a variable and print the module to check the exports in that file
* Use the following to get the list of exports in a module
```
console.log(module);
```

5. **Loading a Module**

* Use the require() function to load a module that is not present in browsers
* Requires path of the module to be loaded
* Use "const" to store the module
* Use "jshint" to get the errors in the module
```
jshint app.js
```
* The export of single fnction instead of object
```
module.exports = log;
```

6. **Module Wrapper Function**

* Code inside a file is wrapped inside a function by default that has many parameters local to the module
* IIFE (Immediately-invoked Function Expression) is the function and is used to create the scope

7. **Path Module**

* Useful inbuilt modules in Node like filesystem, http, query strings, path, os, process, stream
* Arguement without path in require() function is assumed to be a built-in module in Node
* The "path" module has a function called parse() that helps in getting details of the path

8. **OS Module**

* Many in-built functions like freemem(), totalmem(), userInfo(), uptime()
* Use of ECMA Script (or ES6 or ES2015)
```
var totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory}`);
```
* Node helps in executing code outside of the browser

9. **File System Module**

* Working with files using the "fs" module
* Functions in "fs" of synchronous and asynchronous type
* Use asynchronous functions in applications to serve many clients 
* Requires a function as an arguement that is called after the asynchronous process is completed (a callback)
* 

10. **Events Module**

* Event is a signal that something occured in the application
* Event is raised in Node
* Event contains many classes (container for properties and functions also known as methods)
* Class is used by making a new object of it
* Classes define the properties and behaviour
* Actual instance of a class is an object
* The emit() function is used to raise an event or raise a signal
* The listener function is called when a signal is raised
* The listner contains a callback function that is executed when the signal is raised or the event is triggered
* The event or signal is raised after registering a listner
* The event calls all the listners to check the appropriate listner in a synchronous manner

11. **Event Arguements**

* Emitter sending data about the event to the listner
* Sending data in the form an encapsulation or an object called event arguement
* The "function" keyword is eliminated and the arguements are seperated with the body by the arrow function or "=>"

12. **Extending EventEmitter**

* The EventEmitter object is rarely used
* Create and use class having all capabilities of the EventEmitter class
* Function inside a class is a method

13. **HTTP Module**

* Creating network in applications
* Server listens on port number and raises an event whenever there is a new request
* Code gets more complex using "http" module
* Use "express" instead