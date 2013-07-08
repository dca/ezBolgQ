var request = require('supertest');
var app = require('../app');

// it('GET / should show the title', function(done) {
//     request(app)
//         .get('/')
//         .expect(200)
//         .end(function(err, res) {
//         var body = res.text;
//         // 主页面显示介绍和表单
//         body.should.include('<title>Express</title>');

//         done(err);
//     });
// });

// it('Creat A New Post', function(done) {
//     request(app)
//         .post('/post/new')
//         .send({ title : 'Test Title', content: 'Test Content' })
//         .end(function(err, res) {
//             res.should.have.status(302);
//             res.text.should.include('Moved Temporarily. Redirecting to /post');
//             // res.redirects.should.eql(['/post']);
//             // console.log(res.text);

//             done(err);
//             // return done();
//         });
// });
