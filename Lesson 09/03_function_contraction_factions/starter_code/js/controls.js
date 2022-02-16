// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(e){

    e.preventDefault();

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms
    let firstWord = document.querySelector("#firstWord").value.trim();
    let secondWord = document.querySelector("#secondWord").value.trim();

    // Create phrase to test by combining wordOne and wordTwo with a space

    let theTestPhrase = firstWord + " " + secondWord;


    // Note - there is already a function called "checkForConjunction(testPhrase)" that will return the conjunction OR false

        let theResult = checkForConjunction(theTestPhrase);

        // Test phrase
        if(theResult == false){
            // if Test Phrase returns false search phrase with words in reverse order
            theTestPhrase = secondWord + " " + firstWord;
            theResult = checkForConjunction(theTestPhrase);
        }

    // If return is true
    let output;
    let logRecord;
        if(theResult != false){
            // Set the output variable to the result
            output = theResult;

            // Set the log variable to wordOne wordTwo and the contraction
            logRecord = theResult + " " + firstWord + " " + secondWord;

        }else{
            // Set the output variable to "None Found"
            output = "None Found";

            // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags
            logRecord = firstWord + " " + secondWord;
        }

           


        // Update contractionResult
        document.getElementById('contractionResult').innerText = output;

        // Add wordOne + wordTwo + result to log
        let theLogElement = document.createElement('p');
        theLogElement.innerText = logRecord;
        document.querySelector(".playAreaResultsLog").appendChild(theLogElement)

    // Empty wordOne
    document.getElementById('firstWord').value = "";

    // Empty wordTwo
    document.getElementById('secondWord').value = "";


} // end conjunctionFormChecking





function resetAllForms(e){

    e.preventDefault();

    // Empty Result
    document.getElementById('contractionResult').innerText = "";

    // Empty wordOne
    document.getElementById('firstWord').value = "";

    // Empty wordTwo
    document.getElementById('secondWord').value = "";

    // Empty the log
    document.querySelector('.playAreaResultsLog').innerText ="";

} // resetAllForms




document.addEventListener('DOMContentLoaded', function(event) {

        // Bind conjunctionFormChecking to button
        document.getElementById('btnCheckConjunction').addEventListener('click', conjunctionFormChecking);

        // Bind reset to button
        document.querySelector("#btnReset").addEventListener('click',resetAllForms);

});