let cardName;
let cardType;

function addCard(listType) {
    $('#search button').click(function () {
    if ($(this).prev().prev().attr('name') === listType) {
        if ($(this).prev().prev().val() !== '') {
        cardName = $(this).prev().prev().val();
        } else {
            alert('You must insert a card name');
        }
        
        if ($(this).prev().val() !== '-1') {
        cardType = $(this).prev().val();
        } else {
            alert('You must select a card type');
        }
        
        if ($(this).prev().prev().val() !== '' && $(this).prev().val() !== '-1') {
        $('#' + listType + ' ul.' + cardType + ' ul').append('<li>' + cardName + '</li>');
        }
        
        $(this).prev().prev().val('');
        $(this).prev().val('-1');
        }
    });
}

addCard('haves');
addCard('wants');

$('#search input').keyup(function (e) {
if (e.keyCode === 13) {
    $('#search button').click();
}
});

$('#user-links a:eq(1)').click(function () {
$('#sign-in').fadeIn();

$('#sign-in').css({
    'top': $('#sign-in').position().top - $('#sign-in').height() / 2,
    'left': $('#sign-in').position().left - $('#sign-in').width() / 2
});
});