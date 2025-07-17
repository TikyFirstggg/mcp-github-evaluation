// 示例测试文件，用于测试代码搜索功能
const { getUserData } = require('../main/vulnerable-code');

describe('User Data Tests', () => {
    test('should fetch user data', () => {
        const result = getUserData(1);
        expect(result).toBeDefined();
    });

    test('should handle invalid user ID', () => {
        const result = getUserData(null);
        expect(result).toBeNull();
    });
});

// TODO: 添加更多测试用例
// FIXME: 修复getUserData函数的安全问题
