$("#915btn").click(function(){
  	if($(this).hasClass("btn-success")) {
	$(this).removeClass("btn-success");
	$(this).addClass("btn-secondary");
	$("#checkGlyphEnable").attr("style", "visibility: hidden");
	$("#checkGlyphDisable").attr("style", "visibility: visible");
	} else {
	$(this).removeClass("btn-secondary");
	$(this).addClass("btn-success");
	$("#checkGlyphEnable").attr("style", "visibility: visible");
	$("#checkGlyphDisable").attr("style", "visibility: hidden");
	}
});

$('#plusYR').on('click', function () {
  var ty=$('#yrBtn').text();
  var numb = ty.match(/\d/g);
  numb = numb.join("");
  var yr=parseFloat(numb) + 1;
  var comb=yr + ' '; //+ ' <span class="caret"></span>';
  $('#yrBtn').html(comb);
  });

$('#minusYR').on('click', function () {
  var ty=$('#yrBtn').text();
  var numb = ty.match(/\d/g);
  numb = numb.join("");
  var yr=parseFloat(numb) + -1;
  var comb=yr + ' '; // + ' <span class="caret"></span>';
  $('#yrBtn').html(comb);
  });

function setYR(year) {
  var comb=year + ' ';
  $('#yrBtn').html(comb);
}  
function setLoc(loc) {
  var comb='<span class="glyphicon glyphicon-time" aria-hidden="true"></span> ' + loc + ' ';
  $('#locBtn').html(comb);
}  
