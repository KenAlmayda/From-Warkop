var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='https://wa.me/+62895364354026'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/fromwarkop/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> </div> <span>Silahkan di WA atau DM aja</span>";
//var menuString = "<img src='images/' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>menu.pdf</label></div><a href='assets/menu.pdf' download='menu.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
//var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.351932176316!2d107.13864255403601!3d-6.348457007628858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b1fef3c9b45%3A0x7832834b2f10ae09!2sTeh%20Taiwan!5e0!3m2!1sid!2sid!4v1689332007230!5m2!1sid!2sid' class='map'></iframe></div><label class='add'><address>Lembah Hijau<br>Lippo Cikarang<br>Cikarang Selatan, Kab.Bekasi, Jawa Barat 15330 </address>";
var souvenirString = "Belom ada nih sama kayak warkopnya huhu"//"<div class='shopee'> <a target='_blank' href='https://shopee.co.id/ffffrom'><span class='bold'>https://shopee.co.id/ffffrom<br></span></a><span><br>Asik mau jajan nihh</span></div>"
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Selamat datang di <span class='bold'>From Warkop 👨🏻‍</span><br><br> Ada yang bisa kami bantu? <br><br>Ketik <span class='bold'>'p'</span> buat info lebih lanjut - Admin C");
            }, 2000);
            break;
        case "p":
            sendTextMessage("<span class='sk'>Asik nurut...<br> Buat info lebih lanjut, boleh nih ketik salah satu keyword yang ada dibawah sini...<br>e.g<br><span><br></span><span class='bold'>'buka ga?'</span> - buat tau nih kita buka kapan aja<br><span><br></span><span class='bold'>'serlok lah'</span> - kita serlok biar ga nyasar<br><span><br></span><span class='bold'>'menu'</span> - biar ga 'ngang ngong ngang ngong'<br><span><br></span><span class='bold'>'tentang warkop'</span> - tak kenal maka tak sayang<br><span><br></span><span class='bold'>'cendera mata'</span> - oleh-oleh dari warkop<br><span><br></span><span class='bold'>'18+'</span> - pasti kepo kan lu<br><span><br></span><span class='bold'>'kontak'</span> - informasi lanjutan<br><span><br></span><span class='bold'>'hapus'</span> - biar ga ketauan kita lagi chattan</span>");
            break;
        case "P":
            sendTextMessage("<span class='sk'>Asik nurut...<br> Buat info lebih lanjut, boleh nih ketik salah satu keyword yang ada dibawah sini...<br>e.g<br><span><br></span><span class='bold'>'buka ga?'</span> - buat tau nih kita buka kapan aja<br><span><br></span><span class='bold'>'serlok lah'</span> - kita serlok biar ga nyasar<br><span><br></span><span class='bold'>'menu'</span> - biar ga 'ngang ngong ngang ngong'<br><span><br></span><span class='bold'>'tentang warkop'</span> - tak kenal maka tak sayang<br><span><br></span><span class='bold'>'cendera mata'</span> - oleh-oleh dari warkop<br><span><br></span><span class='bold'>'18+'</span> - pasti kepo kan lu<br><span><br></span><span class='bold'>'kontak'</span> - informasi lanjutan<br><span><br></span><span class='bold'>'hapus'</span> - biar ga ketauan kita lagi chattan</span>");
            break;
        case "menu":
            sendTextMessage("tempat aja belom ada segala minta menu");
            break;
        case "Menu":
            sendTextMessage("tempat aja belom ada segala minta menu");
            break;
        case "buka ga?":
            sendTextMessage("gatau nih jadi atau ngga kita buka warkop");
            break;
        case "Buka ga?":
            sendTextMessage("gatau nih jadi atau ngga kita buka warkop");
            break;
        case "serlok lah":
            sendTextMessage("sabar lah buru-buru amat, masih progress ini (awas aja pas udah buka ga dateng)");
            break;
        case "Serlok lah":
            sendTextMessage("sabar lah buru-buru amat, masih progress ini (awas aja pas udah buka ga dateng)");
            break;
        case "hapus":
            clearChat();
            break;
        case "Hapus":
            clearChat();
            break;
        case "tentang warkop":
            sendTextMessage("lu chat aja itu yang di 'kontak'");
            break;
        case "Tentang warkop":
            sendTextMessage("lu chat aja itu yang di 'kontak'");
            break;
        case "kontak":
            sendTextMessage(contactString);
            break;
        case "Kontak":
            sendTextMessage(contactString);
            break;
        case "18+":
            sendTextMessage("Kami segenap keluarga besar From meminta maaf apabila ada salah kata atau menyinggung terkait konten di website ini, tidak ada niatan untuk menyakiti siapa pun termasuk binatang atau tumbuhan.<br><br>Murni hanya preferensi candaan kaula muda dan bapak-bapak yang doyan nongkrong di warkop.<br><br>Kritik dan saran sangat kami terima asal jangan lapor 'Halo, dek'.<br><br>Sekian dan terima kasih.<br><br>Love,<br>Keluarga Besar From")
            break;
        case "cendera mata":
            sendTextMessage(souvenirString);
            break;
        case "Cendera mata":
            sendTextMessage(souvenirString);
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Susah orang indo dikasih panduan malah ngawur,<br> yuk dibaca lagi panduannya, gausah buru-buru.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
