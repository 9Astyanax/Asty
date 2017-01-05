
var name = prompt("What's your name? (case sensitive)");

if (name) {
    switch(name)  {
        case "null":
            window.location.assign("https://www.google.com");
            break;
        case "Max":
            window.alert("Tyf op Max");
            window.location.assign("https://www.google.com")
            break;
        case "Leonard Hogerheijde" :
            window.alert("hey admin");
            break;
        case "Faggot" :
            window.alert("What are you fucking gay");
            break;
        case "Leonard":
           window.alert("dat ben ik ja");
            break;
        case "Joe":
            window.alert("WAHEY!! JOE");
            break;
        case "Matthias":
            window.alert("Hallo daar Thie");
            break;
        default:
             window.alert("Hello " + name );
        }

}   else {
    window.alert("Je hebt niets ingevuld");
    window.location.assign("http://zoekeenleven.nl/")
}
