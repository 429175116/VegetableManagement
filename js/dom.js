// 页码总数
let pageMax = 1;
// 每页显示条数
let maxIndex = 10;
// 当前页
let currentPage = 1;

// 删除form值
const delInputVal = function () {
    $("#formComtent [type='text']").val("");
    $("#formComtent select").val("-1");
}
// 订单管理==>订单管理--dom
const dom_orderManage = `<div class="formComtent">
                            <form class="form-inline">
                                <div class="form-group">
                                    <label for="">蔬菜种类</label>
                                    <select class="form-control" onchange="setUnitPrice()" id="v_id" data-key="v_id"></select>
                                </div>
                                <div class="form-group">
                                    <label for="">选择商家</label>
                                    <select class="form-control" id="s_id" data-key="s_id"></select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">蔬菜单价</label>
                                    <input type="text" class="form-control" id="orderManage_price" oninput="setPrice()" data-key="vege_price">
                                </div>
                                <div class="form-group">
                                <label for="exampleInputEmail2">蔬菜重量</label>
                                     <input type="text" class="form-control" id="orderManage_num"  oninput="setPrice()" placeholder="斤" data-key="vege_num">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">总价</label>
                                    <input type="text" class="form-control" id="sum_price" placeholder="" data-key="sum_price"  readonly>
                                </div>
                               
                                <div class="form-group">
                                    <label for="exampleInputEmail2">时间</label>
                                    <input type="date" class="form-control" id="orderManageTime" placeholder="" data-key="order_time">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2"></label>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary setUp">提交</button>
                                    <button type="button" class="btn btn-success setModify">修改</button>
                                    <button type="button" class="btn btn-default cancelModify">取消修改</button>
                                </div>
                            </form>
                        </div>`;
// 数据管理==>商家管理--dom
const dom_merchantManage = `<div class="formComtent">
                            <form class="form-inline">
                                <div class="form-group">
                                    <label for="">店铺名称</label>
                                    <input type="text" class="form-control" id="" placeholder="" data-key="user_name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">商家手机号</label>
                                    <input type="text" class="form-control" id="exampleInputEmail2" placeholder="" data-key="user_phone">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">联系人名称</label>
                                    <input type="text" class="form-control" id="exampleInputEmail2" placeholder="" data-key="user_contacts">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">是否禁用</label>
                                    <select class="form-control" id="is_use" data-key="is_use">
                                        <option value="1">可用</option>
                                        <option value="0">禁用</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">上架地址</label>
                                    <input type="text" class="form-control" id="exampleInputEmail2" placeholder="" data-key="user_address">
                                </div>
                                
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary setUp">提交</button>
                                    <button type="button" class="btn btn-success setModify">修改</button>
                                    <button type="button" class="btn btn-default cancelModify">取消修改</button>
                                </div>
                            </form>
                        </div>`;
// 数据管理==>菜品管理--dom
const dom_dishesManage = `<div class="formComtent">
                            <form class="form-inline">
                                <div class="form-group">
                                    <label for="">商品名称</label>
                                    <input type="text" class="form-control" id="" placeholder="" data-key="vege_name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">单价</label>
                                    <input type="text" class="form-control" id="exampleInputEmail2" placeholder="" data-key="vege_price">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">是否上架</label>
                                    <select class="form-control" id="is_on" data-key="is_on">
                                        <option value="1">上架</option>
                                        <option value="0">不上架</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">规格</label>
                                    <input type="text" class="form-control" id="exampleInputEmail2" placeholder="" data-key="vege_spec">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">单位</label>
                                    <select class="form-control" id="vege_unit" data-key="vege_unit">
                                        <option value="0">斤</option>
                                        <option value="1">盒</option>
                                        <option value="2">瓶</option>
                                        <option value="3">箱</option>
                                        <option value="4">个</option>
                                        <option value="5">件</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary setUp">提交</button>
                                    <button type="button" class="btn btn-success setModify">修改</button>
                                    <button type="button" class="btn btn-default cancelModify">取消修改</button>
                                </div>
                            </form>
                        </div>`;
