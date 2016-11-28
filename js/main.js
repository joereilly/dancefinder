// use jQuery to select the HTML elements we are going to manipulate //
var homeGoButton = $('#home button')
//var homeDropdown = $('#home select')
var countryDropdown = $('#home select[name=country]')
var decadeDropdown = $('#home select[name=decade]')
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
    var chosenCountry = countryDropdown.val();
    var chosenDecade = decadeDropdown.val();
//    console.log("You picked: " + chosenCountry + ' and ' + chosenDecade)
    
    // change the h1 in results
    $('#results h1').html("Dance tracks from " + chosenCountry + ', released in the ' + chosenDecade)
    
    var filters =
    [
        {
            key: 'country',
            value: chosenCountry
        },
        {
            key: 'decade',
            value: chosenDecade
            
            
        }
    ]
    
    homeSection.hide()
    resultsSection.show()
    
     // filter+sort people by user selection
    var resultsList = filterAndSortList(tracksList, filters);
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
 