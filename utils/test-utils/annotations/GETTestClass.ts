import {GET} from "../../../src/com/jec/jars/annotations/GET";
import * as params from "./Params";

export class GETTestClass {

  @GET(params.HTTP_METHOD_PARAMS)
  public getMethod():void { }
}