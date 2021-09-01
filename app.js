const generateSTYLES = () => {
  return `
  <style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap');

    * {
      margin: 0;
      padding: 0;
      outline: 0;
    }

    body {
      font-family: 'Poppins', sans-serif;
    }

    section{
      width: 100%;
      height: 100vh;
      background: linear-gradient(-45deg, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);;
      background-size: 400% 400%;
      position: relative;
      animation: animate 7.5s ease-in-out infinite;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h1{
      color: #fff;
      background: rgba(255,255,255,.2);
      padding: 20px;
      font-size: 50px;
      border-radius: 10px;
      margin: 20px;
    }

    @keyframes animate{
      0%{
        background-position: 0 50%;
      }
      50%{
        background-position: 100% 50%;
      }
      100%{
        background-position: 0 50%;
      }
    }
  </style>
  `
};
  
const generateHTML = (website_name) => {
  return `
  <section>
    <h1> ${website_name} Blocked By <span style='color:red'>Block Buddy</span></h1>
    <h1>GET BACK TO STUDYING/WORKING!</h1>
  </section>`
  // Credit to Ahmed Riad for animated gradient background
};



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
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  var current_time = ((h*60)+m);

  if (items.from==0 && items.to==0) {
    var from_time=1500
    var to_time=0

  }else {
    var from_time = items.from.split(":");
    var h = parseInt(from_time[0], 10);
    var m = parseInt(from_time[1], 10);
    var from_time = ((h*60)+m)

    var to_time = items.to.split(":");
    var h = parseInt(to_time[0], 10);
    var m = parseInt(to_time[1], 10);
    var to_time = ((h*60)+m)
  }

  if ((items.on) || (current_time>=from_time && to_time>=current_time)) {
    if (window.location.hostname.includes('youtube.com') && items.youtube) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YouTube");
    }
    if (window.location.hostname.includes('facebook.com') && items.facebook) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FaceBook");
    }
    if (window.location.hostname.includes('netflix.com') && items.netflix) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Netflix");
    }
    if (window.location.hostname.includes('twitch.tv') && items.twitch) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Twitch");
    }
    if (window.location.hostname.includes('primevideo.com') && items.prime) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Prime Video");
    }
    if (window.location.hostname.includes('hulu.com') && items.hulu) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Hulu");
    }
    if (window.location.hostname.includes('disneyplus.com') && items.disney) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Disney+");
    }
    if (window.location.hostname.includes('whatsapp.com') && items.whatsapp) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("WhatsApp");
    }
    if (window.location.hostname.includes('discord.com') && items.discord) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Discord");
    }
    if (window.location.hostname.includes('messenger.com') && items.messenger) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML('Messenger');
    }
    if (window.location.hostname.includes('wechat.com') && items.wechat) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML('WeChat');
    }
    if (window.location.hostname.includes('instagram.com') && items.instagram) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Instagram");
    }
    if (window.location.hostname.includes('tumblr.com') && items.tumblr) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML('Tumblr');
    }
    if (window.location.hostname.includes('tiktok.com') && items.tiktok) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML('TikTok');
    }
    if (window.location.hostname.includes('twitter.com') && items.twitter) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML('Twitter');
    }
    if (window.location.hostname.includes('reddit.com') && items.reddit) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML('Reddit');
    }
  }

})

