let throw_value, double, triple, bull, oneOfThree, multiplicity;

/*$( document ).ready(function() { new_three_throws(); $('.tabl').html('0'); $('[id^="tablo"]').html(''); $('#score1').html('501'); $('#score2').html('501');} );*/
$( document ).ready(function() { new_game(); });



function new_three_throws() {	
    throw_value  = 0;
    oneOfThree = 1;
    multiplicity = 1;
    double = 0;
    triple = 0;
    bull = 0;
    $('[id^="tablo"]').html('');
}


function new_game() {   
    new_three_throws();
    $('.tabl').html('0');
    $('[id^="tablo"]').html('');
    $('#scre1').html('501');
    $('#scre2').html('501');
    $('#score1').html('0');
    $('#score2').html('0');
}


$('#cancel').click( function () {
    new_three_throws();
    $('[id^="tablo"]').html('');
});     





$('#new_game').click( function () {
    new_game();
});




$('#x2').click( function () {
    if (oneOfThree < 4 ){
        if(multiplicity==2) {
            multiplicity=1;
            $("#x2").css("background","");
            $("#x3").css("background","");
            $('#tablo'+oneOfThree).html('');
        }
        else {
            multiplicity = 2
            $("#x2").css("background","red");
            $("#x3").css("background","");
            $('#tablo'+oneOfThree).html('2x');
        }
    }
});




$('#x3').click( function () {
    if (oneOfThree < 4 ){
        if (multiplicity==3) {
            multiplicity=1;
            $("#x3").css("background","");
            $("#x2").css("background","");
            $('#tablo'+oneOfThree).html('');
        }
        else {
            multiplicity=3;
            $("#x3").css("background","red");
            $("#x2").css("background","");
            $('#tablo'+oneOfThree).html('3x');
        }
    }
});




$(".o").click(function () { 
    if (oneOfThree < 4 ){ /*Если не завершено трио бросков. Проверим чтобы не удвоить 0, 50 и 25*/
        if (multiplicity > 1 && $(this).attr('id').slice(1)!='0' && $(this).attr('id').slice(1)!='25' && $(this).attr('id').slice(1)!='50'){
            if (multiplicity == 2) { double   = double + 1; }
            if (multiplicity == 3) { triple = triple + 1; }
            $('#tablo'+oneOfThree).html(multiplicity+'x'+$(this).attr('id').slice(1));
            throw_value = throw_value+parseInt($(this).attr('id').slice(1))*multiplicity;
        }
        else {
            if ($(this).attr('id').slice(1)=='25') { bull=bull+1;}
            if ($(this).attr('id').slice(1)=='50') { bull=bull+1;  double   = double + 1;  $('#tablo'+oneOfThree).html('2x25');}
            else {$('#tablo'+oneOfThree).html($(this).attr('id').slice(1));}
            throw_value = throw_value+parseInt($(this).attr('id').slice(1));
        }
        oneOfThree = oneOfThree+1;
    } 
    multiplicity=1;
    $("#x2").css("background","");
    $("#x3").css("background","");
});



$('.gamer').click( function () {
    if (oneOfThree > 2 ){
	$('#throws'+ $(this).attr('id').slice(1)).html(parseInt($('#throws'+ $(this).attr('id').slice(1)).html()) + 1);
	$('#scre' + $(this).attr('id').slice(1)).html(parseInt($('#scre' + $(this).attr('id').slice(1)).html()) - throw_value);

    $('#score' + $(this).attr('id').slice(1)).html(parseInt($('#score' + $(this).attr('id').slice(1)).html()) + throw_value);
    $('#avrge' + $(this).attr('id').slice(1)).html((parseInt($('#score' + $(this).attr('id').slice(1)).html()) / parseInt($('#throws'+ $(this).attr('id').slice(1)).html())).toFixed(2));

	$('#doubl' + $(this).attr('id').slice(1)).html(parseInt($('#doubl' + $(this).attr('id').slice(1)).html()) + double);
	$('#triple'+ $(this).attr('id').slice(1)).html(parseInt($('#triple'+ $(this).attr('id').slice(1)).html()) + triple);
	$('#bull'  + $(this).attr('id').slice(1)).html(parseInt($('#bull'  + $(this).attr('id').slice(1)).html()) + bull);
        new_three_throws()
    }
});





