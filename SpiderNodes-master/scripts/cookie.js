document.addEventListener("DOMContentLoaded", function() {
    // Отображение даты последнего обновления
    var lastUpdatedDate = new Date(); // Предполагается, что дата обновления - текущая дата
    var lastUpdatedElement = document.getElementById("lastUpdated");
    lastUpdatedElement.textContent = lastUpdatedDate.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
    
    // Показать модальное окно при загрузке страницы
    var cookiePopup = document.getElementById("cookiePopup");
    cookiePopup.style.display = "block";

    // Закрыть модальное окно с уведомлением о файлах cookie при нажатии на кнопку Принять
    var closeCookiePopupButton = document.getElementById("closeCookiePopup");
    closeCookiePopupButton.addEventListener("click", function() {
        cookiePopup.style.display = "none";
    });

    // Показать модальное окно с уведомлением о политике конфиденциальности при загрузке страницы
    var privacyPolicyPopup = document.getElementById("privacyPolicyPopup");
    privacyPolicyPopup.style.display = "block";

    // Закрыть модальное окно с уведомлением о политике конфиденциальности при нажатии на кнопку Принять
    var closePrivacyPolicyPopupButton = document.getElementById("closePrivacyPolicyPopup");
    closePrivacyPolicyPopupButton.addEventListener("click", function() {
        privacyPolicyPopup.style.display = "none";
    });
});
