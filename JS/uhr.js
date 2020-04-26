$(document).ready(function() {

    setInterval(function time()
                {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        
        if(hours == 0)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr12.gif">');
            $('.banner').css({
                backgroundImage: "url(./PIC/veins2.png)"
            })
        }
        else if(hours < 12)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr13.gif">');
        }
        else if(hours == 12)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr0.gif">');
        }
        else if(hours == 13)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr1.gif">');
        }
        else if(hours == 14)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr2.gif">');
        }
        else if(hours == 15)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr3.gif">');
        }
        else if(hours == 16)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr4.gif">');
        }
        else if(hours == 17)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr5.gif">');
        }
        else if(hours == 18)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr6.gif">');
        }
        else if(hours == 19)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr7.gif">');
        }
        else if(hours == 20)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr8.gif">');
        }
        else if(hours == 21)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr9.gif">');
        }
        else if(hours == 22)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr10.gif">');
        }
        else if(hours == 23)
        {
            $('.uhr').html('<img id="seal" src="./PIC/uhr11.gif">');
        }

    }, 1000);
});