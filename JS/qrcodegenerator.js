$(window).bind("load", function() {
/*
    (function($) {
        $.QueryString = (function(a) {
            if (a == "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i)
            {
                var p=a[i].split('=', 2);
                if (p.length != 2) continue;
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        })(window.location.search.substr(1).split('&'))
    })(jQuery);
*/
    new fp().get(function(result) {
        try {
            if(result == PID[0])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[0] + " - " + jip + " - " + jcountryCode + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[0]);
            } else if(result == PID[1])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[1] + " - " + jip + " - " + jcountryCode + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[1]);
            } else if(result == PID[2] || result == PID[3])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[2] + " - " + jip + " - " + jcountryCode + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[2]);
            }else if(result == PID[4])
            {
                $('#qr').qrcode({"text": SIPPE[3] + " - " + jip + " - " + jcountryCode + " - " + jisp});
                alert("Merhaba" + " " + SIPPE[3]);
            }else if(result == PID[5])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[4] + " - " + jip + " - " + jcountryCode + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[4]);
            }else if(result == PID[6])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[5] + " - " + jip + " - " + jcountryCode + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[5]);
            }else
            {
                $('#qr').qrcode({"text": jip + " - " + jcountryCode + " - " + jisp});
            }
        }
        catch(error) {
            if(result == PID[0])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[0] + " - " + pip4});
                alert("Freundschaft, Genosse" + " " + SIPPE[0]);
            } else if(result == PID[1])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[1] + " - " + pip4});
                alert("Freundschaft, Genosse" + " " + SIPPE[1]);
            } else if(result == PID[2] || result == PID[3])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[2] + " - " + pip4});
                alert("Freundschaft, Genosse" + " " + SIPPE[2]);
            }else if(result == PID[4])
            {
                $('#qr').qrcode({"text": SIPPE[3] + " - " + aip});
                alert("Merhaba" + " " + SIPPE[3]);
            }else if(result == PID[5])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[4] + " - " + pip4});
                alert("Freundschaft, Genosse" + " " + SIPPE[4]);
            }else if(result == PID[6] || result == PID[7])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[5] + " - " + pip4});
                alert("Freundschaft, Genosse" + " " + SIPPE[5]);
            }else
            {
                $('#qr').qrcode({"text": " - " + pip4 + " - "});
            }
        }
    });
});
