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


// Function to handle edit options button click to allow changes to the events once the season and trip type have been selected

