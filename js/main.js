//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
console.log('hello');

//fase 1: richiamare l'id ad HTML (listEmail)
const listEmailEl = document.getElementById('listEmail');
//fase 2: creare un array raccogliere l'email
const emails = [];
//fase 3: funzione per generare le email
const randomEmails =  async () => {
//fase 4: ciclo for per aggiungere l'amail all'array
for (let i = 0; i < 10; i++) {
    try{
        //richiesta all'API
        const response = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //aggiunge l'indirizzo nel array
        emails.push(response.data.response);
    } catch(error){
        //stampa l'errore in console
        console.error('error email', error);
    }
    
}
    
}

//fase 5: stamapare l'email in pagina

