const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");

xhr.onreadystatechange = function() {
    // Relationship: Wait for the physical state to be DONE (4)
    if (xhr.readyState === 4) {
        
        // Now check the logical status of the package
        if (xhr.status === 200) {
            console.log("Success! Data received.");
            // Logic for your sidebar requirement:
            // addCommentToSidebar(xhr.responseText);
            // showRedDotOnIcon();
        } else {
            console.error("The truck arrived, but the package is broken: " + xhr.status);
        }
    }
};

xhr.send();