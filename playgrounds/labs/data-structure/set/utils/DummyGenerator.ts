import { ErrorMessages } from "../constants";
import { range, getRandInt, getHashString } from ".";

/**
 * @interface interface class for dummy generators
 */

class DummyGenerator {
  protected _generate() {
    throw new Error(ErrorMessages.NOT_IMPLEMENTED);
  }

  getDummy() {
    throw new Error(ErrorMessages.NOT_IMPLEMENTED);
  }
}

export class StringArrayDummyGenerator extends DummyGenerator {
  constructor(
    public arraySize = 100,
    public stringSize = 10,
    public arr: string[] = []
  ) {
    if (stringSize <= 0 || arraySize <= 0)
      throw new TypeError(ErrorMessages.INVALID_TYPE);

    super();
  }

  protected _generate() {
    for (let _idx of range(this.arraySize)) {
      this.arr.push(getHashString(this.stringSize));
    }
    return this.arr;
  }

  getDummy() {
    return this._generate();
  }
}

export class DimenseOneObjectDummyGenerator extends DummyGenerator {
  constructor(public obj: Record<string, string> = {}) {
    super();
  }

  protected _generate() {
    throw new Error(ErrorMessages.NOT_IMPLEMENTED);
  }

  getDummy() {
    throw new Error(ErrorMessages.NOT_IMPLEMENTED);
  }
}

export class DimenseTwoObjectDummyGenerator extends DummyGenerator {
  constructor(public obj: Record<string, unknown> = {}) {
    super();
  }

  protected _generate() {
    throw new Error(ErrorMessages.NOT_IMPLEMENTED);
  }

  getDummy() {
    throw new Error(ErrorMessages.NOT_IMPLEMENTED);
  }
}
