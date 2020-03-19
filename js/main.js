// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzaw4PyVza4-FMcaPKU4h_tfSApxRu-to",
    authDomain: "site-web-dorsaf-jaballah.firebaseapp.com",
    databaseURL: "https://site-web-dorsaf-jaballah.firebaseio.com",
    projectId: "site-web-dorsaf-jaballah",
    storageBucket: "site-web-dorsaf-jaballah.appspot.com",
    messagingSenderId: "231043506559",
    appId: "1:231043506559:web:28032c75b759d93450ba4a",
    measurementId: "G-QFBP41TN8M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById('contactMakeup-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    //Get values
    var name = document.getElementById('exampleInputName').value;
    var lastname = document.getElementById('exampleInputLastName').value;
    var email = document.getElementById('exampleInputEmail').value;
    saveMessage(name, lastname, email);
    alert('Submission done')
}

function saveMessage(name, lastname, email) {
    var messagesRef = firebase.database().ref('contactMakeup-form/' + name);

    //var newElement = messagesRef.push();
    messagesRef.set({
        name: name,
        LastName: lastname,
        email: email

    });
}