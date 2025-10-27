// 渲染模板
function renderTemplates(templates) {
    templatesContainer.innerHTML = '';
    templates.forEach(template => {
        const templateElement = document.createElement('div');
        templateElement.className = 'template';
        templateElement.innerHTML = `
            <div class="thumbnail" style="background-image: url('${template.fullImageUrl}');"></div>
            <div class="template-info">
                <h3>${template.title}</h3>
                <a href="${template.downloadUrl}" class="download-btn">下载</a>
            </div>
        `;
        templatesContainer.appendChild(templateElement);

        // 添加点击事件
        const thumbnail = templateElement.querySelector('.thumbnail');
        thumbnail.addEventListener('click', () => {
            modalImage.src = template.fullImageUrl;
            modal.style.display = 'flex';
        });
    });
}

// 搜索功能
function searchTemplates(keyword, templates) {
    return templates.filter(template => 
        template.title.toLowerCase().includes(keyword.toLowerCase())
    );
}

// 关闭模态框
closeBtn.addEventListener('click', () => {
    modal.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.animation = '';
    }, 300);
});

// 初始化页面
window.addEventListener('DOMContentLoaded', () => {
    fetch('templates.json')
        .then(response => response.json())
        .then(data => {
            // 保存原始模板数据
            const originalTemplates = data;
            renderTemplates(originalTemplates);

            // 绑定搜索框事件
            const searchBox = document.querySelector('.search-box');
            searchBox.addEventListener('input', (e) => {
                const keyword = e.target.value.trim();
                const filteredTemplates = searchTemplates(keyword, originalTemplates);
                renderTemplates(filteredTemplates);
            });
        })
        .catch(error => console.error('加载模板失败:', error));
});