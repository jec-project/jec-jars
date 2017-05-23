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
import {HttpMethodParams} from "../../../../../src/com/jec/jars/annotations/core/HttpMethodParams";
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
  decorate(target:any, key:string, descriptor:PropertyDescriptor):any { return target; }
}
const TEST_DECORATOR:Decorator = new TestDecorator();
const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();
const VALID_CLASS:string = process.cwd() + "/utils/test-utils/annotations/InitTestClass";
const KEY:string = "initMethod";
const LOADER:ClassLoader = new ClassLoader();

// Annotation to test:
import * as InitAnnotation from "../../../../../src/com/jec/jars/annotations/Init";

// Test:
describe("Init", ()=> {

  before(()=> {
    let factory:JcadContextFactory = new JcadContextFactory();
    connector = new TestConnector(JarsConnectorRefs.INIT_CONNECTOR_REF, TEST_DECORATOR);
    context = factory.create();
    CTXM.addContext(JarsConnectorRefs.INIT_CONNECTOR_REF, context);
    DCM.addConnector(connector, context);
  });

  after(()=> {
    CTXM.removeContext(JarsConnectorRefs.INIT_CONNECTOR_REF);
    DCM.removeConnector(JarsConnectorRefs.INIT_CONNECTOR_REF, context);
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

  describe("@Init", ()=> {

    let ctxmSpy:any = chai.spy.on(CTXM, "getContext");
    let dcmSpy:any = chai.spy.on(DCM, "getDecorator");
    let decoratorSpy:any = chai.spy.on(TEST_DECORATOR, "decorate");
    let annotationSpy:any = chai.spy.on(InitAnnotation, "Init");

    it("should invoke the JcadContextManager with the JarsConnectorRefs.INIT_CONNECTOR_REF reference", function() {
      expect(ctxmSpy).to.have.been.called.with(JarsConnectorRefs.INIT_CONNECTOR_REF);
    });
    
    it("should invoke the DecoratorConnectorManager with the JarsConnectorRefs.INIT_CONNECTOR_REF reference and the correct JCAD context", function() {
      expect(dcmSpy).to.have.been.called.with(JarsConnectorRefs.INIT_CONNECTOR_REF, context);
    });
    
    it("should invoke the annotation decorator with no parameters", function() {
      expect(annotationSpy).to.have.been.called.with();
    });
    
    it("should invoke the registered decorator with the right method name", function() {
      expect(decoratorSpy).to.have.been.called.with(KEY);
    });
  });
});
