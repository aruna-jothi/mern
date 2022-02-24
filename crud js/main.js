var selectedRow = null;


function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
            insertNewRecord(formData)//pass formData objects here
    else
            update(formData);

    resetForm();
    
}

//read the data from first table and store that values in formData
function readFormData(){
    var formData = {}//create an object
    formData["fullName"] = document.getElementById("fullName").value 
    formData["email"] = document.getElementById("email").value 
    formData["empCode"] = document.getElementById("empCode").value 
    formData["salary"] = document.getElementById("salary").value 
    formData["city"] = document.getElementById("city").value 
    return formData

}

//Insert the newly entered data into the side table
function insertNewRecord(data){//pass the readed form data here

    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];//insert into 1st index of table body
    var newRow = table.insertRow(table.length);//insert a new  row by call the function insertRow
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.empCode;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.salary;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;//for edit and delete operations we already created empty th in html

}

//After submit the form we have to reset the values to initial stage

function resetForm(){
    document.getElementById("fullName").value = "";//reset the fullname value to empty string
    document.getElementById("email").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;

}

function update(formData){
    selectedRow.cells[0].innerHTML = formData.fullName ;
    selectedRow.cells[1].innerHTML = formData.email ;
    selectedRow.cells[2].innerHTML = formData.empCode ;
    selectedRow.cells[3].innerHTML = formData.salary ;
    selectedRow.cells[4].innerHTML = formData.city ;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("empList").deleteRow(row.rowIndex);
        resetForm();
    }
}
