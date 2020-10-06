
let students = [];
class Student {

    constructor(name, id, major) {
        this.name=name;
        this.id=id;
        this.major=major;
    }
}



let subm = () => {
    

    let name = document.getElementById('name').value;
    
    let sid = document.getElementById('studentId').value;
    let majorId = document.getElementById('major').selectedIndex;
    let major = document.getElementById("major").options[majorId].innerHTML;

    let s = new Student(name, sid, major)
    x = students.push(s);
    console.log(students);
}

let search = () => {
    let name = document.getElementById('inputSearch').value;

    let i;
    for(i=0; i < students.length; i++) {
        if(students[i].name == name) {
            console.log(students[i]);
        }
    
    }


}