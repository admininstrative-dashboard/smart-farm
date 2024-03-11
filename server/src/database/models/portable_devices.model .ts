import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { User } from './users.model';
import { OwnerPortableDevice } from './owners_portable_devices.model ';
import { PortableDeviceCommunity } from './portable_devices_communities';

@Table({ tableName: 'portable_devices', timestamps: false })
export class PortableDevice extends Model<PortableDevice> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  type: string;

  @HasMany(() => OwnerPortableDevice)
  users: User[];

  @HasMany(() => PortableDeviceCommunity)
  portable_devices_communities: PortableDeviceCommunity;
}
