
export const renderPage = function() {
    // TODO: Copy your code from a04 to render the hero card
    return `<section>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <a href="http://nfl.com">
      <img src="logo.png" width="100" height="100">
    </a>
    <div class="navbar-brand">

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" onclick="window.open('index.html','_self')">
        Home
      </a>

      <a class="navbar-item" onclick="window.open('players.html', '_self')">
        Players
      </a>

      <a class="navbar-item" onclick="window.open('teams.html', '_self')">
        Teams
      </a>

      <a class="navbar-item" onclick="window.open('myTeam.html', '_self')">
        My Team
      </a>
      <a class="navbar-item">
      <form autocomplete="off" action="/player.html">
        <div class="autocomplete" style="width:300px;">
          <input id="myInput" type="text" name="player" placeholder="Player">
        </div>
        <input type="submit" value="Search">
      </form>
      </a>
  
      <!--  
        <a class="navbar-item">
          <input class="input" type="text" placeholder="Search">
        </a>
      -->
      
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info" onclick="window.open('signup.html', '_self')">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" onclick="window.open('signup.html', '_self')">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<div class="columns">
    <div class="column">
        <div class="tile is-ancestor is-vertical">
            <div class="tile is-primary is-vertical" style="text-align: center">
            ${getMVP()}
         </div>
        <div class="tile is-primary is-vertical">
            </div>
        </div>
    </div>
  <div class="column">
    <div class="tile is-ancestor is-vertical">
            <div class="tile is-primary is-vertical" >  
            ${getStarts()}
            </div>
        <div class="tile is-primary is-vertical">
            ${getSits()};
            </div>
        </div>
  </div>
  <div class="column">
    <a class="twitter-timeline" href="https://twitter.com/NFLFantasy?ref_src=twsrc%5Etfw">Tweets by NFLFantasy</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
</div>
    </section>`;

    //
};

function getStarts(){
  let result = '<article class="tile is-child notification is-primary"><p class="title" style="text-align: center"> Starts: </p>';
  
  //qbs
  let qCount = 0;
  for(let x = 0; x < playerData.length; x++){
    if(playerData[x].FantPos == "QB"){
      let team = teamData.find((t) => t.Team == playerData[x].Tm);
      result+= '<p class="subtitle is-6"><img class="image" style="display: inline-block; width: 15%; height: 15%" src='+team.Img +'><img class="image" style="display: inline-block; width: 20%; height: 20%" src='+playerData[x].Img +
      '> '+ playerData[x].Player + ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm + '</p>';
      qCount++;
    }
    if(qCount == 2){
      break;
    }
  }

  //rbs
  let rCount = 0;
  for(let x = 0; x < playerData.length; x++){
    if(playerData[x].FantPos == "RB"){
      let team = teamData.find((t) => t.Team == playerData[x].Tm);
      result+= '<p class="subtitle is-6"><img class="image" style="display: inline-block; width: 15%; height: 15%" src='+team.Img +'><img class="image" style="display: inline-block; width: 20%; height: 20%" src='+playerData[x].Img +
      '> '+ playerData[x].Player + ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm + '</p>';
      rCount++;
    }
    if(rCount == 2){
      break;
    }
  }

  //wrs
  let wCount = 0;
  for(let x = 0; x < playerData.length; x++){
    if(playerData[x].FantPos == "WR"){
      let team = teamData.find((t) => t.Team == playerData[x].Tm);
      result+= '<p class="subtitle is-6"><img class="image" style="display: inline-block; width: 15%; height: 15%" src='+team.Img +'><img class="image" style="display: inline-block; width: 20%; height: 20%" src='+playerData[x].Img +
      '> '+ playerData[x].Player + ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm + '</p>';
      wCount++;
    }
    if(wCount == 2){
      break;
    }
  }

  //tes
  let tCount = 0;
  for(let x = 0; x < playerData.length; x++){
    if(playerData[x].FantPos == "TE"){
      let team = teamData.find((t) => t.Team == playerData[x].Tm);
      result+= '<p class="subtitle is-6"><img class="image" style="display: inline-block; width: 15%; height: 15%" src='+team.Img +'><img class="image" style="display: inline-block; width: 20%; height: 20%" src='+playerData[x].Img +
      '> '+ playerData[x].Player + ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm + '</p>';
      tCount++;
    }
    if(tCount == 2){
      break;
    }
  }

  result+= '</article>';
  return result;
}

