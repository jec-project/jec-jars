import {CONNECT} from "../../../src/com/jec/jars/annotations/CONNECT";
import * as params from "./Params";

export class CONNECTTestClass {

  @CONNECT(params.HTTP_METHOD_PARAMS)
  public connectMethod():void { }
}