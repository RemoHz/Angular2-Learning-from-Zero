# Learning Angular2 from Zero

This is my personal learning record repository for Angular2. The related materials are from Udemy Angular2 course and Angular2 official page, which you could find the link in [Reference](#reference). Below is the list of the updating learning content.

  * [Entry-00 Start](#entry-00-start)
  * [Entry-01 Basic](#entry-01-basic)
  * [Entry-02 Data Binding](#entry-02-data-binding)

---

## Entry-00 Start

  1. **Architecture of Angular2**
      ![Alt text](https://angular.io/resources/images/devguide/architecture/overview2.png)
      
      Basically, There are four main parts of Angular2, which are `Component`, `Directives`, `Routers` and `Services`
      
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

## Entry-01 Basic

  1. **Component**
  
      `Component` encapsulates the template, data and the behaviour of view. 
      
      Each Angular2 App has at least a `root` component and each components can have multiple sub-components.
      
      Like below, the root componnet has three sub-components, which are sidebar, courses and navbar. And also each sub-component can have their child-components, like courses component could have rating components and feedback components.
      
      ![Alt text](http://remo.site/img/components.png)
      
  2. **Create a Component**
  
      Here, I create a Courses component. The name of this file is called `courses.component.ts` and is located under the `./app/`.
      
      ```Typescript
      import {Component} from 'angular2/core';
      
      @Component({
           selector: 'courses',    // To use just like a HTML tag: <courses></courses>
           template: '<h2>Courses</h2>'    // HTML code here to display the component view
      })
      export class CoursesComponent { 
      }
      ```
      
  3. **Using Component**
      
      Go to the `./app/app.component.ts`, and add previous component.
      
      ```Typescript
      import {Component} from 'angular2/core';
      import {CoursesComponent} from './courses.component';    // Import CoursesComponent.   NOTE: NO '.ts' at end
      
      @Component({
           selector: 'my-app',
           template: `    // Use backquotes to enable mutiple line code
            <h2>{{ title }}</h2>    // Interpolation, One way binding.
            <courses></courses>    // Use CoursesComponent here
           `,
           directives: [CoursesComponent]    // Important! Add CoursesComponent reference to root component
      })
      export class AppComponent {
          title = "The title of this page";
      }
      ```
      
  4. **Run It**
      
      After you saved the change of `app.component.ts`, the Angular2 will automatically recognise the code change and complier it as well. The browser will fresh and the new component will displayed corresponding. You can inspect the page DOM by using Chrome developer tools. It will display like this.
      
      ```html
      <courses>
          <h2>Courses</h2>
      </courses>
      ```
      
  5. **More**
  
      * __ngFor__
      
          If there are multiple object need to display in template, `*ngFor` is the best way to implement it.

          ```Typescript
          import {Component} from 'angular2/core';
          import {CoursesComponent} from './courses.component';

          @Component({
               selector: 'my-app',
               template: `
                <ul>
                   <li *ngFor="#course of courses">    // Use '*ngFor' to display multiple objects, just like 'for' loop
                       {{ course }}
                   </li>
                </ul>
               `,
               directives: [CoursesComponent]
          })
          export class AppComponent {
              courses = ["Course1", "Course2", "Course3"];    // Defined three courses
          }
          ```
          
      * __Service__
      
          `Service` is mainly used to `Data Access`, `Login`, `Business Logic`, and `Configuration`.
      
          Let's create a service called `CourseService` and the corresponding file named `course.service.ts` under the `./app/`. The aim is to provide the data to `CourseComponent`.
      
          ```Typescript
          export class CourseService {
              getCourses(): string[] {    // The return type is a string array
                  return ["Course1", "Course2", "Course3"];
              }
          }
          ```

          Then, change the `courses.component.ts`.
          
          ```Typescript
          import {Component} from 'angular2/core';
          import {CourseService} from './course.service';    // No '.ts' at end

          @Component({
               selector: 'courses',
               template: `
                    <ul>
                       <li *ngFor="#course of courses">
                           {{ course }}
                       </li>
                    </ul>
               `,
               providers: [CourseService]    // Add dependency
          })
          export class CoursesComponent {
              courses;   // To store courses from service
              
              constructor(courseService: CourseService) {    // Dependency Injection
                  this.courses = courseService.getCourses();
              }
          }
          ```
          
          NOTE: [Dependency Injection](http://stackoverflow.com/questions/130794/what-is-dependency-injection)
          
      * __Directive__
      
      Directive is a class that allow us to extend or control DOM (Document Object Model). Below it will create a directive to auto grow the input box.
      
      ```Typescript
      import {Directive, ElementRef, Renderer} from 'angular2/core'

      @Directive({
          selector: '[autoGrow]',
          host: {
              '(focus)': 'onFocus()',
              '(blur)': 'onBlur()'
          }
      })
      export class AutoGrowDirective {
          constructor(private el: ElementRef, private renderer: Renderer){

          }
          onFocus(){
              this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
          }
          onBlur(){
              this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
          }
      }
      ```
      
      And it can be used in `CoursesComponent` like below:
      
      ```Typescript
      @Component({
      selector: 'courses',
      template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#course of courses">
            {{ course }}
            </li>
        </ul>
        `,
      providers: [CourseService],
      directives: [AutoGrowDirective]
      })
      ```
      
      * __Template__ & __Style__
      
      In each component, you can change the `template` property into `templateUrl`. This will allow you to create a `xxx.component.html` file to layout the HTML template separately, as well as `stylesheet`. Use the `CoursesComponent` as a example.
      
      ```
      |-- app
      |   |-- courses.component.ts
      |   |-- courses.component.html
      |   |-- courses.component.css
      |   |-- boot.ts
      |   |-- boot.js.map
      |   `-- boot.js
      ........
      ```

---

## Entry-02 Data Binding

  1. **One way binding**
  
      There are three ways to implement one way binding, which are `Interpolation`, `DOM property binding` and `bind-DOM`. Those three ways are technically equal. Just like below.
      
       ```Typescript
      import {Component} from 'angular2/core';
      
      @Component({
           selector: 'my-app',
           template: `
            <img src="{{ imageUrl }}" />    // Interpolation, recommend use to load dynamic value
            <img [src]="imageUrl" />        // DOM property binding
            <img bind-src="imageUrl" />     // bind-DOM, rare to use
           `
      })
      export class AppComponent {
          imageUrl = "path to the image";
      }
      ```
      
      If the component property changed, the value of DOM will change automatically. BUT if the value of DOM changed, the component property will not changed corresponding. This is called `One-way bind`.

  2. **Class Binding** & **Style Binding**

      `Class binding` is aim to add additional class to DOM elements based on some condition, `Style binding` is in the same process. Below is an example to add `active` class to the button and background color to inline style.
      
       ```Typescript
      import {Component} from 'angular2/core';
      
      @Component({
           selector: 'my-app',
           template: `
            <button 
                class="btn btn-primary" 
                [class.active]="isActive"    // The active class will be add when isActive is true
                [style.backgroundColor]="isActive ? 'blue' : 'gray'"    // The background color will change based on isActive
            >
            Submit</button>
           `
      })
      export class AppComponent {
          isActive = true;
      }
      ```

  3. **Event Binding**
  
      `Event binding` is handle event rise from the DOM, like click, mouthmove, hover and etc.
      
       ```Typescript
      import {Component} from 'angular2/core';
      
      @Component({
           selector: 'my-app',
           template: `
            <div (click)="onDivClick()">
                <button (click)="onClick($event)">Submit</button>    // Event binding
            </div>
           `
      })
      export class AppComponent {
          onDivClick() {
              console.log("Div clicked");
          }
          
          onClick($event) {
              $event.stopPropagation();    // Use to ignore parent DOM event
              console.log("Clicked", $event);
          }
      }
      ```

  4. **Two-way Binding**
      
      `Two-way binding` is actually the combination of `property binding` and `event binding`. There are three ways to realise it.
      
       ```Typescript
      import {Component} from 'angular2/core';
      
      @Component({
           selector: 'my-app',
           template: `
               <input type="text" [value]="title" (input)="title = $event.target.value" />   // Original realise
               <input type="text" [(ngModel)]="title />   // Recomment to use
               <input type="text" bindon-ngModel="title" />
               
               Preview: {{ title }}
           `
      })
      export class AppComponent {
          title = "Hello world";
      }
      ```

      If the input value changed, the Preview will changed at the same time (Means the compoment property value changed as well).


---

# Reference
  * [Udemy/Mosh Hamedani](https://www.udemy.com/angular-2-tutorial-for-beginners/)
  * [Angular2.io](https://angular.io)
