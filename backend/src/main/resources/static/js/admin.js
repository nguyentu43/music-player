$(document).ready(function() {
  $('#dataTable').DataTable();
  
  $('.btn-admin-delete').click(function(e){
	e.preventDefault();
	let form = $(this).parent();
	Swal.fire({
	  title: 'Do you want to delete?',
	  showCancelButton: true,
	  confirmButtonText: 'OK',
	  confirmButtonColor: '#d33',
	}).then((result) => {
	  if (result.isConfirmed) {
	    form.submit();
	  }
	});
  });
  
  $('select').select2();
  
});
