/* The MutationObserver interface provides the ability to watch for changes
being made to the DOM tree. It is designed as a replacement for the older
Mutation Events feature, which was part of the DOM3 Events specification.
 */

 // Constructor -  

 MutationObserver() // Creates and returns a new MutationObserver which will
//invoke a specified callback function when DOM changes occur.

// Methods

disconnect() //Stops the MutationObserver instance from receiving further
//notifications until and unless observe() is called again.
 observe()
//Configures the MutationObserver to begin receiving notifications through its
//callback function when DOM changes matching the given options occur.
takeRecords() //Removes all pending notifications from the MutationObserver's
//notification queue and returns them in a new Array of MutationRecord objects.


// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver


// Select the node that will be observed for mutations
const targetNode = document.getElementById('some-id');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();