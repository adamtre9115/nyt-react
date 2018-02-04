import axios from 'axios';

export default {
    // Search the New York Times for articles relavent to the topic entered
    searchArticles: function newSearch(searchData) {
        const key = "b6bd0289a3a7474db3e886ae07244506";
        let topic = searchData.topic;
        let startYear = searchData.startYear;
        let endYear = searchData.endYear;

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += `?api-key=${key}&q=${topic}&fl=_id,web_url,snippet,headline,pub_date&page=0&begin_date=${startYear}0101&end_date=${endYear}1231`;

        return new Promise(function(resolve, reject) {
            axios.get(url).then((response, err) => {
                if (response) {
                    resolve(response.data.response.docs);
                } else {
                    console.log(err);
                    reject(err);
                }
            })
        })
    },
    // Here we'll save articles that are selected... Connects to route.post
    saveArticles: function(articleData) {
        return axios.post("/api/articles", articleData)

    },

    getArticles: function() {
        return axios.get("/api/savedArticles");
    }
}