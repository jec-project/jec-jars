import {HEAD} from "../../../src/com/jec/jars/annotations/HEAD";
import * as params from "./Params";

export class HEADTestClass {

  @HEAD(params.HTTP_METHOD_PARAMS)
  public headMethod():void { }
}