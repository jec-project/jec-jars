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

// Test:
describe("JarsConnectorRefs", ()=> {

  describe("#COOKIE_PARAM_CONNECTOR_REF", ()=> {
    it("COOKIE_PARAM_CONNECTOR_REF should return 'com.jec.jars.annotations.CookieParam'", function() {
      expect(JarsConnectorRefs.COOKIE_PARAM_CONNECTOR_REF).to.equal(COOKIE_PARAM_CONNECTOR_REF);
    });
  });
  
  describe("#CONNECT_CONNECTOR_REF", ()=> {
    it("CONNECT_CONNECTOR_REF should return 'com.jec.jars.annotations.CONNECT'", function() {
      expect(JarsConnectorRefs.CONNECT_CONNECTOR_REF).to.equal(CONNECT_CONNECTOR_REF);
    });
  });
  
  describe("#DELETE_CONNECTOR_REF", ()=> {
    it("DELETE_CONNECTOR_REF should return 'com.jec.jars.annotations.DELETE'", function() {
      expect(JarsConnectorRefs.DELETE_CONNECTOR_REF).to.equal(DELETE_CONNECTOR_REF);
    });
  });
  
  describe("#DESTROY_CONNECTOR_REF", ()=> {
    it("DESTROY_CONNECTOR_REF should return 'com.jec.jars.annotations.Destroy'", function() {
      expect(JarsConnectorRefs.DESTROY_CONNECTOR_REF).to.equal(DESTROY_CONNECTOR_REF);
    });
  });
  
  describe("#EXIT_CONNECTOR_REF", ()=> {
    it("EXIT_CONNECTOR_REF should return 'com.jec.jars.annotations.Exit'", function() {
      expect(JarsConnectorRefs.EXIT_CONNECTOR_REF).to.equal(EXIT_CONNECTOR_REF);
    });
  });
  
  describe("#GET_CONNECTOR_REF", ()=> {
    it("GET_CONNECTOR_REF should return 'com.jec.jars.annotations.GET'", function() {
      expect(JarsConnectorRefs.GET_CONNECTOR_REF).to.equal(GET_CONNECTOR_REF);
    });
  });
  
  describe("#HEAD_CONNECTOR_REF", ()=> {
    it("HEAD_CONNECTOR_REF should return 'com.jec.jars.annotations.HEAD'", function() {
      expect(JarsConnectorRefs.HEAD_CONNECTOR_REF).to.equal(HEAD_CONNECTOR_REF);
    });
  });
  
  describe("#INIT_CONNECTOR_REF", ()=> {
    it("INIT_CONNECTOR_REF should return 'com.jec.jars.annotations.Init'", function() {
      expect(JarsConnectorRefs.INIT_CONNECTOR_REF).to.equal(INIT_CONNECTOR_REF);
    });
  });
  
  describe("#OPTIONS_CONNECTOR_REF", ()=> {
    it("OPTIONS_CONNECTOR_REF should return 'com.jec.jars.annotations.OPTIONS'", function() {
      expect(JarsConnectorRefs.OPTIONS_CONNECTOR_REF).to.equal(OPTIONS_CONNECTOR_REF);
    });
  });
  
  describe("#PATH_PARAM_CONNECTOR_REF", ()=> {
    it("PATH_PARAM_CONNECTOR_REF should return 'com.jec.jars.annotations.PathParam'", function() {
      expect(JarsConnectorRefs.PATH_PARAM_CONNECTOR_REF).to.equal(PATH_PARAM_CONNECTOR_REF);
    });
  });
  
  describe("#POST_CONNECTOR_REF", ()=> {
    it("POST_CONNECTOR_REF should return 'com.jec.jars.annotations.POST'", function() {
      expect(JarsConnectorRefs.POST_CONNECTOR_REF).to.equal(POST_CONNECTOR_REF);
    });
  });
  
  describe("#PUT_CONNECTOR_REF", ()=> {
    it("PUT_CONNECTOR_REF should return 'com.jec.jars.annotations.PUT'", function() {
      expect(JarsConnectorRefs.PUT_CONNECTOR_REF).to.equal(PUT_CONNECTOR_REF);
    });
  });
  
  describe("#QUERY_PARAM_CONNECTOR_REF", ()=> {
    it("QUERY_PARAM_CONNECTOR_REF should return 'com.jec.jars.annotations.QueryParam'", function() {
      expect(JarsConnectorRefs.QUERY_PARAM_CONNECTOR_REF).to.equal(QUERY_PARAM_CONNECTOR_REF);
    });
  });
  
  describe("#REQUEST_BODY_CONNECTOR_REF", ()=> {
    it("REQUEST_BODY_CONNECTOR_REF should return 'com.jec.jars.annotations.RequestBody'", function() {
      expect(JarsConnectorRefs.REQUEST_BODY_CONNECTOR_REF).to.equal(REQUEST_BODY_CONNECTOR_REF);
    });
  });
  
  describe("#REQUEST_PARAM_CONNECTOR_REF", ()=> {
    it("REQUEST_PARAM_CONNECTOR_REF should return 'com.jec.jars.annotations.RequestParam'", function() {
      expect(JarsConnectorRefs.REQUEST_PARAM_CONNECTOR_REF).to.equal(REQUEST_PARAM_CONNECTOR_REF);
    });
  });
  
  describe("#RESOURCE_PATH_CONNECTOR_REF", ()=> {
    it("RESOURCE_PATH_CONNECTOR_REF should return 'com.jec.jars.annotations.ResourcePath'", function() {
      expect(JarsConnectorRefs.RESOURCE_PATH_CONNECTOR_REF).to.equal(RESOURCE_PATH_CONNECTOR_REF);
    });
  });
  
  describe("#ROOT_PATH_CONNECTOR_REF", ()=> {
    it("ROOT_PATH_CONNECTOR_REF should return 'com.jec.jars.annotations.RootPath'", function() {
      expect(JarsConnectorRefs.ROOT_PATH_CONNECTOR_REF).to.equal(ROOT_PATH_CONNECTOR_REF);
    });
  });
  
  describe("#ROOT_PATH_REFS_CONNECTOR_REF", ()=> {
    it("ROOT_PATH_REFS_CONNECTOR_REF should return 'com.jec.jars.annotations.RootPathRefs'", function() {
      expect(JarsConnectorRefs.ROOT_PATH_REFS_CONNECTOR_REF).to.equal(ROOT_PATH_REFS_CONNECTOR_REF);
    });
  });
  
  describe("#TRACE_CONNECTOR_REF", ()=> {
    it("TRACE_CONNECTOR_REF should return 'com.jec.jars.annotations.TRACE'", function() {
      expect(JarsConnectorRefs.TRACE_CONNECTOR_REF).to.equal(TRACE_CONNECTOR_REF);
    });
  });
});

