(function() {
        $(document).ready(function(){
                $('#form1, #form2').submit(function(e) {/*submit одним скріптом 2х форм в залежності від того по якій формі сабміт*/
                        e.preventDefault()
                        var form_data = $(this).serialize()
                        $.ajax({
                        type: 'POST',
                        url: 'send.php',
                        data: form_data,
                                success: function(data){
                                $('.success-order').css('display','block')
                                $('.popup').hide()
                                $('input[name="name1"], input[name="name2"], input[name="telephone1"], input[name="telephone2"]').val('')
                                
                                }
                        })
                })
        })
})()
