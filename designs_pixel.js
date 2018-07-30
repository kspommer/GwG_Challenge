// Assign variables 
const submit = $("#submit");
const table = $("#pixelCanvas");
const selectedColor = $("#colorPicker");
       
// When submit button is clicked:
submit.on("click", function(event) {
  // stop refresh of browser
  event.preventDefault(); 

  // assign user-input fields
  const heightRows = $('#inputHeight').val();
  const widthColumns = $('#inputWidth').val();
  
  // clear canvas area of any prio tables
  table.empty(); 

  // call the function to make grid
  makeGrid(heightRows, widthColumns); 
  
  // When click on "Ok" of Color Picker
  $("td").on("click", function() {
    var newColor = selectedColor.val();
    console.log(newColor);   // FOR QA
    $(this).css("background-color", newColor);
  });
});
  
// Function to create the grid
function makeGrid(height, width) {  
  // Check for reasonable grid size
  if ((height && width <= 40) && (height && width > 0)) {
    // Create table rows based on user-entered height
    for (let i = 0; i < height; i++) {
      // add a row to the table
      table.append($("<tr></tr>"));
      // loop to add columns to each row based on user-entered width
      for (let j = 0; j < width; j++) {
        // add a table cell to the end of the row each loop 
        $("tr").last().append($("<td></td>"));
      }
    }    
  }   
  // Provide pop-up error message if value too large
  else if (height || width > 40) {
    window.alert("Please try again.");
  }    
}

