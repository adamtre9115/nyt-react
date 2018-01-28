const axios = require("axios");
// var query = "president";
// var beginDate = "2008";
// var endDate = "2009";

// console.log(url)

export default {

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
                    reject(err);
                }
            })
        })
    }


    // newSearch();


}