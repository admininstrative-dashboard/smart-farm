// users_roles.model.ts
import { Column, Model, Table, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { Community } from './communities.model';
import { Field } from './fields.model';
import { Product } from './product.model';
import { Planting } from './planting';
import { Harvest } from './harvest';
import { Cultivation } from './cultivation';
import { Expense } from './expense';

@Table({ tableName: 'records', timestamps: false })
export class Record extends Model<Record> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @ForeignKey(() => Community)
  @Column
  community_id: number;

  @ForeignKey(() => Field)
  @Column
  field_id: number;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @BelongsTo(() => Community)
  declare communities: Community;

  @BelongsTo(() => Field)
  declare fields: Field;

  @BelongsTo(() => Product)
  declare products: Product;

  @HasMany(() => Planting)
  planting: Planting;

  @HasMany(()=> Harvest)
  harvest: Harvest;

  @HasMany(()=> Cultivation)
  cultivation: Cultivation;

  @HasMany(()=> Expense)
  expense: Expense;

}
