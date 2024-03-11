import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Planting } from './planting';
import { PortableDeviceCommunity } from './portable_devices_communities';

@Table({ tableName: 'planting_devices', timestamps: false })
export class PlantingDevice extends Model<PlantingDevice> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Planting)
  @Column
  planting_id: number;

  @ForeignKey(() => PortableDeviceCommunity)
  @Column
  portable_devices_communities_id: number;

  @Column 
  quantity: number

  @BelongsTo(() => Planting)
  declare planting: Planting;

  @BelongsTo(() => PortableDeviceCommunity)
  declare portable_devices_communities: PortableDeviceCommunity;

}
