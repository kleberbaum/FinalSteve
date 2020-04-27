$(document).ready(function() {

    online = true;
    geourl = undefined
    oldpuip = undefined;
    oldprip = undefined;
    oldpdnsip = undefined;
    oldpdnsinf = undefined;

    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
        geourl = "https://geoip.erebos.xyz/geoip/"+data.split("\n")[2].split("=")[1];
        InfoData(geourl);
        re();
    })

    setInterval(function time()
    {
        //info updater
        InfoData(geourl);
        re();
    }, 10000);

});

function re()
{

    //reload js
    $("#refresh script").each(function(){
        var oldScript = this.getAttribute("src");
        $(this).remove();
        var newScript;
        newScript = document.createElement("script");
        newScript.type = "text/javascript";
        newScript.src = oldScript;
        $(newScript).insertAfter( "#iframe" );
    });
}

function InfoData(url)
{

    //check if there is a connection to the Internet
    if(!navigator.onLine){
        //alert("!");
        online = false;
        lipv4s = $("<li></li>").text("Offline");
        $(".moreinfo-trigger").hide();
        InfoOut();
    }else{
        $.getJSON(url, function(json) {
            //is online
            online = true;

            getglobal(json)
            //public IPs
            //try if it is possible to give the preferred info
            pipv4s = $("<li>").append($('<a>').prop('href','/user/messages').text("Your public IP addresses: " + json.ip + " - " + json.country_code));
            InfoOut();

        }).fail(function() {
            if (oldpuip === undefined){
                //altanativ info
                pipv4s = $("<li>").append($('<a>').prop('href','/user/messages').text("Your public IP addresses: " + pipv4));
                InfoOut();
            }else{
                //some shit is happening
                InfoOut();
            }
        }).always(function() {
            //alert( "complete" );
        });
    }

    //local IPs

    if (lipv4 !== undefined){
        lipv4s = $("<li>").append($('<a>').prop('href','/user/messages').text("Your local IP addresses: " + lipv4));
        InfoOut();
    }

    //IPv6 addresses
    //if (ipv6 !== undefined){
    //    ipv6s = $("<li></li>").text("Your IPv6 addresses: " + lipv4);
    //    $("#ip").append(ipv6s);
    //}

    //DNS
    try {
        jdnsips = $("<li>").addClass("moreinfo").append($('<a>').prop('href','/user/messages').text("Your DNS Ip addresses: " + jdnsip));
        jdnsinfos = $("<li>").addClass("moreinfo").append($('<a>').prop('href','/user/messages').text("Your DNS Host: " + jdnsinfo));
        $(".moreinfo-trigger").show();
        InfoOut();
    }
    catch(err){

        InfoOut();
    }
}

function InfoOut()
{
    //clear ul
    $("#ip").empty();
    //output
    $("#ip").append(pipv4s);
    $("#ip").append(lipv4s);
    //$("#ip").append(jdnsips);
    //$("#ip").append(jdnsinfos);
}