// 统计分析==>菜品统计--dom
const dom_dishesStatistics = ``;
// 统计分析==>商家统计--dom
const dom_merchantStatistics = `<div class="formComtent">
                                    <form class="form-inline">
                                        <div class="form-group">
                                            <label id="ExportListFont">导出数据</label>
                                        </div>
                                        <div class="form-group">
                                            <label></label>
                                        </div>
                                        <div class="form-group">
                                            <label for="">商户名称</label>
                                            <select class="form-control" id="s_id" data-key="s_id"></select>
                                            <label for="">选择时间</label>
                                            <input type="date" id="ExportStatisticsTime" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <a class="btn btn-primary" id="dayExportList" href="#">导出日列表</a>
                                            <a class="btn btn-success" id="monthExportList" href="#">导出月列表</a>
                                        </div>
                                    </form>
                                </div>`;
// 统计分析==>全部统计--dom
const dom_allStatistics = `<div class="formComtent">
                                <form class="form-inline">
                                
                                    <div class="form-group">
                                        <label for="">选择时间</label>
                                        <input type="month" id="allStatisticsTime" class="form-control">
                                        <button type="button" class="btn btn-primary" data-sel="0" id="selShop">查看商家</button>
                                        <button type="button" class="btn btn-success" data-sel="1" id="selvegetables">查看蔬菜</button>
                                    </div>
                                </form>
                            </div>`;
// 系统设置==>店铺信息--dom
const dom_shopInfo = `<div class="formComtent">
                            <form  class="form-inline">
                                <div class="form-group">
                                    <label for="">店铺名称</label>
                                    <input type="text" class="form-control" id="" data-key="title">
                                </div>
                                
                                <div class="form-group">
                                    <label for="exampleInputEmail2">登录用户名</label>
                                    <input type="text" class="form-control" id="" data-key="username">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">  </label>
                                    
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary setUp">提交</button>
                                </div>
                            </form>
                        </div>`;
// 系统设置==>清理缓存--dom
const dom_cleanCache = `<div class="formComtent">
                            <form class="form-inline">
                                <div class="form-group">
                                    <label for="">Name</label>
                                    <input type="text" class="form-control" id="" placeholder="" data-key="">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">Email</label>
                                    <input type="text" class="form-control" id="exampleInputEmail2" placeholder="" data-key="">
                                </div>
                                <div class="form-group">
                                <label for="exampleInputEmail2">Email</label>
                                     <input type="text" class="form-control" id="exampleInputEmail2" placeholder="" data-key="">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">Email</label>
                                    <input type="text" class="form-control" id="exampleInputEmail2" placeholder="" data-key="">
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary">提交</button>
                                </div>
                            </form>
                        </div>`;
// 订单详情
const dom_orderInfo = `<div class="formComtent">
                        <form class="form-inline">
                            <div class="form-group">
                                <label for="">商户名称</label>
                                <select class="form-control" id="s_id" data-key="s_id"></select>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-primary orderInfoShow">提交</button>
                            </div>
                        </form>
                    </div>`;
// 订单管理==>订单管理--table
const table_orderManage = `<table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>订单ID</th>
                                        <th>店铺名字</th>
                                        <th>联系人名字</th>
                                        <th>联系人电话</th>
                                        <th>订单号</th>
                                        <th>订单总金额</th>
                                        <th>支付状态</th>
                                        <th>订单时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody id="tableShowId"></tbody>
                            </table>`;
// 数据管理==>商家管理--table
const table_merchantManage = `<table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>商家ID</th>
                                        <th>商店名</th>
                                        <th>店铺联系人</th>
                                        <th>联系人电话</th>
                                        <th>店铺地址</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody id="tableShowId"></tbody>
                            </table>`;
// 数据管理==>菜品管理--table
const table_dishesManage = `<table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>菜品ID</th>
                                        <th>菜品名称</th>
                                        <th>菜品价格</th>
                                        <th>规格</th>
                                        <th>单位</th>    
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody id="tableShowId"></tbody>
                            </table>`;
// 统计分析==>菜品统计--table
const table_dishesStatistics = `<table class="table table-bordered">
                                <thead>
				                <tr>                    
									<th rowspan="2">蔬菜名</th>
									<th rowspan="2">规格</th>
									<th rowspan="2">单位</th>
									<th colspan="2">今日统计</th>
									<th colspan="2">月统计</th>
							
							    </tr> 
							    <tr>
								 	<th > 金额 </th> 
								 	<th > 数量 </th> 
								 	<th > 金额 </th> 
								 	<th > 数量 </th> 
							 	</tr>
                                </thead>
                                <tbody id="tableShowId"></tbody>
                            </table>`;
