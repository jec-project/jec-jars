import {Destroy} from "../../../src/com/jec/jars/annotations/Destroy";

export class DestroyTestClass {

  @Destroy()
  public destroyMethod():void { }
}