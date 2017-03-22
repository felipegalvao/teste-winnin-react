import axios from 'axios';

module.exports = {
    getSubredditPosts: function (url) {
        return axios.get(url).then(function (res) {            
            return res.data.data.children
        }).catch(function (res) {            
            return "An error has occured.";
        })
    },
}