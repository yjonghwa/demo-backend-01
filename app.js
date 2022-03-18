'use strict';
const express = require('express');

var app = express();
app.use(express.json());

const image_list = [
    {
        name: '01',
        url: 'https://image.aladin.co.kr/product/28465/73/cover150/k092835920_1.jpg',
        value: '물고기는 존재하지 않는다',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=284657330'
    },
    {
        name: '02',
        url: 'https://image.aladin.co.kr/product/28999/18/cover150/8933871756_1.jpg',
        value: '나의 아저씨 1~2 세트 - 전2권',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=289991840'
    },
    {
        name: '03',
        url: 'https://image.aladin.co.kr/product/28212/10/cover150/k762835176_2.jpg',
        value: '이어령의 마지막 수업',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=282121049'
    },
    {
        name: '04',
        url: 'https://image.aladin.co.kr/product/28976/89/cover150/8950999943_1.jpg',
        value: '실마릴리온 + 끝나지 않은 이야기 세트 - 전2권',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=289768950'
    },
    {
        name: '05',
        url: 'https://image.aladin.co.kr/product/26942/84/cover150/k582730818_1.jpg',
        value: '불편한 편의점',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=269428498'
    },
    {
        name: '06',
        url: 'https://image.aladin.co.kr/product/28952/11/cover150/k692836418_1.jpg',
        value: '설민석의 한국사 대모험 20',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=289521110'
    },
    {
        name: '07',
        url: 'https://image.aladin.co.kr/product/29008/48/cover150/k732836429_1.jpg',
        value: '전지적 독자 시점 4',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290084864'
    },
    {
        name: '08',
        url: 'https://image.aladin.co.kr/product/28996/19/cover150/k672836027_1.jpg',
        value: '도원암귀 3',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=289961985'
    },
    {
        name: '09',
        url: 'https://image.aladin.co.kr/product/28976/90/cover150/8950999951_1.jpg',
        value: '가운데땅의 지도들 세트',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=289769087'
    },
    {
        name: '10',
        url: 'https://image.aladin.co.kr/product/28932/34/cover150/8934930543_1.jpg',
        value: '흔한남매 과학 탐험대 4 : 물질',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=289323497'
    },
]

app.get('/services/all', function (req, res) {
  console.log(`${req.method} ${req.url}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.send({outcome : image_list});
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server is working : ', host, port);
});
