# Angular.SovTechTest

Hosting Angular.SovTechTest( Angular ) application to windows IIS.


First, We need to make sure that IIS in enabled and install the following two extension if not already install:
https://download.visualstudio.microsoft.com/download/pr/ff658e5a-c017-4a63-9ffe-e53865963848/15875eef1f0b8e25974846e4a4518135/dotnet-hosting-3.1.3-win.exe

https://www.iis.net/downloads/microsoft/url-rewrite

we have to download the code from the repository to our localhost. To do that, First we make sure that we have git installed on our machine then we can open a Cli terminal (e.g cmd,powershell, gitbash...) ideally from a folder that is easily accessible , once we have our cli terminal opened, we run the following git command:
`git clone https://github.com/SaneleMhlakaza/Angular.SovTechTest.git`

Open the the angular code with Visual Studio Code by running the following from Angular.SovTechTest folder
Code .

We must then run the following on the Angular Visual Studion Code terminal:
`ng build --base-href /Angular.SovTechTest/ --prod` 

We must create a folder in our web root called Angular.SovTechTest, like this `C:\Angular.SovTechTest`

copy the contents of your project’s `Angular.SovTechTest\dist\angular.sov-tech-test` folder into our IIS C:\Angular.SovTechTest folder.

Lastly in IIS , We add our Application and call it `Angular.SovTechTest` [Note: it we keep the name of this folder as Angular.SovTechTest for ease of deployement]
We must then reference the PhysicalPath of the application to `C:\Angular.SovTechTest` folder.

![image](https://user-images.githubusercontent.com/98617432/151704598-ef78b7d6-dd7c-4046-9d26-78f30795a654.png)

And that's it! our application is deployed.
