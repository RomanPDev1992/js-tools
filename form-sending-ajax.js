(function() {
    $(document).ready(function() {
        $('#form1').submit(function(e) {
            e.preventDefault()

            if (($('input[name="name"]').val() === '') && ($('input[name="phone"]').val() === '')) {/* перевірки на непусті значення*/
                $('#error-name').show(200)
                $('#error-phone').show(200)
            }

            if (($('input[name="name"]').val() === '') && ($('input[name="phone"]').val() !== '')) {
                $('#error-name').show(200)
            }

            if (($('input[name="phone"]').val() === '') && ($('input[name="name"]').val() !== '')) {
                $('#error-phone').show(200)
            }

            if (($('input[name="name"]').val() !== '') && ($('input[name="phone"]').val() !== '')) {
                var form_data = $(this).serialize()
                $.ajax({/*ajax форми*/
                    type: 'POST',
                    url: 'send.php',
                    data: form_data,
                    success: function(data) {
                        $('input[name="name"], input[name="phone"], textarea[name="dtext"]').val('')

                        document.location.href = 'https://' + document.location.hostname + '/success.html'
                    }
                })
            }
        })
    })
    $(document).on('click', 'input[name="name"]', function(e) {/*закриваєм попередження при кліку */
        $('#error-name').hide(200)
    })
    $(document).on('click', 'input[name="phone"]', function(e) {
        $('#error-phone').hide(200)
    })

})();
