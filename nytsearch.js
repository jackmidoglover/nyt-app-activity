console.log("Working");



var url = "https:// api.nytimes.com/svc/search/v2/articlesearch.json";
$.ajax({
    url: url,
    method: 'GET',
}) .done(function(response){
console.log(response);
}).fail(function(err){
    throw err;

});

// b737d6a7fa1046848f3108f0fbcdb495





