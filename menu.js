$("#915btn").click(function(){
  	if($(this).hasClass("btn-success")) {
	$(this).removeClass("btn-success");
	$(this).addClass("btn-danger");
	$("#checkGlyphEnable").attr("style", "visibility: hidden");
	$("#checkGlyphDisable").attr("style", "visibility: visible");
	} else {
	$(this).removeClass("btn-danger");
	$(this).addClass("btn-success");
	$("#checkGlyphEnable").attr("style", "visibility: visible");
	$("#checkGlyphDisable").attr("style", "visibility: hidden");
	}
});
