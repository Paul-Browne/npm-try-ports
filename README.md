# npm-try-ports
try port eg. 8888, if in use try port +1, rinse and repeat.

### usage

`npm i try-ports`

or 

`npm i -D try-ports`


```js
const tryPorts = require("try-ports");

tryPorts(8888, port => {
	// callback with port equal to whatever port was free, starting at 8888
	// rest of your code goes here
}
```