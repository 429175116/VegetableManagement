// const requestUrl = `www.tongji.com`; // 线下
const requestUrl = `cai.beaconway.cn`; // 线上


// 获取登录页传过来的值
var search = location.search;
// 如果还想要获取确定的数据，可以解析字符串
const parse = function (search) {
    //从第二个字符开始截取   ，获取到第二个开始后面所有的字符
    var str = search.substring(1);
    var result = {};
    //分割字符串  -->产生字符串数组
    var strs = str.split("&");
    //遍历数组中的每一个元素
    strs.forEach(function (v) {
        var keyvalue = v.split("=");
        var name = keyvalue[0];
        var value = keyvalue[1];
        result[name] = value;
    })
    return result;
}
let USER = parse(search);
// 用户Id
let userId = USER.userId;
// 用户名
let userName = USER.userName;


// 目录部分数据
const treeData = {
    "tree": [
        {
            "fatName": "订单管理",
            "sonData": {
                "treeSon": [
                    { "sonName": "订单管理", "url": "orderManage", "id": "orderManage" }
                ]
            }
        },
        {
            "fatName": "数据管理",
            "sonData": {
                "treeSon": [
                    { "sonName": "商家管理", "url": "merchantManage", "id": "merchantManage" },
                    { "sonName": "菜品管理", "url": "dishesManage", "id": "dishesManage" }
                ]
            }
        },
        {
            "fatName": "统计分析",
            "sonData": {
                "treeSon": [
                    { "sonName": "菜品统计", "url": "dishesStatistics", "id": "dishesStatistics" },
                    { "sonName": "订单详情", "url": "orderInfo", "id": "orderInfo" },
                    { "sonName": "商家统计", "url": "merchantStatistics", "id": "merchantStatistics" },
                    { "sonName": "全部统计", "url": "allStatistics", "id": "allStatistics" }
                ]
            }
        },
        {
            "fatName": "系统设置",
            "sonData": {
                "treeSon": [
                    { "sonName": "店铺信息", "url": "shopInfo", "id": "shopInfo" }
                ]
            }
        },
    ]
}
/**
 * 树显示
 */
let tree = treeData.tree;
let fatName = ``;
let treeDom = ``;
let sonData = undefined;
let sonDom = ``;
for (let i = 0; i < tree.length; i++) {
    sonDom = ``;
    fatName = tree[i].fatName;
    sonData = tree[i].sonData.treeSon;
    for (let son = 0; son < sonData.length; son++) {
        sonDom += `<h3 id="${sonData[son].id}" url="${sonData[son].url}">${sonData[son].sonName}</h3>`;
    }
    treeDom += `<li>
                    <h2 class="obtain">
                        ${fatName}
                        <i></i>
                    </h2>
                    <div class="secondary">${sonDom}</div>
                </li>`;
}
$("#treeShow ul").html(treeDom);

// 根据传入的模块名称显示相应的模块DOM
let pageShow = function (that) {
    // 获取点击模块的ID
    let treeId = localStorage["setTreeId"];
    // 如果ID为空则默认为订单管理模块
    if (!treeId) {
        treeId = `orderManage`;
    }
    $("#pageContent").attr("data-treeId", treeId);
    // 生成form和table的DOM部分
    let conterDom = eval("dom_" + treeId);
    let conterTable = eval("table_" + treeId);
    // 渲染
    $("#formComtent").html(conterDom);
    $("#tableContent").html(conterTable);
}
/**
 * 获取数据并显示
 * @param {"":} 
 */
let getDataShow = function (that) {
    // 获取点击模块的ID
    let treeId = localStorage["setTreeId"];
    // 如果ID为空则默认为订单管理模块
    if (!treeId) {
        treeId = `orderManage`;
    }
    eval("getData_" + treeId + "()");
}



/**
 * 根据传入数据最大条目和当前页渲染翻页组件
 * @param {"每页最大条目":maxIndex,"页码":pageIndex,"数据总数":total,"总页码":quantity} 
 */
