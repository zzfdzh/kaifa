/**
 * Created by ASUS on 2018/5/20.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12'
    }
});
require(['jquery','dialog','dialog1'],function($,Dialog,Dialog1){
    $(' .login').on('click',function(){
        var dialog1 = new Dialog({
            input:'username:',
            password:'password:',
            title:'login'
        });
        dialog1.open();

    });
    $('.register').on('click',function(){
        var dialog2 = new Dialog1({
            input:'username:',
            password:'password:',
            title:'Register',
            email:'Email:',
            content:'*E-mail is the only channel our site can use to communicate with you.please ensure that your e-mail address is correct!'
        });
       dialog2.open()
    });

});