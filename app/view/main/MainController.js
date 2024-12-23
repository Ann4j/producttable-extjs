Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickButton: function () {
        localStorage.removeItem('TutorialLoggedIn');
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    },
    onClickProducts: function () {
        const mainView = this.getView();

        const newTab = mainView.add({
            title: 'Товары',
            closable: true,
            items: [{
                xtype: 'mainlist'
            }],
        });

        mainView.setActiveTab(newTab);
    },

    filter: function (grid) {
        const store = grid.getStore()
        const idField = grid.down('#filterId').getValue()
        const descField = grid.down('#filterDescr').getValue()
        
        store.clearFilter()
        store.addFilter(function (record) {
            let idMatch = true, descMatch = true;
        
            if (idField) {
                idMatch = String(record.get('id')) === idField;
            }

            if (descField) {
                descMatch = record.get('descr')
                    .toLowerCase()
                    .includes(descField.toLowerCase());
            }

            return idMatch && descMatch;
        });
    }

});
