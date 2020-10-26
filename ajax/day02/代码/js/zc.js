//开始
function getCommentList() {
    //获取数据
    $.ajax({
        type: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success(res) {
            if (res.status !== 200) return alert('获取数据失败！')

            let rows = []
            res.data.forEach(item => {
                rows.push(`
                <li class="list-group-item">
                <span class="badge" style="background-color: #F0AD4E;">评论时间：${item.time}</span>
                <span class="badge" style="background-color: #5BC0DE;">评论人：${item.username}</span> ${item.content}
            </li>
                `)
            })
            $('#cmt-list').empty().append(rows)
        }
    })
}
getCommentList()

$(function() {
    $('#formAddCmt').on('submit', function(e) {
        e.preventDefault()
        let data = $(this).serialize()
            //添加数据
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data,
            success(res) {
                if (res.status !== 201) return alert('上传失败！')
                getCommentList()
                $('#formAddCmt')[0].reset()
            }
        })
    })
})