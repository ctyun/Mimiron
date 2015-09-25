# Mimiron
=======

简介
------
这是一个React组件库.
Mimiron是出现在World of Warcraft, Hearth Stone等作品中可组合的机器人, 我们以此命名这个工程, 希望我们的组件库和Mimiron一样灵活, 稳定, 强大.

特点
------
极少依赖第三方组件, 不依赖"rc-XXX", 可定制能力强.

What is include
------
1. using webpack to pack js files and run debug server.
2. using yuidoc to create documents.
3. using npm to download and manage packages.

How to start
------
1. 'npm install webpack -g'
2. 'npm install' 
3. 'npm start'
4.  open your browser and go to `http://127.0.0.1:3000/webpack-dev-server/client?http://0.0.0.0:3000`
5. if you want to release js file , use `webpack --config webpack.config.min.js`

How to use the yuidoc to create documents
------
0. please read the document < YUIDOC-README.md > 
1. install yuidoc: `npm install yuidocjs -g`
2. execute command in the root directory: in the root: `yuidoc`

Notice
------
the components are under develop, so you may see many dirty codes in them.

Known bugs
------
1. in packing, there are double warnings: 
```
WARNING in ./~/jquery/dist/jquery.js
There is another module with an equal name when case is ignored.
This can lead to unexpected behavior when compiling on a filesystem with other c
ase-semantic.
Rename module if multiple modules are expected or use equal casing if one module
 is expected.

WARNING in ./~/jQuery/dist/jquery.js
There is another module with an equal name when case is ignored.
This can lead to unexpected behavior when compiling on a filesystem with other c
ase-semantic.
Rename module if multiple modules are expected or use equal casing if one module
 is expected.
 ```
 we still can not figure them.


Reference
--------
1. react-hot-loader documents: http://gaearon.github.io/react-hot-loader/getstarted/
2. react-hot-loader demo: https://github.com/gaearon/react-hot-boilerplate/
3. package a separate css file: http://webpack.github.io/docs/stylesheets.html#separate-css-bundle

发布方法
-------
`webpack --config webpack.config.min.js` 去*dist/*目录下取打包完成文件.