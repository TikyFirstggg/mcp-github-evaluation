// 这个文件包含安全漏洞，用于测试安全扫描功能
const express = require('express');
const app = express();

// 硬编码敏感信息 - 安全漏洞
const API_SECRET = "sk-1234567890abcdef";  // 密钥泄露
const DB_PASSWORD = "admin123";             // 硬编码密码

// SQL注入漏洞
function getUserData(userId) {
    const query = `SELECT * FROM users WHERE id = ${userId}`;  // SQL注入
    return database.query(query);
}

// XSS漏洞
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`<h1>Search results for: ${query}</h1>`);  // XSS
});

// 不安全的随机数生成
function generateToken() {
    return Math.random().toString(36);  // 不安全的随机数
}

module.exports = { getUserData, generateToken };
