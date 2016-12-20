/**
 * Created by admin on 12/5/16.
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


var configList = [
    /*{   url: "",
     remove:  ["#main > div > div:nth-child(1) > div.row.homecarousel","#main > div > div:nth-child(3) > div > div.row.tabs.mobile-expand > ul > li.tab-item.active > div","#player > div.video-wrapper > div > div > video"]
     },*/
    {
        url: "your-rules#why-unit4",
        remove:  ["#main > div > div:nth-child(1) > div.row.homecarousel","#tab-group-0-0 > div.col-5","#people-in-business---wsp---parsons-brinckerhoff > div > blockquote > h4 > em > p > div","#tab-group-0-0 > div.col-5 > img"]
    },{
        url: "applications/erp",
        remove: ["#main > div > div:nth-child(1) > div.row.homecarousel","#main > div > div:nth-child(2) > div:nth-child(3) > div.grid > div.col-5 > div > img","#tab-group-0-0 > div.col-5 > img"]

    },{
        url: "applications/cfo",
        remove: ["#main > div > div:nth-child(1) > div.row","#main > div > div:nth-child(7) > div > div > div.col-8 > div > div","#pane1 > div.col-7 > div > div > div > div.slide.slick-slide.slick-current.slick-active > img"]
    },{
        url: "applications/hr",
        remove: ["#main > div > div:nth-child(1) > div.row > div","#pane1 > div.col-7 > div > div > div > div.slide.slick-slide.slick-current.slick-active > img","#main > div > div:nth-child(13) > div > div > div.col-8 > div > div"]
    },{
        url: "applications/more/regional-products",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    },{
        url: "applications/sector-solutions",
        remove: ["#main > div > div:nth-child(1) > div.row > div"]
    },{
        url: "sectors/professional-services",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel","#main > div > div:nth-child(5) > div.row.bg-grey > div.grid > div.col-5 > div","#player > div.video-wrapper"]
    },{
        url: "sectors/public-services",
        remove: ["#main > div > div:nth-child(1) > div.row.homecarousel > div","#main > div > div:nth-child(3) > div.row.bg-grey > div.grid > div.col-5 > div > iframe","#main > div > div:nth-child(9) > div:nth-child(3) > div.grid > div.col-5 > div"]
    },{
        url: "sectors/education",
        remove: ["#main > div > div:nth-child(1) > div.row.homecarousel > div","#main > div > div:nth-child(3) > div.row.bg-grey > div.grid > div.col-5 > div","#main > div > div:nth-child(4) > div:nth-child(3) > div > div.col-5 > div"]
    },{
        url: "sectors/ngos-and-not-for-profit",
        remove: ["#main > div > div:nth-child(1) > div.row.homecarousel > div","#main > div > div:nth-child(3) > div.row.bg-grey > div.grid > div.col-5 > div","#main > div > div:nth-child(12) > div.row.bg-grey > div.grid > div.col-5 > div"]
    },{
        url: "sectors/wholesale",
        remove: ["#main div div div.row.homecarousel","#main > div > div:nth-child(3) > div.row.bg-grey > div.grid > div.col-5 > div","#main > div > div:nth-child(9) > div:nth-child(3) > div.grid > div.col-5 > div"]
    },{
        url: "sectors/real-estate",
        remove: ["#main div div div.row.homecarousel","#main > div > div:nth-child(3) > div.row.bg-grey > div.grid > div.col-5 > div","#main > div > div:nth-child(8) > div:nth-child(3) > div.grid > div.col-5 > div"]
    },
    {
        url: "sectors/additional-sectors",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    },
    {
        url: "/customer-service/expert-software-services",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    },
    {
        url: "customer-service/key-services",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    }

];


/**
 *

 * Do not edit anything below these comments
 * Only the above code needs to be changed
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
var exporting = { "id": "testmobile01",
    "viewports": [
        {
            "name": "mobile",
            "width": 414,
            "height": 736
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
    "engine": "slimerjs",
    "report": ["browser"],
    "debug": false
};

//Backstop only looks for config data in module.exports. Change export to change configs
module.exports = exporting;

/*
 To run reference

 npm run reference -- --configPath=PathToJsFile.js

 example:

 npm run reference -- --configPath=Projects/Unit4/backstop.js

 To run tests:

 npm run test -- --configPath=PathToJsFile.js

 example:

 npm run reference -- --configPath=Projects/Unit4/backstop.js*/