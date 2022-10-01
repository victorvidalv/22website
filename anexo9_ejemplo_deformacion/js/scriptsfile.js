function Part10_302(choice){ if (!document.getElementById('Part10_302').checked){document.getElementById('Part10_302').setAttribute('whichChoice', -1);
}else{document.getElementById('Part10_302').setAttribute('whichChoice', 0);
}document.getElementById('Part10_302').checked =! document.getElementById('Part10_302').checked; }
function Part1_302(choice){ if (!document.getElementById('Part1_302').checked){document.getElementById('Part1_302').setAttribute('whichChoice', -1);
}else{document.getElementById('Part1_302').setAttribute('whichChoice', 0);
}document.getElementById('Part1_302').checked =! document.getElementById('Part1_302').checked; }
function Part2_302(choice){ if (!document.getElementById('Part2_302').checked){document.getElementById('Part2_302').setAttribute('whichChoice', -1);
}else{document.getElementById('Part2_302').setAttribute('whichChoice', 0);
}document.getElementById('Part2_302').checked =! document.getElementById('Part2_302').checked; }
function Part4_302(choice){ if (!document.getElementById('Part4_302').checked){document.getElementById('Part4_302').setAttribute('whichChoice', -1);
}else{document.getElementById('Part4_302').setAttribute('whichChoice', 0);
}document.getElementById('Part4_302').checked =! document.getElementById('Part4_302').checked; }
function Part7_302(choice){ if (!document.getElementById('Part7_302').checked){document.getElementById('Part7_302').setAttribute('whichChoice', -1);
}else{document.getElementById('Part7_302').setAttribute('whichChoice', 0);
}document.getElementById('Part7_302').checked =! document.getElementById('Part7_302').checked; }
function Part8_302(choice){ if (!document.getElementById('Part8_302').checked){document.getElementById('Part8_302').setAttribute('whichChoice', -1);
}else{document.getElementById('Part8_302').setAttribute('whichChoice', 0);
}document.getElementById('Part8_302').checked =! document.getElementById('Part8_302').checked; }
function Part9_302(choice){ if (!document.getElementById('Part9_302').checked){document.getElementById('Part9_302').setAttribute('whichChoice', -1);
}else{document.getElementById('Part9_302').setAttribute('whichChoice', 0);
}document.getElementById('Part9_302').checked =! document.getElementById('Part9_302').checked; }
function Robot_302(choice){ if (!document.getElementById('Robot_302').checked){document.getElementById('Robot_302').setAttribute('whichChoice', -1);
}else{document.getElementById('Robot_302').setAttribute('whichChoice', 0);
}document.getElementById('Robot_302').checked =! document.getElementById('Robot_302').checked; }


var formp = document.getElementById("pbuttons");
var inputsp = formp.getElementsByTagName("input");

var is_checkedp = false;
$("#select-all-d").click(function(){
  for(let x = 0; x < inputsp.length; x++) {
  if(inputsp[x].type == "checkbox") {
      is_checkedp = inputsp[x].checked;

      if (is_checkedp == false) {
      $(inputsp[x]).trigger("click")
              }
              ;
          }
      }
      clean();
  }
  );
   $("#hide-all-d").click(function(){
  for(let x = 0; x < inputsp.length; x++) {
  if(inputsp[x].type == "checkbox") {
      is_checkedp = inputsp[x].checked;
      if (is_checkedp == true) {
      $(inputsp[x]).trigger("click")
              }
              ;
          }
      }
      clean();
  });

  // PRT switch
  function togPRT(choice){
	if (!document.getElementById('swPRT').checked) {document.getElementById('swPRT').setAttribute('whichChoice', -1);} else {document.getElementById('swPRT').setAttribute('whichChoice', 0);}
	document.getElementById('swPRT').checked = !document.getElementById('swPRT').checked;
}

