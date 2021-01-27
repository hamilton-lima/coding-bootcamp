
const key = 'tacocat';
const startValue = 0;

// reads FROM the browser
let counterString = localStorage.getItem(key);
let counter = 0;

// null, 0, undefined ----> false
if( counterString ){
    // this avoids 1 + 1 = 11
    counter = Number.parseInt(counterString);
    counter = counter +1;
    console.log('More tacos please', counter);

    // saves to the local storage in the browser
    localStorage.setItem(key, counter);
} else {
    console.log('Starting the tacocat journey');
    // saves to the local storage in the browser
    localStorage.setItem(key, startValue);
    counter = 1;
}

const tacos = document.getElementById("tacos");

var i = 0;
while(i < counter){
    const image = document.createElement("img");
    image.setAttribute ("width", "50px");
    image.setAttribute ("height", "50px");
    image.setAttribute ("src", "001_Tacos_de_carnitas_carne_asada_y_al_pastor.jpg");
    tacos.appendChild(image);
    i++;
}

