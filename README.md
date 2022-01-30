# Angular.SovTechTest

Hosting Angular.SovTechTest( Angular ) application to windows IIS.

First, We need to make sure that IIS in enabled and install the following two extension if not already install: https://download.visualstudio.microsoft.com/download/pr/ff658e5a-c017-4a63-9ffe-e53865963848/15875eef1f0b8e25974846e4a4518135/dotnet-hosting-3.1.3-win.exe

https://www.iis.net/downloads/microsoft/url-rewrite

we have to download the code from the repository to our localhost. To do that, First we make sure that we have git installed on our machine then we can open a Cli terminal (e.g cmd,powershell, gitbash...) ideally from a folder that is easily accessible , once we have our cli terminal opened, we run the following git command: git clone `https://github.com/SaneleMhlakaza/Angular.SovTechTest.git`

Open the the angular code with Visual Studio Code by running the following from `Angular.SovTechTest` folder Code .

We must then run the following on the Angular Visual Studion Code terminal: `ng build --base-href /Angular.SovTechTest/ --prod`

We must create a folder in our web root called `Angular.SovTechTest`, like this `C:\Angular.SovTechTest`

copy the contents of your project’s `Angular.SovTechTest\dist\angular.sov-tech-test` folder into our IIS `C:\Angular.SovTechTest` folder.

Lastly in IIS , We add our Application and call it `Angular.SovTechTest` `[Note: it we keep the name of this folder as Angular.SovTechTest for ease of deployement]` We must then reference the PhysicalPath of the application to `C:\Angular.SovTechTest` folder.

![image](https://user-images.githubusercontent.com/98617432/151709630-046025bb-3f87-4ad2-aefa-1d159e4f809d.png)

And that's it! our application is deployed.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
