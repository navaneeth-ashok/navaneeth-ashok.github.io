$(document).ready(function() {
    // all custom jQuery will go here
    $('[lang="en"]').hide();

$('#switchlangMal').click(function() {
    $('[lang="ml"]').show();
    $('[lang="en"]').hide();
});
    
$('#switchlangEng').click(function() {
    $('[lang="ml"]').hide();
    $('[lang="en"]').show();
});
});