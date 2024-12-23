Ext.define('MyApp.model.Product', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'descr', type: 'string' },
        { name: 'price', type: 'float' },
        { name: 'count', type: 'int' }
    ]
});
