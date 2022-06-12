$(document).ready(function () {
    $('#myTable').DataTable({
        processing: true,
        ordering: true,
        paging: true,
        searching: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
        
    });
    $('#myTable1').DataTable({
        processing: true,
        ordering: true,
        paging: true,
        searching: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
    
    var table = $('#example').DataTable({
        columnDefs: [{
            orderable: false,
            targets: [1, 2, 3]
        }]
    });

    $('button1').click(function () {
        var data = table.$('input, select').serialize();
        alert(
            "The following data would have been submitted to the server: \n\n" +
            data.substr(0, 120) + '...'
        );
        return false;
    });
});
function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}