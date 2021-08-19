module.exports = {
    checkForURLs(messageContent) {
        let urlregex = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/);
        let match = urlregex.exec(messageContent)
        return match? match[0]:false
    },
    checkForTikTok(url) {
        if (url.includes('tiktok')) {
            return true
        }
        return false
    },
    checkForInstagram(url) {
        if (url.includes('instagram')) {
            return true
        }
        return false
    }
}