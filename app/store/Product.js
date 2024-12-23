Ext.define('MyApp.store.Product', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    model: 'MyApp.model.Product',

    data: [
        { id: 1, name: 'Кофемолка De’Longhi KG521. M', descr: 'Электрическая кофемолка Delonghi KG521.M имеет высокую производительность и проста в эксплуатации.', price: 13666, count: 10 },
        { id: 2, name: 'Кофемолка КТ-787', descr: 'Жерновая кофемолка КТ-787 предназначена для помола кофейных зёрен.', price: 20000, count: 5 },
        { id: 3, name: 'Кофемолка Bosch TSM6A01', descr: 'Кофемолка Bosch TSM6A01 - это компактный и мощный помощник для любителей кофе.', price: 1500, count: 20 },
        { id: 4, name: 'Кофемолка Kitfort КТ-744', descr: 'Жерновая кофемолка КТ-744 предназначена для помола кофейных зерен.', price: 30000, count: 0 }
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    filters: [] 
});
