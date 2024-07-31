let clues = document.getElementById("clues");

// Get filename (after blabla.html?)
let file = "data/" + location.search.substring(1) + ".json";

fetch(file)
    .then(response => response.json())
    .then(data => {

        document.getElementById("header").innerHTML = data.header;
        document.title = document.title + " | " + data.title;

        for(let x=1; x<=data.clues.length; x++){

            let list = data.clues[x-1];
            
            let item = document.createElement('div');
            item.className = "item";
            
            let idx = document.createElement('div');
            idx.className = "index";
            idx.innerHTML = x.toString() + ".";
            item.appendChild(idx);
            
            for(let i=1; i<=list.length; i++){
                let emoji = list[i-1];
                let clue = document.createElement('button');
                clue.className = "clue";
                clue.title = "clue #" + i.toString();
                clue.innerHTML = "‎";
                clue.addEventListener("click", function(){
                    clue.innerHTML = emoji;
                });
                item.appendChild(clue);
            }
            
            clues.appendChild(item);
        }
        
    })
    .catch(error => console.error(error));


clues.style.display = "block";