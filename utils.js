var ajax = function (method, url, callback) {
    var r = new XMLHttpRequest()
    r.open(method, url, false)
    r.onreadystatechange = function () {
        if (r.readyState == 4) {
            if (r.status == 200) {
                callback(r)
            }
        }
    }
    r.send(null)
}