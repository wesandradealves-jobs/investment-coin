$(document).ready(function () {
    var token = $("#tokens").val(),
        tokensInput = $("#tokens"),
        eth = $("#eth");

        eth.bind('keyup mouseup', function () {
            tokensInput.val($(this).val()*token);
        });
}); 
      
      