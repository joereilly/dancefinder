// use jQuery to select the HTML elements we are going to manipulate //
var homeGoButton = $('#home button')
var homeDropdown = $('#home select')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsOL = $('#results ol');
var detailsInfo = $('#details #info')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')

//tell the button to do something when we click it

homeGoButton.click(function(){
    
    // capture the user chosen option
    var chosenOption = homeDropdown.val();
    console.log("You picked: " + chosenOption)
    
    homeSection.hide()
    resultsSection.show()
    
     // filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, chosenOption);
    console.log(resultsList);
    
    // show the results in the #results section
    showList(resultsList, resultsOL);
    
    // what happens when someone clicks on a result?
    $('#results li').click( function() {
        // grab the id from the clicked item
            var resultId = $(this).attr('id')
            // use the id to get the right data
            var resultData = resultsList[resultId]
            console.log(resultData)
            // call the function showDetails()
            showDetails(resultData, detailsInfo)
            // show the details!
            resultsSection.hide()
            detailsSection.show()

            function showDetails (data, interfaceElement) 

            {
              var detailsHTML = makeDetailsHTML(data)
              interfaceElement.html(detailsHTML)
            }

        })
})

//

resultsBackButton.click(function(){
    resultsSection.hide()
    homeSection.show()  
})
detailsBackButton.click(function(){
    detailsSection.hide()
    resultsSection.show()  

})

//
 