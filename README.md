# backstopJS
Required: https://www.npmjs.com/
##Quick Start
These commands can be ran from any directory, however you still need full path to file that is being tested
##To run reference

```npm run reference -- --configPath=PathToJsFile.js```

###example:
```npm run reference -- --configPath=Projects/Unit4/backstop.js```

##To run tests:

```npm run test -- --configPath=PathToJsFile.js```
###example:
```npm run reference -- --configPath=Projects/Unit4/backstop.js```

##Changing paths
When making a new project folder, the paths in backstop.js need to be changed to match target directory
###example:
```json"paths": {
           "bitmaps_reference": "./Projects/Unit4/backstop_data/bitmaps_reference",
           "bitmaps_test": "./Projects/Unit4/backstop_data/bitmaps_test",
           "casper_scripts": "./Projects/Unit4/backstop_data/casper_scripts",
           "html_report": "./Projects/Unit4/backstop_data/html_report",
           "ci_report": "./Projects/Unit4/backstop_data/ci_report"
       }```
