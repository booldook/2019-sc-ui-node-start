const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('/login'));
app.get('/book', (req, res) => {
	var books = [
		{"title": "홍길동전", floor: "3F"},
		{"title": "별주부전", floor: "5F"},
		{"title": "춘향전", floor: "6F"}
	];
	var html = '<h2>도서관 비치 도서</h2><ul>';
	for(var i in books) {
		html += `<li>${books[i].title} / ${books[i].floor}</li>`;
	}
	html += '</ul>';
	res.send(html);
});
/*
app.get('/', (req, res) => {
  res.send('Hello Express!!!!!!!!!!!!!');
});
*/
app.listen(3000, () => {
  console.log(`Server running at http://127.0.0.1:3000`);
});