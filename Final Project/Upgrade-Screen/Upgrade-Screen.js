
document.getElementById("back-button").addEventListener("click", function(){
    sessionStorage.removeItem("ship_in_progress");
    window.location.href = "../Pilot-Screen/Pilot-Screen.html";
  });
  document.getElementById("done-button").addEventListener("click", function(){
    let overlay = document.getElementById("overlay");
    let roster_number_box = document.getElementById("roster-number-box");
    overlay.style.opacity = 1;
    roster_number_box.style.visibility = "visible";
    overlay.style.pointerEvents = "all";
  });
  /*
  document.getElementById("ok-button").addEventListener("click", function(){
       // Add ship to the new team, then add the new team to all teams.
       let new_team = JSON.parse(sessionStorage.getItem("new_team"));
       new_team.ship_list.push(ship_in_progress);
       let all_teams = JSON.parse(sessionStorage.getItem("all_teams"));
       all_teams.push(new_team);
       console.log(all_teams);
       sessionStorage.setItem("all_teams", JSON.stringify(all_teams));
       sessionStorage.removeItem("chosenShip");
       window.location.href = "../Team-Screen/Team-Screen.html";

  })

document.getElementById("close-button").addEventListener("click", function(){

})*/


  //Get data objects needed for this page.
  let ship_in_progress = JSON.parse(sessionStorage.getItem("ship_in_progress"));
  var game_data= JSON.parse(sessionStorage.getItem("game_data"));
  console.log(ship_in_progress);
//Set pilot image of chosen pilot.
document.getElementById("pilot-picture").style.backgroundImage = "url('"+ship_in_progress.chosen_pilot.image_path+"')";


//I will be making a loop that will paste all of the upgrades a ship into the next available picture and then set the next empty to next selection.
let grid_items = document.getElementsByClassName("grid-item");
document.getElementById("next-selection").id = "empty";
ship_in_progress.upgrades.forEach(upgrade =>{
   let element = document.getElementById("empty");
   element.style.backgroundImage = "url('"+upgrade.image_path+"')"
   element.id = "taken";
})
if(ship_in_progress.upgrades.length <=12)
{
  document.getElementById("empty").id = "next-selection";
}

let next_upgrade_slot = document.getElementById("next-selection");
next_upgrade_slot.addEventListener("click",function(){
  window.location.href = "./upgrade-type-selection-screen/upgrade-type-selection-screen.html";
})
