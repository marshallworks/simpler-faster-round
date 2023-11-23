const smartElems = document.querySelectorAll('.smart');
for (const elem of smartElems) {
  switch (elem.tagName) {
    case 'FORM': {
      elem.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = elem.querySelectorAll('input');
        const mess = [...inputs].map(i => {
          return `${i.name}=${encodeURIComponent(i.value)}`;
        }).join('&');
        const xhr = new XMLHttpRequest();
        xhr.open('POST', elem.dataset.post, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = () => {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const target = document.querySelector(elem.dataset.target);
            target.innerHTML = xhr.response;
          }
        };
        xhr.send(mess);
      });
    } break;
  }
}
