AngularJS Tooltips
==================


Angularjs Tooltips is a pure angularjs directive that generates a tooltip calendar on your element.


The Angularjs Tooltips is developed by [720kb](http://720kb.net).

##Requirements


AngularJS v1.2+

##Screen
![Angularjs tooltips](http://i.imgur.com/2rOwAbQ.png)

###Browser support


Chrome  ![ok](http://i.imgur.com/CK8qxk1.png)

Firefox ![ok](http://i.imgur.com/CK8qxk1.png)

Safari ![ok](http://i.imgur.com/CK8qxk1.png)

Opera ![ok](http://i.imgur.com/CK8qxk1.png)

IE    ![mmm](http://i.imgur.com/iAIwqCL.png)


## Load

To use the directive, include the javascript and css files of Angularjs Tooltips in your web page:

```html
<!DOCTYPE HTML>
<html>
<head>
  <script src="src/js/angular-tooltips.js"></script>
  <link href="src/css/angular-tooltips.css" rel="stylesheet" type="text/css" />
</head>
<body ng-app="app">
 //.....
</body>
</html>
```

##Install
Add the 720kb.tooltips module dependency

```js
angular.module('app', [
  '720kb.tooltips'
 ]);
```


Call the directive wherever you want in your html page

```html

<a href="#" tooltips title="tooltip">Tooltip me</a>

```
##Options
Angularjs tooltips allows you to use some options via `attribute`  data

####Tooltip position
You can set your tooltip to show on `left` or `right` or `top` or `bottom` position
using the `tooltip-side=""` attribute
```html
<a href="#" tooltips title="tip" tooltip-side="top">Tooltip me</a>
<a href="#" tooltips title="tip" tooltip-side="bottom">Tooltip me</a>
<a href="#" tooltips title="tip" tooltip-side="left">Tooltip me</a>
<a href="#" tooltips title="tip" tooltip-side="right">Tooltip me</a>
```
####Tooltip content
You can set your tooltip content (text/html doesn't matter)
using the `tooltip-content=""` attribute

```html
<a href="#" tooltips title="Tooltip" tooltip-content="<i>Woa!</i>">Tooltip me</a>
```

####Tooltip size
You can set your tooltip size (small || medium || large)
using the `tooltip-size=""` attribute

```html
<a href="#" tooltips title="tip" tooltip-size="small">Tooltip me</a>
<a href="#" tooltips title="tip"tooltip-size="medium">Tooltip me</a>
<a href="#" tooltips title="tip" tooltip-size="large">Tooltip me</a>
```

## Example

###[Live demo](https://720kb.github.io/angularjs-tooltips)


##Contributing

We will be much greatful if you help us making this project to grow up. 
Feel free to contribute by forking, opening issues, pull requests etc.

## License

The MIT License (MIT)

Copyright (c) 2014 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.