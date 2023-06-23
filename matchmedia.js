(function() {
    $(document).on('mouseenter', '#category-products .nav span', function(e) {
        if (!$(this).hasClass('active')) {
            $(this).parents('.shadowed').find('.nav span').removeClass('active');
            $(this).addClass('active');
            var a = $(this).index();
            $(this).parents('.shadowed').find('.owl img.active').fadeOut(200).removeClass('active');
            $(this).parents('.shadowed').find('.owl img').eq(a).addClass('active').fadeIn(200);
        }
    });

    function o() {/*функція вирівнювання висот елементів по максимальній висоті*/
        var h = document.querySelectorAll('#category-products .item')
        var k = document.querySelectorAll('#category-products .shadowed')
        var g = []
        var q = 0
        for (var b = 0; b < document.querySelectorAll('#category-products .item').length; b++) {
            g.push(h[b].offsetHeight)
        }
        var j = g.reduce(function(k, l) {
            return Math.max(k, l)
        })
        console.log(j)

        console.log(k[g.indexOf(j)].children.length)
        for (var p = 0; p < k[g.indexOf(j)].children.length; p++) {
            q
        }
        h.forEach(function(l) {
            l.style.minHeight = j + 'px'
        })
        k.forEach(function(m) {
            m.style.height = j + 'px'
        })
    }

    function changeSize600() {
        if (window.matchMedia('(max-width: 600px)').matches || !document.querySelector('#category-products .item').classList.contains('list')) {/*застосування вирівнювання висот елементів по максимальній висоті*/
            o()
            window.addEventListener('resize', function() {
                document.querySelectorAll('#category-products .item').forEach(function(r) {
                    r.style.minHeight = 'auto'
                })
                document.querySelectorAll('#category-products .shadowed').forEach(function(s) {
                    s.style.height = 'auto'
                })
                o()
            })
        }
        if (!window.matchMedia('(max-width: 600px)').matches) {/*переміщення блоків */
            $('#category-products .list').each(function() {
                $(this).find('.put-off').appendTo($(this).find('.options'));
                $(this).find('.compare').appendTo($(this).find('.options'));
            });
        } else {
            $('#category-products .list').each(function() {
                $(this).find('.compare').prependTo($(this).find('.buttons'));
                $(this).find('.put-off').prependTo($(this).find('.buttons'));
            });
        }
    }
    var changeSize600Val = window.matchMedia('(max-width: 600px)')
    changeSize600(changeSize600Val)
    changeSize600Val.addEventListener('change', changeSize600)
})();
