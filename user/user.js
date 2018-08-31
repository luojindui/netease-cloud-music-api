var getUserInfo = function ({ phone, password }) {
    var userInfo = {}

    var url = `http://localhost:3000/login/cellphone?phone=${ phone }&password=${ password }`
    var cell = document.querySelector('.user-info')
    var uInfo = ''
    ajax('GET', url, function (r) {
        cell.innerHTML = r.response
        var data = JSON.parse(r.response)
        userInfo.userId = data.account.id
        userInfo.nickname = data.profile.nickname
        userInfo.signature = data.profile.signature
        userInfo.backgroundUrl = data.profile.backgroundUrl
        userInfo.avatarUrl = data.profile.avatarUrl
    })
    ajax('GET', 'http://localhost:3000/user/detail?uid=' + userInfo.userId, function (r) {
        var data = JSON.parse(r.response)
        userInfo.level = data.level
        userInfo.listenSongs = data.listenSongs
        userInfo.followeds = data.profile.followeds
        userInfo.follows = data.profile.follows
        userInfo.phone = phone
    })
    ajax('GET', 'http://localhost:3000/user/playlist?uid=' + userInfo.userId, function (r) {
        console.log(r.response)
        //歌单
    })
    return userInfo
}

var main = function () {
    var userLoginInfo = {
        phone: '13717099206',
        password: 'luojiarui'
    }
    var userInfo = getUserInfo(userLoginInfo)
    console.log(userInfo)
}

main()

