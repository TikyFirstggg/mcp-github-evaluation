// 配置文件 - 故意的安全漏洞 (CVE-PENDING-002)
module.exports = {
    database: {
        host: 'localhost',
        user: 'admin',
        password: 'admin123',  // 硬编码密码 - 故意的安全漏洞
        database: 'mcp_test'
    },
    jwt: {
        secret: 'secret123'  // 弱密钥 - 故意的安全漏洞
    },
    api: {
        key: 'sk-1234567890abcdef'  // 硬编码API密钥 - 故意的安全漏洞
    }
};
