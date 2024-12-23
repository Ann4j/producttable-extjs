Ext.define('MyApp.view.main.MainList', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'main',
    title: 'Список товаров',

    store: {
        type: 'products'
    },

    tbar: {
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'ID',
                itemId: 'filterId',
                listeners: {
                    specialkey: function (field, e) {
                        if (e.getKey() === e.ENTER) {
                            const grid = field.up('grid');
                            grid.getController().filter(grid);
                        }
                    }
                },
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Описание',
                itemId: 'filterDescr',
                listeners: {
                    specialkey: function (field, e) {
                        if (e.getKey() === e.ENTER) {
                            const grid = field.up('grid');
                            grid.getController().filter(grid);
                        }
                    }
                }
            },
        ]
    },



    columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Имя', dataIndex: 'name', flex: 2 },
        { text: 'Описание', dataIndex: 'descr', flex: 3 },
        { text: 'Цена', dataIndex: 'price', flex: 1, formatter: 'usMoney' },
        {
            text: 'Количество',
            dataIndex: 'count',
            flex: 1,
            renderer: function (value, metaData) {
                if (value === 0) {
                    metaData.tdCls = 'red-bg'
                }
                return value
            }
        }
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: {
            type: 'products'
        },
        dock: 'bottom',
        displayInfo: true
    }]
});