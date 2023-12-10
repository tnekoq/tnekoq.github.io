function openTomato(evt, tomatoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tomatoName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("defaultOpen").click();
});
