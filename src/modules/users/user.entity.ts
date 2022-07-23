import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { GENDERS } from './types/enums';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: [...Object.values(GENDERS)],
    allowNull: false,
  })
  gender: string;
}