// 统计分析==>商家统计--table
const table_merchantStatistics = `<table class="table table-bordered">
                                <thead>
                                    <tr>
                                      <th rowspan="2">店铺名</th>
									  <th rowspan="2">电话号</th>
									  <th rowspan="2">联系人</th>
									  <th rowspan="2">联系地址</th>   
									  <th colspan="2">今日统计</th>
                                      <th colspan="2">月统计</th>
                                      <th rowspan="2">查看</th>
                                    </tr>
                                    <tr>       
                                      <th>数量</th>
                                      <th>金额</th>
                                      <th>数量</th>
                                      <th>金额</th>
                                    </tr>
                                </thead>
                                <tbody id="tableShowId"></tbody>
                            </table>`;
// 统计分析==>全部统计--table
const table_allStatistics = `<table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th rowspan="2">蔬菜名</th>
                                        <th rowspan="2">蔬菜规格</th>
                                        <th rowspan="2">蔬菜单位</th>      
                                        <th colspan="2">总统计</th> 
                                    </tr>
                                    <tr>       
                                      <th>数量</th>
                                      <th>金额</th>
                                    </tr>
                                </thead>
                                <tbody id="tableShowId"></tbody>
                            </table>`;
// 系统设置==>店铺信息--table
const table_shopInfo = `<table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>店铺名</th>
                                        <th>登录用户名</th>
                                        <th>联系电话</th> 
                                    </tr>
                                </thead>
                                <tbody id="tableShowId"></tbody>
                            </table>`;
// 系统设置==>清理缓存--table
const table_cleanCache = `<table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody id="tableShowId"></tbody>
                            </table>`;
const table_orderInfo = `<table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>蔬菜ID</th>
                                <th>蔬菜名称</th>
                                <th>规格</th>
                                <th>单位</th>
                                <th>单价</th>
                                <th>总金额</th>
                            </tr>
                        </thead>
                        <tbody id="tableShowId"></tbody>
                        </table>`;


