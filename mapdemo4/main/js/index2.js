// var yearq = localStorage.getItem("yearq")
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
var yearqq = [];
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
// 模拟获取部门名称
var apartment = "市场营销部";
if (localStorage.getItem("apartment")) {
  apartment = localStorage.getItem("apartment")
}
$(".apartment").html(apartment);


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

function drawchart3(q4, q1, yearqq) {
  var chart3 = echarts.init(document.getElementById("chart3"));
  var option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      // data: ['17Q4', '18Q1'],
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
      data: ["中国联通", "中国移动", "中国电信"],
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
function drawchart4r(skd1, skd2, skd3) {
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
      data: ["FTTH", "LAN", "XDSL"],
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
      data: ["联通用户", "调研样本"],
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
        name: "FTTH",
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
        name: "LAN",
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
    ]

  }
  chart4r.setOption(option4r)
}


getMessageyw(yearq)
// 获取数据
function getMessageyw(yearq) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "json/index2.json",
    data: {
      yearq: yearq
    },
    success: function (result) {
      console.log("请求成功");
      /* ***** dec部分 start ***** */
      function decyw() {
        if (result.deptOPERATORYW) {
          uv1 = result.deptOPERATORYW[0].COUNT
          mv1 = result.deptOPERATORYW[1].COUNT
          tv1 = result.deptOPERATORYW[2].COUNT
          var sumyw = uv1 + mv1 + tv1
          $(".part2 .chart1val").html(sumyw)
          $(".part2 .uv").html(uv1)
          $(".part2 .mv").html(mv1)
          $(".part2 .tv").html(tv1)
          $(".part2 .uvavg").html(parseFloat(uv1 / sumyw * 100).toFixed(2))
          $(".part2 .mvavg").html(parseFloat(mv1 / sumyw * 100).toFixed(2))
          $(".part2 .tvavg").html(parseFloat(tv1 / sumyw * 100).toFixed(2))
        }
      }
      /* ***** dec部分 end ***** */

      /* ***** chart部分 start ***** */
      // chart2
      function chart2yw() {
        $("#chart2").show()
        $("#chart2r").hide()

        if (result.quotaDeptAGEYW) {
          var age1 = [];
          var agedata1 = [];
          var sum1 = 0;
          var avg1 = 0;

          for (var i = 0; i < result.quotaDeptAGEYW.length; i++) {
            age1.push(result.quotaDeptAGEYW[i].AGE_GROUP + " ");
            agedata1.push({
              value: result.quotaDeptAGEYW[i].COUNT,
              name: result.quotaDeptAGEYW[i].AGE_GROUP + " "
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

        if (result.quotaDeptTypeYW) {
          for (var i = 0; i < result.quotaDeptTypeYW.length; i++) {
            yearqq[0] = result.quotaDeptTypeYW[0].YEAR_Q;
            yearqq[1] = result.quotaDeptTypeYW[result.quotaDeptTypeYW.length - 1].YEAR_Q;

            if (result.quotaDeptTypeYW[i].YEAR_Q == yearqq[0]) {
              if (result.quotaDeptTypeYW[i].USER_TYPE == "纯语音用户") {
                q4[0] = result.quotaDeptTypeYW[i].count
              }
              if (result.quotaDeptTypeYW[i].USER_TYPE == "有流量4G用户") {
                q4[1] = result.quotaDeptTypeYW[i].count
              }
              if (result.quotaDeptTypeYW[i].USER_TYPE == "有流量非4G用户") {
                q4[2] = result.quotaDeptTypeYW[i].count
              }
            }
            if (result.quotaDeptTypeYW[i].YEAR_Q == yearqq[1]) {
              if (result.quotaDeptTypeYW[i].USER_TYPE == "纯语音用户") {
                q1[0] = result.quotaDeptTypeYW[i].count
              }
              if (result.quotaDeptTypeYW[i].USER_TYPE == "有流量4G用户") {
                q1[1] = result.quotaDeptTypeYW[i].count
              }
              if (result.quotaDeptTypeYW[i].USER_TYPE == "有流量非4G用户") {
                q1[2] = result.quotaDeptTypeYW[i].count
              }
            }

          }
          drawchart3(q4, q1, yearqq);
        } else {
          $("#chart3").hide()

        }
      }
      // chart4
      function chart4yw() {
        $("#chart4").show()
        $("#chart4r").hide()

        if (result.quotaDeptStarYW) {
          for (var i = 0; i < result.quotaDeptStarYW.length; i++) {
            if (result.quotaDeptStarYW[i].USER_LEVEL == "1") {
              s1[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "2") {
              s2[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "3") {
              s3[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "4") {
              s4[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "5") {
              s5[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "未评级") {
              s6[1] = result.quotaDeptStarYW[i].COUNT
            }
          }
          var sum = s1[1] + s2[1] + s3[1] + s4[1] + s5[1] + s6[1]
          s1[1] = parseFloat(s1[1] / sum * 100).toFixed(2)
          s2[1] = parseFloat(s2[1] / sum * 100).toFixed(2)
          s3[1] = parseFloat(s3[1] / sum * 100).toFixed(2)
          s4[1] = parseFloat(s4[1] / sum * 100).toFixed(2)
          s5[1] = parseFloat(s5[1] / sum * 100).toFixed(2)
          s6[1] = parseFloat(s6[1] / sum * 100).toFixed(2)
          for (var i = 0; i < result.allDeptStarYW.length; i++) {
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "1") {
              s1[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "2") {
              s2[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "3") {
              s3[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "4") {
              s4[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "5") {
              s5[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "未评级") {
              s6[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
          }
          console.log(s1);

          drawchart4(s1, s2, s3, s4, s5, s6);

        } else {
          $("#chart4").hide()
        }
      }
      /* ***** chart部分 end ***** */

      /* ***** fivebox start ***** */
      function fiveboxyw() {
        $(".five .num1").html(parseFloat(result.pieYWDept[0].YEAR_NPS).toFixed(2))
        $(".five .num2").html(parseFloat(result.pieYWDept[0].YEAR_LIFT).toFixed(2))
        var finish = result.pieYWDept[0].YEAR_FINISH * 100;
        if (finish > 100) {
          finish = 100
        }
        if (finish < 0) {
          finish = 0
        }
        $(".five .num3").html(parseFloat(finish).toFixed(0) + "%")
        $(".five .num4").html(parseFloat(result.pieYWDept[0].QUARTER_NPS).toFixed(2))
        $(".five .num5").html(parseFloat(result.pieYWDept[0].QUARTER_LIFT).toFixed(2))
      }
      /* ***** fivebox end ***** */

      /* ***** table1 start ***** */
      function table1yw() {
        var strtable1 = '';
        var table1 = [];

        for (var i = 0; i < result.quarterYWNPS.length; i++) {
          table1.push({
            rank: result.quarterYWNPS[i].rank,
            name: result.quarterYWNPS[i].DEPT_NAME,
            finish: (parseFloat(result.quarterYWNPS[i].QUARTER_FINISH) * 100).toFixed(2),
            lift: parseFloat(result.quarterYWNPS[i].QUARTER_LIFT).toFixed(2)
          })
        }
        table1.sort(sortBy('rank', true));
        for (var i = 0; i < table1.length; i++) {
          if (table1[i].finish > 100) {
            table1[i].finish = 100
          }
          if (table1[i].finish < 0) {
            table1[i].finish = 0
          }

          strtable1 += `
          <tr>
            <td width="35%" align="canter">`+ table1[i].name + `</td>
            <td width="40%" align="canter">`+ table1[i].finish + `%</td>
            <td width="25%" align="canter">`+ table1[i].lift + `</td>
          </tr>
          `
        }
        $(".tablemx #tplWrapper_TemplateZ").html(strtable1)
      }
      /* ***** table1 end ***** */

      /* ***** table2 start ***** */
      function table2yw() {
        var strtable2 = '';
        var table2 = [];
        for (var i = 0; i < result.deptNPSYW.length; i++) {
          table2.push({
            num: i + 1,
            name: result.deptNPSYW[i].L_NAME,
            unps: parseFloat(result.deptNPSYW[i].U_NPS).toFixed(2),
            user: parseFloat(result.deptNPSYW[i].U_NUM).toFixed(2),
            same: parseFloat(result.deptNPSYW[i].YEAR_ON_YEAR).toFixed(2),
            circle: parseFloat(result.deptNPSYW[i].MONTH_ON_MONTH).toFixed(2),
            mnps: parseFloat(result.deptNPSYW[i].M_NPS).toFixed(2),
            mm: parseFloat(result.deptNPSYW[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.deptNPSYW[i].T_NPS).toFixed(2),
            mt: parseFloat(result.deptNPSYW[i].COMPARE_T).toFixed(2),
            match: parseFloat(result.deptNPSYW[i].COMPETITION_GAP).toFixed(2)
          })
        }
        for (var i = 0; i < table2.length; i++) {
          strtable2 += `
          <tr>
            <td style="width:72px;" align="center">`+ table2[i].num + `</td>
            <td style="width:163px;" align="center">`+ table2[i].name + `</td>
            <td style="width:72px;" align="center">`+ table2[i].unps + `</td>
            <td style="width:72px;" align="center">`+ table2[i].uuser + `</td>            
            <td style="width:72px;" align="center">`+ table2[i].same + `</td>
            <td style="width:72px;" align="center">`+ table2[i].circle + `</td>
            <td style="width:72px;" align="center">`+ table2[i].mnps + `</td>
            <td style="width:72px;" align="center">`+ table2[i].mm + `</td>
            <td style="width:72px;" align="center">`+ table2[i].tnps + `</td>
            <td style="width:72px;" align="center">`+ table2[i].mt + `</td>
            <td style="width:72px;" align="center">`+ table2[i].match + `</td>
          </tr>
          `
        }
        $(".talezbmx #tplWrapper_TemplateZ").html(strtable2)


      }
      /* ***** table2 end ***** */


      /* ***** rank strat ***** */
      function rankyw() {
        for (var i = 0; i < result.quarterYWNPS.length; i++) {
          if (result.quarterYWNPS[i].DEPT_NAME == apartment) {
            $(".nor .num").html(result.quarterYWNPS[i].rank)
          }
        }
        for (var i = 0; i < result.yearYWNPS.length; i++) {
          if (result.yearYWNPS[i].DEPT_NAME == apartment) {
            $(".glo .num").html(result.yearYWNPS[i].rank)
          }
        }
      }
      /* ***** rank end ***** */
      /* ***** table3 start ***** */
      function table3yw() {
        var strtable3 = '';
        var table3 = [];
        for (var i = 0; i < result.deptProYW.length; i++) {
          table3.push({
            num: result.deptProYW[i].rank,
            name: result.deptProYW[i].PROVINCE_NAME,
            unps: parseFloat(result.deptProYW[i].U_NPS).toFixed(2),
            user: parseFloat(result.deptProYW[i].U_NUM).toFixed(2),
            same: parseFloat(result.deptProYW[i].YEAR_ON_YEAR).toFixed(2),
            circle: parseFloat(result.deptProYW[i].MONTH_ON_MONTH).toFixed(2),
            mnps: parseFloat(result.deptProYW[i].M_NPS).toFixed(2),
            mm: parseFloat(result.deptProYW[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.deptProYW[i].T_NPS).toFixed(2),
            mt: parseFloat(result.deptProYW[i].COMPARE_T).toFixed(2),
            match: parseFloat(result.deptProYW[i].COMPETITION_GAP).toFixed(2)
          })
        }
        for (var i = 0; i < table3.length; i++) {
          strtable3 += `
          <tr>
            <td style="width:72px;" align="center">`+ table3[i].num + `</td>
            <td style="width:163px;" align="center">`+ table3[i].name + `</td>
            <td style="width:72px;" align="center">`+ table3[i].unps + `</td>
            <td style="width:72px;" align="center">`+ table3[i].user + `</td>            
            <td style="width:72px;" align="center">`+ table3[i].same + `</td>
            <td style="width:72px;" align="center">`+ table3[i].circle + `</td>
            <td style="width:72px;" align="center">`+ table3[i].mnps + `</td>
            <td style="width:72px;" align="center">`+ table3[i].mm + `</td>
            <td style="width:72px;" align="center">`+ table3[i].tnps + `</td>
            <td style="width:72px;" align="center">`+ table3[i].mt + `</td>
            <td style="width:72px;" align="center">`+ table3[i].match + `</td>
          </tr>
          `
        }
        $(".promx #tplWrapper_TemplateZ").html(strtable3)


      }
      /* ***** table3 end ***** */
      decyw()
      chart2yw()
      chart3yw()
      chart4yw()
      fiveboxyw()
      table1yw()
      table2yw()
      rankyw()
      table3yw()
      delnan()

    },
    error: function () {
      console.log("请求失败");
    }
  })
}
function getMessagekd(yearq) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "json/index2.json",
    data: {
      yearq: yearq
    },
    success: function (result) {
      console.log("请求成功");
      /* ***** dec部分 start ***** */
      function deckd() {
        if (result.deptOPERATORKD) {
          uv2 = result.deptOPERATORKD[0].COUNT
          mv2 = result.deptOPERATORKD[1].COUNT
          tv2 = result.deptOPERATORKD[2].COUNT
          var sumkd = uv2 + mv2 + tv2
          $(".part2 .chart1val").html(sumkd)
          $(".part2 .uv").html(uv2)
          $(".part2 .mv").html(mv2)
          $(".part2 .tv").html(tv2)
          $(".part2 .uvavg").html(parseFloat(uv2 / sumkd * 100).toFixed(2))
          $(".part2 .mvavg").html(parseFloat(mv2 / sumkd * 100).toFixed(2))
          $(".part2 .tvavg").html(parseFloat(tv2 / sumkd * 100).toFixed(2))

        }
      }
      /* ***** dec部分 end ***** */

      /* ***** chart部分 start ***** */
      // chart2
      function chart2kd() {
        $("#chart2").hide()
        $("#chart2r").show()

        if (result.quotaDeptAGEKD) {
          var age2 = [];
          var agedata2 = [];
          var sum2 = 0;
          var avg2 = 0;
          for (var i = 0; i < result.quotaDeptAGEKD.length; i++) {
            age2.push(result.quotaDeptAGEKD[i].AGE_GROUP + " ");
            agedata2.push({
              value: result.quotaDeptAGEKD[i].COUNT,
              name: result.quotaDeptAGEKD[i].AGE_GROUP + " "
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

        if (result.quotaDeptSexKD) {
          for (var i = 0; i < result.quotaDeptSexKD.length; i++) {
            if (result.quotaDeptSexKD[i].SEX == "女" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国联通") {
              girl[0] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "女" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国移动") {
              girl[1] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "女" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国电信") {
              girl[2] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "男" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国联通") {
              boy[0] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "男" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国移动") {
              boy[1] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "男" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国电信") {
              boy[2] = result.quotaDeptSexKD[i].COUNT
            }
          }
          drawchart3r(girl, boy);

        } else {
          $("#chart3r").hide()
        }
      }
      // chart4
      function chart4kd() {
        $("#chart4").hide()
        $("#chart4r").show()

        if (result.allDeptTypeKD) {
          for (var i = 0; i < result.allDeptTypeKD.length; i++) {
            if (result.allDeptTypeKD[i].USER_TYPE == "FTTH") {
              skd1[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
            }
            if (result.allDeptTypeKD[i].USER_TYPE == "LAN") {
              skd2[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
            }
            if (result.allDeptTypeKD[i].USER_TYPE == "XDSL") {
              skd3[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
            }

          }
          for (var i = 0; i < result.quotaDeptTypeKD.length; i++) {
            if (result.quotaDeptTypeKD[i].USER_TYPE == "FTTH且安装IPTV") {
              skd1[1] = result.quotaDeptTypeKD[i].COUNT
            }
            if (result.quotaDeptTypeKD[i].USER_TYPE == "FTTH且未安装IPTV") {
              skd1[1] += result.quotaDeptTypeKD[i].COUNT
            }
            if (result.quotaDeptTypeKD[i].USER_TYPE == "LAN") {
              skd2[1] = result.quotaDeptTypeKD[i].COUNT
            }
            if (result.quotaDeptTypeKD[i].USER_TYPE == "XDSL") {
              skd3[1] = result.quotaDeptTypeKD[i].COUNT
            }
            if (result.quotaDeptTypeKD[i].USER_TYPE == "xDSL") {
              skd3[1] = result.quotaDeptTypeKD[i].COUNT
            }

          }
          var sum = skd1[1] + skd2[1] + skd3[1]
          skd1[1] = parseFloat(skd1[1] / sum * 100).toFixed(2)
          skd2[1] = parseFloat(skd2[1] / sum * 100).toFixed(2)
          skd3[1] = parseFloat(skd3[1] / sum * 100).toFixed(2)


          drawchart4r(skd1, skd2, skd3);

        } else {
          $("#chart4r").hide()

        }
      }
      /* ***** chart部分 end ***** */

      /* ***** fivebox start ***** */
      function fiveboxkd() {
        $(".five .num1").html(parseFloat(result.pieKDDept[0].YEAR_NPS).toFixed(2))
        $(".five .num2").html(parseFloat(result.pieKDDept[0].YEAR_LIFT).toFixed(2))
        var finish = result.pieYWDept[0].YEAR_FINISH * 100;
        if (finish > 100) {
          finish = 100
        }
        if (finish < 0) {
          finish = 0
        }

        $(".five .num3").html(parseFloat(finish).toFixed(0) + "%")
        $(".five .num4").html(parseFloat(result.pieKDDept[0].QUARTER_NPS).toFixed(2))
        $(".five .num5").html(parseFloat(result.pieKDDept[0].QUARTER_LIFT).toFixed(2))

      }
      /* ***** fivebox end ***** */

      /* ***** table1 start ***** */
      function table1kd() {
        var strtable1 = '';
        var table1 = [];

        for (var i = 0; i < result.quarterKDNPS.length; i++) {
          table1.push({
            rank: result.quarterKDNPS[i].rank,
            name: result.quarterKDNPS[i].DEPT_NAME,
            finish: (parseFloat(result.quarterKDNPS[i].QUARTER_FINISH) * 100).toFixed(2),
            lift: parseFloat(result.quarterKDNPS[i].QUARTER_LIFT).toFixed(2)
          })
        }
        table1.sort(sortBy('rank', true));
        for (var i = 0; i < table1.length; i++) {
          if (table1[i].finish > 100) {
            table1[i].finish = 100
          }
          if (table1[i].finish < 0) {
            table1[i].finish = 0
          }
          strtable1 += `
          <tr>
            <td width="35%" align="canter">`+ table1[i].name + `</td>
            <td width="40%" align="canter">`+ table1[i].finish + `%</td>
            <td width="25%" align="canter">`+ table1[i].lift + `</td>
          </tr>
          `
        }
        $(".tablemx #tplWrapper_TemplateZ").html(strtable1)
      }
      /* ***** table1 end ***** */

      /* ***** table2 start ***** */
      function table2kd() {
        var strtable2 = '';
        var table2 = [];
        for (var i = 0; i < result.deptNPSKD.length; i++) {
          table2.push({
            num: i + 1,
            name: result.deptNPSKD[i].L_NAME,
            unps: parseFloat(result.deptNPSKD[i].U_NPS).toFixed(2),
            user: parseFloat(result.deptNPSKD[i].U_NUM).toFixed(2),
            //ulift: parseFloat(result.deptNPSKD[i].U_NPS).toFixed(2),
            same: parseFloat(result.deptNPSKD[i].YEAR_ON_YEAR).toFixed(2),
            circle: parseFloat(result.deptNPSKD[i].MONTH_ON_MONTH).toFixed(2),
            mnps: parseFloat(result.deptNPSKD[i].M_NPS).toFixed(2),
            mm: parseFloat(result.deptNPSKD[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.deptNPSKD[i].T_NPS).toFixed(2),
            mt: parseFloat(result.deptNPSKD[i].COMPARE_T).toFixed(2),
            match: parseFloat(result.deptNPSKD[i].COMPETITION_GAP).toFixed(2)
          })
        }
        for (var i = 0; i < table2.length; i++) {
          strtable2 += `
          <tr>
            <td style="width:72px;" align="center">`+ table2[i].num + `</td>
            <td style="width:163px;" align="center">`+ table2[i].name + `</td>
            <td style="width:72px;" align="center">`+ table2[i].unps + `</td>
            <td style="width:72px;" align="center">`+ table2[i].user + `</td>            
            <td style="width:72px;" align="center">`+ table2[i].same + `</td>
            <td style="width:72px;" align="center">`+ table2[i].circle + `</td>
            <td style="width:72px;" align="center">`+ table2[i].mnps + `</td>
            <td style="width:72px;" align="center">`+ table2[i].mm + `</td>
            <td style="width:72px;" align="center">`+ table2[i].tnps + `</td>
            <td style="width:72px;" align="center">`+ table2[i].mt + `</td>
            <td style="width:72px;" align="center">`+ table2[i].match + `</td>
          </tr>
          `
        }
        $(".talezbmx #tplWrapper_TemplateZ").html(strtable2)

      }
      /* ***** table2 end ***** */


      /* ***** rank strat ***** */
      function rankkd() {
        for (var i = 0; i < result.quarterKDNPS.length; i++) {
          if (result.quarterKDNPS[i].DEPT_NAME == apartment) {
            $(".nor .num").html(result.quarterKDNPS[i].rank)
          }
        }
        for (var i = 0; i < result.yearKDNPS.length; i++) {
          if (result.yearKDNPS[i].DEPT_NAME == apartment) {
            $(".glo .num").html(result.yearKDNPS[i].rank)
          }
        }
      }
      /* ***** rank end ***** */
      /* ***** table3 start ***** */
      function table3kd() {
        var strtable3 = '';
        var table3 = [];
        for (var i = 0; i < result.deptProKD.length; i++) {
          table3.push({
            num: result.deptProKD[i].rank,
            name: result.deptProKD[i].PROVINCE_NAME,
            unps: parseFloat(result.deptProKD[i].U_NPS).toFixed(2),
            user: parseFloat(result.deptProKD[i].U_NUM).toFixed(2),
            // ulift:parseFloat(result.deptProKD[i].U_NPS).toFixed(2),
            same: parseFloat(result.deptProKD[i].YEAR_ON_YEAR).toFixed(2),
            circle: parseFloat(result.deptProKD[i].MONTH_ON_MONTH).toFixed(2),
            mnps: parseFloat(result.deptProKD[i].M_NPS).toFixed(2),
            mm: parseFloat(result.deptProKD[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.deptProKD[i].T_NPS).toFixed(2),
            mt: parseFloat(result.deptProKD[i].COMPARE_T).toFixed(2),
            match: parseFloat(result.deptProKD[i].COMPETITION_GAP).toFixed(2)
          })
        }
        for (var i = 0; i < table3.length; i++) {
          strtable3 += `
          <tr>
            <td style="width:72px;" align="center">`+ table3[i].num + `</td>
            <td style="width:163px;" align="center">`+ table3[i].name + `</td>
            <td style="width:72px;" align="center">`+ table3[i].unps + `</td>
            <td style="width:72px;" align="center">`+ table3[i].user + `</td>            
            <td style="width:72px;" align="center">`+ table3[i].same + `</td>
            <td style="width:72px;" align="center">`+ table3[i].circle + `</td>
            <td style="width:72px;" align="center">`+ table3[i].mnps + `</td>
            <td style="width:72px;" align="center">`+ table3[i].mm + `</td>
            <td style="width:72px;" align="center">`+ table3[i].tnps + `</td>
            <td style="width:72px;" align="center">`+ table3[i].mt + `</td>
            <td style="width:72px;" align="center">`+ table3[i].match + `</td>
          </tr>
        `
        }
        $(".promx #tplWrapper_TemplateZ").html(strtable3)

      }
      /* ***** table3 end ***** */
      deckd()
      chart2kd()
      chart3kd()
      chart4kd()
      fiveboxkd()
      table1kd()
      table2kd()
      rankkd()
      table3kd()
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
      if ($(this).text() == "undefined") {
        $(this).text("—")
      }
    });
  });
  $('.tablemx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN%") {
        $(this).text("—")
      }
      if ($(this).text() == "undefined") {
        $(this).text("—")
      }
    });
  });
  $('.talezbmx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
      if ($(this).text() == "undefined") {
        $(this).text("—")
      }
    });
  });
  $('.promx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
      if ($(this).text() == "undefined") {
        $(this).text("—")
      }
    });
  });

  $('.five ul li').each(function (i) {
    $(this).children('.num').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
      if ($(this).text() == "undefined") {
        $(this).text("—")
      }
    });
  });

}
