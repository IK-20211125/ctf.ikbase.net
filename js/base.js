// Answer
const answer = ["hashes","e3a81988aac6fa7835861e46562edf0b3eb0ad193ef6678859cc01058139d1ee","c41d80adc49112bc74a26f12064052d2d1f032c81cf1142a0eb934bdbea87778"];

// Q1 Button Click Event
document.getElementById('submit-q1').addEventListener('click', function() {

    const inputValueQ1 = document.getElementById('flag-q1').value;

    verifyAnswer(inputValueQ1,answer[1]);

})

// Q2 Button Click Event
document.getElementById('submit-q2').addEventListener('click', function() {

    const inputValueQ1 = document.getElementById('flag-q2').value;

    verifyAnswer(inputValueQ1,answer[2]);

})

// 検証
function verifyAnswer(value , answer) {
    if(window.Promise && window.crypto){
        toShar256(value).then(
            function(shatxt){
                // 検証
                if (shatxt == answer) {
                    alert("Congratulations!");
                }else{
                    alert("Flag is wrong ; ;");
                }
            }
        ).catch(function(e){
            console.log('Error : ', e.message);
        })
    }else{
        console.log('Promise or crypto not supported');
    }
}

// ハッシュ化（SHA256）
function toShar256(message) {
    return new Promise(function(resolve){
    var msgUint8 = new TextEncoder("utf-8").encode(message);
    crypto.subtle.digest('SHA-256', msgUint8).then(
        function(hashBuffer){
            var hashArray = Array.from(new Uint8Array(hashBuffer));
            var hashHex = hashArray.map(function(b){return b.toString(16).padStart(2, '0')}).join('');
            return resolve(hashHex);
        });
    })
}

