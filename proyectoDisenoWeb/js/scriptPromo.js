document.addEventListener('DOMContentLoaded', function () {

    var promoSlider = document.querySelector('#slidePromo');

    if (promoSlider) {
        var promoImages = promoSlider.querySelector('.slider-imagesPromo');
        var promoImageElements = promoSlider.querySelectorAll('.slider-imagesPromo img');
        var promoPrevButton = promoSlider.querySelector('.promo-prev');
        var promoNextButton = promoSlider.querySelector('.promo-next');
        var promoCurrentIndex = 0;


        var promoSliderWidth = promoSlider.offsetWidth;
        var promoTotalImages = promoImageElements.length;
        promoImages.style.width = promoSliderWidth * promoTotalImages + 'px';


        function updatePromoSlider() {
            promoImages.style.marginLeft = '-' + promoCurrentIndex * promoSliderWidth + 'px';
        }

        promoPrevButton.onclick = function () {
            promoCurrentIndex = (promoCurrentIndex === 0) ? promoTotalImages - 1 : promoCurrentIndex - 1;
            updatePromoSlider();
            resetPromoAutoSlide();
        };


        promoNextButton.onclick = function () {
            promoCurrentIndex = (promoCurrentIndex === promoTotalImages - 1) ? 0 : promoCurrentIndex + 1;
            updatePromoSlider();
            resetPromoAutoSlide();
        };

        function promoAutoSlide() {
            promoCurrentIndex = (promoCurrentIndex === promoTotalImages - 1) ? 0 : promoCurrentIndex + 1;
            updatePromoSlider();
        }

        var promoAutoSlideInterval = setInterval(promoAutoSlide, 4000);


        function resetPromoAutoSlide() {
            clearInterval(promoAutoSlideInterval);
            promoAutoSlideInterval = setInterval(promoAutoSlide, 4000);
        }

        updatePromoSlider();
    }
});
