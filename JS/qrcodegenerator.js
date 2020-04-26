$(window).bind("load", function() {

    new fp().get(function(result) {
        try {
            if(result == PID[0])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[0] + " - " + jip + " - " + jcountry_code + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[0]);
            } else if(result == PID[1])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[1] + " - " + jip + " - " + jcountry_code + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[1]);
            } else if(result == PID[2] || result == PID[3])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[2] + " - " + jip + " - " + jcountry_code + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[2]);
            }else if(result == PID[4])
            {
                $('#qr').qrcode({"text": SIPPE[3] + " - " + jip + " - " + jcountry_code + " - " + jisp});
                alert("Merhaba" + " " + SIPPE[3]);
            }else if(result == PID[5])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[4] + " - " + jip + " - " + jcountry_code + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[4]);
            }else if(result == PID[6])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[5] + " - " + jip + " - " + jcountry_code + " - " + jisp});
                alert("Freundschaft, Genosse" + " " + SIPPE[5]);
            }else
            {
                $('#qr').qrcode({"text": jip + " - " + jcountry_code + " - " + jisp});
            }
        }
        catch(error) {
            if(result == PID[0])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[0] + " - " + aip});
                alert("Freundschaft, Genosse" + " " + SIPPE[0]);
            } else if(result == PID[1])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[1] + " - " + aip});
                alert("Freundschaft, Genosse" + " " + SIPPE[1]);
            } else if(result == PID[2] || result == PID[3])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[2] + " - " + aip});
                alert("Freundschaft, Genosse" + " " + SIPPE[2]);
            }else if(result == PID[4])
            {
                $('#qr').qrcode({"text": SIPPE[3] + " - " + aip});
                alert("Merhaba" + " " + SIPPE[3]);
            }else if(result == PID[5])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[4] + " - " + aip});
                alert("Freundschaft, Genosse" + " " + SIPPE[4]);
            }else if(result == PID[6] || result == PID[7])
            {
                $('#qr').qrcode({"text": "Genosse" + " " + SIPPE[5] + " - " + aip});
                alert("Freundschaft, Genosse" + " " + SIPPE[5]);
            }else
            {
                $('#qr').qrcode({"text": " - " + aip + " - "});
            }
        }
    });
});