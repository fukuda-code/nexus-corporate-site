// 新着情報 外部JSON読み込み
async function loadNews() {
    try {
        const res = await fetch("./assets/data/news.json");
        const news = await res.json();

        const list = document.getElementById("news-list");
        list.innerHTML = "";

        news.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="date">${item.date}</span>　${item.text}`;
            list.appendChild(li);
        });

    } catch (err) {
        console.error("ニュース読み込みエラー:", err);
    }
}

loadNews();

// THREE.js パーティクル
const canvas = document.getElementById("hero-canvas");
const scene = new THREE.Scene();

function getCanvasSize() {
    return {
        width: canvas.clientWidth,
        height: canvas.clientHeight
    };
}

let { width, height } = getCanvasSize();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height, false);

const geometry = new THREE.BufferGeometry();
const particles = 2000;
const positions = new Float32Array(particles * 3);

for (let i = 0; i < particles * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 400;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
    color: 0x00BCEB,
    size: 1.5,
    transparent: true,
    opacity: 0.9
});

const points = new THREE.Points(geometry, material);
scene.add(points);

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.002;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.002;
});

function onResize() {
    const { width, height } = getCanvasSize();
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

window.addEventListener("resize", onResize);

function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.0005;
    points.rotation.x += mouseY * 0.003;
    points.rotation.y += mouseX * 0.003;
    renderer.render(scene, camera);
}

animate();

// 変更後（全体をDOMContentLoadedでラップ）
document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero h2", {
        opacity: 0,
        y: 40,
        duration: 1.4,
        ease: "power4.out"
    });

    const topCards = document.querySelectorAll('.services .service-card');

    /* 変更後 */
    topCards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;

        gsap.fromTo(card,
            { opacity: 0, x: fromLeft ? -80 : 80 },
            {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                opacity: 1,
                x: 0,
                duration: 0.9,
                delay: i * 0.1,
                ease: 'power3.out',
            }
        );
    });

});