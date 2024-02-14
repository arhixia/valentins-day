function changeCaption() {
    var caption = document.getElementById("caption");
    var message = document.getElementById("message");

    if (caption.innerText === "Click me") {
        caption.style.display = "none";
        message.style.display = "block";
    } else {
        caption.style.display = "block";
        message.style.display = "none";
    }
}
