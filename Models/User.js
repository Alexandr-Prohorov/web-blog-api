const { Sequelize, Model, DataTypes } =  require('sequelize');

const sequelize = new Sequelize('web_blog_db', 'postgres', '157947', {
    host: 'localhost',
    dialect: 'postgres'
});

class User extends Model {}

User.init(
    {
        // Здесь определяются атрибуты модели
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            // allowNull по умолчанию имеет значение true
        },
    },
    {
        sequelize, // Экземпляр подключения (обязательно)
        modelName: 'User',
    }
)

// `sequelize.define` возвращает модель
console.log(User === sequelize.models.User) // true

;(async () => {
    // Пересоздаем таблицу в БД
    await sequelize.sync({ force: true })
    // дальнейший код
})()

module.exports = User