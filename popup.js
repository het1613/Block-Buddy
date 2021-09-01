// Saves options to chrome.storage
function save_options() {
    var off = document.getElementById('off').checked;
    var on = document.getElementById('on').checked;
    var auto = document.getElementById('auto').checked;
    var from = 0;
    var to = 0;

    if (auto){
        var from = document.getElementById('auto-from').value;
        var to = document.getElementById('auto-to').value;
    }

    var youtube = document.getElementById('youtube').checked;
    var netflix = document.getElementById('netflix').checked;
    var facebook = document.getElementById('facebook').checked;
    var twitch = document.getElementById('twitch').checked;
    var prime = document.getElementById('prime').checked;
    var hulu = document.getElementById('hulu').checked;
    var disney = document.getElementById('disney').checked;
    var whatsapp = document.getElementById('whatsapp').checked;
    var discord = document.getElementById('discord').checked;
    var messenger = document.getElementById('messenger').checked;
    var wechat = document.getElementById('wechat').checked;
    var instagram = document.getElementById('instagram').checked;
    var tumblr = document.getElementById('tumblr').checked;
    var tiktok = document.getElementById('tiktok').checked;
    var twitter = document.getElementById('twitter').checked;
    var reddit = document.getElementById('reddit').checked;


    chrome.storage.sync.set({
        off: off,
        on: on,
        auto: auto,
        from: from,
        to: to,

        youtube: youtube,
        netflix: netflix,
        facebook: facebook,
        twitch: twitch,
        prime: prime,
        hulu: hulu,
        disney: disney,
        whatsapp: whatsapp,
        discord: discord, 
        messenger: messenger,
        wechat: wechat,
        instagram: instagram,
        tumblr: tumblr,
        tiktok: tiktok,
        twitter: twitter,
        reddit: reddit


    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options Saved! Reload To See Changes in Effect.';
        setTimeout(function() {status.textContent = '';}, 1000);
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
     });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

    chrome.storage.sync.get({
        off: false,
        on: true,
        auto: false,
        from: 0,
        to: 0,

        youtube: true,
        netflix: true,
        facebook: true,
        twitch: true,
        prime: true,
        hulu: true,
        disney: true,
        whatsapp: true,
        discord: true,
        messenger: true,
        wechat: true,
        instagram: true,
        tumblr: true,
        tiktok: true,
        twitter: true,
        reddit: true,

    }, function(items) {
        document.getElementById('off').checked = items.off;
        document.getElementById('on').checked = items.on;
        document.getElementById('auto').checked = items.auto;
        document.getElementById('auto-from').value = items.from;
        document.getElementById('auto-to').value = items.to;

        document.getElementById('youtube').checked = items.youtube;
        document.getElementById('netflix').checked = items.netflix;
        document.getElementById('facebook').checked = items.facebook
        document.getElementById('twitch').checked = items.twitch
        document.getElementById('prime').checked = items.prime
        document.getElementById('hulu').checked = items.hulu
        document.getElementById('disney').checked = items.disney
        document.getElementById('whatsapp').checked = items.whatsapp
        document.getElementById('discord').checked = items.discord
        document.getElementById('messenger').checked = items.messenger
        document.getElementById('wechat').checked = items.wechat
        document.getElementById('instagram').checked = items.instagram
        document.getElementById('tumblr').checked = items.tumblr
        document.getElementById('tiktok').checked = items.tiktok
        document.getElementById('twitter').checked = items.twitter
        document.getElementById('reddit').checked = items.reddit
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('savebtn').addEventListener('click', save_options);

// ------------------------------------------------------------------------------------------------------------------

function yesnoCheck() {
    if (document.getElementById('auto').checked) {
        document.getElementById('auto-option').style.display = 'block';
    }
    else document.getElementById('auto-option').style.display = 'none';
}

document.getElementById("off").addEventListener("click", yesnoCheck);
document.getElementById("on").addEventListener("click", yesnoCheck);
document.getElementById("auto").addEventListener("click", yesnoCheck);


  