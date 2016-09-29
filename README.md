# Learning Angular2 from Zero

This is my personal learning record repository for Angular2. The related materials are from Udemy Angular2 course and Angular2 official page, which you could find the link in [Reference](#reference). Below is the list of the updating learning content.

  * [Entry-00 Start](#entry-00-start)

---

## Entry-00 Start

  1. **Architecture of Angular2**
      ![Alt text](https://angular.io/resources/images/devguide/architecture/overview2.png)
      
  2. **Environment Setup**
  
      Follow the below order to set up the development environment.
      
      * Install [Node.js](https://nodejs.org/en/download/)
      
          ```
          // If you are Mac users and installed the Homebrew, just follow the below command.
          
          >brew install node
          >node -v
          
          // If not, you may need to down the Node package and install manually.
          ```
      
      * Install [NPM](https://docs.npmjs.com/getting-started/installing-node)
      
          ```
          // If you installed `Node` by Homebrew, the `NPM` is already installed at the same time.
          
          >npm install npm -g
          >npm -v
          ```
      
      * Install [Typescript](https://www.typescriptlang.org/)
      
          `npm install -g typescript // May need 'sudo' to get superuser permission`
          
      * Install [Typings](https://www.npmjs.com/package/typings)
      
          `npm install -g typings // Again, may need 'sudo' to get superuser permission`
          
      * Recommend Development Tools
          
          * [Visual Studio Code](https://code.visualstudio.com)
          * [Google Chrome](https://www.google.com.au/chrome/browser/desktop/)

  3. **Angular2 Seed Project**
  
      Download from `/Entry00/Angular2-seed.zip`, the structure of those files are below:
      
      ```
      |-- app
      |   |-- app.component.js
      |   |-- app.component.js.map
      |   |-- app.component.ts    // Root component of application
      |   |-- boot.ts     // Starting modules of application
      |   |-- boot.js.map
      |   `-- boot.js
      |-- package.json    // Standard Node package configuration
      |-- tsconfig.json   // Configuration for Typescript compiler (Typescripty => Javascripty)
      |-- typings.json    // Typescript definition configuration
      `-- index.html
      ```
      
  4. **Run Hello World**
  
      * Go to the seed directory
      
          `>cd ~/Angualr2-seed/   // The path to your Angular2 seed project directory`
          
      * Initial project (Intall the dependencies)
      
          `>npm install`
          
      * New structure of the directory
      
          ```
          |-- app
          |   |-- app.component.js
          |   |-- app.component.js.map
          |   |-- app.component.ts    // Root component of application
          |   |-- boot.ts     // Starting modular of application
          |   |-- boot.js.map
          |   `-- boot.js
          |-- package.json    // Standard Node package configuration
          |-- tsconfig.json   // Configuration for Typescript compiler (Typescripty => Javascripty)
          |-- typings.json    // Typescript definition configuration
          |-- index.html
          |-- typings
          `-- node_modules    // Installed dependencies
          ```
          
      * Run it
      
          `>npm start`
          
          This will automatically compile the typescripte code into javascript and run it in you browser.
          
          
---

# Reference
  * [Udemy/Mosh Hamedani](https://www.udemy.com/angular-2-tutorial-for-beginners/)
  * [Angular2.io](https://angular.io)
