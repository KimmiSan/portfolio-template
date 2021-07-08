alert("Welcome to Kimmi's Porfolio");


const jobThree = {place:"Edelweiss+ by Above the Treeline", role:"Software Intern", year:"2021", description:""};
const jobTwo = {place:"Edelweiss+ by Above the Treeline", role:"QA Testing", year:"2020", description:""};
const jobOne = {place:"Edelweiss+ by Above the Treeline", role:"Software Intern", year:"2019", description:""};
const school = {place:"Washtenaw Community College", role:"Associate In Science, Programming in Java", year:"Graduated 2021", description:""}

const experiences = [school, jobOne, jobTwo, jobThree];










for (let x in experiences) {
let expDiv = document.createElement("div");
let expHeader = document.createElement("h3");
expHeader.setAttribute("class", "experience-organization")

expHeader.textContent = experiences[x].place;
expDiv.appendChild(expHeader);

let expSpan = document.createElement("span");
expSpan.textContent = " " + experiences[x].role + ", " + experiences[x].year;
expDiv.appendChild(expSpan);

let container = document.querySelector("#exp2");
container.appendChild(expDiv);
}