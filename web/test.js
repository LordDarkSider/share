//Data
let data = new Map([
    ["title", "Movies"],
    ["header", "🎞️"],
    ["clues", [
        ["🏟️", "⚔️", "🐅", "🏛️"],
        ["🕵‍♂️", "🇬🇧", "🔫", "🤵"],
        ["🤖", "🌃", "🕵️‍♂️", "🦄"],
        ["😡", "💪", "💥", "👮‍♂️"],
        ["✈️", "🎖️", "👍", "🎯"],
        ["😈", "🔪", "🚿", "😱"],
        ["🏜️", "🚀", "⚔️", "🙏"],
        ["💃", "🔫", "🍔", "💼"],
        ["🏃", "🪖", "🦐", "🪶"],
        ["⭐️", "🤖", "⚔️", "👨‍👦"],
        ["😴", "🏙️", "💡", "⌚"],
        ["😈", "🏨", "👨‍👩‍👦", "🪓"],
        ["👽", "👩‍🚀", "🥚", "💀"],
        ["🚗", "⌚", "🧓", "🎸"],
        ["👨‍🚀", "🌌", "⌚", "📚"],
        ["👨‍💻", "🕶️", "🤖", "💊"],
        ["🔵", "🌳", "❤️", "🐦"],
        ["🤖", "🦾", "🕶️", "⌚"],
        ["🦖", "🏞️", "👨‍🔬", "🧬"],
        ["🦈", "🏊‍♀️", "💀", "🏖️"],
        ["🏢", "💥", "👮", "🎄"],
        ["👰", "🤺", "🩸", "🟡"],
        ["🏴‍☠️", "⚓️", "🤪", "🏝️"],
        ["🧙‍♂️", "🏰", "👓", "⚡️"],
        ["🤠", "🗺️", "🔎", "🐍"],
        ["🚢", "❤️", "🥶", "💎"],
        ["🎲", "🐒", "🦏", "🚓"],
        ["👊", "👥️", "🧼", "🚬"],
        ["🕵‍♂️", "💀", "📦", "7️⃣"],
        ["💍", "🧙‍♂️", "⚔️", "👁️"]
    ]]
]);


// Test title and header
document.getElementById("header").innerHTML = data.get("header");
document.title = document.title + " | " + data.get("title");


// Test display of emojis
for(let x=1; x<=data.get("clues").length; x++){

    let list = data.get("clues")[x-1];
    
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