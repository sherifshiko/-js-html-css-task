var information = [];
var emailInput = document.getElementById("email");
var nameInput = document.getElementById("name");
var webtInput = document.getElementById("content");
var infoview = document.getElementById("infoview");
var mainBtnApp = document.getElementById("mainBtnApp");
var selectedInformation = -1;

function btnApp() {
    if (mainBtnApp.innerHTML === "CREATE") {
        creat();
        
    }else{
        updateInformation()
    }
    
}

function creat(){
    var listObject ={
        title : emailInput.value ,
        name : nameInput.value,
        web : webtInput.value,
    }

    information.push(listObject);
    readInformation()
    cleanForm()
}

function readInformation() {
    var htmlCollection = ``;
    var index = 0;
    for (var info of information) {
         htmlCollection += `<div class="border rounded-4 ps-4 w-25 text-bg-dark bg-black mt-5 col-md-1">
            <div class="d-flex gap-2 justify-content-end pe-2 mt-1">
            <button class="text-bg-dark" onclick="editEmail(${index})"><i class="fa-solid fa-pen"></i></button>
            <button class="text-bg-dark" onclick="deletWeb(${index})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <h4>${info.title}</h4>
        <h5>${info.name}</h5>
        <a href="" class="text-success text-decoration-none">${info.web}</a>
        </div>`
        index++
    }
    infoview.innerHTML = htmlCollection
}

function deletWeb(index) {
    information.splice(index,1);
    readInformation();
    
}

function cleanForm() {
    emailInput.value = '';
    nameInput.value = '';
    webtInput.value = '';
    
}

function editEmail(index) {
    var selectListObject = information[index];

    emailInput.value = selectListObject.title;
    nameInput.value = selectListObject.name;
    webtInput.value = selectListObject.web;

    selectedInformation = index;

    mainBtnApp.innerHTML = "update";
}

function updateInformation() {
    var listObject ={
        title : emailInput.value ,
        name : nameInput.value,
        web : webtInput.value,
    }

    information[selectedInformation] = listObject;
    readInformation();
    cleanForm();
    mainBtnApp.innerHTML = "CREATE"
}