function getSits(){
  let result = '<article class="tile is-child notification is-danger"><p class="title" style="text-align: center"> Sits: </p>';
  
  //qbs
  let qCount = 0;
  for(let x = 0; x < playerData.length; x++){
    if(playerData[x].FantPos == "QB" && playerData[x].PosRank > 20){
      let team = teamData.find((t) => t.Team == playerData[x].Tm);
      result+= '<p class="subtitle is-6"><img class="image" style="display: inline-block; width: 15%; height: 15%" src='+team.Img +'><img class="image" style="display: inline-block; width: 20%; height: 20%" src='+playerData[x].Img +
      '> '+ playerData[x].Player + ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm + '</p>';
      
      qCount++;
    }
    if(qCount == 2){
      break;
    }
  }

  //rbs
  let rCount = 0;
  for(let x = 0; x < playerData.length; x++){
    if(playerData[x].FantPos == "RB" && playerData[x].PosRank > 20){
      let team = teamData.find((t) => t.Team == playerData[x].Tm);
      result+= '<p class="subtitle is-6"><img class="image" style="display: inline-block; width: 15%; height: 15%" src='+team.Img +'><img class="image" style="display: inline-block; width: 20%; height: 20%" src='+playerData[x].Img +
      '> '+ playerData[x].Player + ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm + '</p>';
      rCount++;
    }
    if(rCount == 2){
      break;
    }
  }

  //wrs
  let wCount = 0;
  for(let x = 0; x < playerData.length; x++){
    if(playerData[x].FantPos == "WR" && playerData[x].PosRank > 20){
      let team = teamData.find((t) => t.Team == playerData[x].Tm);
      result+= '<p class="subtitle is-6"><img class="image" style="display: inline-block; width: 15%; height: 15%" src='+team.Img +'><img class="image" style="display: inline-block; width: 20%; height: 20%" src='+playerData[x].Img +
      '> '+ playerData[x].Player + ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm + '</p>';
      wCount++;
    }
    if(wCount == 2){
      break;
    }
  }

  //tes
  let tCount = 0;
  for(let x = 0; x < playerData.length; x++){
    if(playerData[x].FantPos == "TE" && playerData[x].PosRank > 20){
      let team = teamData.find((t) => t.Team == playerData[x].Tm);
      result+= '<p class="subtitle is-6"><img class="image" style="display: inline-block; width: 15%; height: 15%" src='+team.Img +'><img class="image" style="display: inline-block; width: 20%; height: 20%" src='+playerData[x].Img +
      '> '+ playerData[x].Player + ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm + '</p>';
      tCount++;
    }
    if(tCount == 2){
      break;
    }
  }

  result+= '</article>';
  return result;
}

function getMVP(){
  let result = '<article class="tile is-child notification is-info"> <p class="title">Fantasy MVP Race: </p>';
  for(let x = 0; x <3; x++){
    result+='<img class="image container" style="height: 50%; width: 50%" src=' + playerData[x].Img + '>';
    result+='<div style="color: gold">';
    result+= '<p class="subtitle" style="text-align: center">'+ playerData[x].Player+ ', ' + playerData[x].FantPos + ', ' + playerData[x].Tm+'</p>';
    result+= '<p style="text-align: center">Fantasy Points: ' + playerData[x].PPR + '</p>';
    result+= '<p style="text-align: center">Pass Attempts: ' + playerData[x].PassAtt + '</p>';
    result+= '<p style="text-align: center">Pass Yards: ' + playerData[x].PassYds + '</p>';
    result+= '<p style="text-align: center">Pass TDs: ' + playerData[x].PassTD + '</p>';
    result+= '<p style="text-align: center">Rush Attempts: ' + playerData[x].RushAtt + '</p>';
    result+= '<p style="text-align: center">Rush Yards: ' + playerData[x].RushYds + '</p>';
    result+= '<p style="text-align: center">Rush TDs: ' + playerData[x].RushTD + '</p>';
    result+= '<p style="text-align: center">Receptions: ' + playerData[x].Rec + '</p>';
    result+= '<p style="text-align: center">Receiving Yards: ' + playerData[x].RecYds + '</p>';
    result+= '<p style="text-align: center">Receiving TDs: ' + playerData[x].RecTD + '</p>';
    result+='</div></br>';
    
  }
  result+='</article>';
  return result;
}



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadPage = function() {

     // Grab a jQuery reference to the root HTML element
     const $root = $('#root');
    
     
     $root.append(renderPage());
};


export async function buttonClick() {
  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });
  
  async function createAuthor(i, {Rk = '1',Player  = 'ChristianMcCaffrey', PlayerCode = 'McCaCh01', Tm = '', FantPos = '', Age = '', G = '', GS = '', Cmp = '', PassAtt = '', PassYds = '', PassTD = '', Int = '',
RushAtt = '', RushYds = '', Y = '', RushTD = '', Tgt = '', Rec = '', RecYds = '', RecTD = '', Fmb = '', FL = '', TD = '', _2PM = '', _2PP = '', FantPt = '', PPR = '', DKPt = '', FDPt = '', VBD = '', PosRank = '', OvRank = ''}) {
    return await pubRoot.post(`/players/` + i, {
      data: {Rk, Player, PlayerCode, Tm, FantPos, Age, G, GS, Cmp, PassAtt, PassYds, PassTD, Int, RushAtt, RushYds, Y, RushTD, Tgt, Rec, RecYds, RecTD, Fmb, FL, TD, _2PM, _2PP, FantPt, PPR, DKPt, FDPt, VBD, PosRank, OvRank}
    })
  }
  for (let i = 0; i < playerData.length; i++) {
    (async () => {
    await createAuthor(i, {
      Rk: playerData[i].Rk,
      Player: playerData[i].Player,
      PlayerCode: playerData[i].PlayerCode,
      Tm: playerData[i].Tm,
      FantPos: playerData[i].FantPos,
      Age: playerData[i].Age,
      G: playerData[i].G,
      GS: playerData[i].GS,
      Cmp: playerData[i].Cmp,
      PassAtt: playerData[i].PassAtt,
      PassYds: playerData[i].PassYds,
      PassTD: playerData[i].PassTD,
      Int: playerData[i].Int,
      RushAtt: playerData[i].RushAtt,
      RushYds: playerData[i].RushYds,
      Y: playerData[i].Y,
      RushTD: playerData[i].RushTD,
      Tgt: playerData[i].Tgt,
      Rec: playerData[i].Rec,
      RecYds: playerData[i].RecYds,
      RecTD: playerData[i].RecTD,
      Fmb: playerData[i].Fmb,
      FL: playerData[i].FL,
      TD: playerData[i].TD,
      _2PM: 0,
      _2PP: 0,
      FantPt: playerData[i].FantPt,
      PPR: playerData[i].PPR,
      DKPt: playerData[i].DKPt,
      FDPt: playerData[i].FDPt,
      VBD: playerData[i].VBD,
      PosRank: playerData[i].PosRank,
      OvRank: playerData[i].OvRank,

    });
    })();
  }
  
  alert("Done")
}


