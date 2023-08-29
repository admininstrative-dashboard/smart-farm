import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './database/models/users.model';
import { Community } from './database/models/communities.model';
import { UserCommunity } from './database/models/users_communities.model';
import { Permission } from './database/models/permissions.model';
import { Role } from './database/models/roles.model';
import { RolePermission } from './database/models/roles_perms.model';
import { UserRole } from './database/models/users_roles';
import { DeviceRequestHistory } from './database/models/device_requests_history.model';
import { Field } from './database/models/fields.model';
import { FixedDevice } from './database/models/fixed_devices.model';
import { Greenhouse } from './database/models/greenhouses.model';
import { MeasurementUnit } from './database/models/measurement_units';
import { OwnerField } from './database/models/owners_fields.model';
import { OwnerFixedDevice } from './database/models/owners_fixed_devices.model';
import { OwnerGreenhouse } from './database/models/owners_greenhouses.model';
import { OwnerPortableDevice } from './database/models/owners_portable_devices.model ';
import { PortableDevice } from './database/models/portable_devices.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      models: [
        User,
        Community,
        UserCommunity,
        Permission,
        Role,
        RolePermission,
        UserRole,
        DeviceRequestHistory,
        Field,
        FixedDevice,
        Greenhouse,
        MeasurementUnit,
        OwnerField,
        OwnerFixedDevice,
        OwnerGreenhouse,
        OwnerPortableDevice,
        PortableDevice,
      ],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}