
alert("sócorRo");

var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        alert("so");

    },

    onDeviceReady: function teste() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);  
        alert('botão funcionando')
    },

    inserir: function(){
        var db = firebase.firestore();

        let cnome = document.getElementById("txtNome").value;
        let ctelefone = document.getElementById("txtTelefone").value;
        let corigem = document.getElementById("txtOrigem").value;
        let cdata_contato = document.getElementById("txtDataContato").value;
        let cobservacao = document.getElementById("txtObservacao").value;
        alert('cnome');

        db.collection("agendamentos").add({
            nome: cnome,
            telefone: ctelefone,
            origem: corigem,
            data_contato: cdata_contato,
            observacao: cobservacao
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }  
};

app.initialize();