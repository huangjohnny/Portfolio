function openTab(tabName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
     console.log(tabName);
    
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    var mydiv = $("#scrollbox");
    mydiv.scrollTop(mydiv.prop("scrollHeight"));
    
    /*if (tabName == "Resume") { 
        document.getElementById("Resume").style.color = 'black';
    }
    else {
        document.getElementById("Resume").style.color = 'white';
    }
    */
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(".timeline-wrapper .timeline-content-item > span").on("mouseenter mouseleave", function(e){
  $(".timeline-wrapper .timeline-content-item.active").removeClass("active");
  $(this).parent().addClass("active");
});

var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};

x