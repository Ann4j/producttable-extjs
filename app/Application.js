Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',


    launch: function () {
        const loggedIn = localStorage.getItem("TutorialLoggedIn");
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
