$(document).ready(function () {
    var token = 5600,
        tokensInput = $("#tokens"),
        eth = $("#eth");

        tokensInput.val(token);
        
        eth.bind('keyup mouseup', function () {
            var tokens = $(this).val(),
                convertedToken = tokens*token;
            tokensInput.val(convertedToken);
        });
}); 
      
      