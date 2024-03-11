import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Record } from './records';
import { HarvestDevice } from './harvest_devices';
import { Revenue } from './revenue';

@Table({ tableName: 'harvest', timestamps: false })
export class Harvest extends Model<Harvest> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Record)
  @Column
  record_id: number;

  @Column
  yield: number;

  @Column 
  date: Date

  @Column
  acres_cut:number 

  @Column 
  workers_quantity: number

  @BelongsTo(() => Record)
  declare records: Record;

  @HasMany(() => HarvestDevice)
  harvest_devices: HarvestDevice;

  @HasMany(() => Revenue)
  revenue: Revenue;
  
}