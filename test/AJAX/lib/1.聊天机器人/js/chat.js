$(function () {
    // 初始化右侧滚动条   滚动到最底部
    // 这个方法定义在scroll.js中
    resetui()
    $('.input_sub').on('click', function () {
        const text = $('#ipt').val().trim()
        if (text.length <= 0) return $('#ipt').val('')
        $('.talk_list').append(`<li class="right_word"><img src = "img/person02.png" /> <span>${text}</span></li>`)
        $('#ipt').val('')
        resetui()
        getMsg(text)

    })
    // 获取机器人回复
    function getMsg(text) {
        $.ajax({
            type: 'GET',
            url: 'https://ajax-base-api-t.itheima.net/api/robot',
            data: {
                spoken: text
            },
            success: function (res) {
                if (res.message === 'success') {
                    // 接收聊天消息
                    const msg = res.data.info.text
                    $('.talk_list').append(` <li class="left_word">
          <img src="img/person01.png" /> <span>${msg}</span>
        </li>`)
                    resetui()
                    getVoice(msg)
                }
            }
        })
    }
    function getVoice(text) {
        $.ajax({
            type: 'GET',
            url: 'https://ajax-base-api-t.itheima.net/api/synthesize',
            data: {
                text: text
            },
            success: function (res) {
                if (res.status === 200) {
                    $('#voice').attr("src", res.voiceUrl)
                }
            }
        })
    }
    // 回车键发送消息
    $('#ipt').on('keyup', function (e) {
        if (e.keyCode === 13) {
            $('.input_sub').click()
        }
    })
})