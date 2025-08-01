function updateEvents() {
  const events = document.querySelectorAll("input[name='events']");
  const tripFormats = document.querySelectorAll("input[name='tripFormat']")
  const season = document.querySelector("input[name='season']:checked")?.value;
  const tripFormat = document.querySelector("input[name='tripFormat']:checked")?.value;
  
  // Clear checkboxes first
  events.forEach(event => {
    event.checked = false;
    event.disabled = false;
  });
  tripFormats.forEach(format => {
	format.checked = false;
	format.disabled = false;
  });
  console.log(events, tripFormats, season, tripFormat)

  // Get the selected season and trip type
  let selectedSeason = season;
  let selectedTripFormat = tripFormat;
  console.log(season, tripFormat);

  // Hide certain types of trips based on the selected season
  if (selectedSeason === "Summer") {
    document.querySelector("input[value='Winter Escape']").disabled = true;
    document.querySelector("input[value='Winter Escape']").checked = false;
  } else if (selectedSeason === "Winter") {
    document.querySelector("input[value='Beach Exploration']").disabled = true;
    document.querySelector("input[value='Beach Exploration']").checked = false;
    document.querySelector("input[value='Camp']").disabled = true;
    document.querySelector("input[value='Camp']").checked = false;
    document.querySelector("input[value='Beach Fishing']").disabled = true;
    document.querySelector("input[value='Beach Fishing']").checked = false;
    document.querySelector("input[value='Beach Relaxation']").disabled = true;
    document.querySelector("input[value='Beach Relaxation']").checked = false;
    document.querySelector("input[value='Foliage']").disabled = true;
    document.querySelector("input[value='Foliage']").checked = false;
    document.querySelector("input[value='Hikes']").disabled = true;
    document.querySelector("input[value='Hikes']").checked = false;
    document.querySelector("input[value='Fishing']").disabled = true;
    document.querySelector("input[value='Fishing']").checked = false;
    document.querySelector("input[value='Kids Camp']").disabled = true;
    document.querySelector("input[value='Kids Camp']").checked = false;
  } else if (selectedSeason === "Spring") {
    document.querySelector("input[value='Winter Escape']").disabled = true;
    document.querySelector("input[value='Winter Escape']").checked = false;
  } else if (selectedSeason === "Fall") {
    document.querySelector("input[value='Winter Escape']").disabled = true;
    document.querySelector("input[value='Winter Escape']").checked = false;
    document.querySelector("input[value='Beach Exploration']").disabled = true;
    document.querySelector("input[value='Beach Exploration']").checked = false;
    document.querySelector("input[value='Camp']").disabled = true;
    document.querySelector("input[value='Camp']").checked = false;
    document.querySelector("input[value='Beach Fishing']").disabled = true;
    document.querySelector("input[value='Beach Fishing']").checked = false;
    document.querySelector("input[value='Beach Relaxation']").disabled = true;
    document.querySelector("input[value='Beach Relaxation']").checked = false;
    document.querySelector("input[value='Kids Camp']").disabled = true;
    document.querySelector("input[value='Kids Camp']").checked = false;
  } else {
	document.querySelectorAll("input[name='tripFormat']").disabled = false;
  }

  // Using the specifc season and trip type as an identifier, display the events that are available for that season

  if (selectedSeason && selectedTripFormat) {
  events.forEach(event => {
	let eventValue = event.value;

	switch (selectedSeason) {
	  case "Summer":
		switch (selectedTripFormat) {
		  case "Adventure":
			if (eventValue === "Hikes" || eventValue === "Fishing") {
			  event.disabled = false;
			}
			break;
		  case "Relaxation":
			if (eventValue === "Beach Relaxation" || eventValue === "Festivals") {
			  event.disabled = false;
			}
			break;
		  case "Family":
			if (eventValue === "Kids Camp" || eventValue === "Festivals" || eventValue === "Hikes") {
			  event.disabled = false;
			}
			break;
		}
		break;
	  case "Winter":
		switch (selectedTripFormat) {
		  case "Adventure":
			if (eventValue === "Skiing" || eventValue === "Snowboarding" || eventValue === "Snowshoeing" || eventValue === "Snowmobiling") {
			  event.disabled = false;
			}
			break;
		  case "Relaxation":
			if (eventValue === "Snowshoeing" || eventValue === "Festivals") {
			  event.disabled = false;
			}
			break;
		  case "Family":
			if (eventValue === "Skiing" || eventValue === "Snowboarding") {
			  event.disabled = false;
			}
			break;
		}
		break;
	  case "Spring":
		switch (selectedTripFormat) {
			case "Adventure":
			if (eventValue === "Hikes" || eventValue === "Fishing") {
			  event.disabled = false;
			}
			break;
		  case "Relaxation":
			if (eventValue === "Festivals" || eventValue === "Foliage") {
			  event.disabled = false;
			}
			break;
		  case "Family":
			if (eventValue === "Festivals" || eventValue === "Hikes") {
			  event.disabled = false;
			}
		}
		  
	  case "Fall":
		switch (selectedTripFormat) {
		  case "Adventure":
			if (eventValue === "Hikes" || eventValue === "Fishing") {
			  event.disabled = false;
			}
			break;
		  case "Relaxation":
			if (eventValue === "Festivals" || eventValue === "Foliage") {
			  event.disabled = false;
			}
			break;
		  case "Family":
			if (eventValue === "Festivals" || eventValue === "Hikes") {
			  event.disabled = false;
			}
			break;
		}
		break;
	  }
    });
  }
}




