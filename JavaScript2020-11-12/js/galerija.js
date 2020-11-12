let bestCode = new XMLHttpRequest(); //sukuriamas XMLHttpRequest objektas



document.querySelector('.show').onclick = function() {  // event'as po button paspaudimo
    if (bestCode.readyState === 4) {    // received
        if (bestCode.status === 200) {  // OK
            let pictureList = JSON.parse(bestCode.responseText); // parse response text to ... ???
            console.log(pictureList)   // issiconsolinu response - nebutinas.
            let newPicturesList = document.querySelector('.gallery ul'); //pasirenku galerijos ul kintamaji
            for (let i = 0; i < pictureList.length; i++) {  //iteruoju pro sarasa ir kiekvienai iteracijai atlieku..
                let li = document.createElement('li'); //sukuriu li elementa
                li.className = "col-sm-3"; //Prisikiriu li elementui klases
                newPicturesList.appendChild(li); //idedu li elementa i ul elementa
                let picImg = document.createElement('img'); // sukuriu img element.
                li.appendChild(picImg); // isidedu img element i li element.
                picImg.src = ('http://web-training.lt/img_api/img/' + pictureList[i]); //API img + piclist[0,1,2...]
                document.querySelector('button.show').style.display="none"; //paslepaiamas mygtukas
            }

            //double click change picture.
            let imgElements = document.querySelectorAll('.gallery ul li img'); //isidedu visus img elementus i masyva
            for (let j=0; j< imgElements.length; j++) { // iteruojo pro img elements
                imgElements[j].ondblclick = function (e) { // kiekvienam img elementui pridedu funkcija kuri :
                    e.target.src = ('https://www.erevollution.com/public/upload/citizen/48526.jpg'); //pakeicia src i nurodyta
                }
            }
        }
    }
};

document.querySelector('.mix').onclick = function () {
    if (bestCode.readyState === 4) {    // received
        if (bestCode.status === 200) {  // OK
            let pictureList = JSON.parse(bestCode.responseText); // parse response text to ... ???
            console.log(pictureList)  // issiconsolinu response - nebutinas.
            pictureList.sort(function (){return 0.5 - Math.random()}); //sumaisomi nuotrauku indeksai.
            let imgElementai2 = document.querySelectorAll('.gallery ul li img'); //isidedu visus img elementus i masyva
            for (let x = 0; x < imgElementai2.length; x++) { //Iteruoju elementus
                imgElementai2[x].src = ('http://web-training.lt/img_api/img/' + pictureList[x]); // API img + piclist[0,1,2...]
            }
            console.log(pictureList)  // issiconsolinu response, jog suzinoti kaip atrodo mixed pictureList - nebutinas.
        }
    }
}
//save current mixed picture list
document.querySelector('.save').onclick = function () {
    let currentMixedImagesList = document.querySelectorAll('.gallery ul li img');       //isidedu visus img elementus i masyva kad galeciau pasiimt .lenght ir iteruot
    let savedImages = [];                                                                      // susikuriu tuscia array i kuri sudesiu visa src info ir laikysiu
    for(let b = 0; b < currentMixedImagesList.length; b++){                                  // iteruoju jog paimciau kiekvieno elemento src ir ideciau i empty
        savedImages.push(currentMixedImagesList[b].src);                                     // pushinu kiekvieno currentMixedImagesList elemento src attribut i savedImages arr
        localStorage.setItem('finalSavedImages',JSON.stringify(savedImages)); // Issaugau atmintyje ir convertinu gaunama rezulata i JSON string'a
    }
    console.log(savedImages)                                               // issiconsolinu response, jog suzinoti kaip atrodo savedImages array -  nebutina.
    console.log(JSON.stringify(savedImages))                              // issiconsolinu response, jog suzinoti kaip atrodo savedImages stringify array -  nebutina.
    console.log(typeof(localStorage.getItem('finalSavedImages')));   // issiconsolinu response, koks mano response type -  nebutina.
}

document.querySelector('.show-saved').onclick = function () {
    let finalImages = localStorage.getItem("finalSavedImages");        // Pasigetinu issaugotus pics.
    console.log(finalImages)                                              //issiconsolinu response.
    finalImages = JSON.parse(finalImages);
    let newList = document.querySelector('.gallery ul');        //pasirenku  galerijos ul kintamaji
    for (let c = 0; c < finalImages.length; c++) {                     //iteruoju pro sarasa ir kiekvienai iteracijai atlieku..
        let li = document.createElement('li');                //sukuriu li elementa
        li.className = "col-sm-3";                                   //Prisikiriu li elementui klases
        newList.appendChild(li);                                    //idedu li elementa i ul elementa
        let picImg = document.createElement('img');        // sukuriu img element.
        li.appendChild(picImg);                                   // isidedu img element i li element.
        picImg.src = finalImages[c];
    }
}



// show button
let button = document.querySelector(".show-saved");                     // selectinu button
let finalSavedImages = localStorage.getItem('finalSavedImages');
if (typeof finalSavedImages === 'undefined' || finalSavedImages === null) {     // jeigu null(empty)
    button.style.display = "none";                                              // nerodyt
} else {                                                                        // kitu atveju
    button.style.display = "inline-block";                                      // rodyt
}


/*localStorage.removeItem('finalSavedImages')  */                               // istrint storage
bestCode.open('GET', 'http://web-training.lt/img_api/'); //requestas
bestCode.send(); //siunciama uzklausa
