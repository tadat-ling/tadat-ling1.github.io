// script.js

// 定义每个页面的内容
const pages = {
    about: `
        <section id="about" class="about-section">
            <div class="about-header">
                <h1>Dat Ta</h1>
                <p>Department of Chinese Language and Literature, Peking University</p>
                <p>tavandat@pku.edu.cn</p>
            </div>
            <div class="about-description">
                <p1>Welcome to my personal website! ...</p1>
                <p1>Welcome to my personal website! ...</p1>
                <p1>Welcome to my personal website! ...</p1>
            </div>
        </section>
    `,
    education: `
        <section id="education" class="education-section">
            <div class="education-header">
                <h1>Education</h1>
            </div>
            <div class="education-description">
                <p1>2020-2023: B.A. in Chinese Studies (High-quality Program), Hanoi University (Vietnam)</p1>
                <p1>2023-now: M.A. in Linguistics and Applied Linguistics, Peking University (Mainland China)</p1>
            </div>
        </section>
    `,
    peki: `
        <section id="peki" class="peki-section">
            <div class="peki-header">
                <h1>My Peki</h1>
            </div>
            <div class="education-description">
                <p1>Coming soon. I'm gonna show my little cutie here ...</p1>
            </div>
        </section>
    `,
    life: `
        <section id="life" class="life-section">
            <div class="life-header">
                <h1>Daily Life</h1>
            </div>
            <div class="life-description">
                <p1>Coming soon. I'm gonna show my adorable friends here, and of course Taylor Swift ...</p1>
            </div>
        </section>
    `
};

// 获取内容容器
const contentDiv = document.getElementById('content');

// 点击导航链接时加载对应内容
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默认链接行为
        const target = event.target.dataset.target; // 获取数据属性
        contentDiv.innerHTML = pages[target]; // 加载对应内容
    });
});

// 默认加载 About 页面
contentDiv.innerHTML = pages.about;
