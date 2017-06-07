//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import {Decorator, AbstractDecoratorConnector, ClassLoader, JcadContext,
        JcadContextFactory, DecoratorConnectorManager, JcadContextManager
      } from "jec-commons";
import {JarsConnectorRefs} from "../../../src/com/jec/jars/jcad/JarsConnectorRefs";

/*!
 * This module constains utilities used by the ResourcePathTest test suite.
 */

// Utilities:
const LOADER:ClassLoader = new ClassLoader();
const VALID_CLASS:string = process.cwd() + "/utils/test-utils/annotations/ResourcePathTestClass";
class TestConnector extends AbstractDecoratorConnector {}
class TestDecorator implements Decorator {
  decorate(target:any, path:string):any { return target; }
}
export const TEST_DECORATOR:Decorator = new TestDecorator();
export const buildClassRef:Function = function():void {
  let ClassRef:any = LOADER.loadClass(VALID_CLASS);
  new ClassRef();
};
export const initContext:Function = function():JcadContext {
  let factory:JcadContextFactory = new JcadContextFactory();
  let connector = new TestConnector(JarsConnectorRefs.RESOURCE_PATH_CONNECTOR_REF, TEST_DECORATOR);
  let context:JcadContext = factory.create();
  DecoratorConnectorManager.getInstance().addConnector(connector, context);
  JcadContextManager.getInstance().addContext(JarsConnectorRefs.RESOURCE_PATH_CONNECTOR_REF, context);
  return context;
}
export const resetContext:Function = function(context:JcadContext):void {
  JcadContextManager.getInstance().removeContext(JarsConnectorRefs.RESOURCE_PATH_CONNECTOR_REF);
  DecoratorConnectorManager.getInstance().removeConnector(JarsConnectorRefs.RESOURCE_PATH_CONNECTOR_REF, context);
  context = null;
}
