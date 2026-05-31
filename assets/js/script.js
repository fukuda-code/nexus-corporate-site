// ハンバーガーメニュー
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});

// TOPへ戻るボタン
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* =========================
   上下スプリット（初回のみ）
========================= */
window.addEventListener("load", () => {
    const loader = document.querySelector(".split-loader-y");

    // 2回目以降はすぐ消す
    if (sessionStorage.getItem("loaded")) {
        loader.remove();
        return;
    }
    sessionStorage.setItem("loaded", "1");

    // 0.3s待機 + 0.8s描画 = 1.1s後に上下に割る
    setTimeout(() => {
        loader.classList.add("open");

        // 割れるアニメ完了後に削除
        setTimeout(() => {
            loader.remove();
        }, 1200);
    }, 1100);
});
