import {TRACE} from "../../../src/com/jec/jars/annotations/TRACE";
import * as params from "./Params";

export class TRACETestClass {

  @TRACE(params.HTTP_METHOD_PARAMS)
  public traceMethod():void { }
}