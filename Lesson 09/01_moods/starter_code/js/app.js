//wait for the DOM elements to load before executing
document.addEventListener('DOMContentLoaded', function(event) {
    // Create a function that runs whenever the submit button is clicked
    function processTheMood(e){
        //prevent the submit button from refreshing the page
            e.preventDefault ();


        //Create a variable called moodvalue and get the value of the #mood input
            let moodvalue = document.querySelector("#mood").value;


        //Correct for capitalization
            moodvalue = moodvalue.toLowerCase().trim();
        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        if(moodvalue == "excited" || moodvalue == "ecstatic" || moodvalue == "fantastic"){
            document.querySelector(".moodring > div").setAttribute("class","excited")
        }

        // if the user inputs happy/good/great change the CSS class to 'happy'
        if(moodvalue == "happy" || moodvalue == "good" || moodvalue == "great"){
            document.querySelector(".moodring > div").setAttribute("class","happy")
        }
        // if the user inputs bad/angry change the CSS class to 'bad'
        if(moodvalue == "bad" || moodvalue == "bad"){
            document.querySelector(".moodring > div").setAttribute("class","bad")
        }
    };

    // Listen for user interaction on the submit button.
document.querySelector("#submit-btn").addEventListener('click',processTheMood);
});