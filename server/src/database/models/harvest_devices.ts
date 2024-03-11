import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Harvest } from './harvest';
import { PortableDeviceCommunity } from './portable_devices_communities';

@Table({ tableName: 'harvest_devices', timestamps: false })
export class HarvestDevice extends Model<HarvestDevice> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Harvest)
  @Column
  harvest_id: number;

  @ForeignKey(() => PortableDeviceCommunity)
  @Column
  portable_devices_communities_id: number;

  @Column 
  quantity: number

  @BelongsTo(() => Harvest)
  declare harvest: Harvest;

  @BelongsTo(() => PortableDeviceCommunity)
  declare portable_devices_communities: PortableDeviceCommunity;

}
