function() {
  // Initialize a string to hold the current consent status
  var currentConsent = "\n"; 

  // Access the 'dataLayer' object of the current window, if it exists
  var dl = window.dataLayer; 

  if(dl){ // Check if the dataLayer exists
    // Iterate backward through the dataLayer array
    for (var i = dl.length - 1; i >= 0; i--) { 
      // Check if the current element is a 'consent' object
      if (dl[i]["0"] === "consent") { 
        // Store the consent object for further processing
        consentObject = dl[i]; 

        // Get and sort the keys of the consent details
        var sortedKeys = Object.keys(consentObject["2"]).sort(); 
        for (var j = 0; j < sortedKeys.length; j++) { // Iterate over the sorted keys
          var key = sortedKeys[j]; // Current key in the consent object

          // Append the key and its value to the currentConsent string
          currentConsent += key + ": " + consentObject["2"][key] + "\n"; 
        }
        // Return the compiled string of consent information
        return currentConsent; 
      }
    }
  }
  // Return null if no consent information is found in the dataLayer
  return null; 
}
