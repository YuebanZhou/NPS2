var yearq = localStorage.getItem("yearq")
// 网络
var wlchart = [];
var wlyear = [];
var wlunps = [];
var wlmnps = [];
var wltnps = [];
var wltable = [];
// 业务
var ywchart = [];
var ywyear = [];
var ywunps = [];
var ywmnps = [];
var ywtnps = [];
var ywtable = [];
// 服务
var fwchart = [];
var fwyear = [];
var fwunps = [];
var fwmnps = [];
var fwtnps = [];
var fwtable = [];
$(".block1").click(function () {
  //网络
  $(".btn1").show();
  $(".btn2").hide();
  $(".btn3").hide();
  $(".con1chart").show();
  $(".con2chart").hide();
  $(".con3chart").hide();
  $(".con1table").show();
  $(".con2table").hide();
  $(".con3table").hide();

});
$(".block2").click(function () {
  //业务
  $(".btn1").hide();
  $(".btn2").show();
  $(".btn3").hide();
  $(".con1chart").hide();
  $(".con2chart").show();
  $(".con3chart").hide();
  $(".con1table").hide();
  $(".con2table").show();
  $(".con3table").hide();

});
$(".block3").click(function () {
  //服务
  $(".btn1").hide();
  $(".btn2").hide();
  $(".btn3").show();
  $(".con1chart").hide();
  $(".con2chart").hide();
  $(".con3chart").show();
  $(".con1table").hide();
  $(".con2table").hide();
  $(".con3table").show();

})
var type = "移网"
var yearq = "2018Q1"
if (localStorage.getItem("type")) {
  type = localStorage.getItem("type");
}
if (localStorage.getItem("yearq")) {
  yearq = localStorage.getItem("yearq");
}
$(".toptitle .type").text(type)
var arr = yearq.split("Q")
if (arr[1] == 1) {
  arr[1] = "一"
}
if (arr[1] == 2) {
  arr[1] = "二"
}
if (arr[1] == 3) {
  arr[1] = "三"
}
if (arr[1] == 4) {
  arr[1] = "四"
}
var strage = arr[0] + "第" + arr[1] + "季度"
$(".age").html(strage)
$(".enter1").click(function () {
  window.location.href = "/permissions/show/showReportPage";
});
var lineCacheData = {
  "LT": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(246, 179, 127"
  },
  "YD": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(42, 215, 237"
  },
  "DX": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(34, 172, 56"
  },
}
//网络
function drawchart1(wlyear, wlunps, wlmnps, wltnps) {
  var chart1 = echarts.init(document.getElementById("chart1"));
  var option1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#2897E4'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['中国联通', '中国移动', '中国电信'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#fff'
      },
      x: 'right',
      y: 'center'
    },
    grid: {
      left: '3%',
      right: '20%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      // data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
      data: wlyear,
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      splitLine: {
        show: false
      }
    }],
    series: [
      {
        name: '中国联通',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.LT.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.LT.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
        },
        itemStyle: {
          normal: {
            color: lineCacheData.LT.activeColor + ')'
          },
        },
        // data: [-1.2, -0.5, 0.6, 5, 5],
        data: wlunps,
      }, {
        name: '中国移动',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.YD.nomalColor + ', 0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.YD.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.YD.activeColor + ')'
          }
        },
        // data: [28.4, 23.4, 24.2, 26.9, 23.8],
        data: wlmnps,
      }, {
        name: '中国电信',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.DX.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.DX.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.DX.activeColor + ')'
          }
        },
        // data: [14.1, 13.9, 14.4, 17.9, 16.5],
        data: wltnps,
      },
    ]

  };
  chart1.setOption(option1);
  redraw(chart1, option1, t1);

}

//业务
function drawchart3(ywyear, ywunps, ywmnps, ywtnps) {
  var chart3 = echarts.init(document.getElementById("chart3"));
  var option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#2897E4'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['中国联通', '中国移动', '中国电信'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#fff'
      },
      x: 'right',
      y: 'center'

    },
    grid: {
      left: '3%',
      right: '20%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      // data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
      data: ywyear
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      splitLine: {
        show: false
      }
    }],
    series: [
      {
        name: '中国联通',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.LT.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.LT.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
        },
        itemStyle: {
          normal: {
            color: lineCacheData.LT.activeColor + ')'
          },
        },
        // data: [4.6, 3.4, 9.8, 12.3, 19.6],
        data: ywunps
      }, {
        name: '中国移动',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.YD.nomalColor + ', 0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.YD.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.YD.activeColor + ')'
          }
        },
        // data: [4.6, -9.2, -4.7, -3, -4.9],
        data: ywmnps
      }, {
        name: '中国电信',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.DX.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.DX.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.DX.activeColor + ')'
          }
        },
        // data: [9.5, 6.6, 9.8, 7.9, 25.2],
        data: ywtnps
      },
    ]
  };
  chart3.setOption(option3);
  redraw(chart3, option3, t3);
}

