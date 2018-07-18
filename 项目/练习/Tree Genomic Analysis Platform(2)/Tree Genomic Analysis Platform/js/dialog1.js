
define(function(){
    function Dialog1(obj){
        var _this = this;
        this.$dialogMask = $('<div class="dialog-mask"></div>');
        this.$dialogBox = $('<div class="dialog-box"></div>');
        this.$dialogTitle=$('<div class="dialog-title1">' +
            obj.title+'</div>');
        this.$dialogClose=$('<div class="dialog-close">×</div>').on('click',function () {
            _this.$dialogMask.remove();
        });
        this.$dialogUsername=$('<div class="dialog-username1"><span>'+obj.input+'</span><input type="text"></div>');
        this.$dialogPassword=$('<div class="dialog-password1"><span>'+obj.password+'</span><input type="password"></div>');
        this.$dialogEmail=$('<div class="dialog-email1"><span>'+obj.email+'</span><input type="text"></div>');
        this.$dialogContent=$('<div class="dialog-content">'+obj.content+'</div>');
        this.$dialogSubmit=$('<div class="dialog-submit1"><input type="submit" value='+obj.title+'></div>')
            .on('click',function(){
                _this.$dialogMask.remove();
            })
    }
    Dialog1.prototype.open = function(){
        this.$dialogMask.append(this.$dialogBox);
        this.$dialogBox.append(this.$dialogTitle).append(this.$dialogUsername).append(this.$dialogUsername)
            .append(this.$dialogPassword) .append(this.$dialogEmail).append(this.$dialogContent).append(this.$dialogSubmit)
            .append(this.$dialogClose);
        $('body').append(this.$dialogMask);
    };
    Dialog1.prototype.close = function(){
        this.$dialogMask.remove();
    };
    return Dialog1;
});