//Intilalize events on load
document.addEventListener("DOMContentLoaded", updateEvents)


// Add event listeners to season and trip type radio buttons
document.querySelectorAll("input[name='season']").forEach(radio =>
  radio.addEventListener("change", updateEvents))
document.querySelectorAll("input[name='tripFormat']").forEach(radio =>
  radio.addEventListener("change", updateEvents))
	
//Add event listener to 'editOptions' button
const editOptionsButton = document.getElementById("editOptions");
const saveChangesButton = document.getElementById("saveChanges");
editOptionsButton.disabled = true; // Initially disable the button until season and trip type are selected
saveChangesButton.disabled = true; // Initially disable the save changes button

document.editOptionsButton.addEventListener("click", editOptionsClick);
// Enable the edit options button when a season and trip type are selected
document.querySelectorAll("input[name='season'], input[name='tripFormat']").forEach(input => {
  input.addEventListener("change", () => {
    if (document.querySelector("input[name='season']:checked") && document.querySelector("input[name='tripFormat']:checked")) {
      editOptionsButton.disabled = false; // Enable the button
    } else {
      editOptionsButton.disabled = true; // Disable the button if not selected
    }
  });
});

// Enable the save changes button when the edit options button is clicked
editOptionsButton.addEventListener("click", () => {
  saveChangesButton.disabled = false; // Enable the save changes button
});

// Disable the edit options button when the save changes button is clicked
saveChangesButton.addEventListener("click", () => {
  editOptionsButton.disabled = true; // Disable the edit options button
});

// Function to handle the 'editOptions' button click
editOptionsButton.addEventListener("click", editOptionsClick);

// Function to handle the 'saveChanges' button click
saveChangesButton.addEventListener("click", saveChangesClick);



// Function to handle edit options button click to allow changes to the events once the season and trip type have been selected
function editOptionsClick() {
  // Check if a season and trip type are selected
  const seasonSelected = document.querySelector("input[name='season']:checked");
  const tripFormatSelected = document.querySelector("input[name='tripFormat']:checked");
  
  if (!seasonSelected || !tripFormatSelected) {
    alert("Please select a season and trip type before editing options.");
    return; // Exit the function if not selected
  }
  
  // If both are selected, proceed to enable the checkboxes
  console.log("Edit options clicked. Season:", seasonSelected.value, "Trip Format:", tripFormatSelected.value);
  
  // Disable the edit options button to prevent multiple clicks
  editOptionsButton.disabled = true;
  
  // Enable the save changes button
  saveChangesButton.disabled = false;

  // Get all checkboxes for events and trip formats
  const events = document.querySelectorAll("input[name='events']");
  const tripFormats = document.querySelectorAll("input[name='tripFormat']");
  
  // Enable all checkboxes
  events.forEach(event => {
	event.disabled = false;
  });
  tripFormats.forEach(format => {
	format.disabled = false;
  });
  
  // Add a click event listener to save changes
  this.removeEventListener("click", editOptionsClick);
  this.addEventListener("click", saveChangesClick);
}

// Function to handle save changes button click
function saveChangesClick() {
  // Check if a season and trip type are selected
  const seasonSelected = document.querySelector("input[name='season']:checked");
  const tripFormatSelected = document.querySelector("input[name='tripFormat']:checked");
  
  if (!seasonSelected || !tripFormatSelected) {
    alert("Please select a season and trip type before saving changes.");
    return; // Exit the function if not selected
  }
  
  // If both are selected, proceed to save changes
  console.log("Save changes clicked. Season:", seasonSelected.value, "Trip Format:", tripFormatSelected.value);
  
  // Disable the save changes button to prevent multiple clicks
  saveChangesButton.disabled = true;
  
  // Prevent default button behavior
  saveChangesButton.preventDefault(); // Prevent default button behavior
  const events = document.querySelectorAll("input[name='events']");
  const tripFormats = document.querySelectorAll("input[name='tripFormat']");
  
  // Disable all checkboxes
  events.forEach(event => {
	  event.disabled = true;
  });
  tripFormats.forEach(format => {
	  format.disabled = true;
  });
  // Add a click event listener to edit options again
  saveChangesButton.removeEventListener("click", saveChangesClick);
  editOptionsButton.addEventListener("click", editOptionsClick);
}
// Function to handle form submission
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Display confirmation message
  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.style.display = "block";
  
  // Optionally, you can clear the form fields after submission
  this.reset();
});
