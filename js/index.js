document.getElementById('btn_mas_info').onclick = function () {
    let e = document.getElementById('mas_info');

    e.classList.remove('hidden');
    e.scrollIntoView();
}