import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Record } from './records';
import { PlantingDevice } from './planting_devices';
import { PortableDevice } from './portable_devices.model ';
import { Community } from './communities.model';
import { HarvestDevice } from './harvest_devices';
import { CultivationDevice } from './cultivation_devices';
import { DeviceCalendar } from './devices_calendar';

@Table({ tableName: 'portable_devices_communities', timestamps: false })
export class PortableDeviceCommunity extends Model<PortableDeviceCommunity> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => PortableDevice)
  @Column
  portable_device_id: number;

  @ForeignKey(() => Community)
  @Column
  community_id: number;

  @Column 
  quantity: number

  @BelongsTo(() => PortableDevice)
  declare portable_devices: PortableDevice;

  @BelongsTo(() => Community)
  declare communities: Community;

  @HasMany(() => PlantingDevice)
  planting_devices: PlantingDevice;

  @HasMany(() => HarvestDevice)
  harvest_devices: HarvestDevice;
  
  @HasMany(() => CultivationDevice)
  cultivation_devices: CultivationDevice;

  @HasMany(() => DeviceCalendar)
  devices_calendar: DeviceCalendar;
  
}
