Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        const form = this.getView().down('form').getForm();
        const values = form.getValues(); 

        const username = values.username; 
        const password = values.password;

        if (username === 'admin' && password === 'padmin') {
            localStorage.setItem("TutorialLoggedIn", true);
            this.getView().destroy();
            Ext.create({
                xtype: 'app-main'
            });
        } else {
            Ext.Msg.alert('Ошибка входа', 'Неверный логин или пароль.');
        }
    }
});