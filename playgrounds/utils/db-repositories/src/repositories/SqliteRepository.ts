import type { Database, Options } from 'better-sqlite3';
import Sqlite from 'better-sqlite3';

import type { UnknownRecord } from '../types';
import { Repository } from './Repository';

interface CreateTableColumnOptions {
  type: 'INTEGER' | 'REAL' | 'TEXT' | 'BLOB';
  isPrimary?: boolean;
  isUnique?: boolean;
  needAutoIncrement?: boolean;
  defaultValue?: string;
  needNotNull?: boolean;
}

interface CreateTableProps {
  name: string;
  columns: {
    [columnName: string]: CreateTableColumnOptions;
  };
  constraints?: string;
}

/** @todo 전역 상수 옮기기 */
export const IS_ENV_PRODUCTION = process.env.NODE_ENV === 'production';

export class SqliteRepository extends Repository {
  private readonly db: Database;
  private table!: string;

  constructor(private readonly dbFile: string, dbOptions: Options = {}) {
    super();
    this.db = new Sqlite(
      dbFile,
      Object.assign({ verbose: IS_ENV_PRODUCTION ? null : console.log } as Options, dbOptions)
    );
  }

  selectTable(table: string): this {
    this.table = table;
    const showTables = this.db.exec(`.tables`);
    console.log({ showTables });
    return this;
  }

  createTable(tableOptions: CreateTableProps): boolean {
    try {
      const stmt = this.getCreateTablePreparedStatement(tableOptions);
      this.db.exec(stmt);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  private getCreateTablePreparedStatement({
    name,
    columns,
    constraints = '',
  }: CreateTableProps): string {
    const columnsDefine = Object.entries(columns)
      .map(
        ([colName, { type, ...attrs }]) =>
          `${colName} ${type} ${this.stringifyColumnAttributes(attrs)}`
      )
      .join(', ');

    return `CREATE TABLE IF NOT EXISTS ${name} (${columnsDefine}) ${constraints}`;
  }

  private stringifyColumnAttributes(attrs: Omit<CreateTableColumnOptions, 'type'>): string {
    const colAttrs = [];
    if (attrs.isPrimary) colAttrs.push(`PRIMARY KEY`);
    else if (attrs.isUnique) colAttrs.push(`UNIQUE`);
    if (attrs.needAutoIncrement) colAttrs.push(`AUTOINCREMENT`);
    if (attrs.needNotNull) colAttrs.push(`NOT NULL`);
    if (attrs.defaultValue) colAttrs.push(`DEFAULT "${attrs.defaultValue}"`);
    return colAttrs.join(' ');
  }

  public insert<T = UnknownRecord>(values: T | T[]): boolean {
    const valuesToInsert = Array.isArray(values) ? values : [values];
    try {
      valuesToInsert.forEach((value) => {
        this.db.prepare(this.getInsertPreparedStatement<T>(value)).run(value);
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  private getInsertPreparedStatement<T = UnknownRecord>(values: T): string {
    const keys = Object.keys(values);
    return `INSERT INTO ${this.table} (${keys.join(', ')}) VALUES (${keys
      .map((key) => `@${key}`)
      .join(', ')})`;
  }

  public readByKey<T = UnknownRecord>(key: string, selectors?: string[]): void | T {
    throw new Error('Method not implemented.');
  }

  protected readAll<T = UnknownRecord>(): T[] {
    throw new Error('Method not implemented.');
  }

  public update<T = UnknownRecord>(key: string, updateValues: T): boolean {
    throw new Error('Method not implemented.');
  }

  public deleteByKey(key: string): boolean {
    throw new Error('Method not implemented.');
  }

  protected deleteAll(): boolean {
    throw new Error('Method not implemented.');
  }

  protected close() {
    this.db.close();
  }
}
