import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Harvest } from './harvest';
import { PortableDeviceCommunity } from './portable_devices_communities';
import { Cultivation } from './cultivation';

@Table({ tableName: 'cultivation_devices', timestamps: false })
export class CultivationDevice extends Model<CultivationDevice> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Cultivation)
  @Column
  cultivation_id: number;

  @ForeignKey(() => PortableDeviceCommunity)
  @Column
  portable_devices_communities_id: number;

  @Column 
  quantity: number

  @BelongsTo(() => Cultivation)
  declare cultivation: Cultivation;

  @BelongsTo(() => PortableDeviceCommunity)
  declare portable_devices_communities: PortableDeviceCommunity;

}

  