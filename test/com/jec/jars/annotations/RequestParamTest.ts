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

import "mocha";
import * as chai from "chai";
import * as spies from "chai-spies";
import {ClassLoader, DecoratorConnectorManager, JcadContextManager, JcadContext,
        JcadContextFactory, DecoratorConnector, AbstractDecoratorConnector,
        Decorator} from "jec-commons";
import {JarsConnectorRefs} from "../../../../../src/com/jec/jars/jcad/JarsConnectorRefs";
import * as params from "../../../../../utils/test-utils/annotations/Params";

const expect = chai.expect;
chai.use(spies);

// Utilities:
let connector:DecoratorConnector = null;
let context:JcadContext = null;
let ClassRef:any = null;
let annotated:any = null;
class TestConnector extends AbstractDecoratorConnector {}
class TestDecorator implements Decorator {
  decorate(target:any, propertyKey:string|symbol, parameterIndex:number):void {}
}
const TEST_DECORATOR:Decorator = new TestDecorator();
const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();
const VALID_CLASS:string = process.cwd() + "/utils/test-utils/annotations/RequestParamTestClass";
const LOADER:ClassLoader = new ClassLoader();
const PROPERTY_KEY:string = "requestInfo";
const PARAMETER_INDEX:number = 0;

// Annotation to test:
import * as RequestParamAnnotation from "../../../../../src/com/jec/jars/annotations/RequestParam";

// Test:
describe("RequestParam", ()=> {

  before(()=> {
    let factory:JcadContextFactory = new JcadContextFactory();
    connector = new TestConnector(JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF, TEST_DECORATOR);
    context = factory.create();
    CTXM.addContext(JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF, context);
    DCM.addConnector(connector, context);
  });

  after(()=> {
    CTXM.removeContext(JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF);
    DCM.removeConnector(JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF, context);
    connector = null;
    context = null;
  });

  beforeEach(()=> {
    ClassRef = LOADER.loadClass(VALID_CLASS);
    annotated = new ClassRef();
  });

  afterEach(()=> {
    ClassRef = null;
    annotated =null;
  });

  describe("@RequestParam", ()=> {

    let ctxmSpy:any = chai.spy.on(CTXM, "getContext");
    let dcmSpy:any = chai.spy.on(DCM, "getDecorator");
    let decoratorSpy:any = chai.spy.on(TEST_DECORATOR, "decorate");
    let annotationSpy:any = chai.spy.on(RequestParamAnnotation, "RequestParam");

    it("should invoke the JcadContextManager with the JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF reference", function() {
      expect(ctxmSpy).to.have.been.called.with(JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF);
    });
    
    it("should invoke the DecoratorConnectorManager with the JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF reference and the correct JCAD context", function() {
      expect(dcmSpy).to.have.been.called.with(JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF, context);
    });
    
    it("should invoke the annotation decorator with the right parameters", function() {
      expect(annotationSpy).to.have.been.called.with(PROPERTY_KEY, PARAMETER_INDEX);
    });
    
    it("should invoke the registered decorator with the right parameters", function() {
      expect(decoratorSpy).to.have.been.called.with(PROPERTY_KEY, PARAMETER_INDEX);
    });
  });
});
