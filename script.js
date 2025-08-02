/* 
  SDEV 153 IVY Final Project - script.js
  Sebastian Delgado
  08/01/2025
*/

function updateEvents() {
  const events = document.querySelectorAll("input[name='events']");
  const tripFormats = document.querySelectorAll("input[name='tripFormat']");
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

  // Hide certain types of trips based on the selected season
  if (season === "Summer") {
    document.querySelector("input[value='Winter Escape']").disabled = true;
    document.querySelector("input[value='Winter Escape']").checked = false;
  } else if (season === "Winter") {
    [
      "Beach Exploration", "Camp", "Beach Fishing", "Beach Relaxation",
      "Foliage", "Hikes", "Fishing", "Kids Camp"
    ].forEach(val => {
      const el = document.querySelector(`input[value='${val}']`);
      if (el) {
        el.disabled = true;
        el.checked = false;
      }
    });
  } else if (season === "Spring") {
    document.querySelector("input[value='Winter Escape']").disabled = true;
    document.querySelector("input[value='Winter Escape']").checked = false;
  } else if (season === "Fall") {
    [
      "Winter Escape", "Beach Exploration", "Camp", "Beach Fishing",
      "Beach Relaxation", "Kids Camp"
    ].forEach(val => {
      const el = document.querySelector(`input[value='${val}']`);
      if (el) {
        el.disabled = true;
        el.checked = false;
      }
    });
  } else {
    document.querySelectorAll("input[name='tripFormat']").forEach(format => {
      format.disabled = false;
    });
  }

  // Display the events that are available for that season and trip type
  if (season && tripFormat) {
    events.forEach(event => {
      const eventValue = event.value;
      switch (season) {
        case "Summer":
          switch (tripFormat) {
            case "Adventure":
              if (["Hikes", "Fishing"].includes(eventValue)) event.disabled = false;
              break;
            case "Relaxation":
              if (["Beach Relaxation", "Festivals"].includes(eventValue)) event.disabled = false;
              break;
            case "Family":
              if (["Kids Camp", "Festivals", "Hikes"].includes(eventValue)) event.disabled = false;
              break;
          }
          break;
        case "Winter":
          switch (tripFormat) {
            case "Adventure":
              if (["Skiing", "Snowboarding", "Snowshoeing", "Snowmobiling"].includes(eventValue)) event.disabled = false;
              break;
            case "Relaxation":
              if (["Snowshoeing", "Festivals"].includes(eventValue)) event.disabled = false;
              break;
            case "Family":
              if (["Skiing", "Snowboarding"].includes(eventValue)) event.disabled = false;
              break;
          }
          break;
        case "Spring":
          switch (tripFormat) {
            case "Adventure":
              if (["Hikes", "Fishing"].includes(eventValue)) event.disabled = false;
              break;
            case "Relaxation":
              if (["Festivals", "Foliage"].includes(eventValue)) event.disabled = false;
              break;
            case "Family":
              if (["Festivals", "Hikes"].includes(eventValue)) event.disabled = false;
              break;
          }
          break;
        case "Fall":
          switch (tripFormat) {
            case "Adventure":
              if (["Hikes", "Fishing"].includes(eventValue)) event.disabled = false;
              break;
            case "Relaxation":
              if (["Festivals", "Foliage"].includes(eventValue)) event.disabled = false;
              break;
            case "Family":
              if (["Festivals", "Hikes"].includes(eventValue)) event.disabled = false;
              break;
          }
          break;
      }
    });
  }
}

// Initialize events on load
document.addEventListener("DOMContentLoaded", updateEvents);

// Add event listeners to season and trip type radio buttons
document.querySelectorAll("input[name='season']").forEach(radio =>
  radio.addEventListener("change", updateEvents)
);
document.querySelectorAll("input[name='tripFormat']").forEach(radio =>
  radio.addEventListener("change", updateEvents)
);

// Add event listener to 'editOptions' button
const editOptionsButton = document.getElementById("editOptions");
const saveChangesButton = document.getElementById("saveChanges");
editOptionsButton.disabled = true; // Initially disable the button until season and trip type are selected

// Initially disable the save changes button and hide it
saveChangesButton.style.display = "none"; // Hide the button
saveChangesButton.disabled = true; // Disable it

// Enable the edit options button when a season and trip type are selected
document.querySelectorAll("input[name='season'], input[name='tripFormat']").forEach(input => {
  input.addEventListener("change", () => {
    if (
      document.querySelector("input[name='season']:checked") &&
      document.querySelector("input[name='tripFormat']:checked")
    ) {
      editOptionsButton.disabled = false;
    } else {
      editOptionsButton.disabled = true;
    }
  });
});

// Enable the save changes button when the edit options button is clicked
editOptionsButton.addEventListener("click", () => {
  saveChangesButton.disabled = false;
});

// Disable the edit options button when the save changes button is clicked
saveChangesButton.addEventListener("click", () => {
  editOptionsButton.disabled = true;
});

// Function to handle the 'editOptions' button click
editOptionsButton.addEventListener("click", editOptionsClick);

// Function to handle the 'saveChanges' button click
saveChangesButton.addEventListener("click", saveChangesClick);

// Function to handle edit options button click to allow changes to the events once the season and trip type have been selected
function editOptionsClick() {
  const seasonSelected = document.querySelector("input[name='season']:checked");
  const tripFormatSelected = document.querySelector("input[name='tripFormat']:checked");

  if (!seasonSelected || !tripFormatSelected) {
    alert("Please select a season and trip type before editing options.");
    return;
  }

  // Disable the edit options button to prevent multiple clicks
  editOptionsButton.disabled = true;
  // Enable the save changes button
  saveChangesButton.disabled = false;

  // Enable all checkboxes
  document.querySelectorAll("input[name='events']").forEach(event => {
    event.disabled = false;
  });
  document.querySelectorAll("input[name='tripFormat']").forEach(format => {
    format.disabled = false;
  });

  // Remove this click handler and add saveChangesClick
  this.removeEventListener("click", editOptionsClick);
  this.addEventListener("click", saveChangesClick);
}

// Function to handle save changes button click
function saveChangesClick(e) {
  const seasonSelected = document.querySelector("input[name='season']:checked");
  const tripFormatSelected = document.querySelector("input[name='tripFormat']:checked");

  if (!seasonSelected || !tripFormatSelected) {
    alert("Please select a season and trip type before saving changes.");
    return;
  }

  // Disable the save changes button to prevent multiple clicks
  saveChangesButton.disabled = true;

  // Prevent default button behavior
  if (e && typeof e.preventDefault === "function") e.preventDefault();

  document.querySelectorAll("input[name='events']").forEach(event => {
    event.disabled = true;
  });
  document.querySelectorAll("input[name='tripFormat']").forEach(format => {
    format.disabled = true;
  });

  // Function to handle form submission
  const form = document.getElementById("tripForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const confirmationMessage = document.getElementById("confirmationMessage");
      confirmationMessage.style.display = "block";
      this.reset();
    });
  }
}
