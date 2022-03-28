// Toast function
function toast({ title = '', message = '', type = '', duration = 3000 }) {
  const main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement('div');
    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when click
    toast.onclick = function (e) {
      main.removeChild(toast);
      clearTimeout(autoRemoveId);
    };

    const icons = {
      success: 'fa-solid fa-circle-check',
      warning: 'fa-solid fa-circle-exclamation',
      danger: 'fa-solid fa-xmark',
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    // Add class and animation in HTML&CSS
    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.5s, fadeOut ease 1s ${delay}s forwards`;

    toast.innerHTML = `
      <div class="toast__icon">
        <i class="${icon}"></i>
      </div>
      <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__msg">${message}</p>
      </div>
      <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
      </div>`;
    main.appendChild(toast);
  }
}

// Funtion showSuccessToast
function showSuccessToast() {
  toast({
    title: 'Thành công!',
    message: 'Bạn đã đăng ký tài khoản thành công',
    type: 'success',
    duration: 5000,
  });
}

// Funtion showDangerToast
function showDangerToast() {
  toast({
    title: 'Thất bại!',
    message: 'Có lỗi xảy ra, vui lòng thử lại!',
    type: 'danger',
    duration: 5000,
  });
}
