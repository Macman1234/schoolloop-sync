// Fetch latest 10 emails and show the snippet

var Gmail = require('node-gmail-api')
  , gmail = new Gmail("DAIzaSyBz3SmpCw1ir3EY9dE2hJ6IHnaAopDsD0I")
  , s = gmail.messages('label:inbox', {max: 10})

s.on('data', function (d) {
  console.log(d.snippet)
})
