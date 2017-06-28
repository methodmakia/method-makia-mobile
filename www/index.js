"use strict";

document.addEventListener("deviceready", function() {
    // Open configured site
    var ref = cordova.InAppBrowser.open(
        'https://application.methodmakia.com/login_application',
        '_blank',
        ['location=no','toolbar=no','zoom=no','transitionstyle=crossdissolve'].join(','),
    );
    // Hide splash screen when content is loaded
    ref.addEventListener('loadstop', function() {
        navigator.splashscreen.hide();
    });
    // But also hide after two seconds, just in case
    window.setTimeout(function() {
        navigator.splashscreen.hide();
    }, 10000);
    // Keep screen on while application is active
    window.plugins.insomnia.keepAwake();
}, false);
