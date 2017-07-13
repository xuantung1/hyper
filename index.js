function submit() {
    var reqfamily = document.forms["reg"]["family"].value;
    var reqname = document.forms["reg"]["name"].value;
    var reqmail = document.forms["reg"]["email"].value;
    var reqpass = document.forms["reg"]["psswd"].value;
    var reqdob = document.forms["reg"]["birthday_day"].value;
    var reqmob = document.forms["reg"]["birthday_month"].value;
    var reqyob = document.forms["reg"]["birthday_year"].value;
    var reqsex = document.form["reg"]["sex"].value;
    var allgood = true;
    //family
    if (reqfamily == "") {
        alert("Family name must be filled out");
        allgood = false;
    }
    //name
    if (reqname == "") {
        alert("Name must be filled out");
        allgood = false;
    }
    //email
    if (reqmail == "") {
        alert("Email must be filled out");
        allgood = false;
    }
    //password
    if (reqpass == "") {
        alert("Password must be filled out");
        allgood = false;
    }
    //dob
    if (reqdob == "0") {
        alert("Day of birth must be choosed");
        allgood = false;
    }
    //mob
    if (reqmob == "0") {
        alert("Month of birth must be choosed");
        allgood = false;
    }
    //yob
    if (reqyob == "0") {
        alert("Year of birth must be choosed");
        allgood = false;
    }
    //finish
    if (allgood = true) { alert("Register successfully!") }
    else { }
}