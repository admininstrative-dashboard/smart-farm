//communities.model.ts
import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { UserCommunity } from './users_communities.model';
import { DeviceUsageStatisticsCommunities } from './device_usage_statistics_communities.model';
import { Record } from './records';
import { PortableDeviceCommunity } from './portable_devices_communities';
import { WeatherMetric } from './weather_metrics';
import { FieldCommunity } from './fields_communities';

@Table({ tableName: 'communities', timestamps: false  })
export class Community extends Model<Community> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @Column({ unique: true, allowNull: false })
  name: string;

  @Column(DataType.STRING)
  location: string;

  @HasMany(() => UserCommunity)
  user_communities: UserCommunity[];

  @HasMany(() => DeviceUsageStatisticsCommunities)
  device_usage_statistics_communities: DeviceUsageStatisticsCommunities;

  @HasMany(() => Record)
  records: Record;

  @HasMany(() => PortableDeviceCommunity)
  portable_devices_communities: PortableDeviceCommunity;

  @HasMany(() => WeatherMetric)
  weather_metrics: WeatherMetric;

  @HasMany(() => FieldCommunity)
  fields_communities: FieldCommunity;  

}
