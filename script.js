// localStorage.clear()
let data;

function populateDummyData() {
    data = {
        "cases": [
            {"id": 0, "name": "Strawberry", "isDeleted": false},
            {"id": 1, "name": "Blackberry", "isDeleted": false},
            {"id": 2, "name": "Blueberry", "isDeleted": false},
            {"id": 3, "name": "Cranberry", "isDeleted": false},
            {"id": 4, "name": "Raspberry", "isDeleted": false},
        ]
    }
    localStorage.setItem("cases", JSON.stringify(data));
    console.log("data populated");
}

function create() {
    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("required").firstChild.nodeValue = "Please enter the case name!";
    } else {
        data.cases.push({"id": data.cases.length, "name": name, "isDeleted": false});
        localStorage.setItem("cases", JSON.stringify(data));
        alert('Submitted!');
        window.location.href = 'index.html';
    }
}

function deleteCase(id) {
    data.cases[id].isDeleted = true;
    localStorage.setItem("cases", JSON.stringify(data));
    alert('Deleted!');
    window.location.href = 'manage.html';
}

function update(id) {
    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("required").firstChild.nodeValue = "Please enter the case name!";
    } else {
        data.cases[id].name = name
        localStorage.setItem("cases", JSON.stringify(data));
        alert('Updated!');
        window.location.href = 'manage.html';
    }
}

function loadData() {
    data = JSON.parse(localStorage.getItem("cases"));
    if (data != null) {
        console.log("data loaded successfully");
    } else {
        console.log("populating data");
        populateDummyData();
    }
}

function loadHeader() {
    document.write('<header><a href="index.html"><h1><img src="images/random-logo.svg" alt=""> ' + document.title +
        '</h1></a><a href="create.html">Create</a> | <a href="manage.html">Manage</a> | <a href="prevention.html">Prevention</a></header>');
}

function loadFooter() {
    document.write('<footer><p>'+ new Date().getFullYear() +' &copy; Nguyen Anh Tuan Le - N01414195</p></footer>');
}