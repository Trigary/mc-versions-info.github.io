let versioninfo = {
  "1.14.2": [0, 0, new Date("2019-05-27")],
  "1.14.1": [1, 35, new Date("2019-05-13")],
  "1.14": [2, 94, new Date("2019-04-23")],
  "1.13.2": [3, 302, new Date("2018-10-22")],
  "1.13.1": [4, 312, new Date("2018-08-22")],
  "1.13": [5, 454, new Date("2018-07-18")],
  "1.12.2": [6, 833, new Date("2017-09-18")],
  "1.12.1": [7, 844, new Date("2017-08-03")],
  "1.12": [8, 846, new Date("2017-06-07")],
  "1.11.2": [9, 898, new Date("2016-12-21")],
  "1.11.1": [10, 922, new Date("2016-12-20")],
  "1.11": [11, 962, new Date("2016-11-14")],
  "1.10.2": [12, 1249, new Date("2016-06-23")],
  "1.10.1": [13, 1322, new Date("2016-06-22")],
  "1.10": [14, 1328, new Date("2016-06-08")],
  "1.9.4": [15, 1364, new Date("2016-05-10")],
  "1.9.3": [16, 1370, new Date("2016-05-10")],
  "1.9.2": [17, 1383, new Date("2016-03-30")],
  "1.9.1": [18, 1390, new Date("2016-03-30")],
  "1.9": [19, 1403, new Date("2016-02-29")],
  "1.8.9": [20, 1805, new Date("2015-12-09")],
  "1.8.8": [21, 1815, new Date("2015-07-28")],
  "1.8.7": [22, 1853, new Date("2015-06-05")],
  "1.8.6": [23, 1863, new Date("2015-05-25")],
  "1.8.5": [24, 1864, new Date("2015-05-22")],
  "1.8.4": [25, 1869, new Date("2015-04-17")],
  "1.8.3": [26, 1884, new Date("2015-02-20")],
  "1.8.2": [27, 1895, new Date("2015-02-19")],
  "1.8.1": [28, 1944, new Date("2014-11-24")],
  "1.8": [29, 2076, new Date("2014-09-02")],
  "1.7.10": [30, 2572, new Date("2014-06-26")],
  "1.7.9": [31, 2579, new Date("2014-04-14")],
  "1.7.8": [32, 2583, new Date("2014-04-11")],
  "1.7.7": [33, 2589, new Date("2014-04-09")],
  "1.7.6": [34, 2589, new Date("2014-04-09")],
  "1.7.5": [35, 2597, new Date("2014-02-26")],
  "1.7.4": [36, 2601, new Date("2013-12-10")],
  "1.7.2": [37, 2639, new Date("2013-10-25")],
  "1.6.4": [38, 2735, new Date("2013-09-19")],
  "1.6.2": [39, 2737, new Date("2013-07-08")],
  "1.6.1": [40, 2806, new Date("2013-07-01")],
  "1.5.2": [41, 2881, new Date("2013-05-02")],
  "1.5.1": [42, 2905, new Date("2013-03-21")],
  "1.5": [43, 2919, new Date("2013-03-13")],
  "1.4.7": [44, 3031, new Date("2013-01-09")],
  "1.4.6": [45, 3037, new Date("2012-12-20")],
  "1.4.5": [46, 3101, new Date("2012-11-20")],
  "1.4.4": [47, 3175, new Date("2012-11-14")],
  "1.4.2": [48, 3206, new Date("2012-10-25")],
  "1.3.2": [49, 3235, new Date("2012-08-16")],
  "1.3.1": [50, 3239, new Date("2012-08-01")],
  "1.2.5": [51, 3280, new Date("2012-04-04")],
  "1.2.4": [52, 3294, new Date("2012-03-22")],
  "1.2.3": [53, 3319, new Date("2012-03-02")],
  "1.2.2": [54, 3323, new Date("2012-03-01")],
  "1.2.1": [55, 3326, new Date("2012-03-01")],
  "1.1": [56, 3374, new Date("2012-01-12")],
  "1.0.1": [57, 3374, new Date("2011-11-24")],
  "1.0": [58, 3374, new Date("2011-11-18")]
};

let versionClick = function(id) {
  let arr = versioninfo[id];
  let days = (new Date() - arr[2]) / (1000 * 60 * 60 * 24);
  let years = Math.floor(days / 365);
  let text = "";

  if (years === 0) {
    days = Math.floor(days);
    if (days === 1) {
      text = days + " day";
    } else {
      text = days + " days";
    }
  } else {
    if (years === 1) {
      text = "over " + years + " year";
    } else {
      text = "over " + years + " years";
    }
  }

  $("#version").text(id);
  $("#versions-behind").text(arr[0] + " version" + ((arr[0] !== 1) ? "s" : ""));
  $("#bugs-fixed").text(arr[1]);
  $("#time").text(text);
};

$(document).ready(function() {
  Object.keys(versioninfo).forEach(value => $("#nav-mobile").append(`<li><a class="sidenav-close waves-effect" id="${value}">${value}</a></li>`));

  let hash = $(location).attr("hash").substr(1);
  
  if (Object.keys(versioninfo).includes(hash)) {
    versionClick(hash);
  } else {
    versionClick(Object.keys(versioninfo)[0]);
  }
  
  M.Sidenav.init($(".sidenav"), {});

  $("a").click(function() {
    if (this.id !== "menu" && this.id !== "nav-open") {
      versionClick(this.id);
    }
  });
});
