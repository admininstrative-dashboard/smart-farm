import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Harvest } from './harvest';
@Table({ tableName: 'revenue', timestamps: false })
export class Revenue extends Model<Revenue> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Harvest)
  @Column
  harvest_id: number;

  @Column
  amount: number;

  @Column
  date: Date;

  @BelongsTo(() => Harvest)
  declare harvest: Harvest;


}
