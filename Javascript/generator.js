
export function genrateProject(projectList){
    console.log("part 2")
    let projectString =""
    projectList.forEach((element,index) => {
        console.log("part 3")
        projectString += 
        `<a href="${element.src}">
            <div class="project-${index}">
                <div class="project-img">
                    <img  src="${element.img}" alt="">
                </div>
                <div class="project-description">${element.judul}
                <p>${element.description}</p>
                </div>
            </div>
        </a>`
    });
    return projectString;
}