// const requestUrl = `www.tongji.com`; // 线下
const requestUrl = `cai.beaconway.cn`; // 线上


/**
 * 登录
 */
const uplogin = function() {
    localStorage["setTreeId"]="";
    var userName = $("#userName").val();
    var userPow = $("#userPow").val();
    // 如果有一个值为空，则不执行
    if (userName == "" || userPow == "") {
        alert("提交内容不能为空");
        return;
    }
    $.ajax({
        url: `http://${requestUrl}/login/`,
        type: 'POST',
        data: {
            "username": userName,
            "password": userPow
        },
        success: function (data) {
            // 字符串转JSON
            data = JSON.parse(data);
            if (data.code == 200) {
                let userId = data.res.id;
                let userName = data.res.username;
                // alert(userId + "--" +userName);
                $.cookie('userId', userId,{path: '/' });
                $.cookie('userName', userName,{path: '/' });
                // 跳转至首页
                window.location.href = "home.html?userId="+userId+"&userName="+userName;
            } else {
                alert("登录失败!");
            }
        },
        error: function (xhr, textStatus) {
            alert("登录失败!请求存在问题,请联系系统维护人员");
        }
    });
}
document.onkeydown = keydown;
function keydown(){
 var keycode = event.keyCode;
 if(keycode == 13) {
    uplogin();
 }
}
// 点击登录按钮
$(document).on("click", "#userLogin", function () {
    uplogin();
})




/**
 * 注册
 */
$(document).on("click", "#registerd", function () {
    var userName = $("#userName").val();
    var userPhone = $("#userPhone").val();
    var userPow = $("#userPow").val();
    var userPowNew = $("#userPowNew").val();
    if (userName == "" || userPhone == "" || userPow == "" || userPowNew == "") {
        alert("提交内容不能为空");
        return;
    }
    if (userPow != userPowNew) {
        alert("两次输入密码不同");
        $("#userPow,#userPowNew").val("");
        return;
    }
    $.ajax({
        url: 'http://cai.beaconway.cn/login/',
        type: 'POST',
        data: {
            "username": userName,
            "password": userPow,
            "phone": userPhone
        },
        success: function (data) {
            data = JSON.parse(data);
            if (data.code == 200) {
                if (confirm("注册成功,进入登录页？")) {
                    window.location.href = "index.html";
                }
            } else if (data.code == 200) {
                alert("该手机已被注册!");
            } else {
                alert("注册失败");
            }
        },
        error: function (data) {
            alert("注册失败!请求存在问题,请联系系统维护人员");
        }
    });
})

/**
 * 修改密码
 */
$(document).on("click", "#changePow", function () {
    var userPhone = $("#userPhone").val();
    var userPow = $("#userPow").val();
    var userPowNew = $("#userPowNew").val();
    if (userPhone == "" || userPow == "" || userPowNew == "") {
        alert("提交内容不能为空");
        return;
    }
    if (userPow != userPowNew) {
        alert("两次输入密码不同");
        $("#userPow,#userPowNew").val("");
        return;
    }
    $.ajax({
        url: 'http://cai.beaconway.cn/login/{"phone":' + userPhone + ',"password":' + userPow + '}',

        type: 'PUT',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                if (confirm("修改成功,进入登录页？")) {
                    window.location.href = "index.html"
                }
            } else {
                alert("注册失败!");
            }
        },
        error: function (data) {
            if (data.code == 202) {
                if (confirm("新密码与原密码相同,进入登录页？")) {
                    window.location.href = "index.html"
                }
            } else {
                alert("修改失败!请求存在问题,请联系系统维护人员");
            }
        }
    });
})