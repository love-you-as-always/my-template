document.addEventListener('DOMContentLoaded', () => {
    const templatesContainer = document.querySelector('.templates-container');

    // 模拟模板数据
    const templates = [
        { id: 1, name: '2026目标拆解表模板', image: 'imgs/2026目标拆解表模板.png', downloadLink: 'downloads/2026目标拆解表模板.xlsx' },
        { id: 2, name: '个人月度预算表模板', image: 'imgs/个人月度预算表模板.png', downloadLink: 'downloads/个人月度预算表模板.xlsx' },
        { id: 3, name: '课程表模板', image: 'imgs/课程表模板.png', downloadLink: 'downloads/课程表模板.xlsx' },
        { id: 4, name: '人事四表联动系统模板', image: 'imgs/人事四表联动系统模板.png', downloadLink: 'downloads/人事四表联动系统模板.xlsx' },
        { id: 5, name: '销售日报表模板', image: 'imgs/销售日报表模板.png', downloadLink: 'downloads/销售日报表模板.xlsx' },
        { id: 6, name: '员工KPI进度看板表模板', image: 'imgs/员工KPI进度看板表模板.png', downloadLink: 'downloads/员工KPI进度看板表模板.xlsx' },
        { id: 7, name: '月收入支出模板', image: 'imgs/月收入支出模板.png', downloadLink: 'downloads/月收入支出模板.xlsx' },
        { id: 8, name: '周计划模板', image: 'imgs/周计划模板.png', downloadLink: 'downloads/周计划模板.xlsx' },
        {id: 9, name: '清新绿答辩流程目录单页模板', image: 'imgs/清新绿答辩流程目录单页模板.png', downloadLink: 'downloads/清新绿答辩流程目录单页模板.xlsx'}
    ];

    // 动态加载模板
    templates.forEach(template => {
        const templateElement = document.createElement('div');
        templateElement.className = 'template';
        templateElement.innerHTML = `
            <img src="${template.image}" alt="${template.name}" class="template-img">
            <div class="template-info">
                <h3>${template.name}</h3>
                <a href="${template.downloadLink}" class="download-btn" download>下载</a>
            </div>
        `;
        templatesContainer.appendChild(templateElement);

        // 添加点击预览功能
        const img = templateElement.querySelector('.template-img');
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${template.image}" alt="${template.name}" class="modal-img">
                </div>
            `;
            document.body.appendChild(modal);

            // 关闭模态框
            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });

            // 点击模态框外部关闭
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});