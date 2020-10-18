//类
var that
class Tab {
    //通用属性
    constructor(id) {
            that = this
                //获取标题元素
            this.main = document.querySelector(id)
                //获取添加 + 号
            this.add = this.main.querySelector('.tabadd')
                //获取所有的li
                // this.lis = this.main.querySelectorAll('li')
                //获取所有的sction
                // this.sections = this.main.querySelectorAll('section')
                // 获取 ul
            this.ul = this.main.querySelector('.fisrstnav ul')
                // section 的父元素
            this.fsection = this.main.querySelector('.tabscon')
            this.init()
        }
        //初始化函数
    init() {
            this.updataNode()
            this.add.onclick = this.addTab;
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i
                this.lis[i].onclick = this.toggleTab;

                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;
            }
        }
        //刷新获取
    updataNode() {
            //获取所有的li
            this.lis = this.main.querySelectorAll('li')
                //获取所有的sction
            this.sections = this.main.querySelectorAll('section')
                //获取
            this.remove = this.main.querySelectorAll('.icon-guanbi')
                //获取span 
            this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        }
        //清除样式
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }

    //切换
    toggleTab() {
            that.clearClass()
            this.className = 'liactive'
            that.sections[this.index].className = 'conactive'
        }
        //添加
    addTab() {
        that.clearClass()
        var math = parseInt(Math.random() * 50)
        var li = ' <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">' + math + '</section>'
            //追加
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section)
        that.init()
    }

    //删除
    removeTab(e) {
            e.stopPropagation()
            var index = this.parentNode.index;
            that.lis[index].remove()
            that.sections[index].remove()
            that.init()
            if (document.querySelector('.liactive')) return
            index--
            that.lis[index] && that.lis[index].click()
        }
        //编辑
    editTab() {
        var str = this.innerHTML;
        //双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() :
            document.selection.empty();
        this.innerHTML = '<input type="text">'
        var input = this.children[0]
        input.value = str
        input.select()
        input.onblur = function() {
                this.parentNode.innerHTML = this.value
            }
            //按下回车也可以把文本文档里面的值给span
        input.onkeydown = function(e) {
            if (e.keyCode === 13) {
                //手动调用表单失去焦点事件
                this.blur()
            }
        }


    }
}
new Tab('#tab')