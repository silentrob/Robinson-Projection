

var ejs = require('./lib/ejs'),
    str = '<% if (foo) { %><p><%= foo %></p><% } %>',
    times = 5000;

var start = new Date;
while (times--) {
    ejs.render(str, { locals: { foo: 'bar' }});
}
