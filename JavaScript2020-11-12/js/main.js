




mygtukasKurkLentele.addEventListener('click', kurk);

function kurk(){
    var eilutes = document.querySelector("input[name='eilute']").value;
    var stulpeliai = document.querySelector("input[name='stulpelis']").value;
    var klaida = document.querySelector(".message");

    if(eilutes && stulpeliai) {
        klaida.innerHTML="";
        var table = document.createElement('table'),tr,td,eilute,langelis;
            for (eilute = 0; eilute < eilutes; eilute++){
            tr = document.createElement('tr');
            for (langelis = 0; langelis < stulpeliai; langelis++) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = "...";
            }
            table.appendChild(tr);
        }
            document.getElementById('table').appendChild(table);

    } else {
        klaida.innerHTML='<span class="klaida">Neisvestas eiluciu ir stulpeliu skaicius</span>';
    }
}


