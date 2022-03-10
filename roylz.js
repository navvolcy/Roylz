const league = [
    {
        pic : "./kayn.png",
        Name: "TwinCross14",
        Rank: "Silver IV",
        Roles:"Jungler",
        Champion:"Kayn"

},
{   
    pic : "./Ekko.png",
    Name: "Graciasp",
    Rank: "Gold IV",
    Roles:"Mid-Laner",
    Champion: "Ekko"

},              
{   
    pic : "./tristana-little-demon.png",
    Name: "Knowlty",
    Rank: "Bronze I",
    Roles:"Bot-Laner",
    Champion:"Tristana"

},
{   
    pic: "./lux.png",
    Name: "shimgro",
    Rank: "Silver IV",
    Roles:"Support",
    Champion: "Lux"

},
{   
    pic: "./Nasus.png",
    Name:"Franchement",
    Rank: "Silver III",
    Roles: "Top-Laner",
    Champion:"Nasus"

},
]
console.log("hello")

league.forEach(league =>{
    //create instance of the element specified for tag
    const container = document.createElement("div");
    const photoPic = document.createElement("img");
    const playList = document.createElement("ul");
    const players1 = document.createElement("li");
    const players2 = document.createElement("li");
    const players3 = document.createElement("li");
    const players4 = document.createElement("li");
    const players5 = document.createElement("li");


    //nesting the element tags 
    container.appendChild(playList);
    playList.appendChild(players1);
    playList.appendChild(players2);
    playList.appendChild(players3);
    playList.appendChild(players4);
    playList.appendChild(players5);
    players1.appendChild(photoPic);

    // creating the text
    const newPic = document.createTextNode(league.pic);
    const newContain = document.createTextNode(league.Name);
    const  newRank = document.createTextNode(league.Rank);
    const newRoles = document.createTextNode(league.Roles);
    const newChamp = document.createTextNode(league.Champion);

    // appending to each list tag
    players2.appendChild(newContain);
    players3.appendChild(newRank);
    players4.appendChild(newRoles);
    players5.appendChild(newChamp);



    photoPic.src = league.pic;



    document.body.appendChild(container);

});





   


   

    

