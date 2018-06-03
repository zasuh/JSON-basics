//Decoding the string
data = JSON.parse(data);

// Accessing the data
console.log(data[1].name); // Gimli

// Looping through every item in the JSON string
for (var i = 0; i < data.length; i++){
    console.log(data[i].name + ' is a ' + data[i].race + '.'); 
}

// Accessing the data through a URL
const request = new XMLHttpRequest();
request.open('GET', 'data.json', true);

request.onload = function () {
    // This is where you acces the JSON data once the request is completed.
    const data = JSON.parse(this.response);

    for (var i = 0; i < data.length; i++){
        console.log(data[i].name + ' is a ' + data[i].race + '.'); 
    }
}

request.send();

// Using the Fetch API
fetch('./data.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    // Do something with errors in here
})