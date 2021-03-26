//copy 複製到剪貼簿
$("#copy").click(()=>{
    var output = document.getElementById("TsjUrl");
    if(output.value != "")
    {
        output.select();
        output.setSelectionRange(0, 99999)
        document.execCommand("copy");
        new jBox('Notice', {
            content: '已複製',
            color: 'blue',
            position :{x:"center"},
            autoClose :1000
        });
    }  
    else
    {
        new jBox('Notice', {
            content: '無內容',
            color: 'blue',
            position :{x:"center"},
            autoClose :1000
        });
    }
    
});

//縮址 //單網域就把type拿掉
function UrlTrans(type)
{
    //$("#airfuck").attr("style","margin-top: 50px;");
    let originUrl = $("#originUrl").val();
    console.log(originUrl);
    $.ajax({
        url: "trans.php",
        type:'POST',
        //dataType:'json',
        data: {
            "originUrl" : originUrl,
            "type" : type,
        },
        success: (text)=>{
            console.log("success");
            console.log(text);
            let tsjUrl = text;
            if(tsjUrl.substring(0,4) == 'http')
            {
                new jBox('Notice', {
                    content: '成功',
                    color: 'green',
                    position :{x:"center"},
                    autoClose :1000
                  });
                $("#TsjUrl").val(text);
            }
            else
            {
                new jBox('Notice', {
                    content: '失敗',
                    color: 'red',
                    position :{x:"center"},
                    autoClose :1000
                  });
                //$("#TsjUrl").val('縮址失敗');
            }
            
        },
        error:()=>{
            new jBox('Notice', {
                content: '失敗',
                color: 'red',
                position :{x:"center"},
                autoClose :1000
              });
            console.log('error');
            //$("#TsjUrl").val('縮址失敗');
        }      
    });
}

//根據radio的選擇改變縮址時方法的參數
function change(type)
{
    if(type == 'tw')
    {
        $("#TsjUrl").attr("placeholder","http://{{your domain}}.tw/");
        $("#submit").attr("onclick","UrlTrans('tw')")
    }
    else
    {
        $("#TsjUrl").attr("placeholder","http://{{your domain}}.com/");
        $("#submit").attr("onclick","UrlTrans('com')")
    }
}