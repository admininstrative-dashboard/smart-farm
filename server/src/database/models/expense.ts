import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Harvest } from './harvest';
import { Record } from './records';
import { ExpenseCategory } from './expense_categories';

@Table({ tableName: 'expense', timestamps: false })
export class Expense extends Model<Expense> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Record)
  @Column
  record_id: number;

  @ForeignKey(() => ExpenseCategory)
  @Column
  category_id: number;

  @Column
  amount: number;

  @Column
  date: Date;

  @BelongsTo(() => Record)
  declare records: Record;

  @BelongsTo(() => ExpenseCategory)
  declare expense_categories: ExpenseCategory;
  
}