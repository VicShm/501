let throw_value, double, triple, bull, oneOfThree, multiplicity, multiflag, allow_scre1, allow_scre2;

$( document ).ready(function() { new_game(); });

function new_three_throws() {
  throw_value = 0;
  oneOfThree = 1;
  multiplicity = 1;
  double = 0;
  triple = 0;
  bull = 0;
  $('[id^="tablo"]').html('');
  $('#summa').html('')
  $('#diff1').html('')
  $('#diff2').html('')
  $('#diff1').css('background-color', 'silver');
  $('#diff2').css('background-color', 'silver');
  $('#summa').css('background-color', 'white');
}

$('#cancel').click( function () {
  new_three_throws();
});   

function new_game() {  
  $('.tabl').html('0');
  $('[id^="tablo"]').html('');
  $('#scre1').html('501');
  $('#scre2').html('501');
  $('#score1').html('0');
  $('#score2').html('0');
  $('#scre1').css('background-color', 'white');
  $('#scre2').css('background-color', 'white');
  new_three_throws();
}

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
  multiflag=multiplicity
  if ($('#scre1').html()!=0) { $('#scre1').css('background-color', 'white'); }
  if ($('#scre2').html()!=0) { $('#scre2').css('background-color', 'white'); }
  
  if (oneOfThree < 4 ){ 
    if (multiplicity > 1 && $(this).attr('id').slice(1)!='0' && $(this).attr('id').slice(1)!='25' && $(this).attr('id').slice(1)!='50'){
      if (multiplicity == 2) { double  = double + 1; }
      if (multiplicity == 3) { triple = triple + 1; }
      $('#tablo'+oneOfThree).html(multiplicity+'x'+$(this).attr('id').slice(1));
      throw_value = throw_value+parseInt($(this).attr('id').slice(1))*multiplicity;
    }
    else {
      if ($(this).attr('id').slice(1)=='25') { bull=bull+1; }
      if ($(this).attr('id').slice(1)=='50') { bull=bull+1; double  = double + 1; $('#tablo'+oneOfThree).html('2x25');}
      else { $('#tablo'+oneOfThree).html($(this).attr('id').slice(1)); }
      throw_value = throw_value+parseInt($(this).attr('id').slice(1));
    }
    oneOfThree = oneOfThree+1;
  } 
  $('#summa').html(throw_value)
  
  allow_scre1=true;
  diff1=parseInt($('#scre1').html()) - throw_value
  if (diff1<2) {$('#diff1').css('background-color', 'pink'); allow_scre1=false;}
  if (diff1===0 && multiflag>1) {$('#diff1').css('background-color', 'yellow'); allow_scre2=true;}
  if (parseInt($('#scre1').html())===0) {allow_scre1=false;}
  $('#diff1').html(diff1)
  
  allow_scre2=true;
  diff2=parseInt($('#scre2').html()) - throw_value
  if (diff2<2) {$('#diff2').css('background-color', 'pink');  allow_scre2=false;}
  if (diff2===0 && multiflag>1) {$('#diff2').css('background-color', 'yellow'); allow_scre2=true;}
  if (parseInt($('#scre2').html())===0) {allow_scre2=false;}
  $('#diff2').html(diff2)
  
  multiplicity=1;
  $("#x2").css("background","");
  $("#x3").css("background","");
});


$('.gamer').click( function () {
  if (oneOfThree > 1 ){	//Если был хотя бы один бросок
   $('#throws' + $(this).attr('id').slice(1)).html(parseInt($('#throws' + $(this).attr('id').slice(1)).html()) + 1);
   $('#score'  + $(this).attr('id').slice(1)).html(parseInt($('#score'  + $(this).attr('id').slice(1)).html()) + throw_value);
   $('#avrge'  + $(this).attr('id').slice(1)).html((parseInt($('#score' + $(this).attr('id').slice(1)).html()) / parseInt($('#throws'+ $(this).attr('id').slice(1)).html())).toFixed(2));
   $('#doubl'  + $(this).attr('id').slice(1)).html(parseInt($('#doubl'  + $(this).attr('id').slice(1)).html()) + double);
   $('#triple' + $(this).attr('id').slice(1)).html(parseInt($('#triple' + $(this).attr('id').slice(1)).html()) + triple);
   $('#bull'   + $(this).attr('id').slice(1)).html(parseInt($('#bull'   + $(this).attr('id').slice(1)).html()) + bull);
   
   if ($(this).attr('id').slice(1)==='1' && allow_scre1) { $('#scre1').html(parseInt($('#scre1').html()) - throw_value); }
    if (parseInt($('#scre1').html()) === 0){$('#scre2').css('background-color', 'yellow');}

    if ($(this).attr('id').slice(1)==='2' && allow_scre2) { $('#scre2').html(parseInt($('#scre2').html()) - throw_value); }
    if (parseInt($('#scre2').html()) === 0){$('#scre2').css('background-color', 'yellow');}
  
    new_three_throws()
   }
});





