
function count() {
    document.getElementById('leave').innerHTML = 
    `
    <div class='prom'><button id='b1'></button>
  <button id="b2"></button>
  <button id="b3"></button>
  <button id="b4"></button>
  <button id="b5"></button>
  <p style="color: #fff; font-family: monospace;
    font-size: 1.2rem;">Preparing Message Field...</p>
    <button id="quit" onclick='locate()'>Cancel</butto>
    </div>`;
    let a = 0;
    let interval = 200;
    
    let countStart = setInterval(
    function() {
        //document.getElementById('b2').innerHTML=
        a++;
        if (a == 1 ) {
            document.getElementById('b1').style.backgroundColor = 'red';
            document.getElementById('b2').style.backgroundColor = 'white';
            document.getElementById('b3').style.backgroundColor = 'white';
            document.getElementById('b4').style.backgroundColor = 'white';
            document.getElementById('b5').style.backgroundColor = 'red';

        }
        else if (a == 2 ) {
            document.getElementById('b1').style.backgroundColor = 'red';
            document.getElementById('b2').style.backgroundColor = 'red';
            document.getElementById('b3').style.backgroundColor = 'white';
            document.getElementById('b4').style.backgroundColor = 'white';
            document.getElementById('b5').style.backgroundColor = 'white';
            //document.getElementById('b1').style.backgroundColor = 'grey';
        }
        else if (a == 3 ) {
            document.getElementById('b1').style.backgroundColor = 'red';
            document.getElementById('b2').style.backgroundColor = 'red';
            document.getElementById('b3').style.backgroundColor = 'red';
            document.getElementById('b4').style.backgroundColor = 'white';
            document.getElementById('b5').style.backgroundColor = 'white';
            //document.getElementById('b1').style.backgroundColor = 'grey';
        }  
        else if (a == 4) {
            document.getElementById('b1').style.backgroundColor = 'red'//'grey';
            document.getElementById('b2').style.backgroundColor = 'red'//'ightgrey';
            document.getElementById('b3').style.backgroundColor = 'red';
            document.getElementById('b4').style.backgroundColor = 'red';
            document.getElementById('b5').style.backgroundColor = 'white';
            //document.getElementById('b1').style.backgroundColor = 'grey';
        }
        else if (a == 5) {
            document.getElementById('b1').style.backgroundColor = 'white';
            document.getElementById('b2').style.backgroundColor = 'red';
            document.getElementById('b3').style.backgroundColor = 'red';
            document.getElementById('b4').style.backgroundColor = 'red'//'rgba(248,248,255,0.8)';
            document.getElementById('b5').style.backgroundColor = 'red';
            window.location.href = './Sender/indexMsg.html';
            return count();
            //document.getElementById('b1').style.backgroundColor = 'grey';
        }        
    }, interval)
}

/*
document.getElementById('coverP').innerHTML = 
`<img class="coverPhoto" onclick="displayPhoto()" src="/storage/emulated/0/Pictures/100PINT/Pins/647a8b41f0b743ec8816c2581b3f4346.jpg">`;
}*/

function displayPhoto() {
    document.getElementById('display').innerHTML = 
    `<div id='photoDsp'>
    <p>View Cover Photo</p>
    <button onclick="cancel()" id="cancel">Cancel</button><button
    onclick="okay()" id="okay">Ok</button>
    </div>`;
}

function cancel() {
    document.getElementById('display').innerHTML = '';
}

function okay() {
    document.getElementById('link').click();
}

function locate() {
    document.getElementById('leave').innerHTML = 
    `<div id="leave" class="button">
  <button class="l-msg" onclick="count()">Leave A Message</button>
  
  </div>`
    document.getElementById('goAbout').click();
}