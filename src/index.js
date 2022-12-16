// var h1 = document.createElement("h1");
// h1.innerHTML = "Welcome to Dynamic Island"
// document.getElementById("d1").appendChild(h1); /* this will create second child in div 1 */

// declarative  language - what to do , where to do

const React =  require("react") // to fetch react module
const ReactDOM = require("react-dom") // to get react dom

// react use complier behind the scene for frontend js : babel
// babel convert the code into browser compatible javascript

// JSX code

ReactDOM.render(<h1>Welcome to my webpage</h1>, document.getElementById("root"))