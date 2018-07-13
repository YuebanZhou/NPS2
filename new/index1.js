// var yearq = localStorage.getItem("yearq")

var yearq=localStorage.getItem("yearq")
var SYS_ID=localStorage.getItem("SYS_ID");
var SYS_VALUE=localStorage.getItem("SYS_VALUE");
var DEPT_ID=localStorage.getItem("DEPT_ID");
var DEPT_NAME=localStorage.getItem("DEPT_NAME");
var provinceName=localStorage.getItem("provinceName");

var yearq = "2018Q1"
var chart1 = [];
var chart2 = [];
var chart3 = [];
var chart4 = [];
// chart1
var uv1 = [];
var mv1 = [];
var tv1 = [];
var uv2 = [];
var mv2 = [];
var tv2 = [];

// chart2
// chart3
var q4 = [];
var q1 = [];
var yearqq=[];
var girl = [];
var boy = [];

// chart4
var s1 = []
var s2 = []
var s3 = []
var s4 = []
var s5 = []
var s6 = []
var skd1 = []
var skd2 = []
var skd3 = []
var skd4 = []

// table

// fourbtn

// detail
// rank
var area = ''
var rankarea = ''
var rankall = ''

// 模拟获取省份名称
// var proname = "山东"
// var proname = "海南"
if (localStorage.getItem("provinceName")) {
  var proname = provinceName
}


$(".selenter").click(function () {
  var type = $("#type").val();
  var yearq = $("#yearq").val();
  if (type == "yw") {
    getMessageyw(yearq)
  } else if (type == "kd") {
    getMessagekd(yearq)
  } else {
    getMessageyw(yearq)
  }
})
function drawchart2(age, agedata) {
  var chart2 = echarts.init(document.getElementById("chart2"));
  var option2 = {
    color: ["#DBB924", "#F48057", "#F1B599", "#95ABB9", "#85BCBF", "#DED262", "#D1CAB8", "#A686D1", "#A5525C"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      bottom: 20,
      // data: ["18-24 ", "25-34 ", "35-39 ", "40-44 ", "45-55 ", "55岁以上"],
      data: age,
      right: 'right'
    },
    series: [
      {
        name: "用户群年龄占比",
        type: "pie",
        radius: "55%",
        center: ["30%", "50%"],
        selectedMode: "single",
        label: {
          normal: {
            // position: 'inner',
            formatter(params) {
              if (params.percent) {
                return params.name + params.percent + "%";
              } else {
                return "";
              }
            }
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 20,
            shadowOffsetX: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },
        // data: [
        //   { value: 19.2, name: "18-24 " },
        //   { value: 36.2, name: "25-34 " },
        //   { value: 9.5, name: "35-39 " },
        //   { value: 8.6, name: "40-44 " },
        //   { value: 12.3, name: "45-55 " },
        //   { value: 6.6, name: "55岁以上" }
        // ]
        data: agedata
      }
    ]
  }
  chart2.setOption(option2)
}
function drawchart2r(age, agedata) {
  var chart2r = echarts.init(document.getElementById("chart2r"));
  var option2r = {
    color: ["#DBB924", "#F48057", "#F1B599", "#95ABB9", "#85BCBF", "#DED262", "#D1CAB8", "#A686D1", "#A5525C"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      bottom: 20,
      // data: ["18-24 ", "25-34 ", "35-39 ", "40-44 ", "45-55 ", "55岁以上"],
      data: age,
      right: 'right'
    },
    series: [
      {
        name: "用户群年龄占比",
        type: "pie",
        radius: "55%",
        center: ["30%", "50%"],
        selectedMode: "single",
        label: {
          normal: {
            // position: 'inner',
            formatter(params) {
              if (params.percent) {
                return params.name + params.percent + "%";
              } else {
                return "";
              }
            }
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 20,
            shadowOffsetX: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },
        // data: [
        //   { value: 19.2, name: "18-24 " },
        //   { value: 36.2, name: "25-34 " },
        //   { value: 9.5, name: "35-39 " },
        //   { value: 8.6, name: "40-44 " },
        //   { value: 12.3, name: "45-55 " },
        //   { value: 6.6, name: "55岁以上" }
        // ]
        data: agedata
      }
    ]
  }
  chart2r.setOption(option2r)
}

function drawchart3(q4, q1,yearqq) {
  var chart3 = echarts.init(document.getElementById("chart3"));
  var option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      //data: ['17Q4', '18Q1'],
	  data: yearqq,
      align: 'right',
      right: 10,
      textStyle: {
        color: "#000"
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 35
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['纯语音\n用户',
        '有流量\n4G用户',
        '有流量\n非4G用户',
      ],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#000",
        },
        // rotate: 10,
        interval: 0,
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        formatter: '{value} '
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#000",
        }
      }
    }],
    series: [{
      name: yearqq[0],
      type: 'bar',
      // data: [9.5, 15.6, 74.9],
      data: q4,
      barWidth: 10, //柱子宽度
      barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#008cff'
          }, {
            offset: 1,
            color: '#005193'
          }]),
          opacity: 1,
        }
      }
    }, {
      name: yearqq[1],
      type: 'bar',
      // data: [8.8, 12.1, 79.1],
      data: q1,
      barWidth: 10,
      barGap: 1,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00da9c'
          }, {
            offset: 1,
            color: '#007a55'
          }]),
          opacity: 1,
        }
      }
    },]
  }
  chart3.setOption(option3)
}
function drawchart3r(girl, boy) {
  var chart3r = echarts.init(document.getElementById("chart3r"));
  var option3r = {
    color: ["#8DBC92", "#FFFAC2", "#F6BEAD", "#B884AA", "#0B59A1", "#90A41A"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["女", "男"],
      align: 'right',
      right: 10,
      textStyle: {
        color: "#000"
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 5
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "8%",
      containLabel: true
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: '{value} '
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#000",
        }
      }
    },
    xAxis: {
      type: "category",
      //data: ["中国联通", "中国移动", "中国电信"],
	  data: ["中国联通"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#000",
        },
        // rotate: 10,
        interval: 0,
      },
    },
    series: [
      {
        name: "女",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [20.5, 33.5],
        data: girl,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "男",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [29.1, 33.6],
        data: boy,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
    ]

  }
  chart3r.setOption(option3r)
}

function drawchart4(s1, s2, s3, s4, s5, s6) {
  var chart4 = echarts.init(document.getElementById("chart4"));
  var option4 = {
    color: ["#8DBC92", "#FFFAC2", "#F6BEAD", "#B884AA", "#0B59A1", "#90A41A"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["1星", "2星", "3星", "4星", "5星", "未评级"],
      align: 'right',
      right: 10,
      textStyle: {
        color: "#000"
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 5
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "8%",
      containLabel: true
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: '{value} '
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#000",
        }
      }
    },
    xAxis: {
      type: "category",
      data: ["联通各类用户\n数量实际占比", "调研样本\n量占比"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#000",
        },
        // rotate: 10,
        interval: 0,
      },
    },
    series: [
      {
        name: "1星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [20.5, 33.5],
        data: s1,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "2星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [29.1, 33.6],
        data: s2,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "3星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [11.3, 17.0],
        data: s3,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "4星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [7.6, 13.7],
        data: s4,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "5星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [3.0, 3.0],
        data: s5,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "未评级",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [11.3, 17.0],
        data: s6,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
    ]

  }
  chart4.setOption(option4)
}
function drawchart4r(skd1, skd2, skd3, skd4) {
  var chart4r = echarts.init(document.getElementById("chart4r"));
  var option4r = {
    color: ["#8DBC92", "#FFFAC2", "#F6BEAD", "#B884AA", "#0B59A1", "#90A41A"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["FTTH且安装IPTV", "FTTH且未安装IPTV", "LAN", "XDSL"],
      align: 'right',
      right: 10,
      textStyle: {
        color: "#000"
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 5
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "8%",
      containLabel: true
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: '{value} '
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#000",
        }
      }
    },
    xAxis: {
      type: "category",
      // data: ["联通用户", "调研样本"],
      data: ["联通用户"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#000",
        },
        // rotate: 10,
        interval: 0,
      },
    },
    series: [
      {
        name: "FTTH且安装IPTV",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [20.5, 33.5],
        data: skd1,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "FTTH且未安装IPTV",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [11.3, 17.0],
        data: skd2,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "LAN",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [7.6, 13.7],
        data: skd3,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "XDSL",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [7.6, 13.7],
        data: skd4,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },

    ]

  }
  chart4r.setOption(option4r)
}

