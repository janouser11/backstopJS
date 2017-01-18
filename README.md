# backstopJS 

#####Required:
https://github.com/creationix/nvm (recommended) or https://www.npmjs.com/

To install **nvm**, run in your terminal:

 ```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash```

In-Depth documentation on using backstop: https://github.com/garris/BackstopJS
##Install
Install by running:
```git clone https://github.com/garris/BackstopJS.git```
in the directory of your choice. 

#####If using *npm* already
Run ```npm install``` to install node_modules. 

#####If using *nvm* 
Navigate (```cd backstopJS```) into the root of the project and run ```nvm use 5.9``` and then ```npm install```.

If refering to BackstopJS documention, the installation and usage commands can be ignored. Use only the commands below for this project.

##Getting Started
Navigate to your project folder inside of ```backstopJS/Projects```.  If your project is not in ```Projects```, create a new one with your project name.  


After creating new folder, copy everything inside of ```backstopJS/Projects/Prototype``` into your project folder.  (This includes a backstop_data folder and backstop.js file)

Use the new ```backstop.js``` file as a template to begin customizing your project in ```backstopJs/Projects/ProjectName/backstop.js```

For guidance, refer to other projects to see different implementations. 
##To run reference
Reference creates a directory of screenshots that you want to use as your reference.

```npm run reference -- --configPath=PathToJsFile.js```

These commands can be ran from any directory. However, the full path is needed to the file that is being used.


####example:
```npm run reference -- --configPath=Projects/Unit4/AccVsProd/Desktop/testDesktop.js```

##To run test:
Test takes a new set of screenshots and compares against reference. If browser report is enabled (it is by default) then a report will be generated showing results of comparison. 

```npm run test -- --configPath=PathToJsFile.js```
####example:
```npm run test -- --configPath=Projects/Unit4/AccVsProd/Mobile/mobile.js```




