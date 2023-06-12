$(document).ready(function () {
  const currentTime = moment().format("YYYY年MM月DD日");
  document.getElementById("currentTime").innerHTML = currentTime;

  $("#sellRankTable").DataTable({
    searching: false,
    paging:false,
    dom: 'rt<"bottom"lp>',
    data: fakedata,
    columns: [
      {
        data: "rank",
      },
      {
        data: "store",
      },
      {
        data: "sales",
        render: function (data, type, row) {
          if (type === "display") {
            // console.log("sales-data =", data);
            // console.log("baseValue-type =", type);
            // console.log("baseValue-row =", row);
          }
          return data + '元'
        },
      },
      {
        data: "finished",
        render: function (data, type, row) {
          if (type === "display") {
            // console.log("finished-data =", data);
            // console.log("baseValue-type =", type);
            // console.log("finished-row =", row);
            // if(data >= 85){
              // $(row).find('td:eq(3)').css('color', '#ffa500');
            // }else{
            //   color = '#90ee90'
            // }
          }
          return data + '%'
        },
      },
    ],
    rowCallback: function(row, data, index){
      // console.log("rowCallback-row =", row);
      // console.log("rowCallback-data =", data);
      // console.log("rowCallback-index =", index);
      if(data.finished >= 85){
        $(row).find('td:eq(3)').css('color', '#ffa500');
      }else{
        $(row).find('td:eq(3)').css('color', '#90ee90');
      }
    }
  });
  // table.rows.add(fakedata).draw();
});