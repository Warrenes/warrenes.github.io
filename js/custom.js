(function () {
    document.body.style.backgroundImage = "url(/images/background/" + (Math.ceil(Math.random() * 10)) % 8 + ".png)";

    var info = document.querySelector('div.info');
    while (info === null) {
        info = document.querySelector('div.info');
    }
    info.remove();

    var link = document.querySelector('li.post-copyright-link');
    if (link) {
        link.insertAdjacentHTML('beforeend', '<div class="copy-link-btn"><i class="fa fa-clipboard"></i></div>');
        var button = link.querySelector('.copy-link-btn');
        button.addEventListener('click', event => {
            var code = link.querySelector('a').text;
            var ta = document.createElement('textarea');
            ta.style.top = window.scrollY + 'px'; // Prevent page scrolling
            ta.style.position = 'absolute';
            ta.style.opacity = '0';
            ta.readOnly = true;
            ta.value = code;
            document.body.append(ta);
            const selection = document.getSelection();
            const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
            ta.select();
            ta.setSelectionRange(0, code.length);
            ta.readOnly = false;
            var result = document.execCommand('copy');
            link.querySelector('i').className = result ? 'fa fa-check' : 'fa fa-times';
            ta.blur(); // For iOS
            if (selected) {
                selection.removeAllRanges();
                selection.addRange(selected);
            }
            document.body.removeChild(ta);
        });
        button.addEventListener('mouseleave', event => {
            setTimeout(() => {
                event.target.querySelector('i').className = 'fa fa-clipboard';
            }, 300);
        });
    }
})();
