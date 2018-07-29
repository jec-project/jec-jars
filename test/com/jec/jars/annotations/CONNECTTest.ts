//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS CONNECTER.
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
import * as params from "../../../../../utils/test-utils/annotations/Params";

// Annotation to test:
import * as CONNECTAnnotation from "../../../../../src/com/jec/jars/annotations/CONNECT";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/CONNECTTestUtils";

// Test:
describe("CONNECT", ()=> {

  let context:JcadContext = null;
  let getContextSpy:any = null;
  let getDecoratorSpy:any = null;
  let annotationSpy:any = null;
  let decorateSpy:any = null;

  before(()=> {
    getContextSpy = sinon.spy(JcadContextManager.getInstance(), "getContext");
    getDecoratorSpy =
             sinon.spy(DecoratorConnectorManager.getInstance(), "getDecorator");
    annotationSpy = sinon.spy(CONNECTAnnotation, "CONNECT");
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

  describe("@CONNECT", ()=> {

    it("should invoke the JcadContextManager with the JarsConnectorRefs.CONNECT_CONNECTOR_REF reference", function() {
      sinon.assert.calledOnce(getContextSpy);
      sinon.assert.calledWith(
        getContextSpy, JarsConnectorRefs.CONNECT_CONNECTOR_REF
      );
    });
    
    it("should invoke the DecoratorConnectorManager with the JarsConnectorRefs.CONNECT_CONNECTOR_REF reference and the correct JCAD context", function() {
      sinon.assert.calledOnce(getDecoratorSpy);
      sinon.assert.calledWith(
        getDecoratorSpy, JarsConnectorRefs.CONNECT_CONNECTOR_REF, context
      );
    });
    
    it("should invoke the annotation decorator with the right parameters", function() {
      sinon.assert.calledOnce(annotationSpy);
      //sinon.assert.calledWith(annotationSpy, params.HTTP_METHOD_PARAMS);
    });
    
    it("should invoke the registered decorator with the right method name and parameters", function() {
      sinon.assert.calledOnce(decorateSpy);
      //sinon.assert.calledWith(decorateSpy, utils.KEY, params.HTTP_METHOD_PARAMS);
    });
  });
});
