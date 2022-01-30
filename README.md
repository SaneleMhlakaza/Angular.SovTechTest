# Angular.SovTechTest

Hosting Angular.SovTechTest( Angular ) application to IIS.

First, we have to download the code from the repository to our localhost/cloud. To do that, First we make sure that we have git installed on our machine then we can open a Cli terminal (e.g cmd,powershell, gitbash...) ideally from a folder that is easily accessible , once we have our cli terminal opened, we run the following git command:
`git clone https://github.com/SaneleMhlakaza/Angular.SovTechTest.git`

Open the the angular code with Visual Studio Code by running the following from Angular.SovTechTest folder
Code .
In our project in Angular.SovTechTest\src we need to create a web.config file with the following content:

`<?xml version="1.0" encoding="utf-8"?>
<configuration>
<system.webServer>
  <rewrite>
    <rules>
      <rule name="Angular Routes" stopProcessing="true">
        <match url=".*" />
        <conditions logicalGrouping="MatchAll">
          <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
        </conditions>
        <action type="Rewrite" url="./index.html" />
      </rule>
    </rules>
  </rewrite>
</system.webServer>
</configuration>`

We want this to get included with our build so we can deploy it with our Tour of Heroes application. So, let’s add it to the assets in our project’s
`.angular.json` file like this:

`"assets": [
    "assets",
    "favicon.ico",
    "web.config"
],`

We therefter run the following on the Angular Visual Studion Code terminal:
`ng build --base-href "/Angular.SovTechTest/" --prod` 

We must create a folder in our web root called Angular.SovTechTest, like this: C:\inetpub\wwwroot\Angular.SovTechTest

copy the contents of your project’s Angular.SovTechTest\dist folder into your IIS wwwroot\Angular.SovTechTest folder.

Lastly , We add new website call Angular.SovTechTest in IIS referencing the above folder as Physical path of our website.

![image](https://user-images.githubusercontent.com/98617432/151698450-da4fbd43-4d95-483c-87e1-c23cb60d1eb5.png)

And that's it! our website is deployed.
