// 슬라이드 애니메이션
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      const index = [...slides].indexOf(entry.target);
      updateDots(index);
    }
  });
}, {
  threshold: 0.3
});

slides.forEach(slide => {
  slideObserver.observe(slide);
});

// 네비게이션 Dot 업데이트
function updateDots(activeIndex) {
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Dot 클릭 시 해당 슬라이드로 이동
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides[index].scrollIntoView({ behavior: 'smooth' });
  });
});
