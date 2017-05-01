/**
 * Created by Edward_J_Apostol on 2017-04-28.
 */

require('file-loader?name=../dist/index.html!./index.html');

console.log("this is a test... this isn't even ---loading");
console.log("wtf");

import App from './App';

let app = new App();
