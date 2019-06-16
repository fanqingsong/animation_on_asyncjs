# async animation
> 页面动画采用async库实现。



~~

var async = require("async");

window.onload = () => {
    let salutions = document.querySelectorAll("#salutions>div");
    for(let one of salutions){
        one.style.display = "none";
    }

    async.waterfall([
        function(callback) {
            salutions[0].style.display = "flex";

            setTimeout(callback, 1000);
        },
        function(callback) {
            salutions[1].style.display = "flex";

            setTimeout(callback, 1000);
        },
        function(callback) {
            salutions[2].style.display = "flex";

            setTimeout(callback, 1000);
        },
        function(callback) {
            salutions[3].style.display = "flex";

            setTimeout(callback, 1000);
        },
        function(callback) {
            callback(null);
        }
    ], function (err, result) {
        // result now equals 'done'
    });
};
~~

## base project is from
  webpack多页面脚手架
- 详情可以查看此文章
  - https://bryanadamss.github.io/2018/01/02/webpack-multi-page/
