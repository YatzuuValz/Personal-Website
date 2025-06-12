import { projectList } from "./Project.js";
import { genrateProject } from "./generator.js";

console.log("part 1")
let projectElem = document.querySelector(".project")
projectElem.innerHTML = genrateProject(projectList);