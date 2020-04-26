$(document).ready(function() {

    setInterval(function time()
                {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var abyss = (24 * 60 * 60) - ((hours * 60 * 60) + (minutes * 60) + seconds);

        if(hours == 0)
        {
            $('#seal').prop('src', "./PIC/uhr12.gif");
            $('#seal').prop('title', abyss);
            $('.banner').css({
                backgroundImage: "url(./PIC/veins2.png)"
            })
        }
        else if(hours < 12)
        {
            $('#seal').prop('src', "./PIC/uhr13.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 12)
        {
            $('#seal').prop('src', "./PIC/uhr0.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 13)
        {
            $('#seal').prop('src', "./PIC/uhr1.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 14)
        {
            $('#seal').prop('src', "./PIC/uhr2.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 15)
        {
            $('#seal').prop('src', "./PIC/uhr3.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 16)
        {
            $('#seal').prop('src', "./PIC/uhr4.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 17)
        {
            $('#seal').prop('src', "./PIC/uhr5.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 18)
        {
            $('#seal').prop('src', "./PIC/uhr6.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 19)
        {
            $('#seal').prop('src', "./PIC/uhr7.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 20)
        {
            $('#seal').prop('src', "./PIC/uhr8.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 21)
        {
            $('#seal').prop('src', "./PIC/uhr9.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 22)
        {
            $('#seal').prop('src', "./PIC/uhr10.gif");
            $('#seal').prop('title', abyss);
        }
        else if(hours == 23)
        {
            $('#seal').prop('src', "./PIC/uhr11.gif");
            $('#seal').prop('title', abyss);
        }

    }, 1000);
});
