//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {JarsError} from "../exceptions/JarsError";
import {JarsConnectorRefs} from "../jcad/JarsConnectorRefs";
import {JcadContext, JcadContextManager, DecoratorConnectorManager} from "jec-commons";

////////////////////////////////////////////////////////////////////////////////
// JCAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>@RootPathRefs</code> decorator defines a resource in the JARS
 * specification.
 *
 * ```javascript
RootPathRefs(["apiv1"])
export class ResourceClass() {
  // Code here...
}
```
 *
 * @param {HttpMethodParams} [params] the parameter for this object.
 */
export function RootPathRefs(pathRefs:string[]):Function {

  return function(target:any):Function {
    
    ////////////////////////////////////////////////////////////////////////////
    // JCAD API
    ////////////////////////////////////////////////////////////////////////////

    var ctx:JcadContext =
                CTXM.getContext(JarsConnectorRefs.ROOT_PATH_REFS_CONNECTOR_REF);
    return DCM.getDecorator(JarsConnectorRefs.ROOT_PATH_REFS_CONNECTOR_REF, ctx)
              .decorate(target, pathRefs);
  }
}