// Axes switch
function togAxes(choice){
	if (!document.getElementById('swAxes').checked) {document.getElementById('swAxes').setAttribute('whichChoice', -1);} else {document.getElementById('swAxes').setAttribute('whichChoice', 0);}
	document.getElementById('swAxes').checked = !document.getElementById('swAxes').checked;
	}

// Transparency function
function matTrans(trans){
    document.getElementById('mat1').setAttribute('transparency', trans);
    }
// Scaling function
function matTransscale(trans){	
    document.getElementById('probe').setAttribute('scale', `${trans} ${trans} ${trans}`);
    }
// Scaling function
function sphereTransscale(trans){	
    document.getElementById('marker').setAttribute('scale', `${trans} ${trans} ${trans}`);
    }
// Deformation function
// var deflag = parseInt(document.getElementById('deformation').textContent); 
var deflag = 0; 

function DefTrans(transit){
    
        if (transit != 0){
            $("#scene").attr("onmousemove", "");
						
			$("#scene").attr("onclick", "");
			$("#sample").attr("onclick", "");

			internal_canvas = document.getElementById("x3d").runtime.getCanvas();
			internal_canvas.style.cursor = ""

            $("#btn_locate").addClass("disabled");
            $("#btn_locate").prop("disabled", true);
            $("#probe").attr("render", "false");
        }
        else{
               
        $("#btn_locate").removeClass("disabled");
		$("#btn_locate").prop("disabled", false);
    }
    
    var trans = 0;
    try{
   
    if (deflag < transit){
        trans = (transit - deflag)*(1);
        deflag = transit;
        
        var myCoordArray0 = document.getElementById('cPart10_302').requestFieldRef('point');
var myCoordArray1 = document.getElementById('cPart1_302').requestFieldRef('point');
var myCoordArray2 = document.getElementById('cPart2_302').requestFieldRef('point');
var myCoordArray3 = document.getElementById('cPart4_302').requestFieldRef('point');
var myCoordArray4 = document.getElementById('cPart7_302').requestFieldRef('point');
var myCoordArray5 = document.getElementById('cPart8_302').requestFieldRef('point');
var myCoordArray6 = document.getElementById('cPart9_302').requestFieldRef('point');
var myCoordArray7 = document.getElementById('cRobot_302').requestFieldRef('point');

        for(x=0; x<myCoordArray0.length; x++){      myCoordArray0[x].x = myCoordArray0[x].x + _Part10_302_d[_Part10_302_id[x]][0]*trans;        myCoordArray0[x].y = myCoordArray0[x].y + _Part10_302_d[_Part10_302_id[x]][1]*trans;        myCoordArray0[x].z = myCoordArray0[x].z + _Part10_302_d[_Part10_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray1.length; x++){      myCoordArray1[x].x = myCoordArray1[x].x + _Part1_302_d[_Part1_302_id[x]][0]*trans;        myCoordArray1[x].y = myCoordArray1[x].y + _Part1_302_d[_Part1_302_id[x]][1]*trans;        myCoordArray1[x].z = myCoordArray1[x].z + _Part1_302_d[_Part1_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray2.length; x++){      myCoordArray2[x].x = myCoordArray2[x].x + _Part2_302_d[_Part2_302_id[x]][0]*trans;        myCoordArray2[x].y = myCoordArray2[x].y + _Part2_302_d[_Part2_302_id[x]][1]*trans;        myCoordArray2[x].z = myCoordArray2[x].z + _Part2_302_d[_Part2_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray3.length; x++){      myCoordArray3[x].x = myCoordArray3[x].x + _Part4_302_d[_Part4_302_id[x]][0]*trans;        myCoordArray3[x].y = myCoordArray3[x].y + _Part4_302_d[_Part4_302_id[x]][1]*trans;        myCoordArray3[x].z = myCoordArray3[x].z + _Part4_302_d[_Part4_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray4.length; x++){      myCoordArray4[x].x = myCoordArray4[x].x + _Part7_302_d[_Part7_302_id[x]][0]*trans;        myCoordArray4[x].y = myCoordArray4[x].y + _Part7_302_d[_Part7_302_id[x]][1]*trans;        myCoordArray4[x].z = myCoordArray4[x].z + _Part7_302_d[_Part7_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray5.length; x++){      myCoordArray5[x].x = myCoordArray5[x].x + _Part8_302_d[_Part8_302_id[x]][0]*trans;        myCoordArray5[x].y = myCoordArray5[x].y + _Part8_302_d[_Part8_302_id[x]][1]*trans;        myCoordArray5[x].z = myCoordArray5[x].z + _Part8_302_d[_Part8_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray6.length; x++){      myCoordArray6[x].x = myCoordArray6[x].x + _Part9_302_d[_Part9_302_id[x]][0]*trans;        myCoordArray6[x].y = myCoordArray6[x].y + _Part9_302_d[_Part9_302_id[x]][1]*trans;        myCoordArray6[x].z = myCoordArray6[x].z + _Part9_302_d[_Part9_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray7.length; x++){      myCoordArray7[x].x = myCoordArray7[x].x + _Robot_302_d[_Robot_302_id[x]][0]*trans;        myCoordArray7[x].y = myCoordArray7[x].y + _Robot_302_d[_Robot_302_id[x]][1]*trans;        myCoordArray7[x].z = myCoordArray7[x].z + _Robot_302_d[_Robot_302_id[x]][2]*trans;    }

        document.getElementById('cPart10_302').releaseFieldRef('point');
document.getElementById('cPart1_302').releaseFieldRef('point');
document.getElementById('cPart2_302').releaseFieldRef('point');
document.getElementById('cPart4_302').releaseFieldRef('point');
document.getElementById('cPart7_302').releaseFieldRef('point');
document.getElementById('cPart8_302').releaseFieldRef('point');
document.getElementById('cPart9_302').releaseFieldRef('point');
document.getElementById('cRobot_302').releaseFieldRef('point');

    }
    else{
        trans = (deflag - transit)*(1);       
        deflag = transit;
        
        var myCoordArray0 = document.getElementById('cPart10_302').requestFieldRef('point');
var myCoordArray1 = document.getElementById('cPart1_302').requestFieldRef('point');
var myCoordArray2 = document.getElementById('cPart2_302').requestFieldRef('point');
var myCoordArray3 = document.getElementById('cPart4_302').requestFieldRef('point');
var myCoordArray4 = document.getElementById('cPart7_302').requestFieldRef('point');
var myCoordArray5 = document.getElementById('cPart8_302').requestFieldRef('point');
var myCoordArray6 = document.getElementById('cPart9_302').requestFieldRef('point');
var myCoordArray7 = document.getElementById('cRobot_302').requestFieldRef('point');

        for(x=0; x<myCoordArray0.length; x++){      myCoordArray0[x].x = myCoordArray0[x].x - _Part10_302_d[_Part10_302_id[x]][0]*trans;        myCoordArray0[x].y = myCoordArray0[x].y - _Part10_302_d[_Part10_302_id[x]][1]*trans;        myCoordArray0[x].z = myCoordArray0[x].z - _Part10_302_d[_Part10_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray1.length; x++){      myCoordArray1[x].x = myCoordArray1[x].x - _Part1_302_d[_Part1_302_id[x]][0]*trans;        myCoordArray1[x].y = myCoordArray1[x].y - _Part1_302_d[_Part1_302_id[x]][1]*trans;        myCoordArray1[x].z = myCoordArray1[x].z - _Part1_302_d[_Part1_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray2.length; x++){      myCoordArray2[x].x = myCoordArray2[x].x - _Part2_302_d[_Part2_302_id[x]][0]*trans;        myCoordArray2[x].y = myCoordArray2[x].y - _Part2_302_d[_Part2_302_id[x]][1]*trans;        myCoordArray2[x].z = myCoordArray2[x].z - _Part2_302_d[_Part2_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray3.length; x++){      myCoordArray3[x].x = myCoordArray3[x].x - _Part4_302_d[_Part4_302_id[x]][0]*trans;        myCoordArray3[x].y = myCoordArray3[x].y - _Part4_302_d[_Part4_302_id[x]][1]*trans;        myCoordArray3[x].z = myCoordArray3[x].z - _Part4_302_d[_Part4_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray4.length; x++){      myCoordArray4[x].x = myCoordArray4[x].x - _Part7_302_d[_Part7_302_id[x]][0]*trans;        myCoordArray4[x].y = myCoordArray4[x].y - _Part7_302_d[_Part7_302_id[x]][1]*trans;        myCoordArray4[x].z = myCoordArray4[x].z - _Part7_302_d[_Part7_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray5.length; x++){      myCoordArray5[x].x = myCoordArray5[x].x - _Part8_302_d[_Part8_302_id[x]][0]*trans;        myCoordArray5[x].y = myCoordArray5[x].y - _Part8_302_d[_Part8_302_id[x]][1]*trans;        myCoordArray5[x].z = myCoordArray5[x].z - _Part8_302_d[_Part8_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray6.length; x++){      myCoordArray6[x].x = myCoordArray6[x].x - _Part9_302_d[_Part9_302_id[x]][0]*trans;        myCoordArray6[x].y = myCoordArray6[x].y - _Part9_302_d[_Part9_302_id[x]][1]*trans;        myCoordArray6[x].z = myCoordArray6[x].z - _Part9_302_d[_Part9_302_id[x]][2]*trans;    }
for(x=0; x<myCoordArray7.length; x++){      myCoordArray7[x].x = myCoordArray7[x].x - _Robot_302_d[_Robot_302_id[x]][0]*trans;        myCoordArray7[x].y = myCoordArray7[x].y - _Robot_302_d[_Robot_302_id[x]][1]*trans;        myCoordArray7[x].z = myCoordArray7[x].z - _Robot_302_d[_Robot_302_id[x]][2]*trans;    }

        document.getElementById('cPart10_302').releaseFieldRef('point');
document.getElementById('cPart1_302').releaseFieldRef('point');
document.getElementById('cPart2_302').releaseFieldRef('point');
document.getElementById('cPart4_302').releaseFieldRef('point');
document.getElementById('cPart7_302').releaseFieldRef('point');
document.getElementById('cPart8_302').releaseFieldRef('point');
document.getElementById('cPart9_302').releaseFieldRef('point');
document.getElementById('cRobot_302').releaseFieldRef('point');

    }
   
    
    }
    catch(e)
    {console.log(e)}
    }

$("#deformation").on("slide", function(slideEvt){

    DefTrans(slideEvt.value);
} );


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }


	function toggle_show(){
		clean();
		
        
		var formsp = document.getElementById("pbuttons");
		var inputssp = formsp.getElementsByTagName("input");
		var is_checkedsp = false;

        if (TheinterestedId == undefined){
            alert('Please click shape');
        }
        else{
		if($("#a" + myThis).is(":checked")){
			
            
			for(let x = 0; x < inputssp.length; x++) {
			if(inputssp[x].type == "checkbox") {
				is_checkedsp = inputssp[x].checked;
				if (is_checkedsp == true) {
				$(inputssp[x]).trigger("click")
						}
						;
					}
				}
            // }
			$("#a" + myThis).trigger("click");
			// :-)		
		}
		else{
            
            
			for(let x = 0; x < inputssp.length; x++) {
			if(inputssp[x].type == "checkbox") {
				is_checkedsp = inputssp[x].checked;
				if (is_checkedsp == true) {
				$(inputssp[x]).trigger("click")
						}
						;
					}
				}
            
			$("#a" + myThis).trigger("click");
	}
}
		
		}