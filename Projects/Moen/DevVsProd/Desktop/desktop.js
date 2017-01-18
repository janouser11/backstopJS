/**
 * Created by admin on 12/5/16.
 */

//Different base URL's based on environment
var baseUrl = {
    dev: "http://moen-dev-site.authxlab.com/",
    prod: "https://www.moen.com/"

};

//Change testing Environment here by changing baseUrl suffix
var BASE_URL = baseUrl.dev;

//Can be enabled to test url against base_url. To enable, uncomment BASE_REFERENCE_URL variable and referenceUrl object
//in the loopThroughUrlArray function and parameter
var BASE_REFERENCE_URL = baseUrl.prod;

//Selectors that are selected for every test, can leave empty or add multiple selectors such as:
// var DEFAULT_SELECTORS = ["selector1","selector2"]
var DEFAULT_SELECTORS = ["header", "body"];


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
    {  url: ""
    },
    {  url: "bathroom"
    },
    { url: "kitchen"
    },
    { url: "customer-support"
    },
    { url: "customer-support/contact-us"
    },
    { url: "about-moen"
    },
    { url: "press-room"
    },
    { url: "careers"
    },
    { url: "where-to-buy/online-retailers"
    },
    { url: "privacy-policy"
    },
    { url: "legal-notice"
    },
    { url: "favorites"
    },
    { url: "sitemap"
    },
    { url: "kitchen/design-planning/kitchen-faucets-101"
    },
    { url: "bathroom/design-planning/design-videos"
    },
    { url: "kitchen/design-planning/inspirational-photo-gallery"
    },
    { url: "bathroom/faucets"
    },
    { url: "bathroom/shower-spa"
    },
    { url: "bathroom/accessories-hardware"
    },
    { url: "bathroom/lighting"
    },
    { url: "bathroom/safety"
    },
    { url: "shower-planner"
    },
    { url: "bathroom/design-planning/inspirational-photo-gallery"
    },
    { url: "bathroom/design-planning/project-advice"
    },
    { url: "kitchen/faucets"
    },
    { url: "kitchen/sinks"
    },
    { url: "garbage-disposals"
    },
    { url: "kitchen/accessories"
    },
    { url: "filters"
    },
    { url: "kitchen/design-planning/project-advice"
    },
    { url: "customer-support/identify-my-product"
    },
    { url: "customer-support#!#replacement-parts"
    },
    { url: "customer-support/warranty"
    },
    { url: "customer-support/installation-help"
    },
    { url: "customer-support/faq"
    },
    { url: "customer-support/faq#!#%2Fcat-troubleshooting"
    },
    { url: "customer-support/product-registration"
    },
    { url: "products/Kiran/Kiran_Spot_resist_stainless_onehandle_high_arc_pulldown_kitchen_faucet/87599SRS"
    },
    { url: "products/Engage/Engage_Spot_resist_brushed_nickel_sixfunction_55_diameter_spray_head_handshower_showerhead/26112SRN"
    },
    { url: "products/Align/Align_spot_resist_stainless_onehandle_prerinse_spring_pulldown_kitchen_faucet/5923SRS"
    },
    { url: "whats-new/innovation/magnetix"
    },
    { url: "whats-new/innovation"
    },
    { url: "whats-new/innovation/powerclean"
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
var exporting = { "id": "moenregression",
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
        "bitmaps_reference": "Projects/Moen/DevVsProd/Desktop/backstop_data/bitmaps_reference",
        "bitmaps_test": "Projects/Moen/DevVsProd/Desktop/backstop_data/bitmaps_test",
        "casper_scripts": "Projects/Moen/DevVsProd/Desktop/backstop_data/casper_scripts",
        "html_report": "Projects/Moen/DevVsProd/Desktop/backstop_data/html_report",
        "ci_report": "Projects/Moen/DevVsProd/Desktop/backstop_data/ci_report"
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