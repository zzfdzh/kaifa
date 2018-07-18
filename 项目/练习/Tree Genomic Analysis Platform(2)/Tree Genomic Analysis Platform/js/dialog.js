/**
 * Created by ASUS on 2018/5/25.
 */
/**
 * Created by ASUS on 2018/5/23.
 */
define(function(){

    function Dialog(obj){
        var _this = this;
        this.$dialogMask = $('<div class="dialog-mask"></div>');
        this.$dialogBox = $('<div class="dialog-box"></div>');
        this.$dialogTitle=$('<div class="dialog-title">' +
            obj.title+'</div>');
        this.$dialogClose=$('<div class="dialog-close">×</div>').on('click',function () {
            _this.$dialogMask.remove();
        });
        this.$dialogUsername=$('<div class="dialog-username"><span>'+obj.input+'</span><input type="text"></div>');
        this.$dialogPassword=$('<div class="dialog-password"><span>'+obj.password+'</span><input type="password"></div>');
        this.$dialogSubmit=$('<div class="dialog-submit"><input type="submit" value='+obj.title+'></div>')
            .on('click',function(){
            _this.$dialogMask.remove();
    })
    }
    Dialog.prototype.open = function(){
        this.$dialogMask.append(this.$dialogBox);
        this.$dialogBox.append(this.$dialogTitle).append(this.$dialogUsername).append(this.$dialogUsername)
            .append(this.$dialogPassword).append(this.$dialogSubmit).append(this.$dialogClose);
        $('body').append(this.$dialogMask);
    };
    Dialog.prototype.close = function(){
        this.$dialogMask.remove();
    };
    return Dialog;
});
