import {
  StringArrayDummyGenerator,
  DimenseOneObjectDummyGenerator,
  DimenseTwoObjectDummyGenerator,
} from "../utils";

const stringArrGen = new StringArrayDummyGenerator(100_000, 10_000);
export const stringArrDummy = stringArrGen.getDummy();
