

function alertlogin() {

    JSAlert.alert("Wrong Username or Password").dismissIn(100 * 10);
}

function logout() { 

    JSAlert.confirm("Are you sure you want to Log out?").then(function(result) {
 
        // Check if pressed yes
        if (!result)
            return;
        
        // User pressed yes!
        document.location.href = 'https://parentcompany.github.io/ZOGROS/index.html';
     
    });
    
}



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}