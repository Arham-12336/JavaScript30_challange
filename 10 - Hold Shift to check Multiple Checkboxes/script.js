const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// This will be the array of all the checkboxes


let lastchecked;
//Then we will loop through the array of checkboxes and add a click event to each one
function handlecheck(e){
    // if the event and the shift key are pressed and the are checking the checkbox
    let inBetween =false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastchecked){
            inBetween= !inBetween;
            console.log('INbetween checkbox')
            }
            if(inBetween){
                checkbox.checked=true;
                
            }

                
            });
        // go ahead and what we please do
        // Here we will loop through the checkboxes and add 
    }
lastchecked=this;
}



checkboxes.forEach(checkbox => checkbox.addEventListener('click',handlecheck)
);
