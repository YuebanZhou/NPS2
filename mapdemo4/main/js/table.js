var str = ''
var prorank = []
$.ajax({
  type: "post",
  dataType: "json",
  url: "json/index.json",
  // data: {
  //   yearq: yearq
  // },
  success: function (result) {
    console.log("请求成功");
    for (var i = 0; i < result.allRank.length; i++) {
      prorank.push({
        name: result.allRank[i].PROVINCE_NAME,
        allrank: result.allRank[i].allrank,
        arearank: '',
        finval: '',
        ywval: '',
        kdval: ''
      })
    }
    for (var i = 0; i < prorank.length; i++) {
      for (var j = 0; j < result.proS.length; j++) {
        if (prorank[i].name == result.proS[j].PROVINCE_NAME) {
          prorank[i].arearank = result.proS[j].rank
          // 注意
          prorank[i].finval = parseFloat(result.proS[j].FINISH_PLAN* 100).toFixed(2) 
          prorank[i].ywval = parseFloat(result.proS[j].YW_YEAR_LIFT).toFixed(2)
          prorank[i].kdval = parseFloat(result.proS[j].KD_YEAR_LIFT).toFixed(2)
        }
      }
      for (var k = 0; k < result.proN.length; k++) {
        if (prorank[i].name == result.proN[k].PROVINCE_NAME) {
          prorank[i].arearank = result.proN[k].rank
          prorank[i].finval = parseFloat(result.proN[k].FINISH_PLAN* 100).toFixed(2) 
          prorank[i].ywval = parseFloat(result.proN[k].YW_YEAR_LIFT).toFixed(2)
          prorank[i].kdval = parseFloat(result.proN[k].KD_YEAR_LIFT).toFixed(2)
        }
      }
      if (prorank[i].finval.toString().length > 5) {
        var temp = prorank[i].finval.toString().split('.')
        prorank[i].finval = temp[0]
      }
    }
    prorank.sort(sortBy('allrank', true));
    console.log(prorank.length);
    for (var i = 0; i < prorank.length; i++) {
      if(prorank[i].finval>100){
        prorank[i].finval=100
      }
      if(prorank[i].finval<0){
        prorank[i].finval=0
      }
      str += `<tr>
        <td width="43" align="center">`+ prorank[i].allrank + `</td>
        <td width="76" align="center">`+ prorank[i].name + `</td>
        <td width="84" align="center">`+ prorank[i].finval + `%</td>
        <td width="80" align="center">`+ prorank[i].ywval + `</td>
        <td width="80" align="center">`+ prorank[i].kdval + `</td>
        <td width="58" align="center">`+ prorank[i].arearank + `</td>
      </tr>`
    }
    // console.log(str);
    $("#tplWrapper_TemplateZ").html(str);
    var tr = $("#tplWrapper_TemplateZ").find("tr")
    var imgstr1 = "<img src='img/jbb1.png' style='height:23px;width:23px;'>"
    var imgstr2 = "<img src='img/jbb2.png' style='height:23px;width:23px;'>"
    var imgstr3 = "<img src='img/jbb3.png' style='height:23px;width:23px;'>"
    // console.log(tr)
    for (var i = 0; i < tr.length; i++) {
      var td = tr.eq(i).find("td");
      var num = td.eq(0).text();
      // console.log(num)
      if (num == "1") {
        // console.log(i)
        tr.eq(i).find("td").eq(0).html(imgstr1)
        // tr.eq(i).find("td").eq(1).css("color", "#bf4959")
        tr.eq(i).css("color", "#E6BE2D")
      }
      if (num == "2") {
        // console.log(i)
        tr.eq(i).find("td").eq(0).html(imgstr2)
        // tr.eq(i).find("td").eq(1).css("color", "#b9542a")
        tr.eq(i).css("color", "#BD8C3C")

      }
      if (num == "3") {
        // console.log(i)
        tr.eq(i).find("td").eq(0).html(imgstr3)
        // tr.eq(i).find("td").eq(1).css("color", "#137b8a")
        tr.eq(i).css("color", "#E78E9A")

      }
    }

  },
  error: function () {
    console.log("请求失败");
  }
})
//todo  经典写法：
var sortBy = function (attr, rev) {
  //第二个参数没有传递 默认升序排列
  if (rev == undefined) {
    rev = 1;
  } else {
    rev = (rev) ? 1 : -1;
  }
  return function (a, b) {
    a = a[attr];
    b = b[attr];
    if (a < b) {
      return rev * -1;
    }
    if (a > b) {
      return rev * 1;
    }
    return 0;
  }
}
// todo 使用

