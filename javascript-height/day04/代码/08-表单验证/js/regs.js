//入口函数
window.onload = function() {
    //获取元素
    //正则表达式
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    // var reg = /^(13[0-9]|14[5-9]|15[0-3,5-9]|16[2,5,6,7]|17[0-8]|18[0-9]|19[0-3,5-9])\\d{8}$/
    var regqq = /^[1-9]\d{4,}$/; // qq的正则表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/; //昵称的正则表达式
    var regmsg = /^\d{6}$/; //短信验证码的正则表达式
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/ //密码的正则表达式
        //获取元素
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd')
    var surepwd = document.querySelector('#surepwd')

    regular(tel, regtel);
    regular(qq, regqq)
    regular(nc, regnc)
    regular(msg, regmsg)
    regular(pwd, regpwd)

    function regular(ele, item) {
        ele.onblur = function() {
            if (item.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 您输入有误'
            }
        }
    }

    surepwd.onblur = function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 您输入有误'
        }
    }

}