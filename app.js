
                $(document).ready(function() { 
                    navigator.geolocation.getCurrentPosition(function(position) {
                       var l= parseFloat(position.coords.latitude);
                       var lo= parseFloat(position.coords.longitude);
                       var resp=[];
                        $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat='+l+'&lon='+lo , function(json) {
                    
                         var Update_Display=function(){
                           
                            //Location
                            var country=json.sys.country;
                            var local=json.name;
                            var longt=parseFloat(json.coord.lon).toFixed(1);
                            var lat=parseFloat(json.coord.lat).toFixed(1);                              
                            $("#Location_World").html(country+"<br>"+local+"<br>"+"longitud :"+longt+"<br>"+" latitud :"+lat+"<br><br>");

                            //Descripcion
                            var des=json.weather[0].description; 
                            des=des.toUpperCase(des);
                            console.log(json);
                            $("#Description").html(des);

                            //icon
                            var imag='<img class="large"src= "'+json.weather[0].icon+'">';
                            $("#Icon").html(imag);
                           
                             //Humidity
                             var hum=json.main.humidity;
                            $("#Humidity").html(hum+"%");

                             //Pressure
                             var pres=json.main.pressure;
                            $("#Pressure").html(pres+" hp");

                            //Temperature
                            var temp=json.main.temp;
                            temp=parseInt(temp*(9/5)+32);
                            $("#Temperature").html(temp+" °F");

                             //Wind
                             var wd=json.wind.speed
                            $("#Wind").html(wd+" m/s");
                             
                            // Direccion
                            var dwd=json.wind.deg;
                            $("#Direccion").html(dwd+"°");
                            if(temp<=40){
                                $("body").css("background-image","url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h1oSH-fMTyUEv8pTrH37wwFTDDGKuNkA4JJeCRlYcNLu5lEr)");
                            }
                            if(temp>40 && temp<=60){
                                $("body").css("background-image","url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NADeoZh6p50znMtcHgNdJKA_35X9bfxFU-sdwK3EdXqqwlfGKg)");
                            }                
                            if(temp>60 && temp<=80){
                                var f='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NADeoZh6p50znMtcHgNdJKA_35X9bfxFU-sdwK3EdXqqwlfGKg';
                                var imag='<img class="large"src= "'+f+'">';
                                $("body").css({"background":"rgb(16, 16, 17)","color":"white"});
                            } 
                            /*$(".dropdown").on("click", function(){
                               
                                $(".dropdown-content").css({"position":"relative","style.display":"block"});
                            
                                });
                            */
                        };
                        Update_Display() ; 

                            });     
                    });
                });
