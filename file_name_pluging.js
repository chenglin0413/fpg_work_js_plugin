 
function file_name_rule_plugin(){

 /*將樣板插入*/
      var html_tr_temp = $("<div id='temp'><td style=&quot;width:15%;&quot;><label id='file_name_rule_plugin_label'>檔名規則:</label></td><td style=&quot;width:35%;&quot;><div id ='file_name_rule_plugin'><select id ='file_name_rule_plugin_selector'></select></div></td></div>");
      $("#ctl00_ctl00_ctl00_MainContent_Content_IssueFields_ctlCustomFields_lstCustomFields > tbody > tr ").last().append(html_tr_temp);
      $("#ctl00_ctl00_ctl00_MainContent_Content_IssueFields_ctlCustomFields_lstCustomFields > tbody > tr ").last().append("<button id='btn' data-clipboard-target='#file_name_rule_plugin_text'>點選複製</button>");
      $("#ctl00_ctl00_ctl00_MainContent_Content_IssueFields_ctlCustomFields_lstCustomFields > tbody > tr ").last().append("<input type='text' id='file_name_rule_plugin_text'>");
      $("#temp").show();
      var text_obj = $('#file_name_rule_plugin_text');
      // text_obj.attr("disabled",true);
      text_obj.css("opacity", 0.1);

      var type_arr = ['','-展','-換','-銷','-驗'];
      var title_text = $("#ctl00_ctl00_ctl00_MainContent_Content_IssueFields_DisplayTitleLabel").text();
      var title_arr =  title_text.split("_");
      var title_name =  title_arr[0];
      var title_type = title_arr[1];
      var title_ticket_number = title_arr[2];
      var case_number = $("#ctl00_ctl00_ctl00_MainContent_Content_IssueFields_ctlCustomFields_lstCustomFields_ctl15_FieldValue").val();
      var issue_number = $("#ctl00_ctl00_ctl00_MainContent_Content_IssueHeader_lblIssueNumber").text();
     /*create_word_format*/
      var str_arr = new Array(5);
      var d = new Date();
      var year=d.getFullYear();
      var month=d.getMonth()+1;
      var date =d.getDate();
      str_arr[0]="反";
      str_arr[1]=title_ticket_number;//反應單號
      str_arr[2]=issue_number;//issue 號
      str_arr[3]=case_number;//立案號
      str_arr[4]=year.toString()+month.toString()+date.toString();
      
      var new_str="";
      for(var i=0;i<str_arr.length;i++){
       if(i<str_arr.length-1){
           new_str+=str_arr[i]+"-";
       }else{
           new_str+=str_arr[i];
       } 
      }
      /*5 type for lastword*/
     for(var j=0;j<5;j++){
        $("#file_name_rule_plugin > select").append("<option>"+new_str+type_arr[j]+"</option>");
     }
     /*set default value*/
     $("#file_name_rule_plugin_text").val(new_str);
     /*js clipboard*/
     var clipboard = new ClipboardJS('#btn');
     /*select_event*/
     select_on_change();
 }
 function btn(){
  $("#btn").click(function () {
        alert('123');
    });  
 }
 function select_on_change(){
  $("#file_name_rule_plugin_selector").change(function () {
        var obj_selector = $("#file_name_rule_plugin_selector");
        var text = obj_selector.find($("select > option:selected")).val();
        var obj_input = $("#file_name_rule_plugin_text");
        obj_input.val(text);
    });  
 }