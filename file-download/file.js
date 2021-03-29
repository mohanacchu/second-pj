const textArea = document.getElementById('textarea');
const download = document.querySelector('.btn-submit');

download.addEventListener('click', downloadFile);

function downloadFile(){
    console.log(textArea.value);
    const href = document.createElement('a');
    href.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea.value));
    href.setAttribute('download', '')
    document.body.append(href);
    href.click();
    textArea.value = '';
}
