import {POST} from "../../../src/com/jec/jars/annotations/POST";
import * as params from "./Params";

export class POSTTestClass {

  @POST(params.HTTP_METHOD_PARAMS)
  public postMethod():void { }
}