let pageTurn = function (total, pageIndex) {

    if (total < maxIndex) { total = maxIndex }
    // 余数进1
    let quantity = Math.ceil(total / maxIndex);
    if (pageIndex) {
        pageIndex = 1;
    }
    let pageTurnDom = ``;
    $("#pageTurnId").html(pageTurnDom);
    for (let i = 1; i <= quantity; i++) {
        pageTurnDom += `<li>
                            <a>${i}</a>
                        </li>`;
    }
    $("#pageTurnId").html(pageTurnDom);

    $("#pageTurnId li:eq(" + (currentPage - 1) + ")").addClass("active");
}
/**
 * 树点击事件
 */
$(document).on("click", "#treeShow h3", function () {
    $("#tableShowId").html("");
    let setTreeId = $(this).attr("id");
    localStorage["setTreeId"]=setTreeId;
    
    currentPage = 1;
    // 根据当前的点击模块显示相应模块内容
    pageShow(this);
    // 获取数据显示
    getDataShow(this);
})


/**
 * 翻页点击
 */
$(document).on("click", "#pageTurnId li", function () {
    $("#pageTurnId .active").removeClass("active");
    $(this).addClass("active");
    currentPage = parseInt($("#pageTurnId .active").text());
    let treeId = $("#open .seconFocus").attr("id");
    if (!treeId) {
        treeId = `orderManage`;
    }
    eval("getData_" + treeId + "()");
})



/**
 * 点击提交按钮，提交数据
 */
$(document).on("click", "#formComtent .setUp", function () {
    // 获取form表单子元素个数
    let DomLength = $("#formComtent form").children().length;
    let setKey, setVal = "";
    let setJson = {};
    for (let i = 1; i < DomLength; i++) {
        // 获取key和value
        setKey = $("#formComtent form .form-group:eq(" + (i - 1) + ") .form-control").attr("data-key");
        setVal = $("#formComtent form .form-group:eq(" + (i - 1) + ") .form-control").val();
        // 将key和value加入json中
        setJson[setKey] = setVal;
    }
    setJson["user_adminid"] = userId;
    let treeId = $("#pageContent").attr("data-treeId");
    // 提交
    eval("set_" + treeId + "(setJson)");
})

/**
 * 功能操作，下拉
 */
$(document).on("click", "#dropdownMenu1", function () {
    let haspopup = $(this).attr("aria-haspopup");
    if (haspopup == "true") {
        $(this).attr("aria-haspopup", "false");
        $("#dropdownMenu1Comtent").show();
    } else {
        $(this).attr("aria-haspopup", "true");
        $("#dropdownMenu1Comtent").hide();
    }
})
/**
 * 功能操作，列表点击
 */
$(document).on("click", "#dropdownMenu1Comtent li", function () {
    let listId = $(this).attr("id");
    if (listId == "dropOut") {
        if (confirm("确认离开系统？")) {
            // 
            $.ajax({
                url: `http://${requestUrl}/loginout/${userId}`,
                // xhrFields: {
                //     withCredentials: true
                // },
                // crossDomain: true,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    // window.location.href = "index.html";
                },
                error: function (data) {

                }
            });
            window.location.href = "index.html";
        }
    }
})

/**
 * 删除列表
 */
$(document).on("click", "table .delete", function () {
    if (!confirm("确认删除？")) {
        return
    }
    let deleteId = $(this).attr("data-id");
    let treeId = $("#pageContent").attr("data-treeid");
    eval("del_" + treeId + "(deleteId)");
})


/**
 * 修改列表
 */
