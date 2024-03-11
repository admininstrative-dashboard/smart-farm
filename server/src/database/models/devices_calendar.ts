import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Record } from './records';
import { HarvestDevice } from './harvest_devices';
import { PortableDeviceCommunity } from './portable_devices_communities';
import { Field } from './fields.model';

@Table({ tableName: 'devices_calendar', timestamps: false })
export class DeviceCalendar extends Model<DeviceCalendar> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @Column
  start_date: Date;

  @Column
  end_date: Date;

  @Column
  actual_end_date: Date;

  @ForeignKey(() => PortableDeviceCommunity)
  @Column
  portable_device_community_id: number;

  @ForeignKey(() => Field)
  @Column 
  field_id: number

  @Column
  quantity:number 

  @BelongsTo(() => PortableDeviceCommunity)
  declare portable_devices_communities: PortableDeviceCommunity;

  @BelongsTo(() => Field)
  declare fields: Field;
  
}
  