// console.log('asd');
function gotopage(event) {
    const data = event.target.getAttribute('data-btname');
    const button = document.getElementById(data);
    button.innerHTML = '<div class="spinner"></div>';

    setTimeout(function() {
        button.innerHTML = data;
        window.location.href = 'page/' + data;
    }, 3000);
    
}