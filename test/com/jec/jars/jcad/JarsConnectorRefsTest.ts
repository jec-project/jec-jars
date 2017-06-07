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
import {expect} from "chai";

// Class to test:
import {JarsConnectorRefs} from "../../../../../src/com/jec/jars/jcad/JarsConnectorRefs";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/JarsConnectorRefsTestUtils";

// Test:
describe("JarsConnectorRefs", ()=> {

  describe("#COOKIE_PARAM_CONNECTOR_REF", ()=> {
    it("COOKIE_PARAM_CONNECTOR_REF should return 'com.jec.jars.annotations.CookieParam'", function() {
      expect(JarsConnectorRefs.COOKIE_PARAM_CONNECTOR_REF).to.equal(utils.COOKIE_PARAM_CONNECTOR_REF);
    });
  });
  
  describe("#CONNECT_CONNECTOR_REF", ()=> {
    it("CONNECT_CONNECTOR_REF should return 'com.jec.jars.annotations.CONNECT'", function() {
      expect(JarsConnectorRefs.CONNECT_CONNECTOR_REF).to.equal(utils.CONNECT_CONNECTOR_REF);
    });
  });
  
  describe("#DELETE_CONNECTOR_REF", ()=> {
    it("DELETE_CONNECTOR_REF should return 'com.jec.jars.annotations.DELETE'", function() {
      expect(JarsConnectorRefs.DELETE_CONNECTOR_REF).to.equal(utils.DELETE_CONNECTOR_REF);
    });
  });
  
  describe("#DESTROY_CONNECTOR_REF", ()=> {
    it("DESTROY_CONNECTOR_REF should return 'com.jec.jars.annotations.Destroy'", function() {
      expect(JarsConnectorRefs.DESTROY_CONNECTOR_REF).to.equal(utils.DESTROY_CONNECTOR_REF);
    });
  });
  
  describe("#EXIT_CONNECTOR_REF", ()=> {
    it("EXIT_CONNECTOR_REF should return 'com.jec.jars.annotations.Exit'", function() {
      expect(JarsConnectorRefs.EXIT_CONNECTOR_REF).to.equal(utils.EXIT_CONNECTOR_REF);
    });
  });
  
  describe("#GET_CONNECTOR_REF", ()=> {
    it("GET_CONNECTOR_REF should return 'com.jec.jars.annotations.GET'", function() {
      expect(JarsConnectorRefs.GET_CONNECTOR_REF).to.equal(utils.GET_CONNECTOR_REF);
    });
  });
  
  describe("#HEAD_CONNECTOR_REF", ()=> {
    it("HEAD_CONNECTOR_REF should return 'com.jec.jars.annotations.HEAD'", function() {
      expect(JarsConnectorRefs.HEAD_CONNECTOR_REF).to.equal(utils.HEAD_CONNECTOR_REF);
    });
  });
  
  describe("#INIT_CONNECTOR_REF", ()=> {
    it("INIT_CONNECTOR_REF should return 'com.jec.jars.annotations.Init'", function() {
      expect(JarsConnectorRefs.INIT_CONNECTOR_REF).to.equal(utils.INIT_CONNECTOR_REF);
    });
  });
  
  describe("#OPTIONS_CONNECTOR_REF", ()=> {
    it("OPTIONS_CONNECTOR_REF should return 'com.jec.jars.annotations.OPTIONS'", function() {
      expect(JarsConnectorRefs.OPTIONS_CONNECTOR_REF).to.equal(utils.OPTIONS_CONNECTOR_REF);
    });
  });
  
  describe("#PATH_PARAM_CONNECTOR_REF", ()=> {
    it("PATH_PARAM_CONNECTOR_REF should return 'com.jec.jars.annotations.PathParam'", function() {
      expect(JarsConnectorRefs.PATH_PARAM_CONNECTOR_REF).to.equal(utils.PATH_PARAM_CONNECTOR_REF);
    });
  });
  
  describe("#POST_CONNECTOR_REF", ()=> {
    it("POST_CONNECTOR_REF should return 'com.jec.jars.annotations.POST'", function() {
      expect(JarsConnectorRefs.POST_CONNECTOR_REF).to.equal(utils.POST_CONNECTOR_REF);
    });
  });
  
  describe("#PUT_CONNECTOR_REF", ()=> {
    it("PUT_CONNECTOR_REF should return 'com.jec.jars.annotations.PUT'", function() {
      expect(JarsConnectorRefs.PUT_CONNECTOR_REF).to.equal(utils.PUT_CONNECTOR_REF);
    });
  });
  
  describe("#QUERY_PARAM_CONNECTOR_REF", ()=> {
    it("QUERY_PARAM_CONNECTOR_REF should return 'com.jec.jars.annotations.QueryParam'", function() {
      expect(JarsConnectorRefs.QUERY_PARAM_CONNECTOR_REF).to.equal(utils.QUERY_PARAM_CONNECTOR_REF);
    });
  });
  
  describe("#REQUEST_BODY_CONNECTOR_REF", ()=> {
    it("REQUEST_BODY_CONNECTOR_REF should return 'com.jec.jars.annotations.RequestBody'", function() {
      expect(JarsConnectorRefs.REQUEST_BODY_CONNECTOR_REF).to.equal(utils.REQUEST_BODY_CONNECTOR_REF);
    });
  });
  
  describe("#REQUEST_PARAM_CONNECTOR_REF", ()=> {
    it("REQUEST_PARAM_CONNECTOR_REF should return 'com.jec.jars.annotations.RequestParam'", function() {
      expect(JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF).to.equal(utils.REQUEST_PARAM_CONNECTOR_REF);
    });
  });
  
  describe("#RESOURCE_PATH_CONNECTOR_REF", ()=> {
    it("RESOURCE_PATH_CONNECTOR_REF should return 'com.jec.jars.annotations.ResourcePath'", function() {
      expect(JarsConnectorRefs.RESOURCE_PATH_CONNECTOR_REF).to.equal(utils.RESOURCE_PATH_CONNECTOR_REF);
    });
  });
  
  describe("#ROOT_PATH_CONNECTOR_REF", ()=> {
    it("ROOT_PATH_CONNECTOR_REF should return 'com.jec.jars.annotations.RootPath'", function() {
      expect(JarsConnectorRefs.ROOT_PATH_CONNECTOR_REF).to.equal(utils.ROOT_PATH_CONNECTOR_REF);
    });
  });
  
  describe("#ROOT_PATH_REFS_CONNECTOR_REF", ()=> {
    it("ROOT_PATH_REFS_CONNECTOR_REF should return 'com.jec.jars.annotations.RootPathRefs'", function() {
      expect(JarsConnectorRefs.ROOT_PATH_REFS_CONNECTOR_REF).to.equal(utils.ROOT_PATH_REFS_CONNECTOR_REF);
    });
  });
  
  describe("#TRACE_CONNECTOR_REF", ()=> {
    it("TRACE_CONNECTOR_REF should return 'com.jec.jars.annotations.TRACE'", function() {
      expect(JarsConnectorRefs.TRACE_CONNECTOR_REF).to.equal(utils.TRACE_CONNECTOR_REF);
    });
  });
});
