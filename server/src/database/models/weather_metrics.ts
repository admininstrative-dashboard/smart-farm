import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Record } from './records';
import { PlantingDevice } from './planting_devices';
import { Community } from './communities.model';
import { PrecType } from './prec_types';

@Table({ tableName: 'weather_metrics', timestamps: false })
export class WeatherMetric extends Model<WeatherMetric> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Community)
  @Column
  community_id: number;

  @Column
  rain_drop: number;

  @Column
  humidity: number;

  @Column
  temperature: number;

  @ForeignKey(() => PrecType)
  @Column
  prec_type_id: number;

  @Column 
  date: Date

  @BelongsTo(() => PrecType)
  declare prec_types: PrecType;

  @BelongsTo(() => Community)
  declare communities: Community;

}
  