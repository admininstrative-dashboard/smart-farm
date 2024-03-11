import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Record } from './records';
import { HarvestDevice } from './harvest_devices';
import { PortableDeviceCommunity } from './portable_devices_communities';
import { Field } from './fields.model';
import { UserCommunity } from './users_communities.model';

@Table({ tableName: 'workers_calendar', timestamps: false })
export class WorkerCalendar extends Model<WorkerCalendar> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @Column
  start_date: Date;

  @Column
  end_date: Date;

  @Column
  actual_end_date: Date;

  @ForeignKey(() => UserCommunity)
  @Column
  user_community_id: number;

  @ForeignKey(() => Field)
  @Column 
  field_id: number
 

  @BelongsTo(() => UserCommunity)
  declare users_communities: UserCommunity;

  @BelongsTo(() => Field)
  declare fields: Field;
  
}
