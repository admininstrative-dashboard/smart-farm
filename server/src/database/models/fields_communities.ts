import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Harvest } from './harvest';
import { PortableDeviceCommunity } from './portable_devices_communities';
import { Field } from './fields.model';
import { Community } from './communities.model';
@Table({ tableName: 'fields_communities', timestamps: false })
export class FieldCommunity extends Model<FieldCommunity> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Field)
  @Column
  field_id: number;

  @ForeignKey(() => Community)
  @Column
  community_id: number;


  @BelongsTo(() => Field)
  declare fields: Field;

  @BelongsTo(() => Community)
  declare communities: Community;

}