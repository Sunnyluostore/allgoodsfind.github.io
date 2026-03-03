// back-button-script.js - 处理返回按钮逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 增强版返回上一页功能（适配summary动态页码）
    function goBack() {
        // 方案1：优先使用浏览器历史记录返回（最通用）
        if (window.history.length > 1) {
            window.history.back();
            return;
        }

        // 方案2：历史记录不足时，解析URL中的from参数（适配summary页码）
        const urlParams = new URLSearchParams(window.location.search);
        const fromPage = urlParams.get('from'); // 比如 ?from=page_1
        
        if (fromPage) {
            // 跳转到对应页码的summary页面（路径适配你的目录结构）
            window.location.href = `../sub_pages/${fromPage}.html`; 
            return;
        }

        // 兜底：跳转到summary默认页（page_1）
        window.location.href = "../sub_pages/page_1.html";
    }

    // 绑定导航栏返回按钮
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', goBack);
        // 键盘支持（无障碍）
        backButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goBack();
            }
        });
    }

    // 绑定页脚返回按钮
    const footerBackButton = document.getElementById('footerBackButton');
    if (footerBackButton) {
        footerBackButton.addEventListener('click', goBack);
    }
});