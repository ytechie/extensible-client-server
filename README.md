extensible-client-server
=======================

This is a proof of concept (sample) of an application that is extensible by addition vs modification. In other words, functionality is added to the Node.js server and the Angular.js client by adding files.

##Goals

* Upgrades should not require re-installation of extensions
* Extensions should be upgradable by simply replacing files
* The extensibility model should be simple, while remaining as flexible as possible

This project will evolve as I discover better ways to achieve these goals.

##Server

Extending the server was easy. Express gives us a great way to add routes and controllers on the fly. The sample server code looks for extensions in the `extensions` folder, and automatically loads on. A [sample extension](https://github.com/ytechie/extensible-client-server/blob/master/server/extensions/sample-extension.js) is included for reference.

##Client

I have a working extensibility model where you can use a controller definition file to add a custom route. I suspect there is a much cleaner way to do this, so I'll keep investigating. Also, this requires us to modify index.html, which was breaking one of the goals of the project.

#Installation

In the `server` folder, run `npm install` to pull in the dependencies. In the `client` folder, run `npm install` and then `bower install`.

# License

Microsoft Developer Experience & Evangelism

Copyright (c) Microsoft Corporation. All rights reserved.

THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.

The example companies, organizations, products, domain names, e-mail addresses, logos, people, places, and events depicted herein are fictitious. No association with any real company, organization, product, domain name, email address, logo, person, places, or events is intended or should be inferred.
