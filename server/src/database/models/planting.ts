import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Record } from './records';
import { PlantingDevice } from './planting_devices';

@Table({ tableName: 'planting', timestamps: false })
export class Planting extends Model<Planting> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Record)
  @Column
  record_id: number;

  @Column
  crop_quantity: number;

  @Column 
  date: Date

  @Column 
  workers_quantity: number

  @BelongsTo(() => Record)
  declare records: Record;

  @HasMany(() => PlantingDevice)
  planting_devices: PlantingDevice;

}





  