// 获取当前日期函数疯转股
const getNowFormatDate = function () {
    let date = new Date();
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

// 订单详情--run
const getData_orderInfo = function () {
    $.ajax({
        url: `http://${requestUrl}/username/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                for (var i = 0; i < pageMax; i++) {
                    tableDom += `<option value="${tableData[i].user_id}">${tableData[i].user_name}</option>`;
                }
            }
            $("#s_id").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
    let s_id = $("#s_id").val();
    $.ajax({
        url: `http://${requestUrl}/desc/{"user_adminid":${userId},"s_id":${s_id}}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                // 翻页
                pageTurn(pageMax);
                let minData = maxIndex * currentPage - maxIndex;
                let maxData = maxIndex * currentPage;
                if (maxData > pageMax) {
                    maxData = pageMax
                }
                for (var i = minData; i < maxData; i++) {
                    if (tableData[i].vege_unit == "0") {
                        tableData[i].vege_unit = "交易中";
                    } else if (tableData[i].vege_unit == "1") {
                        tableData[i].vege_unit = "取消";
                    } else if (tableData[i].vege_unit == "2") {
                        tableData[i].vege_unit = "完成";
                    }
                    tableDom += `<tr>
                                    <th scope="row">${tableData[i].vege_id}</th>
                                    <td>${tableData[i].vege_name}</td>
                                    <td>${tableData[i].vege_spec}</td>
                                    <td>${tableData[i].vege_unit}</td>
                                    <td>${tableData[i].vege_price}</td>
                                    <td>${tableData[i].sum_price}</td>
                                    <td>${tableData[i].sum_price}</td>
                                </tr>`
                }
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
}

// 订单管理==>订单管理--run
const getData_orderManage = function () {
    // 获取当前日期
    let orderManageTime = getNowFormatDate();
    // 将日期填入时间文本框
    $("#orderManageTime").val(orderManageTime);
    $.ajax({
        url: `http://${requestUrl}/vegename/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                for (var i = 0; i < pageMax; i++) {
                    tableDom += `<option data-price="${tableData[i].vege_price}" value="${tableData[i].vege_id}">${tableData[i].vege_name}</option>`;
                }
                $("#orderManage_price").val(tableData[0].vege_price);
            }
            $("#v_id").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
    $.ajax({
        url: `http://${requestUrl}/username/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                for (var i = 0; i < pageMax; i++) {
                    tableDom += `<option value="${tableData[i].user_id}">${tableData[i].user_name}</option>`;
                }
            }
            $("#s_id").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
    $.ajax({
        url: `http://${requestUrl}/order/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                // 翻页
                pageTurn(pageMax);
                let minData = maxIndex * currentPage - maxIndex;
                let maxData = maxIndex * currentPage;
                if (maxData > pageMax) {
                    maxData = pageMax
                }
                for (var i = minData; i < maxData; i++) {
                    if (tableData[i].is_pay == "0") {
                        tableData[i].is_pay = "交易中";
                    } else if (tableData[i].is_pay == "1") {
                        tableData[i].is_pay = "取消";
                    } else if (tableData[i].is_pay == "2") {
                        tableData[i].is_pay = "完成";
                    }
                    tableDom += `<tr data-is_pay=${tableData[i].is_pay} data-order_id=${tableData[i].order_id}>
                                    <th scope="row">${tableData[i].order_id}</th>
                                    <td>${tableData[i].user_name}</td>
                                    <td>${tableData[i].user_contacts}</td>
                                    <td>${tableData[i].user_phone}</td>
                                    <td>${tableData[i].order_number}</td>
                                    <td>￥${tableData[i].sum_price}</td>
                                    <td>${tableData[i].is_pay}</td>
                                    <td>${tableData[i].order_time}</td>
                                    <td>
                                        <button type="button" data-id="${tableData[i].order_id}" class="btn btn-info modify">修改</button>
                                        <button type="button" data-id="${tableData[i].order_id}" class="btn btn-danger delete">删除</button>
                                    </td>
                                </tr>`
                }
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
}


// 数据管理==>商家管理
const getData_merchantManage = function () {
    $.ajax({
        url: `http://${requestUrl}/user/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                // 翻页
                pageTurn(pageMax);
                let minData = maxIndex * currentPage - maxIndex;
                let maxData = maxIndex * currentPage;
                if (maxData > pageMax) {
                    maxData = pageMax
                }
                for (var i = minData; i < maxData; i++) {
                    tableDom += `<tr data-is_pay=${tableData[i].user_adminid} data-order_id=${tableData[i].user_id}>
                                    <th scope="row">${tableData[i].user_id}</th>
                                    <td>${tableData[i].user_name}</td>
                                    <td>${tableData[i].user_contacts}</td>
                                    <td>${tableData[i].user_phone}</td> 
                                    <td>${tableData[i].user_address}</td>
                                    <td>
                                        <button type="button" data-id="${tableData[i].user_id}" class="btn btn-info modify">修改</button>
                                        <button type="button" data-id="${tableData[i].user_id}" class="btn btn-danger delete">删除</button>
                                    </td>
                                </tr>`
                }
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
}

// 数据管理==>菜品管理
const getData_dishesManage = function () {
    $.ajax({
        url: `http://${requestUrl}/vege/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                // 翻页
                pageTurn(pageMax);
                let minData = maxIndex * currentPage - maxIndex;
                let maxData = maxIndex * currentPage;
                if (maxData > pageMax) {
                    maxData = pageMax
                }
                for (var i = minData; i < maxData; i++) {
                    if (tableData[i].vege_unit == "0") {
                        tableData[i].vege_unit = "斤";
                    } else if (tableData[i].vege_unit == "1") {
                        tableData[i].vege_unit = "盒";
                    } else if (tableData[i].vege_unit == "2") {
                        tableData[i].vege_unit = "瓶";
                    } else if (tableData[i].vege_unit == "3") {
                        tableData[i].vege_unit = "箱";
                    } else if (tableData[i].vege_unit == "4") {
                        tableData[i].vege_unit = "个";
                    } else if (tableData[i].vege_unit == "5") {
                        tableData[i].vege_unit = "件";
                    }
                    tableDom += `<tr data-is_pay=${tableData[i].vege_adminid} data-order_id=${tableData[i].vege_id}>
                                    <th scope="row">${tableData[i].vege_id}</th>                          
                                    <td>${tableData[i].vege_name}</td>
                                    <td>${tableData[i].vege_price}</td>
                                    <td>${tableData[i].vege_spec}</td>
                                    <td>${tableData[i].vege_unit}</td>
                                    <td>
                                        <button type="button" data-id="${tableData[i].vege_id}" class="btn btn-info modify">修改</button>
                                        <button type="button" data-id="${tableData[i].vege_id}" class="btn btn-danger delete">删除</button>
                                    </td>
                                </tr>`
                }
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
}

// 统计分析==>菜品统计
const getData_dishesStatistics = function () {
    $.ajax({
        url: `http://${requestUrl}/vegecount/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                // 翻页
                pageTurn(pageMax);
                let minData = maxIndex * currentPage - maxIndex;
                let maxData = maxIndex * currentPage;
                if (maxData > pageMax) {
                    maxData = pageMax
                }
                for (var i = minData; i < maxData; i++) {
                    if (tableData[i].vege_unit == "0") {
                        tableData[i].vege_unit = "斤";
                    } else if (tableData[i].vege_unit == "1") {
                        tableData[i].vege_unit = "盒";
                    } else if (tableData[i].vege_unit == "2") {
                        tableData[i].vege_unit = "瓶";
                    } else if (tableData[i].vege_unit == "3") {
                        tableData[i].vege_unit = "箱";
                    } else if (tableData[i].vege_unit == "4") {
                        tableData[i].vege_unit = "个";
                    } else if (tableData[i].vege_unit == "5") {
                        tableData[i].vege_unit = "件";
                    }
                    tableDom += `<tr data-is_pay=${tableData[i].vege_adminid} data-order_id=${tableData[i].order_id}>
                                    <th scope="row">${tableData[i].vege_name}</th>
                                    <td>${tableData[i].vege_spec}</td> 
                                    <td>${tableData[i].vege_unit}</td>  
                                    <td>￥${tableData[i].today_count.num}</td>  
                                    <td>${tableData[i].today_count.price}</td>
                                    <td>￥${tableData[i].month_count.num}</td>
                                    <td>${tableData[i].month_count.price}</td>
                                </tr>`
                }
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
}

// 统计分析==>商家统计
const getData_merchantStatistics = function () {
    // 获取当前日期
    let ExportStatisticsTime = getNowFormatDate();
    // 将日期填入时间文本框
    $("#ExportStatisticsTime").val(ExportStatisticsTime);
    $.ajax({
        url: `http://${requestUrl}/shopcount/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                var selShop = ``;
                pageMax = tableData.length;
                // 翻页
                pageTurn(pageMax);
                let minData = maxIndex * currentPage - maxIndex;
                let maxData = maxIndex * currentPage;
                if (maxData > pageMax) {
                    maxData = pageMax
                }
                for (var i = minData; i < maxData; i++) {
                    // 生成商户SELECT框
                    selShop += `<option value="${tableData[i].user_id}">${tableData[i].user_name}</option>`;
                    tableDom += `<tr data-user_id=${tableData[i].user_id} data-order_id=${tableData[i].order_id}>
                                    <th scope="row">${tableData[i].user_name}</th>
                                    <td>${tableData[i].user_phone}</td>
                                    <td>${tableData[i].user_contacts}</td>
                                    <td>${tableData[i].user_address}</td>
                                    <td>${tableData[i].today_count.num}</td>
                                    <td>￥${tableData[i].today_count.price}</td>
                                    <td>${tableData[i].month_count.num}</td>
                                    <td>￥${tableData[i].month_count.price}</td>
                                    <td class="showSonTable">
                                        <button type="button" data-sta="true" data-user_id=${tableData[i].user_id} class="btn btn-info">查看详情</button>
                                    </td>
                                </tr>
                                <tr class="sontable" data-userId=${tableData[i].user_id}>
                                    <td colspan="9">
                                        <table class="table table-bordered sonInfoMerchant">
                                            <thead>
                                                <td>菜品</td>
                                                <td>单价</td>
                                                <td>日销量</td>
                                                <td>日销售额</td>
                                                <td>月销量</td>
                                                <td>月销售额</td>
                                            </thead>
                                            <tbody  data-userId=${tableData[i].user_id}></tbody>
                                        </table>
                                    </td>
                                </tr>`
                }
                $("#s_id").html(selShop);
                $("#tableShowId").html(tableDom);
            }
            
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });

}



// 统计分析==>商家统计
const getData_SonMerchantStatistics = function () {
    $.ajax({
        url: `http://${requestUrl}/shopcount/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                for (var i = 0; i < tableData.length; i++) {
                    tableDom += `<tr>
                                    <th scope="row">${tableData[i].vege_name}</th>
                                    <td>${tableData[i].user_phone}</td>
                                    <td>${tableData[i].user_contacts}</td>
                                    <td>${tableData[i].user_address}</td>
                                    <td>${tableData[i].today_count.num}</td>
                                    <td>￥${tableData[i].today_count.price}</td>
                                    <td>${tableData[i].month_count.num}</td>
                                    <td>￥${tableData[i].month_count.price}</td>
                                </tr>`
                }
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });

}
// 统计分析==>全部统计
const getData_allStatistics = function (setJson) {
    
    // 1:蔬菜   0：商铺
    if (!setJson) {
        setJson = { "type": "1", "month": "", "year": "", "id": userId }
    }
    let allStatisticsTime = getNowFormatDate();
    // 将日期填入时间文本框
    $("#allStatisticsTime").val(allStatisticsTime);
    let thead = ``;
    var lestType = setJson.type;
    if (setJson.type == "1") {
        thead = `<tr>                    
                        <th rowspan="2">蔬菜名</th>
                        <th rowspan="2">规格</th>
                        <th rowspan="2">单位</th>
                        
                        <th colspan="2">月统计</th>
                
                    </tr> 
                    <tr>
                        
                        <th > 金额 </th> 
                        <th > 数量 </th> 
                    </tr>`;
    } else {
        thead = `<tr>
                        <th rowspan="2">店铺名</th>
                        <th rowspan="2">电话号</th>
                        <th rowspan="2">联系人</th>
                        <th rowspan="2">联系地址</th>   
                    
                        <th colspan="2">月统计</th>
                    </tr>
                    <tr>       
                        
                        <th>数量</th>
                        <th>金额</th>
                </tr>`;
    }
    $("thead").html(thead);
    setJson = JSON.stringify(setJson);
    $.ajax({
        url: `http://${requestUrl}/allcount/${setJson}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                // 翻页
                pageTurn(pageMax);
                let minData = maxIndex * currentPage - maxIndex;
                let maxData = maxIndex * currentPage;
                if (maxData > pageMax) {
                    maxData = pageMax
                }
                // 1:蔬菜   0：商铺
                if (lestType == "0") {
                    for (var i = minData; i < maxData; i++) {
                        tableDom += `<tr>
                                        <td>${tableData[i].user_name}</td>
                                        <td>${tableData[i].user_phone}</td>
                                        <td>${tableData[i].user_contacts}</td>
                                        <td>${tableData[i].user_address}</td>
                                        <td>${tableData[i].all_count.price}</td>
                                        <td>￥${tableData[i].all_count.num}</td>
                                    </tr>`;
                    }
                } else {

                    for (var i = minData; i < maxData; i++) {

                        if (tableData[i].vege_unit == "0") {
                            tableData[i].vege_unit = "斤";
                        } else if (tableData[i].vege_unit == "1") {
                            tableData[i].vege_unit = "盒";
                        } else if (tableData[i].vege_unit == "2") {
                            tableData[i].vege_unit = "瓶";
                        } else if (tableData[i].vege_unit == "3") {
                            tableData[i].vege_unit = "箱";
                        } else if (tableData[i].vege_unit == "4") {
                            tableData[i].vege_unit = "个";
                        } else if (tableData[i].vege_unit == "5") {
                            tableData[i].vege_unit = "件";
                        }

                        tableDom += `<tr data-vege_id=${tableData[i].vege_id}>
                                        <td>${tableData[i].vege_name}</td>
                                        <td>${tableData[i].vege_spec}</td>
                                        <td>${tableData[i].vege_unit}</td>
                                        <td>￥${tableData[i].all_count.price}</td>
                                        <td>${tableData[i].all_count.num}</td>
                                    </tr>`;
                    }
                }
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });

}

// 系统设置==>店铺信息
const getData_shopInfo = function () {
    $.ajax({
        url: `http://${requestUrl}/system/${userId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                let pageMax = 0;
                // 翻页
                pageTurn(pageMax);
                var tableDom = ``;
                tableDom += `<tr data-id=${tableData.username} >
                                <td>${tableData.title}</td>
                                <td>${tableData.username}</td>
                                <td>${tableData.phone}</td>
                            </tr>`
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });

}
const getData_showSonTable = function(userAdminid, s_id) {

    $.ajax({
        url: `http://${requestUrl}/desc/{"user_adminid": ${userAdminid},"s_id":${s_id}}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                for (var i = 0; i < tableData.length; i++) {
                    tableDom += `<tr>
                                <td>${tableData[i].vege_name}</td>
                                <td>${tableData[i].vege_price}</td>
                                <td>${tableData[i].today_count.num}</td>
                                <td>￥${tableData[i].today_count.price}</td>
                                <td>${tableData[i].month_count.num}</td>
                                <td>${tableData[i].month_count.price}</td>
                            </tr>`
                }
            }
            $(".sonInfoMerchant [data-userId="+s_id+"]").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
}





/**
 * 
 * 各模块提交部分封装
 */
// 订单管理==>订单管理
const set_orderManage = function (setJson) {
    $.ajax({
        url: `http://${requestUrl}/order`,
        type: 'POST',
        data: setJson,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("添加成功");
                delInputVal();
                $("#formComtent").val("");
                getData_orderManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 数据管理==>商家管理
const set_merchantManage = function (setJson) {
    $.ajax({
        url: `http://${requestUrl}/user`,
        type: 'POST',
        data: setJson,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("添加成功");
                delInputVal();
                getData_merchantManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 数据管理==>菜品管理
const set_dishesManage = function (setJson) {
    $.ajax({
        url: `http://${requestUrl}/vege`,
        type: 'POST',
        data: setJson,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("添加成功");
                delInputVal();
                getData_dishesManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 统计分析==>菜品统计
const set_dishesStatistics = function (setJson) {
    $.ajax({
        url: `http://${requestUrl}/order`,
        type: 'POST',
        data: setJson,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("添加成功");
                delInputVal();
                getData_dishesStatistics();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 统计分析==>商家统计
const set_merchantStatistics = function (setJson) {
    $.ajax({
        url: `http://${requestUrl}/order`,
        type: 'POST',
        data: setJson,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("添加成功");
                delInputVal();
                getData_merchantStatistics();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 统计分析==>全部统计
const set_allStatistics = function (setJson) {
    $.ajax({
        url: `http://${requestUrl}/order`,
        type: 'POST',
        data: setJson,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("添加成功");
                delInputVal();
                getData_allStatistics();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 系统设置==>店铺信息
const set_shopInfo = function (setJson) {
    $.ajax({
        url: `http://${requestUrl}/system`,
        type: 'POST',
        data: setJson,
        success: function (data) {
            data = JSON.parse(data)
            if (data.code == 200) {
                alert("添加成功");
                delInputVal();
                getData_shopInfo();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 系统设置==>清理缓存
const set_cleanCache = function (setJson) {
    $.ajax({
        url: `http://${requestUrl}/order`,
        type: 'POST',
        data: setJson,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("添加成功");
                getData_cleanCache();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}
// 订单详情
const set_orderInfo = function () {
    $("#tableShowId").html("");
    let s_id = $("#s_id").val();
    $.ajax({
        url: `http://${requestUrl}/desc/{"user_adminid": ${userId},"s_id":${s_id}}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                let tableData = data.res;
                var tableDom = ``;
                pageMax = tableData.length;
                // 翻页
                pageTurn(pageMax);
                let minData = maxIndex * currentPage - maxIndex;
                let maxData = maxIndex * currentPage;
                if (maxData > pageMax) {
                    maxData = pageMax
                }
                for (var i = minData; i < maxData; i++) {
                    if (tableData[i].vege_unit == "0") {
                        tableData[i].vege_unit = "斤";
                    } else if (tableData[i].vege_unit == "1") {
                        tableData[i].vege_unit = "盒";
                    } else if (tableData[i].vege_unit == "2") {
                        tableData[i].vege_unit = "瓶";
                    } else if (tableData[i].vege_unit == "3") {
                        tableData[i].vege_unit = "箱";
                    } else if (tableData[i].vege_unit == "4") {
                        tableData[i].vege_unit = "个";
                    } else if (tableData[i].vege_unit == "5") {
                        tableData[i].vege_unit = "件";
                    }
                    tableDom += `<tr>
                                    <th scope="row">${tableData[i].vege_id}</th>
                                    <td>${tableData[i].vege_name}</td>
                                    <td>${tableData[i].vege_spec}</td>
                                    <td>${tableData[i].vege_unit}</td>
                                    <td>￥${tableData[i].vege_price}</td>
                                    <td>￥${tableData[i].today_count.price}</td>
                                </tr>`
                }
            }
            $("#tableShowId").html(tableDom);
        },
        error: function (data) {
            console.log("http://cai.beaconway.cn/");
        }
    });
}



/**
 * 删除请求封装
 */

// 订单管理==>订单管理
const del_orderManage = function (delJson) {
    $.ajax({
        url: `http://${requestUrl}/order/${delJson}`,
        type: 'DELETE',
        // data: delJson,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("删除成功");
                getData_orderManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}
// 数据管理==>商家管理
const del_merchantManage = function (delJson) {
    $.ajax({
        url: `http://${requestUrl}/user/${delJson}`,
        type: 'DELETE',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("删除成功");
                getData_merchantManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 数据管理==>菜品管理
const del_dishesManage = function (delJson) {
    $.ajax({
        url: `http://${requestUrl}/vege/${delJson}`,
        type: 'DELETE',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("删除成功");
                getData_dishesManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}


/**
 * 
 * 各模块修改部分封装
 */
// 订单管理==>订单管理
const mod_orderManage = function (setJson) {
    let modifyId = $("#formComtent .setModify").attr("data-id");
    setJson["order_id"] = modifyId;
    setJson = JSON.stringify(setJson);
    $.ajax({
        url: `http://${requestUrl}/order/${setJson}`,
        type: 'PUT',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("修改成功");
                delInputVal();
                $("#formComtent").val("");
                getData_orderManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 数据管理==>商家管理
const mod_merchantManage = function (setJson) {
    let modifyId = $("#formComtent .setModify").attr("data-id");
    setJson["user_id"] = modifyId;
    setJson = JSON.stringify(setJson);
    $.ajax({
        url: `http://${requestUrl}/user/${setJson}`,
        type: 'PUT',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("修改成功");
                delInputVal();
                getData_merchantManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

// 数据管理==>菜品管理
const mod_dishesManage = function (setJson) {
    let modifyId = $("#formComtent .setModify").attr("data-id");
    setJson["vege_id"] = modifyId;
    setJson = JSON.stringify(setJson);
    $.ajax({
        url: `http://${requestUrl}/vege/${setJson}`,
        type: 'PUT',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                alert("修改成功");
                delInputVal();
                getData_dishesManage();
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}


/**
 * 订单模块总价计算
 */
const setPrice = function () {
    let num = $("#orderManage_num").val();
    let price = $("#orderManage_price").val();
    if (price != "" && num != "") {
        price = parseFloat(price);
        num = parseFloat(num);
        let allPrice = price * num;
        allPrice = allPrice.toFixed(2)
        $("#sum_price").val(allPrice);
    }
}

/**
 * 订单模块-根据蔬菜种类自动在订单录入部分加入单价.s_id
 */
const setUnitPrice = function() {
    let allPriceData = $("#v_id option:selected").attr("data-price");
    $("#orderManage_price").val(allPriceData);
    setPrice();
}


// 导出统计列表
const exportList = function(setData) {

    $.ajax({
        url: `http://${requestUrl}/ExcelToday/${setData}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
               
            } else {
                alert(`${data.msg}`);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}
// 订单详情请求
// const orderInfo = function () {
//     $.ajax({
//         url: 'http://cai.beaconway.cn/desc/{"admin_id":"2","order_id":"2"}',
//         type: 'GET',
//         dataType: 'json',
//         success: function (data) {
//             if (data.code == 200) {
//                 let tableData = data.res;
//                 var tableDom = ``;
//                 pageMax = tableData.length;
//                 // 翻页
//                 pageTurn();
//                 for (var i = 0; i < tableData.length; i++) {
//                     tableDom += `<tr>
//                                     <th scope="row">${tableData[i].sum_price}</th>
//                                     <td>${tableData[i].vege_id}</td>
//                                     <td>${tableData[i].vege_name}</td>
//                                     <td>${tableData[i].vege_price}</td>
//                                     <td>${tableData[i].vege_spec}</td>
//                                     <td>${tableData[i].vege_unit}</td>
//                                 </tr>`
//                 }
//             }
//             $("#tableShowId").html(tableDom);
//         },
//         error: function (data) {
//             console.log("http://cai.beaconway.cn/");
//         }
//     });
// }