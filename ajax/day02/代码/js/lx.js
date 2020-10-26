function getCommentList() {
    $.ajax({
        type: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            console.log(res);
            if (res.status !== 200) return alert('获取数据失败！')

            var rows = []
                // $.each(res.data, function(i, item) {
                //             rows.push(`
                //             <li class="list-group-item">
                //   <span class="badge" style="background-color: #F0AD4E;">评论时间：</span>
                //   <span class="badge" style="background-color: #5BC0DE;">评论人：</span>
                //   Item 1
                // </li> `)
                //         })
            res.data.forEach(item => {
                item.uername
                item.content
                item.time
                rows.push(`<li class="list-group-item">
               <span class="badge" style="background-color: #F0AD4E;">评论时间：${item.time}</span>
                <span class="badge" style="background-color: #5BC0DE;">评论人：${item.username}</span>
                ${item.content}
               </li>`)
            })

            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}


getCommentList();


$(function() {
    $('#formAddCmt').on('submit', function(e) {
        e.preventDefault()
        let data = $(this).serialize()

        // return false
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data,
            success(res) {
                if (res.status !== 201) return alert('上传失败')
                getCommentList()
                $('#formAddCmt')[0].reset()

            }

        })

        // return false

    })
})