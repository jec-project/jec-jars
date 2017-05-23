import {RequestParam} from "../../../src/com/jec/jars/annotations/RequestParam";

export class RequestParamTestClass {

  public requestInfo(@RequestParam request:any):void {}
}