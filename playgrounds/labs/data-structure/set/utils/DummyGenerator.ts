const { random } = Math;

const NOT_IMPLEMENTED_ERROR_MSG = `Must Implement!`;

/**
 * @interface interface class for dummy generators
 */
class DummyGenerator {
  protected _generator() {
    throw new Error(NOT_IMPLEMENTED_ERROR_MSG);
  }

  getDummy() {
    throw new Error(NOT_IMPLEMENTED_ERROR_MSG);
  }
}

export class StringArrayDummyGenerator extends DummyGenerator {
  protected _generator() {
    throw new Error(NOT_IMPLEMENTED_ERROR_MSG);
  }

  getDummy() {
    throw new Error(NOT_IMPLEMENTED_ERROR_MSG);
  }
}

export class DimenseOneObjectDummyGenerator extends DummyGenerator {
  protected _generator() {
    throw new Error(NOT_IMPLEMENTED_ERROR_MSG);
  }

  getDummy() {
    throw new Error(NOT_IMPLEMENTED_ERROR_MSG);
  }
}

export class DimenseTwoObjectDummyGenerator extends DummyGenerator {
  protected _generator() {
    throw new Error(NOT_IMPLEMENTED_ERROR_MSG);
  }

  getDummy() {
    throw new Error(NOT_IMPLEMENTED_ERROR_MSG);
  }
}