$(document).on("click", "table .modify", function () {
    let lestId = $(this).attr("data-id");
    $(".setModify").attr("data-id", lestId);
    $(".setUp").hide();
    $(".setModify, .cancelModify").show();
});
// 提交修改
$(document).on("click", "#formComtent .setModify", function () {
    // 获取form表单子元素个数
    let DomLength = $("#formComtent form").children().length;
    let setKey, setVal = "";
    let setJson = {};
    for (let i = 1; i < DomLength; i++) {
        // 获取key和value
        setKey = $("#formComtent form .form-group:eq(" + (i - 1) + ") .form-control").attr("data-key");
        setVal = $("#formComtent form .form-group:eq(" + (i - 1) + ") .form-control").val();
        // 将key和value加入json中
        setJson[setKey] = setVal;
    }
    setJson["user_adminid"] = userId;
    let treeId = $("#pageContent").attr("data-treeId");

    // 提交
    eval("mod_" + treeId + "(setJson)");
});
// 取消修改
$(document).on("click", "#formComtent .cancelModify", function () {
    $(".setUp").show();
    $(".setModify, .cancelModify").hide();
});


/**
 * 统计所有模块显示
 */
$(document).on("click", "#formComtent #selvegetables,#formComtent #selShop", function () {
    let selButton = $(this).attr("id");
    let time = $("#allStatisticsTime").val();
    let year = "";
    let month = "";
    if (time) {
        time = time.split("-");
        year = time[0];
        month = time[1];
        if (month[0] == 0) {
            month = month[1]
        }
    }
    let selShow = $(this).attr("data-sel");
    let setJson = {};
    setJson["type"]=selShow;
    setJson["month"]=month;
    setJson["year"]=year;
    setJson["id"]=userId;
    getData_allStatistics(setJson);
});
// 查看蔬菜
// $(document).on("click", "#formComtent #selvegetables", function () {
//     $("#formComtent #listShow").attr("data-sel", "1");
// });
// // 查看商家
// $(document).on("click", "#formComtent #selShop", function () {
//     $("#formComtent #listShow").attr("data-sel", "0");
// });

/* *
*初始化
*/
$(document).ready(function () {
    $.ajax({
        url: `http://${requestUrl}/checkLogin/${userId}`,
        // xhrFields: {
        //     withCredentials: true
        // },
        // crossDomain: true,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // alert(data.code)
            if (data.code != 200) {
                alert("此账号尚未登录，请登录");
                window.location.href = "index.html";
            }
        },
        error: function (data) {
        }
    });
    // 页面初始化--渲染DOM
    pageShow();
    // 获取数据显示
    getDataShow();
});



$(document).on("click", ".orderInfoShow", function () {
    set_orderInfo();
});



// 显示列表详情
$(document).on("click", ".showSonTable button", function () {
    $(".sontable").hide();
    
    let sta = $(this).attr("data-sta");
    let dataUserId = $(this).attr("data-user_id");
    if (sta == "true") {
        $(this).attr("data-sta", "false");
        $("[data-userId='"+dataUserId+"']").show();
    } else {
        $(this).attr("data-sta", "true");
        $("[data-userId='"+dataUserId+"']").hide();
    }
    getData_showSonTable(userId, dataUserId);
});

// 显示列表详情
$(document).on("click", "#dayExportList,#monthExportList", function () {
    let time = $("#ExportStatisticsTime").val();
    time = time.split("-");
    let day = time[2];
    let month = time[1];
    let year = time[0];
    if (month[0] == "0") {
        month = month[1];
    }
    let id = $(this).attr("id");
    let s_id = $("#s_id").val();
    let setData = {"user_adminid":userId,"s_id":s_id}
    let url = ``;
    if (id == "dayExportList") {
        setData["date"] = day;
        setData["month"] = month;
        setData["year"] = year;
        setData = JSON.stringify(setData);
        url = `http://${requestUrl}/ExcelToday/${setData}`;
        $("#dayExportList").attr("href" ,url);
    } else if (id == "monthExportList") {
        setData["date"] = "";
        setData["month"] = month;
        setData["year"] = year;
        setData = JSON.stringify(setData);
        url = `http://${requestUrl}/ExcelToday/${setData}`;
        $("#monthExportList").attr("href" ,url);
    }
});