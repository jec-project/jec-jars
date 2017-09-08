# JEC JARS Project

JEC JARS is a [JavaScript Entreprise Container][jec-url] project focused on the implementation of RESTful web services in JEC applications.

[![][jec-logo]][jec-url]

The `jars` package contains the abstration layer for creating RESTful
web services frameworks based on the JavaScript API for RESTful Services (JARS) specification.

## Requirements

JEC JARS needs the following system parameters in order to work correctly:

- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Set up the JEC JARS module with:

```bash
$ npm install jec-jars --save
```

## Using Components

All JEC JARS components have to be imported with the ES6 syntax:

```javascript
import { ResourcePath, Exit, GET } from "jec-jars";

@ResourcePath("/hello")
export class Hello {

    @GET()
    public sayHelloWorld(@Exit exit:Function):void {
        exit("Hello World!");
    }
}
```

For a complete list of available components, please refer to the [API Reference](#api-reference) documentation.

## Running Tests

To execute all unit tests, use:

```bash
$ grunt test
```

## API Reference

The API Reference documentation is not included into the JEC JARS node module. To build the API reference documentation, use:

```bash
$ grunt doc
```

Documentation will be generated in the `docs/api-reference` repository.
The online version of the  API reference documentation will be available soon at the JEC Website.

The documentation generator is [TypeDoc](http://typedoc.org/)

## Update Release Notes

**Current stable release:** [1.0.7](CHANGELOG.md#jec-jars-1.0.7)
 
For a complete listing of release notes for all JEC JARS update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC JARS Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2017 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: https://github.com/pechemann/JEC
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png