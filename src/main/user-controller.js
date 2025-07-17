const express = require('express');
const router = express.Router();

// 用户登录接口
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    // 正常的登录逻辑
    const user = await User.findByCredentials(username, password);
    if (user) {
        const token = generateJWT(user);
        res.json({ success: true, token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// 获取用户profile - 故意的安全漏洞 (CVE-PENDING-001)
router.get('/profile/:id', async (req, res) => {
    const userId = req.params.id;
    
    // 缺少认证验证 - 这是故意的安全漏洞
    const user = await User.findById(userId);
    res.json(user);
});

module.exports = router;
