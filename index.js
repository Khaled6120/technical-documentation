const copyBtns = document.querySelectorAll('.copy-btn');

copyBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    const codeEl = event.target.parentNode.querySelector('code');

    if (codeEl !== null) {
      const textarea = document.createElement('textarea');
      textarea.value = codeEl.textContent;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      swal("You have succesfully copied the content!", "click OK to continue", "success");  


      document.body.removeChild(textarea);
    }
  });
});
