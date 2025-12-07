const express = require('express');
const app = express();

// 必须加这两行解析 TradingView 数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// webhook 路由
app.post('/webhook', (req, res) => {
  console.log('==== webhook 被触发！时间:', new Date().toISOString(), '====');
  console.log('TradingView 数据:', req.body);  // 你要的日志

  // 这里放你 Telegram 代码，例如：
  // if (req.body.text) { sendToTelegram(req.body.text); }

  res.status(200).send('OK');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Render 服务器启动！端口:', port);
});
