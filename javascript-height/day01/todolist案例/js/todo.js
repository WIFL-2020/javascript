//引入
$(function() {
    load()
        //绑定事件 键盘按下事件
        // 1. 按下回车 把完整数据 存储到本地存储里面
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入您要的操作")
            } else {
                //读取本地存储原来的数据
                var local = getDate()
                    // console.log(local);
                    //把local数组进行更新数据 把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false })
                    //把这个数组local存储给本地存储
                saveDate(local)
                    //渲染页面
                load()
                    //清空用户输入框
                $(this).val("")
            }
        }
    });

    //3.toDolist删除操作
    $("ol,ul").on("click", "a", function() {
        if (window.confirm("你真的要删除吗?")) {
            //获取本地存储
            var data = getDate()
            console.log(data);
            //修改本地存储
            var index = $(this).attr("id")
            console.log(index);
            data.splice(index, 1)
                //保存到本地存储
            saveDate(data);
            //重新渲染页面
            load()
        }
    })

    //4.toDoList 正在进行和已完成选项操作
    $("ol,ul").on("click", "input", function() {
        //先获取本地存储的数据
        var data = getDate()
            //修改数据
        var index = $(this).siblings("a").attr("id")
        console.log(index);
        data[index].done = $(this).prop("checked")
        console.log(data);
        //保存到本地存储
        saveDate(data)
            //重新渲染页面
        load()
    })



    //读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("todolist")
        if (data !== null) {
            //本地存储里面的数据是字符串的格式 但是 我们需要的是对象格式的
            return JSON.parse(data)
        } else {
            return [];
        }
    }

    //保存本地存储数据
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data))
    }

    //渲染加载数据
    function load() {
        //读取本地存储的数据
        var data = getDate()
            //遍历之前要先清空ol里面的元素
        $("ol,ul").empty()
            //正在进行的个数
        var todoCount = 0
            //已经完成的个数
        var doneCount = 0
            //遍历这个数据
        $.each(data, function(i, n) {
                //追加
                if (n.done) {
                    $("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>")
                    doneCount++
                } else {
                    $("ol").prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>")
                    todoCount++
                }

            })
            //正在进行的个数
        $("#todocount").text(todoCount)
            //已经完成的个数
        $("#donecount").text(doneCount)
    }
})