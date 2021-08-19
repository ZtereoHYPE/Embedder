// const { checkForURLs, promiseGET } = require("./custom_modules/messageParser");
const TikTokScraper = require('tiktok-scraper');
// console.log(checkForURLs("shit  okay so this  https://vm.tiktok.com/ZMRNyNnmg/ !!"))
// promiseGET("https://vm.tiktok.com/ZMRNyNnmg/").then((res) => {
//     let videoUrl = res.headers;
//     // console.log(videoUrl);
//     // let contentURL = checkForURLs(res);
//     // promiseGET(`https://www.tiktok.com/oembed?url=${contentURL}`).then((res) => {
//     //     console.log(JSON.parse(res))
//     // });
// });


TikTokScraper.getVideoMeta("https://vm.tiktok.com/ZMRNyNnmg/").then(console.log);