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

import {RoutePathParams} from "./core/RoutePathParams";
import {JarsConnectorRefs} from "../jcad/JarsConnectorRefs";
import {JcadContext, JcadContextManager, DecoratorConnectorManager} from "jec-commons";

////////////////////////////////////////////////////////////////////////////////
// JCAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>@RootPath</code> decorator defines a versioned resource API in the 
 * JARS specification.
 *
 * [[include:RootPath.md]]
 *
 * @param {RoutePathParams} params the route parameters for this decorator.
 */
export function RootPath(params:RoutePathParams):Function {

  return function(target:any):Function {
    
    ////////////////////////////////////////////////////////////////////////////
    // JCAD API
    ////////////////////////////////////////////////////////////////////////////

    const ctx:JcadContext =
                     CTXM.getContext(JarsConnectorRefs.ROOT_PATH_CONNECTOR_REF);
    return DCM.getDecorator(JarsConnectorRefs.ROOT_PATH_CONNECTOR_REF, ctx)
              .decorate(target, params);
  }
}
