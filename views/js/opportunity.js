window.addEventListener(
    'load',
    function () {
        // var link = "whatsapp://send?text=linkiki";	
        // dLog("onload: should click link now "+ link +" "+ Date.now())
        redirectUserToApp()
    },
    false
);

function redirectUserToApp() {

    // get the ecosystem and browser we're in
    let ecosystem = getEcoSystem();
    let browserName = getBrowser();
    let symbol = document.getElementById('additional-data').getAttribute('symbol')
    var deepLink = `tipigo-benzinga://opensymbol:${symbol}`

    dLog(browserName);
    // if ecosystem is desktop / we don't have a link to app store simply redirect to download page
    if (ecosystem == "desktop") {
        return;
    } else {

    }
    var company = ecosystem == "ios" ? "apple" : "google"

    window.location = deepLink;
}

function getEcoSystem() {

    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        // os = 'Mac OS';
        os = "desktop"
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        // os = 'iOS';
        os = "ios"
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        // os = 'Windows';
        os = "desktop"
    } else if (/Android/.test(userAgent)) {
        // os = 'Android';
        os = "android"
    }

    return os;
}
var getBrowser = function () {
    try {
        var e;
        var f = e.width;
    } catch (e) {
        var err = e.toString();

        if (err.indexOf("not an object") !== -1) {
            return "safari";
        } else if (err.indexOf("Cannot read") !== -1) {
            return "chrome";
        } else if (err.indexOf("e is undefined") !== -1) {
            return "firefox";
        } else if (err.indexOf("Unable to get property 'width' of undefined or null reference") !== -1) {
            if (!(false || !!document.documentMode) && !!window.StyleMedia) {
                return "edge";
            } else {
                return "IE";
            }
        } else if (err.indexOf("cannot convert e into object") !== -1) {
            return "opera";
        } else {
            return undefined;
        }
    }
};

var scroll = "";
var dataElement;
var logElement;
function dLog(msg) {
    console.log(msg)
    logElement = document.getElementById('log-element');
    scroll += "<br />" + msg
    //logElement.innerHTML = scroll
}



// $(document).ready(() => {
//     const debug = true;

//     let opportunityId = window.location.pathname.split("/").pop();
//     if (debug) opportunityId =  '5c19568115b95664728b4575'
    

//     $.post('https://app.tipigo.com/finance/get_alert_for_tizer', { id: opportunityId }).then(res => {
//         console.log(res)
//         if (res.error_code) {
//             $('#not-found').css('display', 'block')
//         } else {
//             let keys = res;
//             keys['month'] = res.success_month_back > 1 ? "months" : "month"
//             keys['bullbear_text'] = res.bullbear.replace("b", "B");
//             $('#main').html((i, text) => {
//                 $.each(keys, (key, value) => {
//                     key = '%' + key.toUpperCase() + '%'
//                     text = text.split(key).join(value)
//                 })
//                 return text;
//             })
//             $('#main').css('display', 'block');
//         }
//         doneLoading();
//     })
// })