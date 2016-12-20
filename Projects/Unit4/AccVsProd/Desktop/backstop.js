/**
 * Created by Alex on 11/2/16.
 * This is the backstop.js config file for CSS regression testing for projects
 * Designed to be reusable and easy to configure
 * https://github.com/garris/BackstopJS for detailed documentation
 */


//Different base URL's based on environment
var baseUrl = {
    acct: "http://www.unit4.acct.us.onehippo.com/",
    prod: "http://www.unit4.com/"

};

//Change testing Environment here by changing baseUrl suffix
var BASE_URL = baseUrl.acct;

//Can be enabled to test url against base_url. To enable, uncomment BASE_REFERENCE_URL variable and referenceUrl object
//in the loopThroughUrlArray function and parameter
var BASE_REFERENCE_URL = baseUrl.prod;

//Selectors that are selected for every test, can leave empty or add multiple selectors such as:
// var DEFAULT_SELECTORS = ["selector1","selector2"]
var DEFAULT_SELECTORS = ["header", "#main", "footer"];


/**
 *
 * Example config object in configList
 * Only need url page to test. By default a screenshot of the whole page is taken
 * Custom properties can be taken as well
 {
    url: "URL_PAGE",                    //Target URL goes here
    hide: "selector",                   //Selector content that is hidden
    remove: "selector",                 //Selectors that will be removed
    selector:"selector"                 //Additional selectors for testing for specific URL -- can have multiple
 }
 *
 */


var configList = [{
    url: "your-rules#why-unit4",
    hide: "#main > div > div:nth-child(1) > div.row.homecarousel"
},{
    url: "applications/erp",
    hide: "#main > div > div:nth-child(1) > div.row.homecarousel"

},{
    url: "applications/cfo",
    hide: "#main > div > div:nth-child(1) > div.row.homecarousel"
},{
    url: "applications/hr"
},{
    url: "applications/more/regional-products",
    hide: "#main div div div.row.homecarousel"
},{
    url: "applications/sector-solutions",
    hide: "#main div div div.row.homecarousel"
},{
    url: "sectors/professional-services"
},{
    url: "sectors/public-services"
},{
    url: "sectors/education"
},{
    url: "sectors/ngos-and-not-for-profit"
},{
    url: "sectors/wholesale"
},{
    url: "sectors/real-estate"
},{
    url: "sectors/additional-sectors"
},{
    url: "customer-service/key-services"
},{
    url: "customer-service/support"
},{
    url: "customer-service/unit4-ideas"
},{
    url: "about/our-company"
},{
    url: "about/awards"
},{
    url: "about/news"
},{
    url: "about/management-team"
},{
    url: "blog"
},{
    url: "about/management-team"
},{
    url: "about/partners"
},{
    url: "about/events"
},{
    url: "about/ethics"
},{
    url: "about/social-media-directory"
},{
    url: "about/faq"
},{
    url: "contact"
},{
    url: "about/news/archive"
}];


/**
 *
 *
 *
 *
 *
 *
 * Do not edit anything below these comments
 * Only the above code needs to be changed
 *
 *
 *
 *
 *
 *
 */


//Logging to help with debugging
if (BASE_URL == undefined) {
    console.log("BASE_URL is undefined");
    process.exit();
} else {
    console.log("BASE_URL is: " + BASE_URL);
}

if (DEFAULT_SELECTORS != undefined){
    console.log("DEFAULT_SELECTORS ARE: ")
    console.log(DEFAULT_SELECTORS)
}

console.log("****************");

//Function to reduce redundancy and make code easier to read and manage
//These are suggested default configs that can be overwritten by configList array
function loopThroughUrlArray() {

    var scenarios = [];
    var selectorsArray = [];
    for (var prop in configList) {

        //Conditional to prevent error when only default selectors are being used.
        if (configList[prop].selector == undefined){
            selectorsArray = DEFAULT_SELECTORS;
        } else {
            selectorsArray = [configList[prop].selector];
            selectorsArray.push(DEFAULT_SELECTORS);
            selectorsArray = [].concat.apply([], selectorsArray);
        }
        //Concating allows the merge of two arrays into one
        var hideSelectorsArray = [configList[prop].hide];
        hideSelectorsArray = [].concat.apply([], hideSelectorsArray);

        var removeSelectorsArray = [configList[prop].remove];
        removeSelectorsArray = [].concat.apply([], removeSelectorsArray);

        var scenario = {
            "label": BASE_URL + configList[prop].url,
            "url": BASE_URL + configList[prop].url,
            //reference URL can be enabled that tests url against referenceUrl
            "referenceUrl": BASE_REFERENCE_URL + configList[prop].url,
            "hideSelectors": hideSelectorsArray,
            "removeSelectors": removeSelectorsArray,
            "selectors":  selectorsArray,
            "readyEvent": null,
            "delay": 500,
            "misMatchThreshold": 0.1,
            "onBeforeScript": "onBefore.js",
            "onReadyScript": "onReady.js"
        };

        scenarios.push(scenario);
        selectorsArray = [];
        hideSelectorsArray = [];
        removeSelectorsArray = [];
        provideLogging(BASE_URL+configList[prop].url,configList[prop].hide,
            configList[prop].remove/*,BASE_REFERENCE_URL+configList[prop].url*/);
    }
    return scenarios;
}

//Logging to help with debugging and tracking
//Tells you every URL being used and what the hiding and removed selectors are
function provideLogging(url,hide,remove,referenceUrl){
    referenceUrl = referenceUrl || url;
    console.log("Url: " + url);
    if (referenceUrl != undefined){
        console.log("Reference URL: " + referenceUrl);
    }
    if (hide != undefined){
        console.log("Selector Hiding: " + hide);
    }
    if (remove != undefined) {
        console.log("Selector Removing: " + remove);
    }
    console.log("*******************\n");
}

//JSON object that is being exported for Backstop
var exporting = { "id": "prod_test",
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

//Backstop only looks for config data in module.exports. Change export to change configs
module.exports = exporting;

