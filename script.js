// script.js

// 定义每个页面的内容
const pages = {
    about: `
        <section id="about" class="about-section">
            <div class="about-header">
                <h1>Dat Ta</h1>
                <p>Department of Chinese Language and Literature, Peking University</p>
                <p>tavandat 'at' pku.edu.cn</p>
            </div>
            <div class="about-description">
                <p>Welcome to my personal website! ...</p>
                <p>It's All Too Well season...</p>
                <div class="video-container">
                    <div class="embed-container">
                        <iframe 
                        src="https://www.youtube.com/embed/tollGa3S0o8" 
                        frameborder="0" 
                        allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    `,
    education: `
        <section id="education" class="education-section">
            <div class="education-header">
                <h1>Education</h1>
            </div>
            <div class="education-description">
                <p>2023-now: M.A. in Linguistics and Applied Linguistics, Peking University (Mainland China)</p>
                <p>2020-2023: B.A. in Chinese Studies (High-quality Program), Hanoi University (Vietnam)</p>
            </div>
        </section>
    `,
    public: `
        <section id="public" class="public-section">
            <div class="public-header">
                <h1>Publications</h1>
            </div>
            <div class="public-description">
                <h3>Books and Translations</h3>
                <p> [2] Van Dat, Ta (translator). (2024). Những câu chuyện bồi dưỡng chỉ số IQ – AQ - MQ - EQ - LQ (Improving IQ – AQ - MQ - EQ - LQ for children through telling stories [5 volumes]). Hanoi: Youth Press. (from Mandarin Chinese into Vietnamese)</p>
                <p> [1] Van Dat, Ta; Le Thuy Anh, Pham. (2023). Chinh phục đề thi THPT Quốc gia Tiếng Trung khối D4 (A guide to Chinese test in the Vietnam High School Graduation&University Entrance Exam). Hanoi: Vietnam National University (Hanoi) Press. (written in Mandarin Chinese and Vietnamese) ISBN: 978-604-396-808-8</p>
                <h3>Presentation</h3>
                <p> [2] Van Dat, Ta. (2023).The relationship between the tone systems of Sino-Vietnamese and Mandarin Chinese (presented in Mandarin Chinese). 2023 Student Annual scientific research session, Dep. of Chinese Studies, Hanoi University.</p>
                <p> [1] Van Dat, Ta. (2022).Master Xuanzang's views on Buddhist scripture translation and their inspiration to students majored in Translation-Interpretation (presented in Vietnamese). 2022 Student Annual scientific research session, Dep. of Chinese Studies, Hanoi University. In collabration with Thi Phuong Thao, Thieu.</p>
            </div>
        </section>
    `,
    personal: `
        <section id="personal" class="personal-section">
            <div class="personal-header">
                <h1>Personal</h1>
            </div>
            <div class="personal-description">
                <p>Coming soon. </p>
                <p>I'm gonna show my little cutie Peki, my adorable friends here... (and of course Taylor Swift)</p>
            </div>
        </section>
    `,
    resource: `
    <section id="resource" class="resource-section">
        <div class="resource-header">
            <h1>Resource</h1>
        </div>
        <div id="posts">
            <!-- Thanh tìm kiếm -->
            <div class="search-bar">
                <input type="text" placeholder="Find..." aria-label="Find">
                <button type="submit">Find</button>
            </div>
            <!-- Bắt đầu phần post -->
            <div id="resource-content">
                <div class="post">
                    <div class="post-image">
                        <img src="/Users/xiewenda/Downloads/question-mark.jpg" alt="Picture">
                    </div>
                <div class="post-content">
                    <a href="demo.html" class="post-link">Demo</a>
                    <div class="post-meta">
                        <span class="post-time">Posted on: 12/10/2024</span>
                    </div>
                    <p class="post-excerpt">Abstract of this post...</p>
                </div>
            </div>
        </div>
            <!-- Thêm nhiều post tương tự ở đây -->
            <!-- Cuối cùng thêm thanh phân trang -->
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
            </div>
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
