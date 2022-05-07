import Sqlite, { Database, Options } from 'better-sqlite3';
import { Repository } from './Repository';

export class SqliteRepository extends Repository {
  private readonly db: Database;

  constructor(private readonly dbFile: string, dbOptions: Options = {}) {
    super();
    this.db = new Sqlite(dbFile, dbOptions);
  }

  public insert<T = { [x: string]: any }>(values: T | T[]): boolean {
    throw new Error('Method not implemented.');
  }

  public readByKey<T = { [x: string]: any }>(key: string, selectors?: string[]): void | T {
    throw new Error('Method not implemented.');
  }

  protected readAll<T = { [x: string]: any }>(): T[] {
    throw new Error('Method not implemented.');
  }

  public update<T = { [x: string]: any }>(key: string, updateValues: T): boolean {
    throw new Error('Method not implemented.');
  }

  public deleteByKey(key: string): boolean {
    throw new Error('Method not implemented.');
  }

  protected deleteAll(): boolean {
    throw new Error('Method not implemented.');
  }
}
