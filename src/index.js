import './css/style.css';
import './sass/index.scss';

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