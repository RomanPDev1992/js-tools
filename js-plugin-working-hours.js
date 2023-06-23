jQuery(function() {
    jQuery(document).on('click', '.background', function(e) {/*блоки закриваються окремими функціями бо вони є окремими блоками*/
        jQuery(this).css({ 'display': 'none' })
        jQuery('.time-popup').css({ 'display': 'none' })
    })/* закриття поп-апу при кліку на фон */
    
    jQuery(document).on('click', '.time-popup', function(e) {
        jQuery(this).css({ 'display': 'none' })
        jQuery('.background').css({ 'display': 'none' })
    })/* закриття поп-апу при кліку на поп-ап */

    let dateForPopup = new Date()
    console.log(dateForPopup.getHours())
    if (dateForPopup.getHours() < 23) {
        jQuery('.background, .time-popup').css({ 'display': 'flex' })
    }/* це зробив просто для тесту вивід до 23ї години, настроював години в яких показується поп-ап через php */
})
