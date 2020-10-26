$(function() {

    function getNewsList() {
        template.defaults.imports.filterName = function(data) {
            let date = new Date(data)
            let y = date.getFullYear()
            let m = (date.getMonth() + 1).toString().padStart(2, 0)
            let d = (date.getDate()).toString().padStart(2, 0)
            let h = (date.getHours()).toString().padStart(2, 0)
            let f = (date.getMinutes()).toString().padStart(2, 0)
            let s = (date.getSeconds()).toString().padStart(2, 0)
            return `${y}-${m}-${d} ${h}:${f}:${s}`
        }
        $.get('http://www.liulongbin.top:3006/api/news', function(res) {
            if (res.status !== 200) return alert('获取失败！')

            res.data.forEach(item => item.tags = item.tags.split(','))
            $('#news-list').html(template('tpl-news', res))
        })

    }
    getNewsList()

})