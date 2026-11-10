// ===== 首映倒數 =====
let 今天 = new Date();
今天.setHours(0, 0, 0, 0);

// JavaScript 的月份從 0 開始：11 = 12 月
let 上映日期 = new Date(2026, 11, 12);

// 先相減（毫秒差）再除以一天的毫秒數；括號不可省略
let 相差天數 = Math.ceil((上映日期 - 今天) / (1000 * 60 * 60 * 24));

let 倒數文字;
if (相差天數 > 0) {
    倒數文字 = "距離首映場還有 " + 相差天數 + " 天";
} else if (相差天數 === 0) {
    倒數文字 = "今天首映！";
} else {
    倒數文字 = "熱映中";
}

document.getElementById("倒數").textContent = 倒數文字;
document.getElementById("倒數2").textContent = 倒數文字;

// ===== 導覽列：標示目前所在區塊 =====
const 導覽連結 = document.querySelectorAll(".nav-links a");
const 區塊們 = document.querySelectorAll("main section[id]");

const 觀察器 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            導覽連結.forEach((a) => {
                a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
            });
        }
    });
}, { rootMargin: "-45% 0px -50% 0px" });

區塊們.forEach((s) => 觀察器.observe(s));

// ===== 捲動後導覽列加深背景 =====
const 導覽列 = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    導覽列.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });
