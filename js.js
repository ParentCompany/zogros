

function token() {
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // console.log(email+password);

    var req = new XMLHttpRequest();
    var url = "https://auth-api.ciptex.net/token"
    var par = "grant_type=password&username="+email+"&password="+password

    req.open("POST", url, true);

    //Send the proper header information along with the request
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    req.onreadystatechange = function() {//Call a function when the state changes.
    if(req.readyState === 4 && req.status === 200) {
        var j = JSON.parse(req.responseText);
        j.issuetime = new Date().getTime();
        sessionStorage.access_token = JSON.stringify(j);
        login(sessionStorage.access_token);
        //console.log(j);
       
    }
    else
    {
        //console.log(req);
        alertlogin();
    }
}
req.send(par);

//var redirect = function(){
//    
//    tokenCheck(sessionStorage.access_token);
//  }
//  setTimeout(redirect, 2000)

}



function login(token) {
    if(sessionStorage.access_token !== null && sessionStorage.access_token !== undefined && sessionStorage.access_token !== "") {
        var token = JSON.parse(sessionStorage.access_token);
        if(token.access_token !== null && token.access_token !== undefined && token.access_token !== "") {
            document.location.href = '/dashboard.html';
        }
        else
        {
            
        }
    }
}

function alertlogin() {

    JSAlert.alert("Wrong Username or Password").dismissIn(100 * 10);
}

function logout() { 

    JSAlert.confirm("Are you sure you want to Log out?").then(function(result) {
 
        // Check if pressed yes
        if (!result)
            return;
        
        // User pressed yes!
        document.location.href = '../index.html';
     
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