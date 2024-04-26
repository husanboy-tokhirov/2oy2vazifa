let listening = +prompt("Listening bahoyingizni kiriting;");

let reading = +prompt("Reading bahoyingizni kiriting;");

let writing = +prompt("Writing bahoyingizni kiriting;");

let speaking = +prompt("Speaking bahoyingizni kiriting;");

let ball = Math.floor((listening + reading + writing + speaking) / 4);

document.write("IELTS bahoyingiz " + ball + "ball" );