
const key = 'tacocat';
const startValue = 0;

// reads FROM the browser
let counterString = localStorage.getItem(key);
let counter = 0;

// null, 0, undefined ----> false
if( !counterString ){
    console.log('Starting the tacocat journey');
    // saves to the local storage in the browser
    localStorage.setItem(key, startValue);
    counter = 1;
} else {
    // this avoids 1 + 1 = 11
    counter = Number.parseInt(counterString);
    counter = counter +1;
    console.log('More tacos please', counter);

    // saves to the local storage in the browser
    localStorage.setItem(key, counter);
}

const display = document.getElementById("counter");
const text = document.createTextNode(counter);
display.appendChild(text);