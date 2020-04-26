function clock() {
    time();
    window.setInterval("time()", 1000);
}

function time() {
    var now = new Date();
    var hours = 0;
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    thetime = (hours < 10) ? "0" + hours + ":" : hours + ":";
    thetime += (minutes < 10) ? "0" + minutes + ":" : minutes;
    // + ":";
    //thetime += (seconds < 10) ? "0" + seconds : seconds;

    element = document.getElementById("time");
    element.innerHTML = thetime;
    
    if(hours == 0)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr12.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours < 12)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr13.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 12)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr0.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 13)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr1.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 14)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr2.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 15)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr3.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 16)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr4.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 17)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr5.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 18)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr6.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 19)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr7.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 20)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr8.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 21)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr9.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 22)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr10.gif">';
        document.getElementById('seal').title = thetime;
    }
    else if(hours == 23)
    {
        document.getElementById('uhr').innerHTML = '<img id="seal" src="./PIC/uhr11.gif">';
        document.getElementById('seal').title = thetime;
    }
}