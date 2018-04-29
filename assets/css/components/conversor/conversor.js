$(document).ready(function () {
    var token = 5600,
        eth = $("#eth");
        document.getElementById("tokens").value = token;
        eth.bind('keyup mouseup', function () {
            var tokens = $(this).val(),
                convertedToken = tokens*token;
            document.getElementById("tokens").value = convertedToken;
        });        
}); 
      
      