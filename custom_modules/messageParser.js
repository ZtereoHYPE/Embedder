module.exports = {
    checkForURLs(messageContent) {
        let urlregex = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/);
        let match = urlregex.exec(messageContent)
        return match? match[0]:false
    },
    checkForTikTok(url) {
        return url.includes('tiktok')
    },
    checkForInstagram(url) {
        return url.includes('instagram')
    }
}