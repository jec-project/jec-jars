import {PUT} from "../../../src/com/jec/jars/annotations/PUT";
import * as params from "./Params";

export class PUTTestClass {

  @PUT(params.HTTP_METHOD_PARAMS)
  public putMethod():void { }
}