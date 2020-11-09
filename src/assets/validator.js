function ValidateEmail(inputText) {
    var mailformat = [ "/","^","[","-",",",".","!","#","$","%","&",'"',"'","*","+","=","?","^","{","|","}","~","-","]","(","?",":","@@"];
    if (inputText.value.match(mailformat)) {
      alert("Valid email address!");
      document.form1.text1.focus();
      return true;
    } 
      return false;
    }