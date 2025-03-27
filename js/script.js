// get the accordiaon element
let faqs = document.querySelector('#faqs');

// get all the h2 elements from the accordion
let h2Elements = faqs.getElementsByTagName('h2');

// add an event handler to each h2 element
const toggle = (e) => {
    // get the currently selected h2 element
    let h2 = e.currentTarget;
    // get the div for the currently selected h2 element
    let div = h2.nextElementSibling

    // handle removal of all calsses from h2 and div elemetns
    // loop through all h2 elements
    for (h2Element of h2Elements) {
        if (h2Element !== e.currentTarget) {
            //remove class from h2
            h2Element.removeAttribute('class');
            h2Element.nextElementSibling.removeAttribute('class');
        }
    }

   // toggle plus and minus icons
   if (h2.hasAttribute('class')) {
       h2.removeAttribute('class');
   } else {
       h2.setAttribute('class', 'minus');
   }  
    // toggle open/close panel for selected h2 element
    if (div.hasAttribute('class')) {
        div.removeAttribute('class');
    } else {
        dv.setAttribute('class', 'open');
    }  
   
}

//l loop through collection of h2 elements and attach toggle event handler to each
for (h2Elements of h2Elements) {
    h2Elements.addEventListener('click', toggle);
}