/**
 * Created by Alex on 11/2/16.
 * This is the backstop.js config file for CSS regression testing for Couchbase
 * Designed to be reusable and easy to configure
 * https://github.com/garris/BackstopJS for detailed documentation
 */


//Different base URL's based on environment
var baseUrl = {
    local: "http://localhost:8080/site/",
    qa: "http://ax-qa.couchbase.com/",
    stage: "http://ax-stage.couchbase.com/",
    prod: "http://www.couchbase.com/"
};

//Example config object
//Only need url page to test. By default a screenshot of the whole page is taken
//Custom parameters can be taken as well
//{
//     url: "URL_PAGE",
//     hide: "selector",
//     remove: "selector",
//     selector:"selector"
// }

var configList = [{
    url: "about",
    hide: "#global-content > div.generic-header",
    remove: "#global-footer",
    selector:"#global-header"
},{
    url: "nosql-resources/why-nosql",
},{
    url: "azure",
},{
    url: "become-a-partner",
},{
    url: "careers",
},{
    url: "whats-new-in-3-0"
}];

//Change Environment here by changing BASE_URL
var BASE_URL = baseUrl.qa;
//Can be enabled to test url against base_url
var BASE_REFERENCE_URL = baseUrl.stage;

//Selectors that are selected for every test
// var DEFAULT_SELECTORS = ["selector1","selector2"]
var DEFAULT_SELECTORS = ["document"];

//Function to reduce redundancy and make code easier to read and manage
//These are suggested default configs that can be overwritten by configList array
function loopThroughUrlArray() {
    var scenarios = [];
    var selectors = DEFAULT_SELECTORS;
    for (var prop in configList) {

        //If there is another selector in configList, add it to selector array
        if (typeof configList[prop].selector !== 'undefined'){
            selectors.push(configList[prop].selector);
        }
         var scenario = {
             "label": BASE_URL+configList[prop].url,
             "url": BASE_URL+configList[prop].url,
             //reference URL can be enabled that tests url against referenceUrl
             "referenceUrl": BASE_REFERENCE_URL+configList[prop].url,
             "hideSelectors": [configList[prop].hide],
             "removeSelectors": [configList[prop].remove],
             "selectors": selectors,
             "readyEvent": null,
             "delay": 500,
             "misMatchThreshold" : 0.1,
             "onBeforeScript": "onBefore.js",
             "onReadyScript": "onReady.js"
         };
        scenarios.push(scenario);
        selectors = [];
    };
    return scenarios;
}


//Backstop only looks for config data in module.exports. Change export to change configs
module.exports = {
    "id": "prod_test",
    "viewports": [
        {
            "name": "desktop",
            "width": 1440,
            "height": 900
        }
    ],
    "scenarios":
        loopThroughUrlArray(),

    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "casper_scripts": "backstop_data/casper_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "casperFlags": [],
    "engine": "phantomjs",
    "report": ["browser"],
    "debug": false
};

