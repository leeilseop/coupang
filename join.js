 // 전체 동의
 
 
 $("#agree0").on("click", function(){

    // 체크박스 아이디 맞춰줘야함 ( agree1, agree2 ...)
    if ($(this).prop("checked")) {

      for ( var i=1, agreeLength = $(".agree").length; i <= agreeLength; i++) {
        $("#agree" + i).prop("checked", true); 
      };

    }

    else  {

      for ( var i=1, agreeLength = $(".agree").length; i <= agreeLength; i++) {
        $("#agree" + i).prop("checked", false); 
      };

    };

  });



  $(".agree").on("click",function() {

    // 전체 갯수
    var agreeLen = $("input.agree").length; 

    //체크 된 갯수
    var agreeCheckLen = $("input.agree:checkbox:checked").length;

    console.log("agreeCheckLen : " + agreeCheckLen);
    console.log("agreeLen : " + agreeLen);
    
    if( agreeCheckLen === agreeLen )  {
      $("#agree0").prop("checked", true);
    } else {
      $("#agree0").prop("checked", false);
    };

  });
