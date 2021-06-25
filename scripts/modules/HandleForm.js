function HandleForm () {
    const $form = document.querySelector(".form");
    $form.addEventListener('send', handleSend);
    async function handleSend(e){
      e.stopImmediatePropagation();
      const form = new FormData(this);
      const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
          'Accept': 'application/json'
        }    
      });
      if(response.ok){
        alert('thx')
      }
    }
}

export default HandleForm
