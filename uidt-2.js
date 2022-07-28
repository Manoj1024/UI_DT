function getUrlParameterValue(url, parameter) {
    var url_in = new URL(url);
    return url_in.searchParams.get(parameter);
    }
    
    var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
    
    console.log(getUrlParameterValue(url, "utm_medium"));
    console.log(getUrlParameterValue(url, "utm_campaign"));
    