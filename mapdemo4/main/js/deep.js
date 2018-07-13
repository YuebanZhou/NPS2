function checkall(dom, name) {
  dom.click(function () {
    var allChecked = this.checked;
    $("input[name='" + name + "']").each(
      function () {
        this.checked = allChecked;
      })
  });
}
checkall($('.basic .con2 .all'), 'age');
checkall($(".basic .con3 .all"), 'sex');
checkall($(".basic .con4 .all"), 'nps');
checkall($(".basic .con5 .all"), 'area');
checkall($(".user .con1 .all"), 'usertype');
checkall($(".user .con2 .all"), 'casetype');
checkall($(".user .con3 .all"), 'star');
checkall($(".target .con2 .all"), 'wlcon');
checkall($(".target .con3 .all"), 'fwcon');
checkall($(".target .con4 .all"), 'ywcon');
checkall($(".target .con5 .all"), 'ipcon');

$(".target .con1 .all").click(function () {
  var allChecked = this.checked;
  $("input[name='l1']").each(
    function () {
      this.checked = allChecked;
    })
  $("input[name='wlcon']").each(
    function () {
      this.checked = allChecked;
    })
  $("input[name='fwcon']").each(
    function () {
      this.checked = allChecked;
    })
  $("input[name='ywcon']").each(
    function () {
      this.checked = allChecked;
    })
});
