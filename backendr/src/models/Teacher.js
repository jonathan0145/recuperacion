import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import Person from './Person.js';

const Teacher = sequelize.define('teacher', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        references: {
            model: Person,
            key: 'id',
        },
    },
    specialty: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    teach: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'teacher',
});

export default Teacher;