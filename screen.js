// Make a circle somewhere in the central area of the window that is 50px wide.It does not have to be a perfect circle.You can use a div with a radius setting to make it round.Give it an interesting background color.
// Make the circle grow by 10px every 250ms.
// Remove the circle when you click on it. Important, later in this exercises you'll make multiple circles. Each click should only 'pop' one circle. In other words, a single click should never remove all circles.
// Put 3 text inputs on the screen with labels:width, growth amount, interval. Also add a button labeled ‘Start’.When the button is clicked the circle should appear, this time with the specified width, growth size and interval for growing.
// Add another text input labeled ‘Number circles’ When the button is clicked put this number of circles spread around the screen and make all of them behave according to the above specifications.  An example is shown below with 12 circles that are growing to take over the screen unless the user clicks on them to erase them.  Your solution does not need to look exactly like this. But the circles should be able to overlap!
// Upload the html, js, and css files to your website / homepage, and the usual comment to the Sakai site including link to your home page
// Use jQuery best practices such as creating elements using an object literal with attributes and values, event delegation, building a collection and adding the entire collection to the DOM rather than every element in the collection.
// Optional Extra (to show how good you are):  Make the circles become gradually less opaque as your mouse moves across them.  Make them return to full opacity when the mouse leaves them.

$(()=>{

    var width = 50;
    var growthAmt = 10;
    var interval = 2500;

    createCircle();

    function createCircle(){
        $(".circlearea").append("<div class='circle'></div>");
        setInterval(() => {
            $(".circle").width(parseInt($(".circle").width()) + growthAmt/2);
            $(".circle").height(parseInt($(".circle").height()) + growthAmt/2);
        }, interval);

        $(".circle").click((e)=> {
            $(e.target).remove();
        });

        $('.circle').each(function(){
            // $(this).css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight}).textillate();
        });
    }

    $("#create").click(()=> {
        createCircle();
    });

})


