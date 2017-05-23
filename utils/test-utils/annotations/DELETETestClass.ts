import {DELETE} from "../../../src/com/jec/jars/annotations/DELETE";
import * as params from "./Params";

export class DELETETestClass {

  @DELETE(params.HTTP_METHOD_PARAMS)
  public deleteMethod():void { }
}