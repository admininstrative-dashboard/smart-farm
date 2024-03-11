import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Expense } from './expense';

@Table({ tableName: 'expense_categories', timestamps: false })
export class ExpenseCategory extends Model<ExpenseCategory> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @Column
  name: string;

  @HasMany(()=> Expense)
  expense: Expense;

}
  