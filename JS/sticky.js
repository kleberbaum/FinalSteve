$(window).bind("load", function() {

    var $navcontainer = $(".navcontainer"),
        $contentcontainer = $(".contentcontainer"),
        $footer = $("footer"),
        $shadow = $(".shadowfix");

    if (navigator.userAgent.toLowerCase().indexOf("mobile") < 1)
    {
        $navcontainer.css({
            position: "static"
        })
    }

    positionFooter();

    function positionFooter() {


        if ( ($(document.body).height()) < $(window).height()) {
            $footer.css({
                position: "absolute"
            })
            $shadow.css({
                position: "absolute"
            })
            $contentcontainer.css({
                backgroundColor: "rgba(0, 0, 0, 0)",
                backgroundImage: "url()"

            })
        } else {
            $footer.css({
                position: "static"
            })
            $shadow.css({
                position: "static"
            })
            $contentcontainer.css({
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                backgroundImage: "url(./PIC/gg.gif)"
            })
        }
    }

    $(window)
        .resize(positionFooter)

});