document.addEventListener('DOMContentLoaded', () => {
    const templatesContainer = document.querySelector('.templates-container');

    // 模拟模板数据
    const templates = [
        { id: 1, name: '简历模板', image: 'template1.jpg', downloadLink: 'template1.docx' },
        { id: 2, name: '海报模板', image: 'template2.jpg', downloadLink: 'template2.psd' },
        { id: 3, name: 'PPT模板', image: 'template3.jpg', downloadLink: 'template3.pptx' },
        { id: 4, name: '表格模板', image: 'template4.jpg', downloadLink: 'template4.xlsx' },
    ];

    // 动态加载模板
    templates.forEach(template => {
        const templateElement = document.createElement('div');
        templateElement.className = 'template';
        templateElement.innerHTML = `
            <img src="${template.image}" alt="${template.name}">
            <div class="template-info">
                <h3>${template.name}</h3>
                <a href="${template.downloadLink}" class="download-btn" download>下载</a>
            </div>
        `;
        templatesContainer.appendChild(templateElement);
    });
});