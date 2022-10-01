
            const buildListofDistances = function(array1,point) {
              var array = [];

              for ( x = 0; x<array1.length; x++)
              {
                array.push([ x + 1 , math.distance( point , array1[x] )] );
              }
              var array2 = array.sort(function(a, b){return a[1] - b[1]});
              
              return array2;
            }

            function arrayEquals(a, b) {
              return Array.isArray(a) &&
                Array.isArray(b) &&
                a.length === b.length &&
                a.every((val, index) => val === b[index]);
              }


      function main(point) {

            try {
              
              
                function buildSortedList(array)
                {
                    array.sort(function(a, b){return a[1] - b[1]});
                    return array;
                }
  
                document.getElementById("legend_x").value = point[0];
                document.getElementById("legend_y").value = point[1];
                document.getElementById("legend_z").value = point[2];
              
             
			 
              function checkCaseCoords(type){	
	switch(type){	
	case "Part10_302":  return _Part10_302_c;

case "Part1_302":  return _Part1_302_c;

case "Part2_302":  return _Part2_302_c;

case "Part4_302":  return _Part4_302_c;

case "Part7_302":  return _Part7_302_c;

case "Part8_302":  return _Part8_302_c;

case "Part9_302":  return _Part9_302_c;

case "Robot_302":  return _Robot_302_c;

 default: 
     alert("Please, click on shape");	
	break;
		}}

              function checkCaseIndices(type){	
	switch(type){	
	case "Part10_302":  return _Part10_302_i;

case "Part1_302":  return _Part1_302_i;

case "Part2_302":  return _Part2_302_i;

case "Part4_302":  return _Part4_302_i;

case "Part7_302":  return _Part7_302_i;

case "Part8_302":  return _Part8_302_i;

case "Part9_302":  return _Part9_302_i;

case "Robot_302":  return _Robot_302_i;

 default: 
     alert("Please, click on shape");	
	break;
		}}

              function checkCaseVertices(type){	
	switch(type){	
	 default: 
     alert("Please, click on shape");	
	break;
		}}

              function checkCaseDisplacement(type){	
	switch(type){	
	case "Part10_302":  return _Part10_302_d;

case "Part1_302":  return _Part1_302_d;

case "Part2_302":  return _Part2_302_d;

case "Part4_302":  return _Part4_302_d;

case "Part7_302":  return _Part7_302_d;

case "Part8_302":  return _Part8_302_d;

case "Part9_302":  return _Part9_302_d;

case "Robot_302":  return _Robot_302_d;

 default: 
     alert("Please, click on shape");	
	break;
		}}


            const now = new Date();
            const time1 = now.getHours() +':'+now.getMinutes()+':'+now.getSeconds()+':'+now.getMilliseconds();
            const string1 = 'Click: ' + time1; 
            $("#CLICK").html(time1);


            const mmyvector = new THREE.Vector3(point[0],point[1],point[2]);
           
            const nvector = new THREE.Vector3(point.normalX, point.normalY, point.normalZ);

            const coords = checkCaseCoords(TheinterestedId);

            const indices = checkCaseIndices(TheinterestedId);
            
            var getdistances = buildListofDistances( coords , point );


            const now2 = new Date();
            const time2 = now2.getHours() +':'+now2.getMinutes()+':'+now2.getSeconds()+':'+now2.getMilliseconds();
            const string2 = 'Get ED: ' + time2;
            $("#GETED").html(time2);

            var my_sorteddist = getdistances;
            

            const my_selectvalues = [];


            for(i=0; i<=20;i++){
                my_selectvalues.push(my_sorteddist[i][0]);
            }

            const now3 = new Date();
            const time3 = now3.getHours() +':'+now3.getMinutes()+':'+now3.getSeconds()+':'+now3.getMilliseconds();
            const string3 = 'Get 20 pc: ' + time3;
            $("#G20P").html(time3);

            if (my_selectvalues.length === 0) { alert("'my_selectvalues' is empty, please click again!"); return }
            
            var my_selectedocts = [];
            const s1 = my_selectvalues.slice(0, 5);
            const s2 = my_selectvalues.slice(5, 10);
            const s3 = my_selectvalues.slice(10, 20);
          
            const id_array = [];           

              for(j = 0;j<indices.length;j++)
              {
                if (indices[j].includes(my_selectvalues[0]))
                {
                  id_array.push(indices[j]);
                }
              }

            const now11 = new Date();
            const time11 = now11.getHours() +':'+now11.getMinutes()+':'+now11.getSeconds()+':'+now11.getMilliseconds();
            const string11 = 'Get arrays that contains the first shortest point: ' + time11;
            $("#G1S").html(time11);


              let checker = (arr, target) => target.every(v => arr.includes(v));
              let intersection = (arrA, arrB) => arrA.filter(x => arrB.includes(x));
              let someob = (arr1, arr2 ) => arr2.some(y => arr1.includes(y) );

              var m_cube;
              const octs_id = [];
              var n = 0;

              id_array.forEach(v => {
              if(checker(my_selectvalues, v))
                {
                  m_cube = v;
                  octs_id.push(m_cube);
                }
              else{
    
                if (n<_.intersection( my_selectvalues, v).length)
                {
              
                n = _.intersection( my_selectvalues, v).length;
                m_cube = v;

                }
                octs_id.push(m_cube);
              }
              });

              const now12 = new Date();
              const time12 = now12.getHours() +':'+now12.getMinutes()+':'+now12.getSeconds()+':'+now12.getMilliseconds();
              const string12 = 'Time that takes to obtain the m_cube: ' + time12;
              $("#MCB").html(time12);


              if (octs_id.length === 0) { alert("'octs_id' is empty, please click again!"); return }
             
              for(j = 0;j<indices.length;j++)
              {
               
                if ( intersection( indices[j] , m_cube ) != 0)
                {
                  
                  octs_id.push(indices[j]);
                 
                }
              }

              const now5 = new Date();
              const time5 = now5.getHours() +':'+now5.getMinutes()+':'+now5.getSeconds()+':'+now5.getMilliseconds();
              const string5 = 'All the intersections of the hexas and m_cube: ' + time5;
              $("#GHC").html(time5);

                           
              var octs_xyz = [];
              
              my_selectedocts = octs_id;
           

            var id;
            var indexes;
            const checkCHulk = function ( arrayocts )
            {
                for (let x = 0; x<arrayocts.length; x++)
                {
                  const oct_c = [];
                  const arr = [];
                  
                  for(i = 0; i<arrayocts[x].length; i++)
                    {         
                      
                      var temporaryo = coords[arrayocts[x][i] - 1] ;
                      oct_c.push(temporaryo);
                     
                     
                      arr.push(new THREE.Vector3().fromArray(temporaryo));
                                              
                        }                        
                        const cH = new THREE.ConvexHull().setFromPoints(arr);
                        if(cH.containsPoint(mmyvector))
                            {
                           
                              const now10 = new Date();
                              const time10 = now10.getHours() +':'+now10.getMinutes()+':'+now10.getSeconds()+':'+now10.getMilliseconds();
                              const string10 = 'iPoint: ' + 'Yes ' + time10;
                              $("#PIO").html( 'Yes ' + time10);   
                              
                              
                              const now6 = new Date();
                              const time6 = now6.getHours() +':'+now6.getMinutes()+':'+now6.getSeconds()+':'+now6.getMilliseconds();
                              const string6 = 'HC: ' + time6;
                              $("#GCH").html(time6);
                              
                              
                              id = x; 
                              octs_xyz = oct_c;
                              indexes = arrayocts[x];
                              return;
                            }
                    
                }
              var distance_bet_click_int = Number.MAX_VALUE;
              var val;
              var convexH;         
                    
                const now9 = new Date();
                const time9 = now9.getHours() +':'+now9.getMinutes()+':'+now9.getSeconds()+':'+now9.getMilliseconds();
                const string9 = 'iPoint: ' +  'No ' + time9;
                $("#PIO").html( 'No ' + time9);
                
                
                for (x = 0; x<arrayocts.length; x++)
                {
                  const oct_c = [];
                  const arr = [];
                  for(i = 0; i<arrayocts[x].length; i++)
                    {            
                     
                      var temporaryo = coords[arrayocts[x][i] - 1] ;
                      oct_c.push(temporaryo);
                    
                      arr.push(new THREE.Vector3().fromArray(temporaryo));
                             
                        }                        
                        var ray = new THREE.Ray( mmyvector , tnv );                                
                        var target = new THREE.Vector3();
                        const cH = new THREE.ConvexHull().setFromPoints(arr);                        
                        
                        if(cH.intersectsRay(ray))
                        {                               
                          cH.intersectRay(ray, target);
                          if (mmyvector.distanceTo(target)<distance_bet_click_int)
                          {
                          distance_bet_click_int = mmyvector.distanceTo(target);  
                          val = target; 
                          convexH = cH;
                          id = x;   
                          octs_xyz = oct_c;
                          indexes = arrayocts[x];                             
                          }
                        }        
                      }
                      if(convexH === undefined){
                        $("#DvectorX").html('-');
                        $("#DvectorY").html('-');
                        $("#DvectorZ").html('-');
                        $("#Tvector").html('-');
                        return;
                        // alert('Please click again, there was an issue. \n')
                      }
                      
                      else
                      {
                        if(convexH.containsPoint(val))
                                      {
                                        const now6 = new Date();
                                        const time6 = now6.getHours() +':'+now6.getMinutes()+':'+now6.getSeconds()+':'+now6.getMilliseconds();
                                        const string6 = 'HC: ' + time6;
                                        $("#GCH").html(time6);
                                        
                                      return;
                                      }  
                                    }               
                             
            }
            checkCHulk(  my_selectedocts );
            var identify = id;
            

            if (identify == undefined){$("#DvectorX").html('-');
            $("#DvectorY").html('-');
            $("#DvectorZ").html('-');
            $("#Tvector").html('-');return;}
            if (octs_xyz == undefined){$("#DvectorX").html('-');
            $("#DvectorY").html('-');
            $("#DvectorZ").html('-');
            $("#Tvector").html('-');return;}

            const def = [];

            const displacement = checkCaseDisplacement(TheinterestedId);

              const now8 = new Date();
              const time8 = now8.getHours() +':'+now8.getMinutes()+':'+now8.getSeconds()+':'+now8.getMilliseconds();
              const string8 = 'Before doing eqs: ' + time8;
              $("#TCD").html(time8);


              const b = [octs_xyz[1][0], octs_xyz[1][1], octs_xyz[1][2] ];

              const a = [octs_xyz[0][0], octs_xyz[0][1], octs_xyz[0][2] ];

              const e = [octs_xyz[4][0], octs_xyz[4][1], octs_xyz[4][2] ];

              const f = [octs_xyz[5][0], octs_xyz[5][1], octs_xyz[5][2] ];

              const c = [octs_xyz[2][0], octs_xyz[2][1], octs_xyz[2][2] ];

              const d = [octs_xyz[3][0], octs_xyz[3][1], octs_xyz[3][2] ];

              const g = [octs_xyz[6][0], octs_xyz[6][1], octs_xyz[6][2] ];

              const h = [octs_xyz[7][0], octs_xyz[7][1], octs_xyz[7][2] ];


              const def_f = displacement[indexes[5] - 1];
              
              const def_e = displacement[indexes[4] - 1];
              
              const def_b = displacement[indexes[1] - 1];
             
              const def_a = displacement[indexes[0] - 1];
             
              const def_h =  displacement[indexes[7] - 1];
             
              const def_g = displacement[indexes[6] - 1];

              const def_c = displacement[indexes[2] - 1];

              const def_d = displacement[indexes[3] - 1];
             
              const ic = [mmyvector.x, mmyvector.y, mmyvector.z] //Punto Input

              let ec_1 = '0.125*(1-r)*(1-s)*(1-t)*'+a[0].toString()+'+0.125*(1+r)*(1-s)*(1-t)*'+b[0].toString()+'+0.125*(1+r)*(1+s)*(1-t)*'+c[0].toString()+'+0.125*(1-r)*(1+s)*(1-t)*'+d[0].toString()+'+0.125*(1-r)*(1-s)*(1+t)*'+e[0].toString()+'+0.125*(1+r)*(1-s)*(1+t)*'+f[0].toString()+'+0.125*(1+r)*(1+s)*(1+t)*'+g[0].toString()+'+0.125*(1-r)*(1+s)*(1+t)*'+h[0].toString()+'='+ic[0].toString();
              let ec_2 = '0.125*(1-r)*(1-s)*(1-t)*'+a[1].toString()+'+0.125*(1+r)*(1-s)*(1-t)*'+b[1].toString()+'+0.125*(1+r)*(1+s)*(1-t)*'+c[1].toString()+'+0.125*(1-r)*(1+s)*(1-t)*'+d[1].toString()+'+0.125*(1-r)*(1-s)*(1+t)*'+e[1].toString()+'+0.125*(1+r)*(1-s)*(1+t)*'+f[1].toString()+'+0.125*(1+r)*(1+s)*(1+t)*'+g[1].toString()+'+0.125*(1-r)*(1+s)*(1+t)*'+h[1].toString()+'='+ic[1].toString();
              let ec_3 = '0.125*(1-r)*(1-s)*(1-t)*'+a[2].toString()+'+0.125*(1+r)*(1-s)*(1-t)*'+b[2].toString()+'+0.125*(1+r)*(1+s)*(1-t)*'+c[2].toString()+'+0.125*(1-r)*(1+s)*(1-t)*'+d[2].toString()+'+0.125*(1-r)*(1-s)*(1+t)*'+e[2].toString()+'+0.125*(1+r)*(1-s)*(1+t)*'+f[2].toString()+'+0.125*(1+r)*(1+s)*(1+t)*'+g[2].toString()+'+0.125*(1-r)*(1+s)*(1+t)*'+h[2].toString()+'='+ic[2].toString();
              // //https://nerdamer.com/functions/solveEquations.html
              var sol = nerdamer.solveEquations([ec_1, ec_2, ec_3]);
              r = sol[0][1];
              s = sol[1][1];
              t = sol[2][1];

              u = (0.125*(1-r)*(1-s)*(1-t)*def_a[0]+0.125*(1+r)*(1-s)*(1-t)*def_b[0]+0.125*(1+r)*(1+s)*(1-t)*def_c[0]+0.125*(1-r)*(1+s)*(1-t)*def_d[0]+0.125*(1-r)*(1-s)*(1+t)*def_e[0]+0.125*(1+r)*(1-s)*(1+t)*def_f[0]+0.125*(1+r)*(1+s)*(1+t)*def_g[0]+0.125*(1-r)*(1+s)*(1+t)*def_h[0]);
              v = (0.125*(1-r)*(1-s)*(1-t)*def_a[1]+0.125*(1+r)*(1-s)*(1-t)*def_b[1]+0.125*(1+r)*(1+s)*(1-t)*def_c[1]+0.125*(1-r)*(1+s)*(1-t)*def_d[1]+0.125*(1-r)*(1-s)*(1+t)*def_e[1]+0.125*(1+r)*(1-s)*(1+t)*def_f[1]+0.125*(1+r)*(1+s)*(1+t)*def_g[1]+0.125*(1-r)*(1+s)*(1+t)*def_h[1]);
              w = (0.125*(1-r)*(1-s)*(1-t)*def_a[2]+0.125*(1+r)*(1-s)*(1-t)*def_b[2]+0.125*(1+r)*(1+s)*(1-t)*def_c[2]+0.125*(1-r)*(1+s)*(1-t)*def_d[2]+0.125*(1-r)*(1-s)*(1+t)*def_e[2]+0.125*(1+r)*(1-s)*(1+t)*def_f[2]+0.125*(1+r)*(1+s)*(1+t)*def_g[2]+0.125*(1-r)*(1+s)*(1+t)*def_h[2]);
              total_displacement = math.sqrt(math.pow(u,2)+math.pow(v,2)+math.pow(w,2));

              $("#DvectorX").html(u.toFixed(3));
              $("#DvectorY").html(v.toFixed(3));
              $("#DvectorZ").html(w.toFixed(3));
              $("#Tvector").html(total_displacement.toFixed(3));
              const now7 = new Date();
              const time7 = now7.getHours() +':'+now7.getMinutes()+':'+now7.getSeconds()+':'+now7.getMilliseconds();
              const string7 = 'After doing eqs: ' + time7;
              $("#FV").html(time7);
              
            // eqs


          return;
            }
            catch(e)
            {console.log(e)}
          }

      function show(point){

      clean();




        $("#coordX").html('-');
				$("#coordY").html('-');
				$("#coordZ").html('-');
				$("#DvectorX").html('-');
				$("#DvectorY").html('-');
				$("#DvectorZ").html('-');
				$("#Tvector").html('-');
        pointflag2 = point;
        $('#marker').attr('translation', point[0] + ' ' +  point[1] + ' ' +  point[2]);
        
       
        if($("#marker").attr("render") == 'false')
        {
          $("#marker").attr("render", "true");
        }
      
        document.getElementById("opacity").value = 0.75;
        matTrans(0.75);
      }

      function check(point){

       clean();


        $("#coordX").html('-');
				$("#coordY").html('-');
				$("#coordZ").html('-');
				$("#DvectorX").html('-');
				$("#DvectorY").html('-');
				$("#DvectorZ").html('-');
				$("#Tvector").html('-');

        var arrayofinputs = [];
        for(let x = 0; x < inputsp.length; x++) 
        {
        if(inputsp[x].type == "checkbox") 
        {
          arrayofinputs.push(inputsp[x].checked);
        }
      }
       var arr2 = arrayofinputs;
        var isOnlyOne = arr2.indexOf(true) != -1;
        isOnlyOne = isOnlyOne ? arr2.indexOf(true)==arr2.lastIndexOf(true):isOnlyOne;
        console.log(isOnlyOne );
        if (isOnlyOne)
        {
          var i = arr2.flatMap((bool, index) => bool ? index : [])
         
          main(point);
        }
        else
        {
          alert('Please, mark just one part in the checkbox section');
        }
      }

      function onoff(){
        var ia = document.getElementById('btn_show').getAttribute('value');
       
        
        if( ia == 'off' ){
      document.getElementById('btn_show').setAttribute('value', 'on');
       }
       else{
         
        if(arrayEquals(pointflag, pointflag2)){
          $("#marker").attr("render", "false");
          document.getElementById('btn_show').setAttribute('value', 'off');
        }
      
      }
      }

      function BGcolor(array){
        var myColor = document.getElementById("bground").getFieldValue('skyColor');
        console.log(myColor);
        console.log(typeof myColor);
        var rgbv = new x3dom.fields.SFColor(array[0], array[1], array[2]);
        document.getElementById('bground').setFieldValue('skyColor', rgbv );
      }