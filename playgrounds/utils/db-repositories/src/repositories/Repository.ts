import { UnknownRecord } from '../types';

export abstract class Repository {
  public abstract insert<T = UnknownRecord>(values: T | T[]): boolean;
  public abstract readByKey<T = UnknownRecord>(key: string, selectors?: string[]): T | void;
  protected abstract readAll<T = UnknownRecord>(): T[];
  public abstract update<T = UnknownRecord>(key: string, updateValues: T): boolean;
  public abstract deleteByKey(key: string): boolean;
  protected abstract deleteAll(): boolean;
}
