if (navigator.userAgent.toLowerCase().indexOf("edge") > 0)
{
    var alternativeCss = document.createElement("link");

    alternativeCss.rel = "stylesheet";
    alternativeCss.href = "../CSS/alternativestyles2.css";

    document.getElementsByTagName("head")[0].appendChild(alternativeCss);
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome") > 0)
{
    var chromeCss = document.createElement("link");

    chromeCss.rel = "stylesheet";
    chromeCss.href = "../CSS/chromestyles.css";

    document.getElementsByTagName("head")[0].appendChild(chromeCss);
}
else
{
    var alternativeCss = document.createElement("link");

    alternativeCss.rel = "stylesheet";
    alternativeCss.href = "../CSS/alternativestyles2.css";

    document.getElementsByTagName("head")[0].appendChild(alternativeCss);
}