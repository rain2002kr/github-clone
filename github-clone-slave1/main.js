/* 모듈화 하는 방법 */
(function (window, document) {
    'use strict';
    const $toggles = document.querySelectorAll('.toggle'); // NodeList
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', () => {
        console.log('resize');
        if (window.innerWidth > 1024) {
            // Off toggle element
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document);