//服务
function drawchart5(fwyear, fwunps, fwmnps, fwtnps) {
  var chart5 = echarts.init(document.getElementById("chart5"));
  var option5 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#2897E4'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['中国联通', '中国移动', '中国电信'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#fff'
      },
      x: 'right',
      y: 'center'

    },
    grid: {
      left: '3%',
      right: '20%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      // data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
      data: fwyear
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      splitLine: {
        show: false
      }
    }],
    series: [
      {
        name: '中国联通',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.LT.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.LT.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
        },
        itemStyle: {
          normal: {
            color: lineCacheData.LT.activeColor + ')'
          },
        },
        // data: [23.6, 21.2, 26.1, 27.1, 25.1],
        data: fwunps
      }, {
        name: '中国移动',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.YD.nomalColor + ', 0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.YD.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.YD.activeColor + ')'
          }
        },
        // data: [54.6, 51, 54.5, 58, 50.7],
        data: fwmnps
      }, {
        name: '中国电信',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.DX.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.DX.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.DX.activeColor + ')'
          }
        },
        // data: [30, 28, 26.3, 32.1, 27.5],
        data: fwtnps
      },
    ]
  };
  chart5.setOption(option5);
  redraw(chart5, option5, t5);
}

function redraw(chart, option, t) {
  if (option && typeof option === "object") {
    chart.setOption(option, true);
    chart.on("click", function (e) {
      var tName = e.seriesName;

      console.log(e);
      console.log(e.seriesId);
      console.log(e.seriesName);
      //console.log(this);

      for (var i = 0; i < option.series.length; i++) {
        console.log("#########");
        console.log(option.series[i].name);
        if (option.series[i].name == tName) {
          option.series[i].areaStyle.normal.color =
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData[t[tName]].activeColor + ', 1)'
            }, {
              offset: 0.8,
              color: lineCacheData[t[tName]].activeColor + ',0.5 )'
            }], false)
        } else {
          option.series[i].areaStyle.normal.color =
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData[t[option.series[i].name]].nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData[t[option.series[i].name]].nomalColor + ',0)'
            }], false)
        }
      }

      chart.clear();
      chart.setOption(option, true);

      e.color = "#005aa0";
    });
  }


}
t1 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t3 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t5 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
if (type == "移网") {
  $.ajax({
    type: "get",
    dataType: "json",
    url: "/permissions/show/showType/YW/"+yearq,
    data: {
      yearq: yearq
    },
    success: function (result) {
      console.log("请求成功");
      console.log(result)
      // 网络
      for (var i = 0; i < result.typeNetworkYW.length; i++) {
        wlchart.push({
          year: result.typeNetworkYW[i].YEAR_Q,
          unps: parseFloat(result.typeNetworkYW[i].U_NPS).toFixed(2),
          mnps: parseFloat(result.typeNetworkYW[i].M_NPS).toFixed(2),
          tnps: parseFloat(result.typeNetworkYW[i].T_NPS).toFixed(2)
        })
      }
      for (var i = 0; i < wlchart.length; i++) {
          wlyear.push(wlchart[i].year);
          wlunps.push(wlchart[i].unps);
          wlmnps.push(wlchart[i].mnps);
          wltnps.push(wlchart[i].tnps);
      }
      drawchart1(wlyear, wlunps, wlmnps, wltnps)
      for (var i = 0; i < result.typeNetworkYWNPS.length; i++) {
        wltable.push({
          level: result.typeNetworkYWNPS[i].L_ID,//暂时没有用
          name: result.typeNetworkYWNPS[i].L_NAME,
          unps: parseFloat(result.typeNetworkYWNPS[i].U_NPS).toFixed(2),
          same: parseFloat(result.typeNetworkYWNPS[i].TB).toFixed(2),
          circle: parseFloat(result.typeNetworkYWNPS[i].HB).toFixed(2),
          lift: parseFloat(result.typeNetworkYWNPS[i].U_REFERENCE_RATE).toFixed(2),
          mnps: parseFloat(result.typeNetworkYWNPS[i].M_NPS).toFixed(2),
          mm: parseFloat(result.typeNetworkYWNPS[i].COMPARE_M).toFixed(2),
          tnps: parseFloat(result.typeNetworkYWNPS[i].T_NPS).toFixed(2),
          mt: parseFloat(result.typeNetworkYWNPS[i].COMPARE_T).toFixed(2),
        })
      }
      wltable.sort(sortBy('lift', false));
      var wlstr = '';
      for (var i = 0; i < wltable.length; i++) {
        // var temp=[wltable[i].name.split("标签")]
        // wltable[i].name=temp;
        wlstr += `
        <tr>
          <td width="10%" align="canter">`+ (i + 1) + `</td>
          <td width="10%" align="canter" class="name">`+ wltable[i].name + `</td>
          <td width="10%" align="canter">`+ wltable[i].unps + `</td>
          <td width="10%" align="canter">`+ wltable[i].same + `</td>
          <td width="10%" align="canter">`+ wltable[i].circle + `</td>
          <td width="10%" align="canter" class="br">`+ wltable[i].lift + `</td>
          <td width="10%" align="canter">`+ wltable[i].mnps + `</td>
          <td width="10%" align="canter">`+ wltable[i].mm + `</td>
          <td width="10%" align="canter">`+ wltable[i].tnps + `</td>
          <td width="10%" align="canter">`+ wltable[i].mt + `</td>
        </tr>
        `
      }

      $(".con1table #tplWrapper_TemplateZ").html(wlstr)

      // 业务
      for (var i = 0; i < result.typeBusinessYW.length; i++) {
        ywchart.push({
          year: result.typeBusinessYW[i].YEAR_Q,
          unps: parseFloat(result.typeBusinessYW[i].U_NPS).toFixed(2),
          mnps: parseFloat(result.typeBusinessYW[i].M_NPS).toFixed(2),
          tnps: parseFloat(result.typeBusinessYW[i].T_NPS).toFixed(2)
        })
      }
      for (var i = 0; i < ywchart.length; i++) {
          ywyear.push(ywchart[i].year);
          ywunps.push(ywchart[i].unps);
          ywmnps.push(ywchart[i].mnps);
          ywtnps.push(ywchart[i].tnps);
      }
      drawchart3(ywyear, ywunps, ywmnps, ywtnps)
      for (var i = 0; i < result.typeBusinessYWNPS.length; i++) {
        ywtable.push({
          level: result.typeBusinessYWNPS[i].L_ID,//暂时没有用
          name: result.typeBusinessYWNPS[i].L_NAME,
          unps: parseFloat(result.typeBusinessYWNPS[i].U_NPS).toFixed(2),
          same: parseFloat(result.typeBusinessYWNPS[i].TB).toFixed(2),
          circle: parseFloat(result.typeBusinessYWNPS[i].HB).toFixed(2),
          lift: parseFloat(result.typeBusinessYWNPS[i].U_REFERENCE_RATE).toFixed(2),
          mnps: parseFloat(result.typeBusinessYWNPS[i].M_NPS).toFixed(2),
          mm: parseFloat(result.typeBusinessYWNPS[i].COMPARE_M).toFixed(2),
          tnps: parseFloat(result.typeBusinessYWNPS[i].T_NPS).toFixed(2),
          mt: parseFloat(result.typeBusinessYWNPS[i].COMPARE_T).toFixed(2),
        })
      }
      ywtable.sort(sortBy('lift', false));
      var ywstr = '';
      for (var i = 0; i < ywtable.length; i++) {
        ywstr += `
        <tr>
          <td width="10%" align="canter">`+ (i + 1) + `</td>
          <td width="10%" align="canter" class="name">`+ ywtable[i].name + `</td>
          <td width="10%" align="canter">`+ ywtable[i].unps + `</td>
          <td width="10%" align="canter">`+ ywtable[i].same + `</td>
          <td width="10%" align="canter">`+ ywtable[i].circle + `</td>
          <td width="10%" align="canter" class="br">`+ ywtable[i].lift + `</td>
          <td width="10%" align="canter">`+ ywtable[i].mnps + `</td>
          <td width="10%" align="canter">`+ ywtable[i].mm + `</td>
          <td width="10%" align="canter">`+ ywtable[i].tnps + `</td>
          <td width="10%" align="canter">`+ ywtable[i].mt + `</td>
        </tr>
    
        `
      }
      $(".con2table #tplWrapper_TemplateZ").html(ywstr)

      // 服务
      for (var i = 0; i < result.typeServerYW.length; i++) {
        fwchart.push({
          year: result.typeServerYW[i].YEAR_Q,
          unps: parseFloat(result.typeServerYW[i].U_NPS).toFixed(2),
          mnps: parseFloat(result.typeServerYW[i].M_NPS).toFixed(2),
          tnps: parseFloat(result.typeServerYW[i].T_NPS).toFixed(2)
        })
      }

      for (var i = 0; i < fwchart.length; i++) {
          fwyear.push(fwchart[i].year);
          fwunps.push(fwchart[i].unps);
          fwmnps.push(fwchart[i].mnps);
          fwtnps.push(fwchart[i].tnps);
      }
      drawchart5(fwyear, fwunps, fwmnps, fwtnps)
      for (var i = 0; i < result.typeServerYWNPS.length; i++) {
        fwtable.push({
          level: result.typeServerYWNPS[i].L_ID,//暂时没有用
          name: result.typeServerYWNPS[i].L_NAME,
          unps: parseFloat(result.typeServerYWNPS[i].U_NPS).toFixed(2),
          same: parseFloat(result.typeServerYWNPS[i].TB).toFixed(2),
          circle: parseFloat(result.typeServerYWNPS[i].HB).toFixed(2),
          lift: parseFloat(result.typeServerYWNPS[i].U_REFERENCE_RATE).toFixed(2),
          mnps: parseFloat(result.typeServerYWNPS[i].M_NPS).toFixed(2),
          mm: parseFloat(result.typeServerYWNPS[i].COMPARE_M).toFixed(2),
          tnps: parseFloat(result.typeServerYWNPS[i].T_NPS).toFixed(2),
          mt: parseFloat(result.typeServerYWNPS[i].COMPARE_T).toFixed(2),
        })
      }
      fwtable.sort(sortBy('lift', false));
      var fwstr = '';
      for (var i = 0; i < fwtable.length; i++) {
        fwstr += `
        <tr>
          <td width="10%" align="canter">`+ (i + 1) + `</td>
          <td width="10%" align="canter" class="name">`+ fwtable[i].name + `</td>
          <td width="10%" align="canter">`+ fwtable[i].unps + `</td>
          <td width="10%" align="canter">`+ fwtable[i].same + `</td>
          <td width="10%" align="canter">`+ fwtable[i].circle + `</td>
          
          <td width="10%" align="canter" class="br">`+ fwtable[i].lift + `</td>
          <td width="10%" align="canter">`+ fwtable[i].mnps + `</td>
          <td width="10%" align="canter">`+ fwtable[i].mm + `</td>
          <td width="10%" align="canter">`+ fwtable[i].tnps + `</td>
          <td width="10%" align="canter">`+ fwtable[i].mt + `</td>
        </tr>
    
        `
      }
      $(".con3table #tplWrapper_TemplateZ").html(fwstr)


    },
    error: function () {
      console.log("请求失败");
    }
  })
}
if (type == "宽带") {
  $.ajax({
    type: "get",
    dataType: "json",
    url: "/permissions/show/showType/KD/"+yearq,
    data: {
      yearq: yearq
    },
    success: function (result) {
      console.log("请求成功");
      // 网络
      for (var i = 0; i < result.typeNetworkKD.length; i++) {
        wlchart.push({
          year: result.typeNetworkKD[i].YEAR_Q,
          unps: parseFloat(result.typeNetworkKD[i].U_K_NPS).toFixed(2),
          mnps: parseFloat(result.typeNetworkKD[i].M_K_NPS).toFixed(2),
          tnps: parseFloat(result.typeNetworkKD[i].T_K_NPS).toFixed(2)
        })
      }
      for (var i = 0; i < wlchart.length; i++) {
          wlyear.push(wlchart[i].year);
          wlunps.push(wlchart[i].unps);
          wlmnps.push(wlchart[i].mnps);
          wltnps.push(wlchart[i].tnps);
      }
      drawchart1(wlyear, wlunps, wlmnps, wltnps)
      for (var i = 0; i < result.typeNetworkKDNPS.length; i++) {
        wltable.push({
          level: result.typeNetworkKDNPS[i].L_ID,//暂时没有用
          name: result.typeNetworkKDNPS[i].L_NAME,
          unps: parseFloat(result.typeNetworkKDNPS[i].U_K_NPS).toFixed(2),
          same: parseFloat(result.typeNetworkKDNPS[i].TB).toFixed(2),
          circle: parseFloat(result.typeNetworkKDNPS[i].HB).toFixed(2),
          lift: parseFloat(result.typeNetworkKDNPS[i].U_K_REFERENCE_RATE).toFixed(2),
          mnps: parseFloat(result.typeNetworkKDNPS[i].M_K_NPS).toFixed(2),
          mm: parseFloat(result.typeNetworkKDNPS[i].COMPARE_M).toFixed(2),
          tnps: parseFloat(result.typeNetworkKDNPS[i].T_K_NPS).toFixed(2),
          mt: parseFloat(result.typeNetworkKDNPS[i].COMPARE_T).toFixed(2),
        })
      }
      wltable.sort(sortBy('lift', false));
      var wlstr = '';
      for (var i = 0; i < wltable.length; i++) {
        wlstr += `
        <tr>
          <td width="10%" align="canter">`+ (i + 1) + `</td>
          <td width="10%" align="canter" class="name">`+ wltable[i].name + `</td>
          <td width="10%" align="canter">`+ wltable[i].unps + `</td>
          <td width="10%" align="canter">`+ wltable[i].same + `</td>
          <td width="10%" align="canter">`+ wltable[i].circle + `</td>
          <td width="10%" align="canter" class="br">`+ wltable[i].lift + `</td>
          <td width="10%" align="canter">`+ wltable[i].mnps + `</td>
          <td width="10%" align="canter">`+ wltable[i].mm + `</td>
          <td width="10%" align="canter">`+ wltable[i].tnps + `</td>
          <td width="10%" align="canter">`+ wltable[i].mt + `</td>
        </tr>
    
        `
      }
      $(".con1table #tplWrapper_TemplateZ").html(wlstr)

      // 业务

      for (var i = 0; i < result.typeBusinessKD.length; i++) {
        ywchart.push({
          year: result.typeBusinessKD[i].YEAR_Q,
          unps: parseFloat(result.typeBusinessKD[i].U_K_NPS).toFixed(2),
          mnps: parseFloat(result.typeBusinessKD[i].M_K_NPS).toFixed(2),
          tnps: parseFloat(result.typeBusinessKD[i].T_K_NPS).toFixed(2)
        })
      }
      for (var i = 0; i < ywchart.length; i++) {
          ywyear.push(ywchart[i].year);
          ywunps.push(ywchart[i].unps);
          ywmnps.push(ywchart[i].mnps);
          ywtnps.push(ywchart[i].tnps);

      }

      drawchart3(ywyear, ywunps, ywmnps, ywtnps)
      for (var i = 0; i < result.typeBusinessKDNPS.length; i++) {
        ywtable.push({
          level: result.typeBusinessKDNPS[i].L_ID,//暂时没有用
          name: result.typeBusinessKDNPS[i].L_NAME,
          unps: parseFloat(result.typeBusinessKDNPS[i].U_K_NPS).toFixed(2),
          same: parseFloat(result.typeBusinessKDNPS[i].TB).toFixed(2),
          circle: parseFloat(result.typeBusinessKDNPS[i].HB).toFixed(2),
          lift: parseFloat(result.typeBusinessKDNPS[i].U_K_REFERENCE_RATE).toFixed(2),
          mnps: parseFloat(result.typeBusinessKDNPS[i].M_K_NPS).toFixed(2),
          mm: parseFloat(result.typeBusinessKDNPS[i].COMPARE_M).toFixed(2),
          tnps: parseFloat(result.typeBusinessKDNPS[i].T_K_NPS).toFixed(2),
          mt: parseFloat(result.typeBusinessKDNPS[i].COMPARE_T).toFixed(2),
        })
      }
      ywtable.sort(sortBy('lift', false));
      var ywstr = '';
      for (var i = 0; i < ywtable.length; i++) {
        ywstr += `
        <tr>
          <td width="10%" align="canter">`+ (i + 1) + `</td>
          <td width="10%" align="canter" class="name">`+ ywtable[i].name + `</td>
          <td width="10%" align="canter">`+ ywtable[i].unps + `</td>
          <td width="10%" align="canter">`+ ywtable[i].same + `</td>
          <td width="10%" align="canter">`+ ywtable[i].circle + `</td>
          <td width="10%" align="canter" class="br">`+ ywtable[i].lift + `</td>
          <td width="10%" align="canter">`+ ywtable[i].mnps + `</td>
          <td width="10%" align="canter">`+ ywtable[i].mm + `</td>
          <td width="10%" align="canter">`+ ywtable[i].tnps + `</td>
          <td width="10%" align="canter">`+ ywtable[i].mt + `</td>
        </tr>
    
        `
      }
      $(".con2table #tplWrapper_TemplateZ").html(ywstr)

      // 服务
      for (var i = 0; i < result.typeServerKD.length; i++) {
        fwchart.push({
          year: result.typeServerKD[i].YEAR_Q,
          unps: parseFloat(result.typeServerKD[i].U_K_NPS).toFixed(2),
          mnps: parseFloat(result.typeServerKD[i].M_K_NPS).toFixed(2),
          tnps: parseFloat(result.typeServerKD[i].T_K_NPS).toFixed(2)
        })
      }
      for (var i = 0; i < fwchart.length; i++) {
          fwyear.push(fwchart[i].year);
          fwunps.push(fwchart[i].unps);
          fwmnps.push(fwchart[i].mnps);
          fwtnps.push(fwchart[i].tnps);
      }
      drawchart5(fwyear, fwunps, fwmnps, fwtnps)
      for (var i = 0; i < result.typeServerKDNPS.length; i++) {
        fwtable.push({
          level: result.typeServerKDNPS[i].L_ID,//暂时没有用
          name: result.typeServerKDNPS[i].L_NAME,
          unps: parseFloat(result.typeServerKDNPS[i].U_K_NPS).toFixed(2),
          same: parseFloat(result.typeServerKDNPS[i].TB).toFixed(2),
          circle: parseFloat(result.typeServerKDNPS[i].HB).toFixed(2),
          lift: parseFloat(result.typeServerKDNPS[i].U_K_REFERENCE_RATE).toFixed(2),
          mnps: parseFloat(result.typeServerKDNPS[i].M_K_NPS).toFixed(2),
          mm: parseFloat(result.typeServerKDNPS[i].COMPARE_M).toFixed(2),
          tnps: parseFloat(result.typeServerKDNPS[i].T_K_NPS).toFixed(2),
          mt: parseFloat(result.typeServerKDNPS[i].COMPARE_T).toFixed(2),
        })
      }
      fwtable.sort(sortBy('lift', false));
      var fwstr = '';
      for (var i = 0; i < fwtable.length; i++) {
        fwstr += `
        <tr>
          <td width="10%" align="canter">`+ (i + 1) + `</td>
          <td width="10%" align="canter" class="name">`+ fwtable[i].name + `</td>
          <td width="10%" align="canter">`+ fwtable[i].unps + `</td>
          <td width="10%" align="canter">`+ fwtable[i].same + `</td>
          <td width="10%" align="canter">`+ fwtable[i].circle + `</td>
          <td width="10%" align="canter" class="br">`+ fwtable[i].lift + `</td>
          <td width="10%" align="canter">`+ fwtable[i].mnps + `</td>
          <td width="10%" align="canter">`+ fwtable[i].mm + `</td>
          <td width="10%" align="canter">`+ fwtable[i].tnps + `</td>
          <td width="10%" align="canter">`+ fwtable[i].mt + `</td>
        </tr>
    
        `
      }
      $(".con3table #tplWrapper_TemplateZ").html(fwstr)


    },
    error: function () {
      console.log("请求失败");
    }
  })
}
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
// $(".block").click(function () {
//   $("#tplWrapper_TemplateZ").scrollTop(10);//控制滚动条下移10px
//   if ($("#tplWrapper_TemplateZ").scrollTop() > 0) {
//     alert("有滚动条");
//   } else {
//     alert("没有滚动条");
//   }
//   $("#tplWrapper_TemplateZ").scrollTop(0);//滚动条返回顶部
// })
