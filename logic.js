
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
    let studentsList = 'Students List<ul>';
    for(let i=0; i<students.length; i++) {
        studentsList += `<li>name:${students[i].name}, major:${students[i].major}, id: ${students[i].id}</li>`;
    }
    studentsList += '</ul>';
    document.getElementById('studentsList').innerHTML = studentsList;
    console.log(students);
}

let search = (index) => {
    if(index == 0){
        item= 'name';
    }
    if(index == 1){
        item = 'id';
    }
    let input = document.getElementById('inputSearch').value;

    for(let i=0; i < students.length; i++) {
        if (students[i][item].indexOf(input) != -1) {
            console.log(students[i]);
        }
    }
}

let sortA = () => {
    students.sort((a, b) => (a.name > b.name) ? 1 : -1);
    console.log(students);
}

let sortD = () => {
    students.sort((a, b) => (a.name < b.name) ? 1 : -1);
    console.log(students);
}