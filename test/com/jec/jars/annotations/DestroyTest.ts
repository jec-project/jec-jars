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

import "mocha";
import * as sinon from "sinon";
import {DecoratorConnectorManager, JcadContextManager, JcadContext} from "jec-commons";
import {JarsConnectorRefs} from "../../../../../src/com/jec/jars/jcad/JarsConnectorRefs";

// Annotation to test:
import * as DestroyAnnotation from "../../../../../src/com/jec/jars/annotations/Destroy";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/DestroyTestUtils";

// Test:
describe("Destroy", ()=> {

  let context:JcadContext = null;
  let getContextSpy:any = null;
  let getDecoratorSpy:any = null;
  let annotationSpy:any = null;
  let decorateSpy:any = null;

  before(()=> {
    getContextSpy = sinon.spy(JcadContextManager.getInstance(), "getContext");
    getDecoratorSpy =
             sinon.spy(DecoratorConnectorManager.getInstance(), "getDecorator");
    annotationSpy = sinon.spy(DestroyAnnotation, "Destroy");
    decorateSpy = sinon.spy(utils.TEST_DECORATOR, "decorate");
    context = utils.initContext();
    utils.buildClassRef();
  });

  after(()=> {
    utils.resetContext(context);
    sinon.restore();
  });

  beforeEach(()=> {
    utils.buildClassRef();
  });

  describe("@Destroy", ()=> {

    it("should invoke the JcadContextManager with the JarsConnectorRefs.DESTROY_CONNECTOR_REF reference", function() {
      sinon.assert.calledOnce(getContextSpy);
      sinon.assert.calledWith(
        getContextSpy, JarsConnectorRefs.DESTROY_CONNECTOR_REF
      );
    });
    
    it("should invoke the DecoratorConnectorManager with the JarsConnectorRefs.DESTROY_CONNECTOR_REF reference and the correct JCAD context", function() {
      sinon.assert.calledOnce(getDecoratorSpy);
      sinon.assert.calledWith(
        getDecoratorSpy, JarsConnectorRefs.DESTROY_CONNECTOR_REF, context
      );
    });
    
    it("should invoke the annotation decorator with no parameters", function() {
      sinon.assert.calledOnce(annotationSpy);
    });
    
    it("should invoke the registered decorator with the right method name", function() {
      sinon.assert.calledOnce(decorateSpy);
      //sinon.assert.calledWith(getDecoratorSpy, utils.KEY);
    });
  });
});
