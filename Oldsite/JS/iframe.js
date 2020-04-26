$(window).bind("load", function() {

    function reloadIframe() {
        
    if ( ($(window).width()) < 825) {
        $("iframe").attr("src", $("iframe").attr("src"))
    }
}
    $(window)
    .resize(reloadIframe)
};