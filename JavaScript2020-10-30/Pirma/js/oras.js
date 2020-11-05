for (let i = 0; i < document.querySelectorAll("option").length; i++) {
    document.querySelectorAll("option")[i].addEventListener("click", function (){
        alert("I got clicked!");
    });
}



// const option = document.querySelector('option');
// function addStatus(){
//
// }
// option.addEventListener("select", addStatus);

// let link = 'https://api.meteo.lt/v1/places/' + document.getElementById("browser").value + '/forecasts/long-term'
// .open('GET', link);
// .send();