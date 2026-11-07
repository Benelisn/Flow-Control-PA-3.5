/*
    Author: Joshua Farr
    Date: 11/7/2026
    Purpose: Display Greenway Park trails with a loop and recommend a trail based on pets and hiking experience
*/

/* =========================================
   GREENWAY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 },
    { name: "josfar6040 Overlook", difficulty: "medium", time: 60 },
    { name: "Cedar Creek Trail", difficulty: "low", time: 25 },
    { name: "Eagle Point Climb", difficulty: "high", time: 120 }
];
/* =========================================
   TODO: DISPLAY TRAILS VIA LOOP
========================================= */
const trailContainer = document.getElementById("trailContainer");

trails.forEach(function(trail) {
    trailContainer.innerHTML += `
        <article class="card">
            <h3>${trail.name}</h3>
            <p>Difficulty: ${trail.difficulty}</p>
            <p>Average Time: ${trail.time} minutes</p>
        </article>
    `;
});


/* =========================================
   TODO: FORM LOGIC
========================================= */
const trailForm = document.getElementById("trailForm");
const result = document.getElementById("result");

trailForm.addEventListener("submit", function(event) {
    // Stop the page from reloading
    event.preventDefault();

    const pets = document.querySelector('input[name="pets"]:checked').value;
    const experience = document.getElementById("experience").value;

    let recommendation = "";

    if (pets === "yes" && experience === "low") {
        recommendation = "River Walk";
    }
    else if (pets === "yes" && (experience === "medium" || experience === "high")) {
        recommendation = "Forest Loop";
    }
    else if (pets === "no" && experience === "low") {
        recommendation = "Lake Side Path";
    }
    else if (pets === "no" && experience === "medium") {
        recommendation = "Forest Loop";
    }
    else if (pets === "no" && experience === "high") {
        recommendation = "Rock Ridge Trail";
    }
    else {
        recommendation = "River Walk";
    }

    result.textContent = "Recommended Trail: " + recommendation;
});