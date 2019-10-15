form.on('submit(login)', function (data) {
    let formdata = data.field;
    //发起ajax请求，把数据提交给服务器
    let xhr = new XMLHttpRequest();
    // 建立连接
    xhr.open('get', `http://lulaoshi:81/user/login?username=${formdata.username}&passwd=${formdata.passwd}`);
    // 发起请求
    xhr.send();
    // 监听处理状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState != 4) return;
        // 当状态码为4的时候表示处理完成
        let result = JSON.parse(xhr.responseText);
        layer.msg(result.Msg);
        if(result.code == 1){
            window.location.href = 'index.html';
        }
        console.log(result);
    }

    return false;
});