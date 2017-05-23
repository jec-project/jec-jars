import {OPTIONS} from "../../../src/com/jec/jars/annotations/OPTIONS";
import * as params from "./Params";

export class OPTIONSTestClass {

  @OPTIONS(params.HTTP_METHOD_PARAMS)
  public optionsMethod():void { }
}