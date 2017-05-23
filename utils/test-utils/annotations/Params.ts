import {HttpMethodParams} from "../../../src/com/jec/jars/annotations/core/HttpMethodParams";
import {RoutePathParams} from "../../../src/com/jec/jars/annotations/core/RoutePathParams";

export const HTTP_METHOD_PARAMS:HttpMethodParams = {
  route: "sample-route",
  consumes: "application/json",
  produces: "application/json"
};

export const PATH_REFS:string[] = [ "pathRef1", "pathRef2" ];

export const ROOT_PATH_PARAMS:RoutePathParams = {
    path: "/path",
    ref: "v1.0",
    version: {
        prefix: "v",
        major: 1,
        minor: 0
    }
};

export const RESOURCE_PATH_PARAMS:string = "/resource/path";