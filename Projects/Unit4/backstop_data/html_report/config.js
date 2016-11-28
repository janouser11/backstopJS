report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/prod_test_http__wwwunit4acctusonehippocom_your-ruleswhy-unit4_0_document_0_desktop.png",
        "test": "../bitmaps_test/20161128-120145/prod_test_http__wwwunit4acctusonehippocom_your-ruleswhy-unit4_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "prod_test_http__wwwunit4acctusonehippocom_your-ruleswhy-unit4_0_document_0_desktop.png",
        "label": "http://www.unit4.acct.us.onehippo.com/your-rules#why-unit4",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "6.31",
          "analysisTime": 402
        },
        "diffImage": "../bitmaps_test/20161128-120145/failed_diff_prod_test_http__wwwunit4acctusonehippocom_your-ruleswhy-unit4_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/prod_test_http__wwwunit4acctusonehippocom_your-ruleswhy-unit4_1_headermainfooter_0_desktop.png",
        "test": "../bitmaps_test/20161128-120145/prod_test_http__wwwunit4acctusonehippocom_your-ruleswhy-unit4_1_headermainfooter_0_desktop.png",
        "selector": "header,#main,footer",
        "fileName": "prod_test_http__wwwunit4acctusonehippocom_your-ruleswhy-unit4_1_headermainfooter_0_desktop.png",
        "label": "http://www.unit4.acct.us.onehippo.com/your-rules#why-unit4",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 28
        }
      },
      "status": "pass"
    }
  ]
});