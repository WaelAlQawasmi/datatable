

const person1 = {name:"John", age:30, Position:"maeger",Office:"2nd floor"};
const person2 = {name:"wael", age:25, Position:"team leder",Office:"3rd floor"};
const person3 = {name:"yazan", age:20,  Position:"devloper",Office:"1st floor"};
const person4 = {name:"ahmad", age:40,  Position:"admin",Office:"0st floor"};


persons=[person1, person2, person3,person4];

persons.forEach(element => {
    let person1Tr = document.createElement("tr");
person1Tr.innerHTML= ` <td>${element.name}</td><td data-order=\"${element.age}\"><span type=\"text\" id=\"row-2-age\" name=\"row-2-age\">  one-${element.age}</span></td><td><input type=\"text\" id=\"row-1-position\" name=\"row-1-position\" value=\"${element.Position}\"></td>  <td>${element.Office}</td>
`;
document.getElementById("TableBody").appendChild(person1Tr);
});



/* Create an array with the values of all the input boxes in a column */
$.fn.dataTable.ext.order['dom-text'] = function (settings, col) {
    return this.api()
        .column(col, { order: 'index' })
        .nodes()
        .map(function (td, i) {
            return $('input', td).val();
        });
};
 
/* Create an array with the values of all the input boxes in a column, parsed as numbers */
// $.fn.dataTable.ext.order['dom-text-numeric'] = function (settings, col) {
//     return this.api()
//         .column(col, { order: 'index' })
//         .nodes()
//         .map(function (td, i) {
//             return $('span', td).data();
//         });
// };
 
/* Create an array with the values of all the select options in a column */
$.fn.dataTable.ext.order['dom-select'] = function (settings, col) {
    return this.api()
        .column(col, { order: 'index' })
        .nodes()
        .map(function (td, i) {
            return $('select', td).val();
        });
};
 
/* Create an array with the values of all the checkboxes in a column */
$.fn.dataTable.ext.order['dom-checkbox'] = function (settings, col) {
    return this.api()
        .column(col, { order: 'index' })
        .nodes()
        .map(function (td, i) {
            return $('input', td).prop('checked') ? '1' : '0';
        });
};
 
/* Initialise the table with the required column ordering data types */
$(document).ready(function () {
    $('#example').DataTable({
        columns: [
            null,
            { orderDataType: 'dom-text-numeric'},
            { orderDataType: 'dom-text', type: 'string' },
            { orderDataType: 'dom-select' },
        ],
    });
});