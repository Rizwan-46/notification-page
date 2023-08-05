
// var randomNumber = Math.floor(Math.random() * 7)+1;
// console.log(randomNumber)
// var unread  = document.querySelectorAll(".unread-mark");
// console.log(unread)
// var displayG = randomNumber[unread]
// displayG.Style.display = "block"
 
var box = $(".single-notification-box");
var unreadNumber = $(".unread-notification-number");
var markAsRead = $(".mark-read");
var unRead = $(".hello");

markAsRead.click(function (e) {
    if (box.hasClass("unread")) {
        box.removeClass("unread");
        box.addClass("read");
        unRead.css("display", "none")
        unreadNumber.text("0");
        markAsRead.css("display", "none")
    }
});
    
