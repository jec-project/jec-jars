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

import {JarsConnectorRefs} from "../jcad/JarsConnectorRefs";
import {JcadContext, JcadContextManager, DecoratorConnectorManager} from "jec-commons";

////////////////////////////////////////////////////////////////////////////////
// JCAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>@CookieParam</code> decorator defines a type of parameter that you  
 * can extract for use in your resource class. Cookie path parameters are  
 * extracted from the request cookie field, and the parameter names correspond 
 * to the URI  path template variable name specified in the HTTP method
 * signature.
 *
 * [[include:CookieParam.md]]
 *
 * @param {any} target the prototype of the class for the instance member.
 * @param {string|symbol} propertyKey the name of the member.
 * @param {number} parameterIndex the ordinal index of the parameter in the
 *                                function's parameter list.
 */
export function CookieParam(target:any, propertyKey:string | symbol,
                                                   parameterIndex:number):void {
    
  //////////////////////////////////////////////////////////////////////////////
  // JCAD API
  //////////////////////////////////////////////////////////////////////////////

  const ctx:JcadContext = 
                  CTXM.getContext(JarsConnectorRefs.COOKIE_PARAM_CONNECTOR_REF);
  DCM.getDecorator(JarsConnectorRefs.COOKIE_PARAM_CONNECTOR_REF, ctx)
      .decorate(target, propertyKey, parameterIndex);
}
