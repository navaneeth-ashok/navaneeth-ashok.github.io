$(document).ready(function() {
    // all custom jQuery will go here
    $('[lang="en"]').hide();

$('#switchlangMal').click(function() {
    $('[lang="mal"]').show();
    $('[lang="en"]').hide();
});
    
$('#switchlangEng').click(function() {
    $('[lang="mal"]').hide();
    $('[lang="en"]').show();
});
});