// Utilities:
// We store constants that should be defined by the JutaConnectorRefs class:
const COOKIE_PARAM_CONNECTOR_REF:string = "com.jec.jars.annotations.CookieParam";
const CONNECT_CONNECTOR_REF:string = "com.jec.jars.annotations.CONNECT";
const DELETE_CONNECTOR_REF:string = "com.jec.jars.annotations.DELETE";
const DESTROY_CONNECTOR_REF:string = "com.jec.jars.annotations.Destroy";
const EXIT_CONNECTOR_REF:string = "com.jec.jars.annotations.Exit";
const GET_CONNECTOR_REF:string = "com.jec.jars.annotations.GET";
const HEAD_CONNECTOR_REF:string = "com.jec.jars.annotations.HEAD";
const INIT_CONNECTOR_REF:string = "com.jec.jars.annotations.Init";
const OPTIONS_CONNECTOR_REF:string = "com.jec.jars.annotations.OPTIONS";
const PATH_PARAM_CONNECTOR_REF:string = "com.jec.jars.annotations.PathParam";
const POST_CONNECTOR_REF:string = "com.jec.jars.annotations.POST";
const PUT_CONNECTOR_REF:string = "com.jec.jars.annotations.PUT";
const QUERY_PARAM_CONNECTOR_REF:string = "com.jec.jars.annotations.QueryParam";
const REQUEST_BODY_CONNECTOR_REF:string = "com.jec.jars.annotations.RequestBody";
const REQUEST_PARAM_CONNECTOR_REF:string = "com.jec.jars.annotations.RequestParam";
const RESOURCE_PATH_CONNECTOR_REF:string = "com.jec.jars.annotations.ResourcePath";
const ROOT_PATH_CONNECTOR_REF:string = "com.jec.jars.annotations.RootPath";
const ROOT_PATH_REFS_CONNECTOR_REF:string = "com.jec.jars.annotations.RootPathRefs";
const TRACE_CONNECTOR_REF:string = "com.jec.jars.annotations.TRACE";