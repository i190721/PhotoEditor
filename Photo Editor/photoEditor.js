var increment;
    var rotat = 0;
    var flip = 1 ;
    var flip1 = 1 ;
    var bright = 100;
    var saturate = 100;
    var inversion = 0;
    var gray = 0;
    var blur = 0;
    var sepia =0;
    document.getElementById("brightness").onmousedown = function(){
        document.getElementsByClassName("name")[0].innerHTML = "Brightness";
        document.getElementById ("brightness").style.backgroundColor = "pink";
        document.getElementById ("brightness").style.color = "black";
        document.getElementById ("saturation").style.backgroundColor = "white";
        document.getElementById ("saturation").style.color = "gray";
        document.getElementById ("inversion").style.backgroundColor = "white";
        document.getElementById ("inversion").style.color = "gray";
        document.getElementById ("grayscale").style.backgroundColor = "white";
        document.getElementById ("grayscale").style.color = "gray";
        document.getElementById("increment").max = 200;
        document.getElementById("increment").value = bright;
        document.getElementsByClassName("value")[0].innerHTML =bright+"%";

    }
    document.getElementById("saturation").onmousedown = function(){
        document.getElementsByClassName("name")[0].innerHTML = "Saturation";
        document.getElementById ("saturation").style.backgroundColor = "pink";
        document.getElementById ("saturation").style.color = "black";
        document.getElementById ("brightness").style.backgroundColor = "white";
        document.getElementById ("brightness").style.color = "gray";
        document.getElementById ("inversion").style.backgroundColor = "white";
        document.getElementById ("inversion").style.color = "gray";
        document.getElementById ("grayscale").style.backgroundColor = "white";
        document.getElementById ("grayscale").style.color = "gray";
        document.getElementById("increment").max = 100;
        document.getElementById("increment").value = saturate;
        document.getElementsByClassName("value")[0].innerHTML =saturate+"%";
    }
    document.getElementById("inversion").onmousedown = function(){
        document.getElementsByClassName("name")[0].innerHTML = "Inversion";
        document.getElementById ("inversion").style.backgroundColor = "pink";
        document.getElementById ("inversion").style.color = "black";
        document.getElementById ("saturation").style.backgroundColor = "white";
        document.getElementById ("saturation").style.color = "gray";
        document.getElementById ("brightness").style.backgroundColor = "white";
        document.getElementById ("brightness").style.color = "gray";
        document.getElementById ("grayscale").style.backgroundColor = "white";
        document.getElementById ("grayscale").style.color = "gray";
        document.getElementById("increment").max = 100;
        document.getElementById("increment").value = inversion;
        document.getElementsByClassName("value")[0].innerHTML =inversion+"%";
    }
    document.getElementById("grayscale").onmousedown = function(){
        document.getElementsByClassName("name")[0].innerHTML = "Grayscale";
        document.getElementById ("grayscale").style.backgroundColor = "pink";
        document.getElementById ("grayscale").style.color = "black";
        document.getElementById ("saturation").style.backgroundColor = "white";
        document.getElementById ("saturation").style.color = "gray";
        document.getElementById ("inversion").style.backgroundColor = "white";
        document.getElementById ("inversion").style.color = "gray";
        document.getElementById ("brightness").style.backgroundColor = "white";
        document.getElementById ("brightness").style.color = "gray";
        document.getElementById("increment").max = 100;
        document.getElementById("increment").value = gray;
        document.getElementsByClassName("value")[0].innerHTML =gray+"%";
    }
      
    document.getElementById ("increment").onchange = function ()
    {
        if ( document.getElementById("brightness").style.backgroundColor == "pink")
        {
            increase = document.getElementById ("increment").value;
            bright = increase;
            document.getElementsByClassName ("value")[0].innerHTML = increase + "%" ;
            
            
        }
        else if ( document.getElementById("saturation").style.backgroundColor == "pink")
        {
           
            increase = document.getElementById ("increment").value;
            saturate = increase;
            document.getElementsByClassName ("value")[0].innerHTML = increase + "%" ;
            
            
        }
        else if ( document.getElementById("inversion").style.backgroundColor == "pink")
        {
            
            increase = document.getElementById ("increment").value;
            inversion = increase;
            document.getElementsByClassName ("value")[0].innerHTML = increase + "%" ;
            
            
        }
        else if ( document.getElementById("grayscale").style.backgroundColor == "pink")
        {
           
            increase = document.getElementById ("increment").value;
            gray = increase;
            document.getElementsByClassName ("value")[0].innerHTML = increase + "%" ;
           
            
        }
        document.getElementsByClassName("imageget")[0].style.filter = "grayscale("+gray+"%) "+ "brightness("+bright+"%) "+ "invert("+inversion+"%) "+ "saturate("+saturate+"%) "+ "blur("+blur+"px) "+ "sepia("+sepia+"%)" ;
    }
    
    document.getElementById ("increment1").onchange = function (){
            increase1 = document.getElementById ("increment1").value;
            blur = increase1;
            document.getElementsByClassName ("value1")[0].innerHTML = increase1 + "%" ;
            document.getElementsByClassName("imageget")[0].style.filter = "grayscale("+gray+"%) "+ "brightness("+bright+"%) "+ "invert("+inversion+"%) "+ "saturate("+saturate+"%) "+ "blur("+blur+"px) "+ "sepia("+sepia+"%)" ;

    }
    document.getElementById ("increment2").onchange = function (){
            increase2 = document.getElementById ("increment2").value;

            document.getElementsByClassName ("value2")[0].innerHTML = increase2 + "%" ;
            document.getElementsByClassName("imageget")[0].style.transform = "Rotate("+increase2 + "deg)" ;

    }
    document.getElementById ("increment3").onchange = function (){
            increase3 = document.getElementById ("increment3").value;
            sepia = increase3;
            document.getElementsByClassName ("value3")[0].innerHTML = increase3 + "%" ;
            document.getElementsByClassName("imageget")[0].style.filter = "grayscale("+gray+"%) "+ "brightness("+bright+"%) "+ "invert("+inversion+"%) "+ "saturate("+saturate+"%) "+ "blur("+blur+"px) "+ "sepia("+sepia+"%)" ;
    
    }
    
    document.getElementById("left").onmousedown = function ()
    {

        rotat = rotat - 90 ;
        document.getElementsByClassName("imageget")[0].style.transform = "rotate("+rotat + "deg)";
        document.getElementById("increment").value = rotat;
        document.getElementsByClassName("value2")[0].innerHTML = rotat + "deg" ;

    }
    document.getElementById("right").onmousedown = function ()
    {
        rotat = rotat + 90 ;
        document.getElementsByClassName("imageget")[0].style.transform = "rotate("+rotat + "deg)";
        document.getElementById("increment").value = rotat;
        document.getElementsByClassName("value2")[0].innerHTML = rotat + "deg" ;

    }
   
    document.getElementById("horizontal").onmousedown = function ()
    {
        flip = flip * -1 ;
        document.getElementsByClassName("imageget")[0].style.transform = "scaleX("+flip+ ")";
    }
    document.getElementById("vertical").onmousedown = function ()
    {
        flip1 = flip1 * -1 ;
        document.getElementsByClassName("imageget")[0].style.transform = "scaleY("+flip1+ ")";
       

    }
    document.getElementsByClassName("reset-filter")[0].onmousedown = function ()
    {
        increment = 0;
        rotat = 0;
        flip = 1 ;
        flip1 = 1 ;
        bright = 100;
        saturate = 100;
        inversion = 0;
        gray = 0;
        blur = 0;
        sepia =0;
        if ( document.getElementById("brightness").style.backgroundColor == "pink")
        {
            document.getElementById("increment").value=bright;
            document.getElementsByClassName ("value")[0].innerHTML = bright + "%" ;
        }
        else if ( document.getElementById("saturation").style.backgroundColor == "pink")
        {
            document.getElementById("increment").value=saturate;
            document.getElementsByClassName ("value")[0].innerHTML = saturate + "%" ;     
        }
        else if ( document.getElementById("inversion").style.backgroundColor == "pink")
        {
            document.getElementById("increment").value=inversion;
            document.getElementsByClassName ("value")[0].innerHTML = inversion + "%" ;
        }
        else if ( document.getElementById("grayscale").style.backgroundColor == "pink")
        {
            document.getElementById("increment").value=gray;
            document.getElementsByClassName ("value")[0].innerHTML = gray + "%" ;
        }
        document.getElementById("increment1").value=blur;
        document.getElementById("increment2").value=rotat;
        document.getElementById("increment3").value=sepia;
        document.getElementsByClassName ("value1")[0].innerHTML = blur + "%" ;
        document.getElementsByClassName ("value2")[0].innerHTML = rotat + "%" ;
        document.getElementsByClassName ("value3")[0].innerHTML = sepia + "%" ;
        document.getElementsByClassName("imageget")[0].style.transform = "scaleX("+flip+ ")";
        document.getElementsByClassName("imageget")[0].style.transform = "scaleY("+flip1+ ")";
        document.getElementsByClassName("imageget")[0].style.transform = "Rotate("+rotat + "deg)" ;
        document.getElementsByClassName("imageget")[0].style.filter = "grayscale("+gray+"%) "+ "brightness("+bright+"%) "+ "invert("+inversion+"%) "+ "saturate("+saturate+"%) "+ "blur("+blur+"px) "+ "sepia("+sepia+"%)" ;
    }
   
    const fileInput= document.getElementsByClassName("file-input")[0];
    chooseImg= document.getElementsByClassName("choose-img")[0];
    chooseImg.addEventListener("click", () => fileInput.click()) ;
   
    fileInput.onchange = function (){
        
        document.getElementsByClassName("imageget")[0].src = fileInput.files[0].name;
    }
    



    // function saveImage() 
    // {
    //     document.getElementsByClassName("save-img")[0];
    //     linkElement = document.getElementById('link');
    //     linkElement.setAttribute('download', 'edited_image.png');
    //     // let canvasData = canvas.toDataURL("image/png")
    //     // canvasData.replace("image/png", "image/octet-stream")  
    //     // linkElement.setAttribute('href', canvasData); 
    //     // linkElement.click();
    // }
 



    