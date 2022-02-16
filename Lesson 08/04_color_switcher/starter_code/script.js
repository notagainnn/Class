// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

//gray mode
function turnItGray(){
//target body tag and turn grey
    document.querySelector('body').setAttribute('class', 'grayMode');
}
    

//light mode
function turnItWhite(){
    document.querySelector('body').classList.remove('grayMode');
}
    // target body and turn white




//listen for gray click
document.querySelector("#grayButton").addEventListener("click", turnItGray);
//listen for white click
document.querySelector("#whiteButton").addEventListener("click", turnItWhite);


