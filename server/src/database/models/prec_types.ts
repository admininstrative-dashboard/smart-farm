import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { WeatherMetric } from './weather_metrics';
@Table({ tableName: 'prec_types', timestamps: false })
export class PrecType extends Model<PrecType> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @Column
  name: string;

  @HasMany(() => WeatherMetric)
  weather_metrics: WeatherMetric;

}
  
  