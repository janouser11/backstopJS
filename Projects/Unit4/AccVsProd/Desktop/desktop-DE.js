/**
 * Created by admin on 12/5/16.
 */

//Different base URL's based on environment
var baseUrl = {
    //test: "http://www.unit4.test.us.onehippo.com/de/",
    acct:"http://www.unit4.acct.us.onehippo.com/de/",
    prod: "http://www.unit4.com/de/"

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
    {   url: "",
        remove:  ["#main > div > div:nth-child(1) > div.row.homecarousel","#main > div > div:nth-child(3) > div > div.row.tabs.mobile-expand > ul > li.tab-item.active > div","#player > div.video-wrapper > div > div > video"]
    },
    {   url: "your-rules",
        remove:  ["#main > div > div:nth-child(1) > div.row.homecarousel","#tab-group-0-0 > div.col-5"]
    },
    {   url: "/produkte/erp",
        remove: ["#main > div > div:nth-child(1) > div.row.homecarousel"]

    },
    {   url: "produkte/cfo"
    },
    {
        url: "produkte/hr"
    },
    {   url: "produkte/branchenanwendung"
    },
    {   url: "branchen/dienstleister"
    },
    {   url: "branchen/public",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "branchen/hochschule",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "branchen/handel",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "branchen/npo",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "services/software",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "services/schulungen",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "services/beratung",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    },
    {   url: "services/support",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    },
    {   url: "services/unit4-ideas",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    },
    {   url: "services/software-updates",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "ueber/unternehmen",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "ueber/auszeichnungen",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "ueber/news",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "ueber/management",
        remove: ["#main > div > div:nth-child(1) > div.row > ul > li > div"]
    }, {
        url: "partner",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    },
    {   url: "partner/ecosystem",
        remove: "#main > div.bg-full-width > div > div > div > article.blog-item.featured"
    },
    {   url: "ueber/veranstaltungen",
        remove: ["#main > div > div:nth-child(2) > div.row.homecarousel"]
    },
    {   url: "kontakt"
    },
    {   url: "blog"
    },
    {   url: "produkte/cloud-at-your-speed"
    },
    {   url: "your-rules#time-change",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    }, {
        url: "produkte/erp/business-world"
    },
    {   url: "produkte/erp/business-world-pro-fiskal"
    },
    //Additional cases
    {   url: "produkte/cfo/account-analysis"
    },
    {   url: "produkte/cfo/audit-control"
    },
    {   url: "produkte/cfo/business-world-financials"
    },
    {   url: "produkte/cfo/cash-flow-planning"
    },
    {   url: "produkte/cfo/consolidation"
    },
    {   url: "produkte/cfo/financials"
    },
    {   url: "produkte/hr/absence-manager",
        remove: "#main > div > div:nth-child(1) > div.row > ul"
    },
    {   url: "produkte/hr/human-resources-and-payroll"
    },
    {   url: "produkte/hr/people-planning"
    },
    {   url: "produkte/hr/travel-and-expenses"
    },
    {   url: "produkte/branchenanwendung/research-management"
    },
    {   url: "produkte/branchenanwendung/student-management"
    },
    {   url: "produkte/branchenloesungen/psa"
    },
    {   url: "erechnung"
    }
];

/**


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
var exporting = { "id": "testdesktop-de",
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