getMessageyw(yearq)
// 获取数据
function getMessageyw(yearq) {
    $(".part2 h5").eq(1).html("用户类型")
  $(".part2 h5").eq(2).html("客户星级")

  $.ajax({
    type: "get",
    dataType: "json",
    url: "/permissions/show/showProvince",
    data: {
      yearq: yearq,
      province:SYS_VALUE
    },
    success: function (result) {
      console.log(result)
      console.log("请求成功");
      // console.log(result);
      /* ***** dec部分 start ***** */
      function decyw() {
        if (result.quotaOPERATORYW && result.quotaOPERATORYW.length != 0) {
          uv1 = parseInt(result.quotaOPERATORYW[0].U_NUM)
          mv1 = parseInt(result.quotaOPERATORYW[0].M_NUM)
          tv1 = parseInt(result.quotaOPERATORYW[0].T_NUM)
          var sumyw = uv1 + mv1 + tv1
          $(".part2 h4").show()
          $(".part2 .chart1val").html(sumyw)
          $(".part2 .uv").html(uv1)
          $(".part2 .mv").html(mv1)
          $(".part2 .tv").html(tv1)
          $(".part2 .uvavg").html(parseFloat(uv1 / sumyw * 100).toFixed(2))
          $(".part2 .mvavg").html(parseFloat(mv1 / sumyw * 100).toFixed(2))
          $(".part2 .tvavg").html(parseFloat(tv1 / sumyw * 100).toFixed(2))
        } else {
          $(".part2 h4").hide()
        }
      }
      /* ***** dec部分 end ***** */

      /* ***** chart部分 start ***** */
      // chart2
      function chart2yw() {
        $("#chart2").show()
        $("#chart2r").hide()

        if (result.quotaAGEYW && result.quotaAGEYW.length != 0) {
          var age1 = [];
          var agedata1 = [];
          var sum1 = 0;
          var avg1 = 0;
          for (var i = 0; i < result.quotaAGEYW.length; i++) {
            age1.push(result.quotaAGEYW[i].AGE_GROUP + " ");
            agedata1.push({
              value: result.quotaAGEYW[i].U_NUM,
              name: result.quotaAGEYW[i].AGE_GROUP + " "
            })
          }
          drawchart2(age1, agedata1);
        } else {
          $("#chart2").hide()
        }
      }
      // cahrt3
      function chart3yw() {
        $("#chart3").show()
        $("#chart3r").hide()
        if (result.quotaUserTypeYW && result.quotaUserTypeYW.length != 0) {
          for (var i = 0; i < result.quotaUserTypeYW.length; i++) {
            yearqq[0] = result.quotaUserTypeYW[0].YEAR_Q;
            yearqq[1] = result.quotaUserTypeYW[result.quotaUserTypeYW.length - 1].YEAR_Q;

            if (result.quotaUserTypeYW[i].YEAR_Q == yearqq[0]) {
              if (result.quotaUserTypeYW[i].USER_TYPE == "纯语音用户") {
                q4[0] = result.quotaUserTypeYW[i].U_NUM
              }
              if (result.quotaUserTypeYW[i].USER_TYPE == "有流量4G用户") {
                q4[1] = result.quotaUserTypeYW[i].U_NUM
              }
              if (result.quotaUserTypeYW[i].USER_TYPE == "有流量非4G用户") {
                q4[2] = result.quotaUserTypeYW[i].U_NUM
              }
            }
            if (result.quotaUserTypeYW[i].YEAR_Q == yearqq[1]) {
              if (result.quotaUserTypeYW[i].USER_TYPE == "纯语音用户") {
                q1[0] = result.quotaUserTypeYW[i].U_NUM
              }
              if (result.quotaUserTypeYW[i].USER_TYPE == "有流量4G用户") {
                q1[1] = result.quotaUserTypeYW[i].U_NUM
              }
              if (result.quotaUserTypeYW[i].USER_TYPE == "有流量非4G用户") {
                q1[2] = result.quotaUserTypeYW[i].U_NUM
              }
            }

          }

          drawchart3(q4, q1,yearqq);
        } else {
          $("#chart3").hide()

        }
      }
      // chart4
      function chart4yw() {
        $("#chart4").show()
        $("#chart4r").hide()

        if (result.quotaStarYW && result.allStarYW && result.quotaStarYW.length != 0 && result.allStarYW.length != 0) {
          for (var i = 0; i < result.quotaStarYW.length; i++) {
            if (result.quotaStarYW[i].USER_LEVEL == "1") {
              s1[1] = parseFloat(result.quotaStarYW[i].U_NUM)
            }
            if (result.quotaStarYW[i].USER_LEVEL == "2") {
              s2[1] = parseFloat(result.quotaStarYW[i].U_NUM)
            }
            if (result.quotaStarYW[i].USER_LEVEL == "3") {
              s3[1] = parseFloat(result.quotaStarYW[i].U_NUM)
            }
            if (result.quotaStarYW[i].USER_LEVEL == "4") {
              s4[1] = parseFloat(result.quotaStarYW[i].U_NUM)
            }
            if (result.quotaStarYW[i].USER_LEVEL == "5") {
              s5[1] = parseFloat(result.quotaStarYW[i].U_NUM)
            }
            if (result.quotaStarYW[i].USER_LEVEL == "未评级") {
              s6[1] = parseFloat(result.quotaStarYW[i].U_NUM)
            }
          }
          var sum = s1[1] + s2[1] + s3[1] + s4[1] + s5[1] + s6[1];
          s1[1] = parseFloat(s1[1] / sum * 100).toFixed(2)
          s2[1] = parseFloat(s2[1] / sum * 100).toFixed(2)
          s3[1] = parseFloat(s3[1] / sum * 100).toFixed(2)
          s4[1] = parseFloat(s4[1] / sum * 100).toFixed(2)
          s5[1] = parseFloat(s5[1] / sum * 100).toFixed(2)
          s6[1] = parseFloat(s6[1] / sum * 100).toFixed(2)
          for (var i = 0; i < result.allStarYW.length; i++) {
            if (result.allStarYW[i].USER_STAR_LEVEL == "1") {
              s1[0] = parseFloat(result.allStarYW[i].YW_NUM_PERCENT)
            }
            if (result.allStarYW[i].USER_STAR_LEVEL == "2") {
              s2[0] = parseFloat(result.allStarYW[i].YW_NUM_PERCENT)
            }
            if (result.allStarYW[i].USER_STAR_LEVEL == "3") {
              s3[0] = parseFloat(result.allStarYW[i].YW_NUM_PERCENT)
            }
            if (result.allStarYW[i].USER_STAR_LEVEL == "4") {
              s4[0] = parseFloat(result.allStarYW[i].YW_NUM_PERCENT)
            }
            if (result.allStarYW[i].USER_STAR_LEVEL == "5") {
              s5[0] = parseFloat(result.allStarYW[i].YW_NUM_PERCENT)
            }
            if (result.allStarYW[i].USER_STAR_LEVEL == "未评级") {
              s6[0] = parseFloat(result.allStarYW[i].YW_NUM_PERCENT)
            }
          }
          drawchart4(s1, s2, s3, s4, s5, s6);
        } else {
          $("#chart4").hide()
        }
      }
      /* ***** chart部分 end ***** */

      /* ***** fivebox start ***** */
      function fiveboxyw() {
        $(".five .num1").html(parseFloat(result.pieYW[0].YW_YEAR_FULFIL).toFixed(2))
        $(".five .num2").html(parseFloat(result.pieYW[0].YW_YEAR_LIFT).toFixed(2))
        var finish = result.pieYW[0].YW_COMPLETION_RATE * 100;
        if (finish > 100) {
          finish = 100
        }
        if (finish < 0) {
          finish = 0
        }
        $(".five .num3").html(parseFloat(finish).toFixed(0) + "%")

        $(".five .num4").html(parseFloat(result.pieYW[0].YW_QUARTER_FULFIL).toFixed(2))
        $(".five .num5").html(parseFloat(result.pieYW[0].YW_QUARTER_LIFT).toFixed(2))
      }
      /* ***** fivebox end ***** */

      /* ***** table start ***** */
      function table1yw() {
        var prorank = [];
        var str = '';
        if (result.allRankYW) {
          for (var i = 0; i < result.allRankYW.length; i++) {
            prorank.push({
              name: result.allRankYW[i].PROVINCE_NAME,
              allrank: result.allRankYW[i].rank,
              arearank: '',
              qfinish: '',
              qlift: ''
            })
            for (var j = 0; j < result.allRankYWN.length; j++) {
              if (result.allRankYW[i].PROVINCE_NAME == result.allRankYWN[j].PROVINCE_NAME) {
                prorank[i].arearank = result.allRankYWN[j].rank;
                prorank[i].qfinish = parseFloat(result.allRankYWN[j].QUARTER_FULFIL).toFixed(2);
                prorank[i].qlift = parseFloat(result.allRankYWN[j].QUARTER_LIFT).toFixed(2);
              }
            }
            for (var k = 0; k < result.allRankYWS.length; k++) {
              if (result.allRankYW[i].PROVINCE_NAME == result.allRankYWS[k].PROVINCE_NAME) {
                prorank[i].arearank = result.allRankYWS[k].rank;
                prorank[i].qfinish = parseFloat(result.allRankYWS[k].QUARTER_FULFIL).toFixed(2);
                prorank[i].qlift = parseFloat(result.allRankYWS[k].QUARTER_LIFT).toFixed(2);
              }
            }
          }
          for (var i = 0; i < prorank.length; i++) {
            if (prorank[i].qfinish > 100) {
              prorank[i].qfinish = 100
            }
            if (prorank[i].qfinish < 0) {
              prorank[i].qfinish = 0
            }
            str += `
          <tr>
            <td style="width:180px;" align="center">第`+ prorank[i].allrank + `名</td>
            <td style="width:180px;" align="center">`+ prorank[i].name + `</td>
            <td style="width:180px;" align="center">`+ prorank[i].qfinish + `%</td>
            <td style="width:180px;" align="center">`+ prorank[i].qlift + `</td>
            <td style="width:163px;" align="center">`+ prorank[i].arearank + `</td>
          </tr>
            `
          }
          $(".rang #tplWrapper_TemplateZ").html(str);
          var tr = $(".rang #tplWrapper_TemplateZ").find("tr")
          var imgstr1 = "<img src='../reportPage/img/jbb1.png' style='height:23px;width:23px;'>"
          var imgstr2 = "<img src='../reportPage/img/jbb2.png' style='height:23px;width:23px;'>"
          var imgstr3 = "<img src='../reportPage/img/jbb3.png' style='height:23px;width:23px;'>"
          for (var i = 0; i < tr.length; i++) {
            var td = tr.eq(i).find("td");
            var num = td.eq(0).text();
            if (num == "第1名") {
              tr.eq(i).find("td").eq(0).html(imgstr1)
              tr.eq(i).css("color", "#bf4959")
            }
            if (num == "第2名") {
              tr.eq(i).find("td").eq(0).html(imgstr2)
              tr.eq(i).css("color", "#b9542a")
            }
            if (num == "第3名") {
              // console.log(i)
              tr.eq(i).find("td").eq(0).html(imgstr3)
              // tr.eq(i).find("td").eq(1).css("color", "#137b8a")
              tr.eq(i).css("color", "#137b8a")

            }
          }
          $(".topfive .top1").html(prorank[0].name)
          $(".topfive .top2").html(prorank[1].name)
          $(".topfive .top3").html(prorank[2].name)
          $(".topfive .top4").html(prorank[3].name)
          $(".topfive .top5").html(prorank[4].name)

        }
      }
      /* ***** table end ***** */

      /* ***** fourbtn start ***** */
      function fourbtnyw1() {
        // 整体
        var npsZT = [];
        for (var i = 0; i < result.npsCityYWZT.length; i++) {
          npsZT.push({
            name: result.npsCityYWZT[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWZT[i].U_NUM).toFixed(2),
            // same: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            // clrcle: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWZT[i].M_NPS).toFixed(2),
            // myb: parseFloat(result.npsCityYWZT[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWZT[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWZT[i].T_NPS).toFixed(2),
            // tyb: parseFloat(result.npsCityYWZT[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWZT[i].COMPARE_T).toFixed(2),
            del: parseFloat(result.npsCityYWZT[i].COMPETITION_GAP).toFixed(2),
          })
        }
        var strfour = '';
        for (var i = 0; i < npsZT.length; i++) {
          strfour += `
        <tr>
            <td style="width:183px;" align="center">`+ npsZT[i].name + `</td>
            <td style="width:100px;" align="center">`+ npsZT[i].unps + `</td>
            <td style="width:100px;" align="center">`+ npsZT[i].uyb + `</td>
            
            
            <td style="width:100px;" align="center">`+ npsZT[i].mnps + `</td>

            <td style="width:100px;" align="center">`+ npsZT[i].mm + `</td>
            <td style="width:100px;" align="center">`+ npsZT[i].tnps + `</td>

            <td style="width:100px;" align="center">`+ npsZT[i].mt + `</td>
            <td style="width:100px;" align="center">`+ npsZT[i].del + `</td>
        </tr>
        `
        }
        $(".talezbmx tbody").html(strfour)
      }
      function fourbtnyw2() {
        // 网络
        var npsWL = []
        // npsCityYWYW
        for (var i = 0; i < result.npsCityYWWL.length; i++) {
          npsWL.push({
            name: result.npsCityYWWL[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWWL[i].U_NUM).toFixed(2),
            // same: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            // clrcle: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWWL[i].M_NPS).toFixed(2),
            // myb: parseFloat(result.npsCityYWWL[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWWL[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWWL[i].T_NPS).toFixed(2),
            // tyb: parseFloat(result.npsCityYWWL[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWWL[i].COMPARE_T).toFixed(2),
            del: parseFloat(result.npsCityYWWL[i].COMPETITION_GAP).toFixed(2),
          })
        }
        var strfour = '';
        for (var i = 0; i < npsWL.length; i++) {
          strfour += `
        <tr>
            <td style="width:183px;" align="center">`+ npsWL[i].name + `</td>
            <td style="width:100px;" align="center">`+ npsWL[i].unps + `</td>
            <td style="width:100px;" align="center">`+ npsWL[i].uyb + `</td>
            
            
            <td style="width:100px;" align="center">`+ npsWL[i].mnps + `</td>

            <td style="width:100px;" align="center">`+ npsWL[i].mm + `</td>
            <td style="width:100px;" align="center">`+ npsWL[i].tnps + `</td>


            <td style="width:100px;" align="center">`+ npsWL[i].mt + `</td>
            <td style="width:100px;" align="center">`+ npsWL[i].del + `</td>
        </tr>
        `
        }
        $(".talezbmx tbody").html(strfour)
      }
      function fourbtnyw3() {
        // 业务
        var npsYW = []
        for (var i = 0; i < result.npsCityYWYW.length; i++) {
          npsYW.push({
            name: result.npsCityYWYW[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWYW[i].U_NUM).toFixed(2),
            // same: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            // clrcle: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWYW[i].M_NPS).toFixed(2),
            // myb: parseFloat(result.npsCityYWYW[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWYW[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWYW[i].T_NPS).toFixed(2),
            // tyb: parseFloat(result.npsCityYWYW[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWYW[i].COMPARE_T).toFixed(2),
            del: parseFloat(result.npsCityYWYW[i].COMPETITION_GAP).toFixed(2),
          })
        }
        var strfour = '';
        for (var i = 0; i < npsYW.length; i++) {
          strfour += `
        <tr>
            <td style="width:183px;" align="center">`+ npsYW[i].name + `</td>
            <td style="width:100px;" align="center">`+ npsYW[i].unps + `</td>
            <td style="width:100px;" align="center">`+ npsYW[i].uyb + `</td>
            
            
            <td style="width:100px;" align="center">`+ npsYW[i].mnps + `</td>

            <td style="width:100px;" align="center">`+ npsYW[i].mm + `</td>
            <td style="width:100px;" align="center">`+ npsYW[i].tnps + `</td>

            <td style="width:100px;" align="center">`+ npsYW[i].mt + `</td>
            <td style="width:100px;" align="center">`+ npsYW[i].del + `</td>
        </tr>
        `
        }
        $(".talezbmx tbody").html(strfour)
      }

      function fourbtnyw4() {
        // 服务
        var npsFW = []
        // npsCityYWFW
        for (var i = 0; i < result.npsCityYWFW.length; i++) {
          npsFW.push({
            name: result.npsCityYWFW[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWFW[i].U_NUM).toFixed(2),
            // same: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            // clrcle: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWFW[i].M_NPS).toFixed(2),
            // myb: parseFloat(result.npsCityYWFW[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWFW[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWFW[i].T_NPS).toFixed(2),
            // tyb: parseFloat(result.npsCityYWFW[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWFW[i].COMPARE_T).toFixed(2),
            del: parseFloat(result.npsCityYWFW[i].COMPETITION_GAP).toFixed(2),
          })
        }
        var strfour = '';
        for (var i = 0; i < npsFW.length; i++) {
          strfour += `
        <tr>
            <td style="width:183px;" align="center">`+ npsFW[i].name + `</td>
            <td style="width:100px;" align="center">`+ npsFW[i].unps + `</td>
            <td style="width:100px;" align="center">`+ npsFW[i].uyb + `</td>
            
            
            <td style="width:100px;" align="center">`+ npsFW[i].mnps + `</td>

            <td style="width:100px;" align="center">`+ npsFW[i].mm + `</td>
            <td style="width:100px;" align="center">`+ npsFW[i].tnps + `</td>

            <td style="width:100px;" align="center">`+ npsFW[i].mt + `</td>
            <td style="width:100px;" align="center">`+ npsFW[i].del + `</td>
        </tr>
        `
        }
        $(".talezbmx tbody").html(strfour)
      }
      fourbtnyw1()
      $(".btnzu3box .btn1").click(function () {
        $(".btnzu3box .btn2").removeClass("active");
        $(".btnzu3box .btn3").removeClass("active");
        $(".btnzu3box .btn4").removeClass("active");
        $(this).addClass("active")
        fourbtnyw1()
      })
      $(".btnzu3box .btn2").click(function () {
        $(".btnzu3box .btn1").removeClass("active");
        $(".btnzu3box .btn3").removeClass("active");
        $(".btnzu3box .btn4").removeClass("active");
        $(this).addClass("active")
        fourbtnyw2()
      })
      $(".btnzu3box .btn3").click(function () {
        $(".btnzu3box .btn1").removeClass("active");
        $(".btnzu3box .btn2").removeClass("active");
        $(".btnzu3box .btn4").removeClass("active");
        $(this).addClass("active")
        fourbtnyw3()
      })
      $(".btnzu3box .btn4").click(function () {
        $(".btnzu3box .btn1").removeClass("active");
        $(".btnzu3box .btn2").removeClass("active");
        $(".btnzu3box .btn3").removeClass("active");
        $(this).addClass("active")
        fourbtnyw4()
      })
      /* ***** fourbtn end ***** */

      /* ***** detail start ***** */
      function detailyw() {
        var deZT = []
        var deWL = []
        var deYW = []
        var deFW = []
        var destrall = ''
        var destrZT = ''
        var destrWLf = ''
        var destrWLc = ''
        var destrYWf = ''
        var destrYWc = ''
        var destrFWf = ''
        var destrFWc = ''

        for (var i = 0; i < result.npsYW.length; i++) {
          if (result.npsYW[i].L1_NAME == "整体") {
            deZT.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseInt(result.npsYW[i].U_NUM),
              same: parseFloat(result.npsYW[i].TB).toFixed(2),
              circle: parseFloat(result.npsYW[i].HB).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_GAP).toFixed(2)
            })
          }
          if (result.npsYW[i].L1_NAME == "服务标签") {
            deFW.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseInt(result.npsYW[i].U_NUM),
              same: parseFloat(result.npsYW[i].TB).toFixed(2),
              circle: parseFloat(result.npsYW[i].HB).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_GAP).toFixed(2)

            })
          }
          if (result.npsYW[i].L1_NAME == "业务标签") {
            deYW.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseInt(result.npsYW[i].U_NUM),
              same: parseFloat(result.npsYW[i].TB).toFixed(2),
              circle: parseFloat(result.npsYW[i].HB).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_GAP).toFixed(2)

            })
          }
          if (result.npsYW[i].L1_NAME == "网络标签") {
            deWL.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseInt(result.npsYW[i].U_NUM),
              same: parseFloat(result.npsYW[i].TB).toFixed(2),
              circle: parseFloat(result.npsYW[i].HB).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_GAP).toFixed(2)

            })
          }

        }
        for (var i = 0; i < deZT.length; i++) {
          destrZT += `
          <tr>
              <td>`+ deZT[i].name + `</td>
              <td>`+ deZT[i].unps + `</td>
              <td>`+ deZT[i].utj + `</td>
              <td>`+ deZT[i].user + `</td>
              <td>`+ deZT[i].same + `</td>
              <td>`+ deZT[i].circle + `</td>
              <td>`+ deZT[i].mnps + `</td>
              <td>`+ deZT[i].mm + `</td>
              <td>`+ deZT[i].tnps + `</td>
              <td>`+ deZT[i].mt + `</td>
              <td>`+ deZT[i].del + `</td>
          </tr>
          `
        }
        for (var i = 0; i < deWL.length; i++) {
          if (deWL[i].name == "网络标签") {
            destrWLf += `
            <tr class="parent" id="row1">
                <td>
                    `+ deWL[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deWL[i].unps + `</td>
                <td>`+ deWL[i].utj + `</td>
                <td>`+ deWL[i].user + `</td>
                <td>`+ deWL[i].same + `</td>
                <td>`+ deWL[i].circle + `</td>
                <td>`+ deWL[i].mnps + `</td>
                <td>`+ deWL[i].mm + `</td>
                <td>`+ deWL[i].tnps + `</td>
                <td>`+ deWL[i].mt + `</td>
                <td>`+ deWL[i].del + `</td>
            </tr>
            `
          } else {
            destrWLc += `
            <tr class="child_row1 child">
                <td>`+ deWL[i].name + `</td>
                <td>`+ deWL[i].unps + `</td>
                <td>`+ deWL[i].utj + `</td>
                <td>`+ deWL[i].user + `</td>
                <td>`+ deWL[i].same + `</td>
                <td>`+ deWL[i].circle + `</td>
                <td>`+ deWL[i].mnps + `</td>
                <td>`+ deWL[i].mm + `</td>
                <td>`+ deWL[i].tnps + `</td>
                <td>`+ deWL[i].mt + `</td>
                <td>`+ deWL[i].del + `</td>
            </tr>
            `
          }
        }
        for (var i = 0; i < deYW.length; i++) {
          if (deYW[i].name == "业务标签") {
            destrYWf += `
            <tr class="parent" id="row2">
                <td>
                    `+ deYW[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deYW[i].unps + `</td>
                <td>`+ deYW[i].utj + `</td>
                <td>`+ deYW[i].user + `</td>
                <td>`+ deYW[i].same + `</td>
                <td>`+ deYW[i].circle + `</td>
                <td>`+ deYW[i].mnps + `</td>
                <td>`+ deYW[i].mm + `</td>
                <td>`+ deYW[i].tnps + `</td>
                <td>`+ deYW[i].mt + `</td>
                <td>`+ deYW[i].del + `</td>
            </tr>
            `
          } else {
            destrYWc += `
            <tr class="child_row2 child">
                <td>`+ deYW[i].name + `</td>
                <td>`+ deYW[i].unps + `</td>
                <td>`+ deYW[i].utj + `</td>
                <td>`+ deYW[i].user + `</td>
                <td>`+ deYW[i].same + `</td>
                <td>`+ deYW[i].circle + `</td>
                <td>`+ deYW[i].mnps + `</td>
                <td>`+ deYW[i].mm + `</td>
                <td>`+ deYW[i].tnps + `</td>
                <td>`+ deYW[i].mt + `</td>
                <td>`+ deYW[i].del + `</td>
            </tr>
            `
          }
        }

        for (var i = 0; i < deFW.length; i++) {
          if (deFW[i].name == "服务标签") {
            destrFWf += `
            <tr class="parent" id="row3">
                <td>
                    `+ deFW[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deFW[i].unps + `</td>
                <td>`+ deFW[i].utj + `</td>
                <td>`+ deFW[i].user + `</td>
                <td>`+ deFW[i].same + `</td>
                <td>`+ deFW[i].circle + `</td>
                <td>`+ deFW[i].mnps + `</td>
                <td>`+ deFW[i].mm + `</td>
                <td>`+ deFW[i].tnps + `</td>
                <td>`+ deFW[i].mt + `</td>
                <td>`+ deFW[i].del + `</td>
            </tr>
            `
          } else {
            destrFWc += `
            <tr class="child_row3 child">
                <td>`+ deFW[i].name + `</td>
                <td>`+ deFW[i].unps + `</td>
                <td>`+ deFW[i].utj + `</td>
                <td>`+ deFW[i].user + `</td>
                <td>`+ deFW[i].same + `</td>
                <td>`+ deFW[i].circle + `</td>
                <td>`+ deFW[i].mnps + `</td>
                <td>`+ deFW[i].mm + `</td>
                <td>`+ deFW[i].tnps + `</td>
                <td>`+ deFW[i].mt + `</td>
                <td>`+ deFW[i].del + `</td>
            </tr>
            `
          }

        }
        destrall = destrZT + destrWLf + destrWLc + destrYWf + destrYWc + destrFWf + destrFWc;
        $(".tablemx tbody").html(destrall)
        $("tr.parent").click(function () {
          $(this)
            .siblings(".child_" + this.id)
            .slideToggle();
          var icon = $(this).find("i");
          if (icon.hasClass("glyphicon-chevron-down")) {
            icon.removeClass("glyphicon-chevron-down");
            icon.addClass("glyphicon-chevron-up");
          } else {
            icon.removeClass("glyphicon-chevron-up");
            icon.addClass("glyphicon-chevron-down");
          }
        });

      }
      /* ***** detail end ***** */

      /* ***** rank start ***** */
      function rankyw() {
        for (var i = 0; i < result.allRankYW.length; i++) {
          if (result.allRankYW[i].PROVINCE_NAME == proname) {
            rankall = result.allRankYW[i].rank;
            $(".glo .num").html(rankall)
          }
        }
        for (var i = 0; i < result.allRankYWN.length; i++) {
          if (result.allRankYWN[i].PROVINCE_NAME == proname) {
            $(".nor .area").text("北方")
            console.log("北方");
            rankarea = result.allRankYWN[i].rank;
            $(".nor .num").html(rankarea)
          }
        }
        for (var i = 0; i < result.allRankYWS.length; i++) {
          if (result.allRankYWS[i].PROVINCE_NAME == proname) {
            $(".nor .area").text("南方")
            console.log("南方");
            rankarea = result.allRankYWS[i].rank;
            $(".nor .num").html(rankarea)
          }
        }
        $(".proname").text(proname)
        var str = $(".hrtitle2 span").text()
        var arr = str.split("-")
        arr[1] = proname
        console.log(arr);
        str = arr.join("-")
        $(".hrtitle2 span").text(str)

      }
      /* ***** rank end ***** */
      decyw()
      chart2yw()
      chart3yw()
      chart4yw()
      fiveboxyw()
      table1yw()
      // fourbtnyw()
      fourbtnyw1()
      fourbtnyw2()
      fourbtnyw3()
      fourbtnyw4()
      detailyw()
      rankyw()
      delnan()
    },
    error: function () {
      console.log("请求失败");
    }
  })
}
function getMessagekd(yearq) {
	  $(".part2 h5").eq(1).html("性别分布")
  $(".part2 h5").eq(2).html("用户类型")

  $.ajax({
    type: "get",
    dataType: "json",
    url: "/permissions/show/showProvince",
    data: {
      yearq: yearq,
      province:SYS_VALUE
    },
    success: function (result) {
      console.log("请求成功");
      // console.log(result);

      /* ***** dec部分 start ***** */
      function deckd() {
        if (result.quotaOPERATORKD && result.quotaOPERATORKD.length != 0) {
          uv2 = parseInt(result.quotaOPERATORKD[0].U_NUM)
          mv2 = parseInt(result.quotaOPERATORKD[0].M_NUM)
          tv2 = parseInt(result.quotaOPERATORKD[0].T_NUM)
          var sumkd = uv2 + mv2 + tv2
          $(".part2 h4").show()
          $(".part2 .chart1val").html(sumkd)
          $(".part2 .uv").html(uv2)
          $(".part2 .mv").html(mv2)
          $(".part2 .tv").html(tv2)
          $(".part2 .uvavg").html(parseFloat(uv2 / sumkd * 100).toFixed(2))
          $(".part2 .mvavg").html(parseFloat(mv2 / sumkd * 100).toFixed(2))
          $(".part2 .tvavg").html(parseFloat(tv2 / sumkd * 100).toFixed(2))

        } else {
          $(".part2 h4").hide()
        }
      }
      /* ***** dec部分 end ***** */

      /* ***** chart部分 start ***** */
      // chart2
      function chart2kd() {
        $("#chart2").hide()
        $("#chart2r").show()

        if (result.quotaAGEKD && result.quotaAGEKD.length != 0) {
          var age2 = [];
          var agedata2 = [];
          var sum2 = 0;
          var avg2 = 0;
          for (var i = 0; i < result.quotaAGEKD.length; i++) {
            age2.push(result.quotaAGEKD[i].AGE_GROUP + " ");
            agedata2.push({
              value: result.quotaAGEKD[i].U_NUM,
              name: result.quotaAGEKD[i].AGE_GROUP + " "
            })
          }
          drawchart2r(age2, agedata2);
        } else {
          $("#chart2r").hide()
        }
      }
      // cahrt3
      function chart3kd() {
        $("#chart3").hide()
        $("#chart3r").show()

        if (result.quotaSexKD && result.quotaSexKD.length != 0) {
          for (var i = 0; i < result.quotaSexKD.length; i++) {
            if (result.quotaSexKD[i].SEX == "女") {
              girl[0] = result.quotaSexKD[i].count
            }
            // if (result.quotaSexKD[i].SEX == "女" && result.quotaSexKD[i].OPERATOR_TYPE == "中国移动") {
            //   s1[1] = result.quotaSexKD[i].COUNT
            // }
            // if (result.quotaSexKD[i].SEX == "女" && result.quotaSexKD[i].OPERATOR_TYPE == "中国电信") {
            //   s1[2] = result.quotaSexKD[i].COUNT
            // }
            if (result.quotaSexKD[i].SEX == "男") {
              boy[0] = result.quotaSexKD[i].count
            }
            // if (result.quotaSexKD[i].SEX == "男" && result.quotaSexKD[i].OPERATOR_TYPE == "中国移动") {
            //   s2[1] = result.quotaSexKD[i].COUNT
            // }
            // if (result.quotaSexKD[i].SEX == "男" && result.quotaSexKD[i].OPERATOR_TYPE == "中国电信") {
            //   s2[2] = result.quotaSexKD[i].COUNT
            // }


          }
          console.log(girl);
          console.log(boy);
          drawchart3r(girl, boy);
        } else {
          $("#chart3r").hide()
        }
      }
      // chart4
      function chart4kd() {
        $("#chart4").hide()
        $("#chart4r").show()
        // if (result.allDeptTypeKD && result.allDeptTypeKD.length != 0) {
        //   for (var i = 0; i < result.allDeptTypeKD.length; i++) {
        //     if (result.allDeptTypeKD[i].USER_TYPE == "FTTH") {
        //       skd1[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
        //     }
        //     if (result.allDeptTypeKD[i].USER_TYPE == "LAN") {
        //       skd2[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
        //     }
        //     if (result.allDeptTypeKD[i].USER_TYPE == "XDSL") {
        //       skd3[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
        //     }
        //   }
        // }
        if (result.quotaUserTypeKD && result.quotaUserTypeKD.length != 0) {

          for (var i = 0; i < result.quotaUserTypeKD.length; i++) {
            if (result.quotaUserTypeKD[i].USER_TYPE == "FTTH且安装IPTV") {
              skd1[0] = parseInt(result.quotaUserTypeKD[i].U_NUM)
            }
            if (result.quotaUserTypeKD[i].USER_TYPE == "FTTH且未安装IPTV") {
              skd2[0] = parseInt(result.quotaUserTypeKD[i].U_NUM)
            }
            if (result.quotaUserTypeKD[i].USER_TYPE == "LAN") {
              skd3[0] = parseInt(result.quotaUserTypeKD[i].U_NUM)
            }
            if (result.quotaUserTypeKD[i].USER_TYPE == "XDSL") {
              skd4[0] = parseInt(result.quotaUserTypeKD[i].U_NUM)
            }


          }
          var sum = skd1[0] + skd2[0] + skd3[0] + skd4[0]
          skd1[0] = (skd1[0] / sum * 100).toFixed(2)
          skd2[0] = (skd2[0] / sum * 100).toFixed(2)
          skd3[0] = (skd3[0] / sum * 100).toFixed(2)
          skd4[0] = (skd4[0] / sum * 100).toFixed(2)

          drawchart4r(skd1, skd2, skd3, skd4);

        } else {
          $("#chart4r").hide()
        }
      }
      /* ***** chart部分 end ***** */

      /* ***** fivebox start ***** */
      function fiveboxkd() {
        $(".five .num1").html(parseFloat(result.pieKD[0].KD_YEAR_FULFIL).toFixed(2))
        $(".five .num2").html(parseFloat(result.pieKD[0].KD_YEAR_LIFT).toFixed(2))
        var finish = result.pieKD[0].KD_COMPLETION_RATE * 100;
        if (finish > 100) {
          finish = 100
        }
        if (finish < 0) {
          finish = 0
        }
        $(".five .num3").html(parseFloat(finish).toFixed(0) + "%")
        $(".five .num4").html(parseFloat(result.pieKD[0].KD_QUARTER_FULFIL).toFixed(2))
        $(".five .num5").html(parseFloat(result.pieKD[0].KD_QUARTER_LIFT).toFixed(2))
      }
      /* ***** fivebox end ***** */

      /* ***** table start ***** */
      function table1kd() {
        var prorank = [];
        var str = '';

        if (result.allRankKD) {
          for (var i = 0; i < result.allRankKD.length; i++) {
            prorank.push({
              name: result.allRankKD[i].PROVINCE_NAME,
              allrank: result.allRankKD[i].rank,
              arearank: '',
              qfinish: '',
              qlift: ''
            })
            for (var j = 0; j < result.allRankKDN.length; j++) {
              if (result.allRankKD[i].PROVINCE_NAME == result.allRankKDN[j].PROVINCE_NAME) {
                prorank[i].arearank = result.allRankKDN[j].rank;
                prorank[i].qfinish = parseFloat(result.allRankKDN[j].QUARTER_FULFIL).toFixed(2);
                prorank[i].qlift = parseFloat(result.allRankKDN[j].QUARTER_LIFT).toFixed(2);
              }
            }
            for (var k = 0; k < result.allRankKDS.length; k++) {
              if (result.allRankKD[i].PROVINCE_NAME == result.allRankKDS[k].PROVINCE_NAME) {
                prorank[i].arearank = result.allRankKDS[k].rank;
                prorank[i].qfinish = parseFloat(result.allRankKDS[k].QUARTER_FULFIL).toFixed(2);
                prorank[i].qlift = parseFloat(result.allRankKDS[k].QUARTER_LIFT).toFixed(2);
              }
            }
          }
          for (var i = 0; i < prorank.length; i++) {
            if (prorank[i].qfinish > 100) {
              prorank[i].qfinish = 100
            }
            if (prorank[i].qfinish < 0) {
              prorank[i].qfinish = 0
            }
            str += `
          <tr>
            <td style="width:180px;" align="center">第`+ prorank[i].allrank + `名</td>
            <td style="width:180px;" align="center">`+ prorank[i].name + `</td>
            <td style="width:180px;" align="center">`+ prorank[i].qfinish + `%</td>
            <td style="width:180px;" align="center">`+ prorank[i].qlift + `</td>
            <td style="width:163px;" align="center">`+ prorank[i].arearank + `</td>
          </tr>
            `
          }
          $(".rang #tplWrapper_TemplateZ").html(str);
          var tr = $(".rang #tplWrapper_TemplateZ").find("tr")
          var imgstr1 = "<img src='../reportPage/img/jbb1.png' style='height:23px;width:23px;'>"
          var imgstr2 = "<img src='../reportPage/img/jbb2.png' style='height:23px;width:23px;'>"
          var imgstr3 = "<img src='../reportPage/img/jbb3.png' style='height:23px;width:23px;'>"
          for (var i = 0; i < tr.length; i++) {
            var td = tr.eq(i).find("td");
            var num = td.eq(0).text();
            if (num == "第1名") {
              tr.eq(i).find("td").eq(0).html(imgstr1)
              tr.eq(i).css("color", "#bf4959")
            }
            if (num == "第2名") {
              tr.eq(i).find("td").eq(0).html(imgstr2)
              tr.eq(i).css("color", "#b9542a")
            }
            if (num == "第3名") {
              // console.log(i)
              tr.eq(i).find("td").eq(0).html(imgstr3)
              // tr.eq(i).find("td").eq(1).css("color", "#137b8a")
              tr.eq(i).css("color", "#137b8a")

            }
          }
          $(".topfive .top1").html(prorank[0].name)
          $(".topfive .top2").html(prorank[1].name)
          $(".topfive .top3").html(prorank[2].name)
          $(".topfive .top4").html(prorank[3].name)
          $(".topfive .top5").html(prorank[4].name)

        }
      }
      /* ***** table end ***** */

      /* ***** fourbtn start ***** */
      function fourbtnkd1() {
        // 整体
        var npsZT = [];
        if (result.npsCityKDZT) {
          for (var i = 0; i < result.npsCityKDZT.length; i++) {
            npsZT.push({
              name: result.npsCityKDZT[i].CITY_NAME,
              unps: parseFloat(result.npsCityKDZT[i].U_K_NPS).toFixed(2),
              uyb: parseFloat(result.npsCityKDZT[i].U_K_NUM).toFixed(2),
              // same: parseFloat(result.npsCityKDZT[i].U_NPS).toFixed(2),
              // clrcle: parseFloat(result.npsCityKDZT[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsCityKDZT[i].M_K_NPS).toFixed(2),
              // myb: parseFloat(result.npsCityKDZT[i].M_NUM).toFixed(2),
              mm: parseFloat(result.npsCityKDZT[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsCityKDZT[i].T_K_NPS).toFixed(2),
              // tyb: parseFloat(result.npsCityKDZT[i].T_NUM).toFixed(2),
              mt: parseFloat(result.npsCityKDZT[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsCityKDZT[i].COMPETITION_GAP).toFixed(2),
            })
          }
          var strfour = '';
          for (var i = 0; i < npsZT.length; i++) {
            strfour += `
              <tr>
                  <td style="width:183px;" align="center">`+ npsZT[i].name + `</td>
                  <td style="width:100px;" align="center">`+ npsZT[i].unps + `</td>
                  <td style="width:100px;" align="center">`+ npsZT[i].uyb + `</td>

                  <td style="width:100px;" align="center">`+ npsZT[i].mnps + `</td>

                  <td style="width:100px;" align="center">`+ npsZT[i].mm + `</td>
                  <td style="width:100px;" align="center">`+ npsZT[i].tnps + `</td>

                  <td style="width:100px;" align="center">`+ npsZT[i].mt + `</td>
                  <td style="width:100px;" align="center">`+ npsZT[i].del + `</td>
              </tr>
              `
          }
          $(".talezbmx tbody").html(strfour)

        } else { $(".talezbmx tbody").html("") }

      }
      function fourbtnkd2() {
        // 网络
        var npsWL = []
        if (result.npsCityKDWL) {
          // npsCityYWYW
          for (var i = 0; i < result.npsCityKDWL.length; i++) {
            npsWL.push({
              name: result.npsCityKDWL[i].CITY_NAME,
              unps: parseFloat(result.npsCityKDWL[i].U_K_NPS).toFixed(2),
              uyb: parseFloat(result.npsCityKDWL[i].U_K_NUM).toFixed(2),
              // same: parseFloat(result.npsCityKDWL[i].U_NPS).toFixed(2),
              // clrcle: parseFloat(result.npsCityKDWL[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsCityKDWL[i].M_K_NPS).toFixed(2),
              // myb: parseFloat(result.npsCityKDWL[i].M_NUM).toFixed(2),
              mm: parseFloat(result.npsCityKDWL[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsCityKDWL[i].T_K_NPS).toFixed(2),
              // tyb: parseFloat(result.npsCityKDWL[i].T_NUM).toFixed(2),
              mt: parseFloat(result.npsCityKDWL[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsCityKDWL[i].COMPETITION_GAP).toFixed(2),
            })
          }
          // 默认渲染整体数据
          var strfour = '';
          for (var i = 0; i < npsWL.length; i++) {
            strfour += `
        <tr>
            <td style="width:183px;" align="center">`+ npsWL[i].name + `</td>
            <td style="width:100px;" align="center">`+ npsWL[i].unps + `</td>
            <td style="width:100px;" align="center">`+ npsWL[i].uyb + `</td>

            <td style="width:100px;" align="center">`+ npsWL[i].mnps + `</td>

            <td style="width:100px;" align="center">`+ npsWL[i].mm + `</td>
            <td style="width:100px;" align="center">`+ npsWL[i].tnps + `</td>

            <td style="width:100px;" align="center">`+ npsWL[i].mt + `</td>
            <td style="width:100px;" align="center">`+ npsWL[i].del + `</td>
        </tr>
        `
          }
          $(".talezbmx tbody").html(strfour)

        } else {
          $(".talezbmx tbody").html("")
        }

      }
      function fourbtnkd3() {
        // 业务
        var npsYW = []
        if (result.npsCityKDYW) {
          console.log('enter 业务');

          for (var i = 0; i < result.npsCityKDYW.length; i++) {
            npsYW.push({
              name: result.npsCityKDYW[i].CITY_NAME,
              unps: parseFloat(result.npsCityKDYW[i].U_K_NPS).toFixed(2),
              uyb: parseFloat(result.npsCityKDYW[i].U_K_NUM).toFixed(2),
              // same: parseFloat(result.npsCityKDYW[i].U_NPS).toFixed(2),
              // clrcle: parseFloat(result.npsCityKDYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsCityKDYW[i].M_K_NPS).toFixed(2),
              // myb: parseFloat(result.npsCityKDYW[i].M_NUM).toFixed(2),
              mm: parseFloat(result.npsCityKDYW[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsCityKDYW[i].T_K_NPS).toFixed(2),
              // tyb: parseFloat(result.npsCityKDYW[i].T_NUM).toFixed(2),
              mt: parseFloat(result.npsCityKDYW[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsCityKDYW[i].COMPETITION_GAP).toFixed(2),
            })
          }
          var strfour = '';
          for (var i = 0; i < npsYW.length; i++) {
            strfour += `
          <tr>
              <td style="width:183px;" align="center">`+ npsYW[i].name + `</td>
              <td style="width:100px;" align="center">`+ npsYW[i].unps + `</td>
              <td style="width:100px;" align="center">`+ npsYW[i].uyb + `</td>

              <td style="width:100px;" align="center">`+ npsYW[i].mnps + `</td>

              <td style="width:100px;" align="center">`+ npsYW[i].mm + `</td>
              <td style="width:100px;" align="center">`+ npsYW[i].tnps + `</td>

              <td style="width:100px;" align="center">`+ npsYW[i].mt + `</td>
              <td style="width:100px;" align="center">`+ npsYW[i].del + `</td>
          </tr>
          `
          }
          $(".talezbmx tbody").html(strfour)

        } else {
          $(".talezbmx tbody").html('')
        }


      }

      function fourbtnkd4() {
        // 服务
        var npsFW = []
        if (result.npsCityKDFW) {
          // npsCityYWFW
          for (var i = 0; i < result.npsCityKDFW.length; i++) {
            npsFW.push({
              name: result.npsCityKDFW[i].CITY_NAME,
              unps: parseFloat(result.npsCityKDFW[i].U_K_NPS).toFixed(2),
              uyb: parseFloat(result.npsCityKDFW[i].U_K_NUM).toFixed(2),
              // same: parseFloat(result.npsCityKDFW[i].U_NPS).toFixed(2),
              // clrcle: parseFloat(result.npsCityKDFW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsCityKDFW[i].M_K_NPS).toFixed(2),
              // myb: parseFloat(result.npsCityKDFW[i].M_NUM).toFixed(2),
              mm: parseFloat(result.npsCityKDFW[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsCityKDFW[i].T_K_NPS).toFixed(2),
              // tyb: parseFloat(result.npsCityKDFW[i].T_NUM).toFixed(2),
              mt: parseFloat(result.npsCityKDFW[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsCityKDFW[i].COMPETITION_GAP).toFixed(2),
            })
          }
          // 默认渲染整体数据
          var strfour = '';
          for (var i = 0; i < npsFW.length; i++) {
            strfour += `
        <tr>
            <td style="width:183px;" align="center">`+ npsFW[i].name + `</td>
            <td style="width:100px;" align="center">`+ npsFW[i].unps + `</td>
            <td style="width:100px;" align="center">`+ npsFW[i].uyb + `</td>

            <td style="width:100px;" align="center">`+ npsFW[i].mnps + `</td>

            <td style="width:100px;" align="center">`+ npsFW[i].mm + `</td>
            <td style="width:100px;" align="center">`+ npsFW[i].tnps + `</td>

            <td style="width:100px;" align="center">`+ npsFW[i].mt + `</td>
            <td style="width:100px;" align="center">`+ npsFW[i].del + `</td>
        </tr>
        `
          }
          $(".talezbmx tbody").html(strfour)

        } else {
          $(".talezbmx tbody").html('')
        }

      }
      fourbtnkd1()
      $(".btnzu3box .btn1").click(function () {
        $(".btnzu3box .btn2").removeClass("active");
        $(".btnzu3box .btn3").removeClass("active");
        $(".btnzu3box .btn4").removeClass("active");
        $(this).addClass("active")
        fourbtnkd1()
      })
      $(".btnzu3box .btn2").click(function () {
        $(".btnzu3box .btn1").removeClass("active");
        $(".btnzu3box .btn3").removeClass("active");
        $(".btnzu3box .btn4").removeClass("active");
        $(this).addClass("active")
        fourbtnkd2()
      })
      $(".btnzu3box .btn3").click(function () {
        $(".btnzu3box .btn1").removeClass("active");
        $(".btnzu3box .btn2").removeClass("active");
        $(".btnzu3box .btn4").removeClass("active");
        $(this).addClass("active")
        fourbtnkd3()
        delnan()
      })
      $(".btnzu3box .btn4").click(function () {
        $(".btnzu3box .btn1").removeClass("active");
        $(".btnzu3box .btn2").removeClass("active");
        $(".btnzu3box .btn3").removeClass("active");
        $(this).addClass("active")
        fourbtnkd4()
      })

      /* ***** fourbtn end ***** */

      /* ***** detail start ***** */
      function detailkd() {
        var deZT = []
        var deWL = []
        var deYW = []
        var deFW = []
        var destrall = ''
        var destrZT = ''
        var destrWLf = ''
        var destrWLc = ''
        var destrYWf = ''
        var destrYWc = ''
        var destrFWf = ''
        var destrFWc = ''

        for (var i = 0; i < result.npsKD.length; i++) {
          if (result.npsKD[i].L1_NAME == "整体") {
            deZT.push({
              name: result.npsKD[i].L_NAME,
              unps: parseFloat(result.npsKD[i].U_K_NPS).toFixed(2),
              utj: parseFloat(result.npsKD[i].U_K_REFERENCE_RATE).toFixed(2),
              user: parseInt(result.npsKD[i].U_NUM),
              same: parseFloat(result.npsKD[i].TB).toFixed(2),
              circle: parseFloat(result.npsKD[i].HB).toFixed(2),
              mnps: parseFloat(result.npsKD[i].M_K_NPS).toFixed(2),
              mm: parseFloat(result.npsKD[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsKD[i].T_K_NPS).toFixed(2),
              mt: parseFloat(result.npsKD[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsKD[i].COMPETITION_GAP).toFixed(2)
            })
          }
          if (result.npsKD[i].L1_NAME == "服务标签") {
            deFW.push({
              name: result.npsKD[i].L_NAME,
              unps: parseFloat(result.npsKD[i].U_K_NPS).toFixed(2),
              utj: parseFloat(result.npsKD[i].U_K_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsKD[i].U_NUM).toFixed(2),
              same: parseFloat(result.npsKD[i].TB).toFixed(2),
              circle: parseFloat(result.npsKD[i].HB).toFixed(2),
              mnps: parseFloat(result.npsKD[i].M_K_NPS).toFixed(2),
              mm: parseFloat(result.npsKD[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsKD[i].T_K_NPS).toFixed(2),
              mt: parseFloat(result.npsKD[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsKD[i].COMPETITION_GAP).toFixed(2)
            })
          }
          if (result.npsKD[i].L1_NAME == "业务标签") {
            deYW.push({
              name: result.npsKD[i].L_NAME,
              unps: parseFloat(result.npsKD[i].U_K_NPS).toFixed(2),
              utj: parseFloat(result.npsKD[i].U_K_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsKD[i].U_NUM).toFixed(2),
              same: parseFloat(result.npsKD[i].TB).toFixed(2),
              circle: parseFloat(result.npsKD[i].HB).toFixed(2),
              mnps: parseFloat(result.npsKD[i].M_K_NPS).toFixed(2),
              mm: parseFloat(result.npsKD[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsKD[i].T_K_NPS).toFixed(2),
              mt: parseFloat(result.npsKD[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsKD[i].COMPETITION_GAP).toFixed(2)

            })

          }
          if (result.npsKD[i].L1_NAME == "网络标签") {
            deWL.push({
              name: result.npsKD[i].L_NAME,
              unps: parseFloat(result.npsKD[i].U_K_NPS).toFixed(2),
              utj: parseFloat(result.npsKD[i].U_K_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsKD[i].U_NUM).toFixed(2),
              same: parseFloat(result.npsKD[i].TB).toFixed(2),
              circle: parseFloat(result.npsKD[i].HB).toFixed(2),
              mnps: parseFloat(result.npsKD[i].M_K_NPS).toFixed(2),
              mm: parseFloat(result.npsKD[i].COMPARE_M).toFixed(2),
              tnps: parseFloat(result.npsKD[i].T_K_NPS).toFixed(2),
              mt: parseFloat(result.npsKD[i].COMPARE_T).toFixed(2),
              del: parseFloat(result.npsKD[i].COMPETITION_GAP).toFixed(2)

            })
          }

        }
        for (var i = 0; i < deZT.length; i++) {
          destrZT += `
          <tr>
              <td>`+ deZT[i].name + `</td>
              <td>`+ deZT[i].unps + `</td>
              <td>`+ deZT[i].utj + `</td>
              <td>`+ deZT[i].user + `</td>
              <td>`+ deZT[i].same + `</td>
              <td>`+ deZT[i].circle + `</td>
              <td>`+ deZT[i].mnps + `</td>
              <td>`+ deZT[i].mm + `</td>
              <td>`+ deZT[i].tnps + `</td>
              <td>`+ deZT[i].mt + `</td>
              <td>`+ deZT[i].del + `</td>
          </tr>
          `
        }
        for (var i = 0; i < deWL.length; i++) {
          if (deWL[i].name == "网络标签") {
            destrWLf += `
            <tr class="parent" id="row1">
                <td>
                    `+ deWL[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deWL[i].unps + `</td>
                <td>`+ deWL[i].utj + `</td>
                <td>`+ deWL[i].user + `</td>
                <td>`+ deWL[i].same + `</td>
                <td>`+ deWL[i].circle + `</td>
                <td>`+ deWL[i].mnps + `</td>
                <td>`+ deWL[i].mm + `</td>
                <td>`+ deWL[i].tnps + `</td>
                <td>`+ deWL[i].mt + `</td>
                <td>`+ deWL[i].del + `</td>
            </tr>
            `
          } else {
            destrWLc += `
            <tr class="child_row1 child">
                <td>`+ deWL[i].name + `</td>
                <td>`+ deWL[i].unps + `</td>
                <td>`+ deWL[i].utj + `</td>
                <td>`+ deWL[i].user + `</td>
                <td>`+ deWL[i].same + `</td>
                <td>`+ deWL[i].circle + `</td>
                <td>`+ deWL[i].mnps + `</td>
                <td>`+ deWL[i].mm + `</td>
                <td>`+ deWL[i].tnps + `</td>
                <td>`+ deWL[i].mt + `</td>
                <td>`+ deWL[i].del + `</td>
            </tr>
            `
          }
        }
        for (var i = 0; i < deYW.length; i++) {
          if (deYW[i].name == "业务标签") {
            destrYWf += `
            <tr class="parent" id="row2">
                <td>
                    `+ deYW[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deYW[i].unps + `</td>
                <td>`+ deYW[i].utj + `</td>
                <td>`+ deYW[i].user + `</td>
                <td>`+ deYW[i].same + `</td>
                <td>`+ deYW[i].circle + `</td>
                <td>`+ deYW[i].mnps + `</td>
                <td>`+ deYW[i].mm + `</td>
                <td>`+ deYW[i].tnps + `</td>
                <td>`+ deYW[i].mt + `</td>
                <td>`+ deYW[i].del + `</td>
            </tr>
            `
          } else {
            destrYWc += `
            <tr class="child_row2 child">
                <td>`+ deYW[i].name + `</td>
                <td>`+ deYW[i].unps + `</td>
                <td>`+ deYW[i].utj + `</td>
                <td>`+ deYW[i].user + `</td>
                <td>`+ deYW[i].same + `</td>
                <td>`+ deYW[i].circle + `</td>
                <td>`+ deYW[i].mnps + `</td>
                <td>`+ deYW[i].mm + `</td>
                <td>`+ deYW[i].tnps + `</td>
                <td>`+ deYW[i].mt + `</td>
                <td>`+ deYW[i].del + `</td>
            </tr>
            `
          }
        }

        for (var i = 0; i < deFW.length; i++) {
          if (deFW[i].name == "服务标签") {
            destrFWf += `
            <tr class="parent" id="row3">
                <td>
                    `+ deFW[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deFW[i].unps + `</td>
                <td>`+ deFW[i].utj + `</td>
                <td>`+ deFW[i].user + `</td>
                <td>`+ deFW[i].same + `</td>
                <td>`+ deFW[i].circle + `</td>
                <td>`+ deFW[i].mnps + `</td>
                <td>`+ deFW[i].mm + `</td>
                <td>`+ deFW[i].tnps + `</td>
                <td>`+ deFW[i].mt + `</td>
                <td>`+ deFW[i].del + `</td>
            </tr>
            `
          } else {
            destrFWc += `
            <tr class="child_row3 child">
                <td>`+ deFW[i].name + `</td>
                <td>`+ deFW[i].unps + `</td>
                <td>`+ deFW[i].utj + `</td>
                <td>`+ deFW[i].user + `</td>
                <td>`+ deFW[i].same + `</td>
                <td>`+ deFW[i].circle + `</td>
                <td>`+ deFW[i].mnps + `</td>
                <td>`+ deFW[i].mm + `</td>
                <td>`+ deFW[i].tnps + `</td>
                <td>`+ deFW[i].mt + `</td>
                <td>`+ deFW[i].del + `</td>
            </tr>
            `
          }

        }
        destrall = destrZT + destrWLf + destrWLc + destrYWf + destrYWc + destrFWf + destrFWc;
        $(".tablemx tbody").html(destrall)
        $("tr.parent").click(function () {
          $(this)
            .siblings(".child_" + this.id)
            .slideToggle();
          var icon = $(this).find("i");
          if (icon.hasClass("glyphicon-chevron-down")) {
            icon.removeClass("glyphicon-chevron-down");
            icon.addClass("glyphicon-chevron-up");
          } else {
            icon.removeClass("glyphicon-chevron-up");
            icon.addClass("glyphicon-chevron-down");
          }
        });

      }
      /* ***** detail end ***** */

      /* ***** rank start ***** */
      function rankkd() {
        for (var i = 0; i < result.allRankKD.length; i++) {
          if (result.allRankKD[i].PROVINCE_NAME == proname) {
            rankall = result.allRankKD[i].allrank;
            $(".glo .num").html(rankall)
          }
        }
        for (var i = 0; i < result.allRankKDN.length; i++) {
          if (result.allRankKDN[i].PROVINCE_NAME == proname) {
            $(".nor .area").text("北方")
            console.log("北方");
            rankarea = result.allRankKDN[i].rank;
            $(".nor .num").html(rankarea)
          }
        }
        for (var i = 0; i < result.allRankKDS.length; i++) {
          if (result.allRankKDS[i].PROVINCE_NAME == proname) {
            $(".nor .area").text("南方")
            console.log("南方");
            rankarea = result.allRankKDS[i].rank;
            $(".nor .num").html(rankarea)
          }
        }
        $(".proname").text(proname)
        var str = $(".hrtitle2 span").text()
        var arr = str.split("-")
        arr[1] = proname
        console.log(arr);
        str = arr.join("-")
        $(".hrtitle2 span").text(str)


      }
      /* ***** rank end ***** */
      deckd()
      chart2kd()
      chart3kd()
      chart4kd()
      fiveboxkd()
      table1kd()
      fourbtnkd1()
      fourbtnkd2()
      fourbtnkd3()
      fourbtnkd4()
      detailkd()
      rankkd()
      delnan()
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

function delnan() {
  $('.tablemx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
    });
  });
  $('.rang tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
      if ($(this).text() == "NaN%") {
        $(this).text("—")
      }
    });
  });
  $('.talezbmx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
    });
  });
  $('.five ul li').each(function (i) {
    $(this).children('.num').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
    });
  });

}

