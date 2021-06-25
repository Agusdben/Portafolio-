function HandleForm () {
    const $form = document.querySelector(".form");
    $form.addEventListener('send', handleSend);
    async function handleSend(e){
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }    
        });
        e.stopImmediatePropagation();
        if(response.ok){
            alert('thx')
        }
    }
}

export default HandleForm
