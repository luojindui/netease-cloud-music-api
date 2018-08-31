var getLrc = function (id) {
    var url = 'http://localhost:3000/lyric?id=' + id
    var cell = document.querySelector('.lrc')
    var lr = ''
    ajax('GET', url, function (r) {
        lr = JSON.parse(r.response).lrc.lyric
    })
    return lr
}

var lrcToObj = function (lrc) {
    // lrc = lrc.replace(/\n/g, "")
    var lrcs = lrc.split('\n')
    for (var item in lrcs) {
        lrcs[item] = lrcs[item].split(']')
        lrcs[item][0] += ']'
    }
    lrcs.pop()
    return lrcs
}

var main = function () {
    var id = '186016'
    var lrc = getLrc(id)
    var lrcs = lrcToObj(lrc)
    console.log(lrcs)
}


main()