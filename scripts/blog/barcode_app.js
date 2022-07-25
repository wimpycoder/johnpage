
function printDiv() {
    const printContents = document.getElementById('barcodeDiv').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

function generateBarcode(){
    var value = $("#barcodeValue").val();
    var btype = $("input[name=btype]:checked").val();
    var renderer = $("input[name=renderer]:checked").val();
    
    var quietZone = false;
    if ($("#quietzone").is(':checked') || $("#quietzone").attr('checked')){
      quietZone = true;
    }
    
    var settings = {
      output:renderer,
      bgColor: $("#bgColor").val(),
      color: $("#color").val(),
      barWidth: $("#barWidth").val(),
      barHeight: $("#barHeight").val(),
      moduleSize: $("#moduleSize").val(),
      posX: $("#posX").val(),
      posY: $("#posY").val(),
      addQuietZone: $("#quietZoneSize").val()
    };
    
    if ($("#rectangular").is(':checked') || $("#rectangular").attr('checked')){
      value = {code:value, rect: true};
    }
    if (renderer == 'canvas'){
      clearCanvas();
      $("#barcodeTarget").hide();
      $("#canvasTarget").show().barcode(value, btype, settings);
    } else {
      $("#canvasTarget").hide();
      $("#barcodeTarget").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget1").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget2").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget3").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget4").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget5").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget6").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget7").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget8").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget9").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget10").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget11").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget12").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget13").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget14").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget15").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget16").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget17").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget18").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget19").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget20").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget21").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget22").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget23").html("").show().barcode(value, btype, settings);
      $("#barcodeTarget24").html("").show().barcode(value, btype, settings);
    }
  }
      
  function showConfig1D(){
    $('.config .barcode1D').show();
    $('.config .barcode2D').hide();
  }
  
  function showConfig2D(){
    $('.config .barcode1D').hide();
    $('.config .barcode2D').show();
  }
  
  function clearCanvas(){
    var canvas = $('#canvasTarget').get(0);
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;
    ctx.lineCap = 'butt';
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle  = '#000000';
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    ctx.strokeRect (0, 0, canvas.width, canvas.height);
  }
  
  $(function(){
    $('input[name=btype]').click(function(){
      if ($(this).attr('id') == 'datamatrix') showConfig2D(); else showConfig1D();
    });
    $('input[name=renderer]').click(function(){
      if ($(this).attr('id') == 'canvas') $('#miscCanvas').show(); else $('#miscCanvas').hide();
    });
    generateBarcode();
  });