// Create an array of cities
const citiesList = ['nyc','lax','sfo','aus','syd'];


// When the page loads


    // Add the cities to the select

        // Loop through cities
        for(let i=0; i < citiesList.length; i++){
            // Create option for that city
            let newElement = document.createElement("option");

            // Set the text for that city
            newElement.innerText = citiesList[i];

            // Set the value attribute of the option
            newElement.value = citiesList[i];

            // Add to the select tag
            document.getElementById('city-type').appendChild(newElement);

        }

    // Bind change event of select to function that changes the background
    document.getElementById('city-type').addEventListener('change',function(thatWhichWasChanged){


        // Gets a city abbreviation as param.
        let theCityChosen = thatWhichWasChanged.target.value;

        // Figure out which class to use
        let theClass = "";
        if(theCityChosen.toLowerCase() == "nyc"){
            theClass = "nyc";
        }else if(theCityChosen.toLowerCase() == "lax"){
            theClass = "la";
        }else if(theCityChosen.toLowerCase() == "sfo"){
            theClass = "sf";
        }else if(theCityChosen.toLowerCase() == "aus"){
            theClass = "austin";
        }else {
            theClass = "sydney";
        }


        // Set the class of the body
        document.querySelector('body').setAttribute('class',theClass);

    });