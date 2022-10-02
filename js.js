
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