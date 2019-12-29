// Run this function after the page has loaded
$(() => {
    // Listen for the Rainbow Filter checkbox being clicked
    $("#rainbow-toggle").on('change', () => {
        if ($('#rainbow-toggle').is(':checked')) {
            $('.rainbow-filter').show()
        } else {
            $('.rainbow-filter').hide()
        }
    })
})