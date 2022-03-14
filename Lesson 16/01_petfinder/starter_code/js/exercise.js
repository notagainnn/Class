
function selectPet(zuchini){

    // Get the specific pet data set
    const thePet = petData[zuchini];

    // Set the title
    document.querySelector('.petDisplayName').innerText = thePet.displayName;


    // Empty the specification data

    document.querySelector('.petsDataSpecs').innerHTML = "";

    let listData = "";
    // Add the space required, size, weight

    listData += "<dt>Space Required</dt>";
    listData += "<dd>" + thePet.spaceRequired + "</dd>";
 
    listData += "<dt>Weight</dt>";
    listData += "<dd>" + thePet.weight + "</dd>";

    listData += "<dt>Size</dt>";
    listData += "<dd>" + thePet.size + "</dd>";

    // Add logic to add the trainability and lap size images

    listData += "<dt>Trainability</dt>";

    if(thePet.trainability == true){
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-default.svg.png' alt=\"Yes\"/></dd>";
    }else{
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-unreadable.svg.png' alt=\"Yes\"/></dd>";
    }

    listData += "<dt>Fits on Lap</dt>";

    if(thePet.fitsOnLap == true){
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-default.svg.png' alt=\"Yes\"/></dd>";
    }else{
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-unreadable.svg.png' alt=\"Yes\"/></dd>";
    }

    // Add the foods (may require loop)
   
    listData += "<dt>Foods</dt>";
    listData += "<dd><ul>";

    for(let i=0;i<thePet.foods.length;i++){
        listData += "<li>"+ thePet.foods[i] +"</li>";
    }

    listData += "</ul></dd>";

    document.querySelector(".petsDataSpecs").innerHTML = listData;

    // Update the images

        // Set the big image
        document.querySelector('.photoLarge').setAttribute('src',thePet.images[0].img);

        document.querySelector('.photoLarge').setAttribute('alt',thePet.images[0].alt);

        // Add the thumbnails
        let theThumbnails = "";

        for(let i=0;i<thePet.images.length;i++){
            theThumbnails += "<a href=\""+ thePet.images[i].img + "\"><img class=\"photoThumb\" src='" + thePet.images[i].thumb + "' alt='" + thePet.images[i].thumb + "'/></a>";
        }
  
        document.querySelector('.thumbHaus').innerHTML = theThumbnails;

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        let theThumbnailTags = document.querySelectorAll('.thumbHaus > a');

        for(let i=0;i<theThumbnailTags.length;i++){
            theThumbnailTags[i].addEventListener('click',function(e){

                // Stop the A from running
                e.preventDefault();

                // Get the href of the A (this is our big image url)
                console.log(this);
                let theBigImageURL = this.getAttribute('href');

                // Get the alt of the img tag
                let theAlt = this.querySelector('.photoThumb').getAttribute('alt');

                // Set the big image alt and src
                document.querySelector('.photoLarge').setAttribute('src',theBigImageURL);

                document.querySelector('.photoLarge').setAttribute('alt',theAlt);
            });

        }
    
        document.querySelector('.idealFor').innerHTML = ""; 

        let idealOwner = "";
    for(let i=0;i<thePet.idealOwner.length;i++){
        idealOwner += "<li>" + thePet.idealOwner[i] + "</li>";
    }
    document.querySelector(".idealFor").innerHTML = idealOwner;

    let adoptionGroups = "";
    for(let i=0;i<thisPetData.adoption.length;i++){
        adoptionGroups += "<li><a href=\"" + thePet.adoption[i].url + "\" target=\"_blank\">" + thisPetData.adoption[i].name + "</a></li>";
    }
    document.querySelector(".adoptionGroups").innerHTML = adoptionGroups;





}



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");

    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){

        // Get the selected pet
        let selectedPet = document.querySelector('#petType').value;

        // call selectPet
        selectPet(selectedPet);

    });
});