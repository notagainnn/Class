

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// burger


document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
  e.preventDefault();
  let navSet = document.querySelectorAll('.trulia-nav > nav ul');

  for(let n=0;n<navSet.length;n++){
      navSet[n].classList.toggle('trulia-nav-mobilehide');
  }

});



// loop 
for (var i = 0; i < truliaCards.length; i++){
    
  // listener



  truliaCards[i].addEventListener('click',function(){
      
      // class -



      for (var q = 0; q < truliaCards.length; q++){
          truliaCards[q].classList.remove('trulia-featured-grid-item');
      } 

      // class +



      this.classList.add('trulia-featured-grid-item');

  });
}

  });  



