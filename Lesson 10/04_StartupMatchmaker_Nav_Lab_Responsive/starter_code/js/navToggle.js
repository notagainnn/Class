document.addEventListener('DOMContentLoaded', function(event) {

//click 
    document.querySelector(".nav-toggle").addEventListener("click", function(e){

// stop link
        e.preventDefault();
// toggle
        document.querySelector(".main-nav").classlist.toggle("main-nav-mobilehide");
    });
});