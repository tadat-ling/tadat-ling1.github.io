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
                <p>Coming soon...</p>
                <div class="video-container">
                    <iframe width="100%" height="315" src="https://youtu.be/tollGa3S0o8?si=jiWqwIOUk-NJB012" frameborder="0" allowfullscreen></iframe>
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
    peki: `
        <section id="peki" class="peki-section">
            <div class="peki-header">
                <h1>My Peki</h1>
            </div>
            <div class="education-description">
                <p>Coming soon. </p>
                <p>I'm gonna show my little cutie here ...</p>
            </div>
        </section>
    `,
    life: `
        <section id="life" class="life-section">
            <div class="life-header">
                <h1>Daily Life</h1>
            </div>
            <div class="life-description">
                <p>Coming soon.</p>
                <p>I'm gonna show my adorable friends here, and of course Taylor Swift ...</p>
                <p> </p>
                <p>Sample</p>
                <p>    William Shakespeare, often hailed as the greatest playwright and poet of the English language, was a towering figure whose works have transcended time and space. His vast body of work includes 39 plays, 154 sonnets, and two long narrative poems, all of which have cemented his status as a timeless literary figure. His influence on language, drama, and culture is profound and widespread, affecting not only literature but also modern entertainment and various aspects of human expression. This essay delves into Shakespeare’s life, works, influence, and the timeless nature of his creations, attempting to capture the essence of why his legacy continues to endure more than four centuries after his death.</p>
                <h3>    Early Life and Background</h3>
                <p>    William Shakespeare was born on April 23, 1564, in Stratford-upon-Avon, a small market town in Warwickshire, England. His father, John Shakespeare, was a glove maker and a respected figure in the town, serving in various municipal roles. His mother, Mary Arden, came from a prosperous farming family. Though details of his early life remain shrouded in mystery, it is believed that Shakespeare attended the local grammar school, where he would have been exposed to Latin classics and the works of ancient writers like Ovid and Seneca.</p>
                <p>    At the age of 18, Shakespeare married Anne Hathaway, a woman eight years his senior. The couple had three children: Susanna and twins Hamnet and Judith. Little is known about the first few years of his married life, often referred to as Shakespeare's "lost years." However, by the early 1590s, Shakespeare had made his way to London and was beginning to make a name for himself in the world of theatre.</p>
                <h3>    The London Theatre Scene</h3>
                <p>    London in the late 16th century was a vibrant hub for the arts, particularly theatre. It was during this time that Shakespeare became associated with the Lord Chamberlain's Men, a renowned acting company. The company performed regularly at the Globe Theatre, which became one of the most famous playhouses of its time, largely because of Shakespeare’s association with it.</p>
                <p>    Shakespeare wrote plays for his company, acted in some of them, and was also a shareholder in the theatre. His involvement with the theatre wasn't limited to writing; he was deeply engaged with every aspect of production. This hands-on involvement gave him a unique perspective on how his works would be performed, which may explain the enduring popularity of his plays on stage.</p>
                <h3>    Shakespeare’s Works: Comedy, Tragedy, and History</h3>
                <p>    Shakespeare's body of work is usually categorized into three main genres: comedies, tragedies, and histories. His comedies, such as A Midsummer Night's Dream, Twelfth Night, and As You Like It, are known for their witty dialogue, mistaken identities, and exploration of love and relationships. These plays often end on a joyful note, with characters resolving their conflicts and misunderstandings, offering a humorous reflection on human nature.</p>
                <p>    On the other hand, Shakespeare’s tragedies, including Hamlet, Macbeth, Othello, and King Lear, delve into the darker aspects of human existence. These plays often explore themes of ambition, jealousy, betrayal, and the inevitable consequences of human flaws. Hamlet, for instance, is a complex exploration on literature, culture, and the arts is vast and far-reaching. His influence can be seen not only in the works of writers who came after him but also in modern storytelling across various media. Writers like Charles Dickens, Herman Melville, and James Joyce have all drawn upon Shakespeare's themes, characters, and structures in their works. Dickens, for example, was heavily influenced by Shakespeare's use of vivid characterization, while Melville’s Moby Dick contains numerous references to King Lear and Hamlet. Joyce, in his modernist masterpiece Ulysses, created intricate parallels with Shakespearean drama, particularly Hamlet.</p>
                <p>    Beyond literature, Shakespeare’s works have permeated all forms of art. His plays have been adapted countless times into films, television series, operas, and ballets. Some of the most famous adaptations include Romeo and Juliet (1968) by Franco Zeffirelli, Hamlet (1996) by Kenneth Branagh, and Macbeth (2015) by Justin Kurzel. These adaptations continue to introduce Shakespeare's works to new generations, showing how timeless his stories and characters are.</p>
                <p>    Furthermore, Shakespeare’s influence is evident in popular culture. His themes of love, power, jealousy, and revenge are continually revisited in modern narratives. Films like The Lion King draw inspiration from Hamlet, while West Side Story reimagines Romeo and Juliet in a 20th-century context. Even in contemporary music, references to Shakespeare are abundant, with artists like Bob Dylan, Taylor Swift, and Kanye West weaving Shakespearean references into their lyrics.</p>
                <h3>    The end</h3>
            </div>
        </section>
    `,
    ling: `
    <section id="ling" class="ling-section">
        <div class="ling-header">
            <h1>Linguistics</h1>
        </div>
        <div id="posts">
            <!-- Thanh tìm kiếm -->
            <div class="search-bar">
                <input type="text" placeholder="Find..." aria-label="Find">
                <button type="submit">Find</button>
            </div>
            <!-- Bắt đầu phần post -->
            <div id="ling-content">
                <div class="post">
                    <div class="post-image">
                        <img src="/Users/xiewenda/Downloads/question-mark.jpg" alt="Mô tả hình ảnh">
                    </div>
                <div class="post-content">
                    <a href="linguistics_article1.html" class="post-link">Tựa Đề Bài Viết</a>
                    <div class="post-meta">
                        <span class="post-time">Ngày đăng: 12/10/2024</span>
                    </div>
                    <p class="post-excerpt">Đây là phần tóm tắt nội dung của bài viết...</p>
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
