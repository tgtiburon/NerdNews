
module.exports = {
    format_date: date => {
        // For minutes I have to check if its 12:00 to 12:09..if it is add a 0 in front of the minutes
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date).getFullYear()} at ${new Date(date).getHours()}:${(new Date(date).getMinutes()<10?'0':'') + date.getMinutes()}`;
    },
    format_plural: (word, amount) => {
        if(amount !== 1) {
            return `${word}s`;
        }
        return word;
    }//,
    // format_url: url => {
    //     return url
    //         .replace('http://', '')
    //         .replace('https://', '')
    //         .replace('www.', '')
    //         .split('/')[0]
    //         .split('?')[0];
    // },

}

