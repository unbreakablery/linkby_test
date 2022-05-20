// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { 
//         console.log(i); 
//     }, i*1000);
// }

// setTimeout function callback is triggered after for loop is finished - so reault is 5 ,5, 5, 5, 5
// below is my solution - using IIFE - Immediately Invokced Function Expression

for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    })(i);
}