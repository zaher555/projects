var nameInput=document.getElementById('nameInput');
var ageInput=document.getElementById('ageInput');
var nameError=document.getElementById('nameInputError');
var ageError=document.getElementById('ageInputError');
var table=document.getElementById('table');
var tableBody=document.getElementById('tableBody');
var arrObjects=[];
var data;
function addToTable()
{

        {
            if(nameInput.value.length==0)
            {
                nameError.innerText='this field is required';
                nameError.style.display='block';
            }
            else if(nameInput.value.length <=3)
            {
                nameError.innerText='name must be greater than 3';
                nameError.style.display='block';
            }
        }
        /*****************************************************************************************************************************************8 */

        {
            if(ageInput.value.length==0)
            {
                ageError.innerText='this field is required'
                ageError.style.display='block';
            }
            else if(Number(ageInput.value)<=18)
            {
                ageError.innerText='age must be greater than 18';
                ageError.style.display='block';
            }
        }
        if(nameInput.value.length!=0 && ageInput.value.length !=0 && nameInput.value.length>3 && Number(ageInput.value)>18)
        {
            nameError.style.display='none';
            ageError.style.display='none';

                        var data={
                            'name':nameInput.value,
                            'age':ageInput.value,
                        }
                        arrObjects.push(data);
                        show();
        }    
        /*****************************************************************************************************************************************8 */
}
function show(){
    var container=``;
    for(var i=0; i<arrObjects.length ; i++){
        container +=`
        <tr>
        <td>${i+1}</td>
        <td> ${arrObjects[i].name}</td>              
        <td>${arrObjects[i].age}
        </td>
        <td><div class="del"> 
        <button onclick="remove(${i})" class="remove">Delete</button>
        </td></div>
        </tr>`
    }
    tableBody.innerHTML=container;
}
        /*****************************************************************************************************************************************8 */
function remove(item){
    arrObjects.splice(item,1)
    show();
}

