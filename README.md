# open_flourishing_vis: Code to visualise the network in the browser

This module is based on SigmaJS. We use browserfy to package the javascript
into a stand-alone script file that can be included in a webpage. 

We run 

```
browserify main.js -o bundle.js
````

in the nodejs_app folder to create the bundle.js file.

The graph GEXF xml is loaded into a javascript string (gexf_string.js). This
then allows the graph to be loaded as a javascript script too.

We add display_script.js to display the network.

Then, we can put it all together in html elements in display.html. These
elements, when included in a webpage, will display the network.
