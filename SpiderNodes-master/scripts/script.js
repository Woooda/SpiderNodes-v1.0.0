// JavaScript для изменения класса изображения при скроллинге
window.addEventListener('scroll', function() {
    var img = document.querySelector('.img');
    var threshold = img.offsetTop + img.offsetHeight * 0.5; // Задаем порог для изменения класса
    if (window.pageYOffset > threshold) {
        img.classList.add('dark'); // Добавляем класс для темного эффекта
    } else {
        img.classList.remove('dark'); // Удаляем класс, если скроллинг возвращается назад
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById('cookiePopup');
    const closeCookiePopup = document.getElementById('closeCookiePopup');
    const privacyPolicyPopup = document.getElementById('privacyPolicyPopup');
    const closePrivacyPolicyPopup = document.getElementById('closePrivacyPolicyPopup');
    
    // Показать табличку cookie с плавным появлением
    setTimeout(function() {
        cookiePopup.style.opacity = '1';
    }, 2000); // Появиться через 2 секунды (можно изменить на необходимое время)
    
    // Закрыть табличку cookie с плавным исчезновением при нажатии на кнопку "Принять"
    closeCookiePopup.addEventListener('click', function() {
        cookiePopup.style.opacity = '0';
        setTimeout(function() {
            cookiePopup.style.display = 'none';
            privacyPolicyPopup.style.display = 'block'; // Показать окно с предложением прочитать политику конфиденциальности
            privacyPolicyPopup.style.opacity = '1'; // Плавное появление окна
        }, 500); // Закрыть с задержкой 0.5 секунды (для завершения анимации)
    });
    
    // Закрыть окно с предложением прочитать политику конфиденциальности при нажатии на кнопку "Принять"
    closePrivacyPolicyPopup.addEventListener('click', function() {
        privacyPolicyPopup.style.opacity = '0';
        setTimeout(function() {
            privacyPolicyPopup.style.display = 'none';
        }, 500);
    });

    // Показать уведомление о политике конфиденциальности после закрытия уведомления о куки-файлах
    closeCookiePopup.addEventListener('click', function() {
        privacyPolicyPopup.style.display = 'block';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Переключение активного состояния кнопки мобильного меню и показ/скрытие навигационного меню
    var mobileMenuButton = document.querySelector('.mobile-menu-button');
    var navigation = document.querySelector('.navigation');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenuButton.classList.toggle('active');
        navigation.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Функция, определяющая, является ли устройство мобильным
    function isMobileDevice() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    // Проверяем, является ли устройство мобильным, и если да, перенаправляем на мобильную версию
    if (isMobileDevice()) {
        window.location.href = "https://m.spidernodes.space/";
    }
});

    
