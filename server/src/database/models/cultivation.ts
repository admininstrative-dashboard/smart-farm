import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Community } from './communities.model';
import { Field } from './fields.model';
import { Product } from './product.model';
import { Planting } from './planting';
import { Harvest } from './harvest';
import { Record } from './records';
import { CultivationDevice } from './cultivation_devices';

@Table({ tableName: 'cultivation', timestamps: false })
export class Cultivation extends Model<Cultivation> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Record)
  @Column
  record_id: number;

  @Column
  start_date: Date;

  @Column
  end_date: Date;

  @Column
  avg_humidity: number;

  @Column
  avg_temperature: number;

  @Column
  fertilizer_quantity: number; 

  @Column
  water_amount: number; 

  @Column
  workers_quantity: number;
  
  @Column
  other_factors: number; 

  @BelongsTo(() => Record)
  declare records: Record;

  @HasMany(() => CultivationDevice)
  cultivation_devices: CultivationDevice;

}