/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadPage();
    $(document).on("click", "#postBtn", buttonClick);
    var players = [];
    for(let x = 0; x < playerData.length; x++){
       players.push(playerData[x].Player);
    }
     autocomplete(document.getElementById("myInput"), players);                    
     //-- Nikhil - Start  
   });
 
 
 // Nikhil - Start
 
 function autocomplete(inp, arr) {
   /*the autocomplete function takes two arguments,
   the text field element and an array of possible autocompleted values:*/
   var currentFocus;
   /*execute a function when someone writes in the text field:*/
   inp.addEventListener("input", function(e) {
       var a, b, i, val = this.value;
       /*close any already open lists of autocompleted values*/
       closeAllLists();
       if (!val) { return false;}
       currentFocus = -1;
       /*create a DIV element that will contain the items (values):*/
       a = document.createElement("DIV");
       a.setAttribute("id", this.id + "autocomplete-list");
       a.setAttribute("class", "autocomplete-items");
       /*append the DIV element as a child of the autocomplete container:*/
       this.parentNode.appendChild(a);
       /*for each item in the array...*/
       for (i = 0; i < arr.length; i++) {
         /*check if the item starts with the same letters as the text field value:*/
         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
           /*create a DIV element for each matching element:*/
           b = document.createElement("DIV");
           /*make the matching letters bold:*/
           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
           b.innerHTML += arr[i].substr(val.length);
           /*insert a input field that will hold the current array item's value:*/
           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
           /*execute a function when someone clicks on the item value (DIV element):*/
               b.addEventListener("click", function(e) {
               /*insert the value for the autocomplete text field:*/
               inp.value = this.getElementsByTagName("input")[0].value;
               /*close the list of autocompleted values,
               (or any other open lists of autocompleted values:*/
               closeAllLists();
           });
           a.appendChild(b);
         }
       }
   });
   /*execute a function presses a key on the keyboard:*/
   inp.addEventListener("keydown", function(e) {
       var x = document.getElementById(this.id + "autocomplete-list");
       if (x) x = x.getElementsByTagName("div");
       if (e.keyCode == 40) {
         /*If the arrow DOWN key is pressed,
         increase the currentFocus variable:*/
         currentFocus++;
         /*and and make the current item more visible:*/
         addActive(x);
       } else if (e.keyCode == 38) { //up
         /*If the arrow UP key is pressed,
         decrease the currentFocus variable:*/
         currentFocus--;
         /*and and make the current item more visible:*/
         addActive(x);
       } else if (e.keyCode == 13) {
         /*If the ENTER key is pressed, prevent the form from being submitted,*/
         e.preventDefault();
         if (currentFocus > -1) {
           /*and simulate a click on the "active" item:*/
           if (x) x[currentFocus].click();
         }
       }
   });
   function addActive(x) {
     /*a function to classify an item as "active":*/
     if (!x) return false;
     /*start by removing the "active" class on all items:*/
     removeActive(x);
     if (currentFocus >= x.length) currentFocus = 0;
     if (currentFocus < 0) currentFocus = (x.length - 1);
     /*add class "autocomplete-active":*/
     x[currentFocus].classList.add("autocomplete-active");
   }
   function removeActive(x) {
     /*a function to remove the "active" class from all autocomplete items:*/
     for (var i = 0; i < x.length; i++) {
       x[i].classList.remove("autocomplete-active");
     }
   }
   function closeAllLists(elmnt) {
     /*close all autocomplete lists in the document,
     except the one passed as an argument:*/
     var x = document.getElementsByClassName("autocomplete-items");
     for (var i = 0; i < x.length; i++) {
       if (elmnt != x[i] && elmnt != inp) {
       x[i].parentNode.removeChild(x[i]);
     }
   }
 }
 /*execute a function when someone clicks in the document:*/
 document.addEventListener("click", function (e) {
     closeAllLists(e.target);
 });
}
