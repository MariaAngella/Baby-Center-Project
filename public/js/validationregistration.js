module.exports = function() {
  console.log("i am working");
};

// module.exports =  function formValidation() {
//                             //declare variables to access form elements
//                             // var uid =
//                             //   document.parentregistration.parentusername;
//                             // var uid2 =
//                             //   document.sitterregistration.sitterusername;
//                             // var uid3 =
//                             //   document.supervisorregistration.supervisorusername;
//                             // var uid4 =
//                             //   document.officialregistration.officialusername;
//                             // var uname =
//                             //   document.parentregistration.parentfirstname;
//                             // var uname2 =
//                             //   document.sitterregistration.sitterfirstname;
//                             // var uname3 =
//                             //   document.supervisorregistration
//                             //     .supervisorfirstname;
//                             // var uname4 =
//                             //   document.officialregistration.officialfirstname;
//                             // var passid =
//                             //   document.parentregistration.parentpassword;
//                             // var passid2 =
//                             //   document.sitterregistration.sitterpassword;
//                             // var passid3 =
//                             //   document.supervisorregistration
//                             //     .supervisorpassword;
//                             // var passid4 =
//                             //   document.officialregistration.officialpassword;
//                             // var uadd =
//                             //   document.parentregistration.parentphysicaladdress;
//                             // var uadd2 =
//                             //   document.sitterregistration.sitterphysicaladdress;
//                             // var uadd3 =
//                             //   document.supervisorregistration
//                             //     .supervisorphysicaladdress;
//                             // var uadd4 =
//                             //   document.officialregistration
//                             //     .officialphysicaladdress;
//                             //uid stores and has access to element user id in the form registration
//                             if (userIdVal(sitterfirstname, 5, 45)) {
//                               if (passid_validation(sitterpassword, 7, 12)) {

//                               }
//                             }

//                             // //uid stores and has access to element user id in the form registration
//                             // if (userIdVal2(uid2, 5, 12)) {
//                             //   if (passid_validation2(passid2, 7, 12)) {
//                             //     if (allLetters2(uname2)) {
//                             //       if (alphaNumeric2(uadd2)) {
//                             //       }
//                             //     }
//                             //   }
//                             // }

//                             // //uid stores and has access to element user id in the form registration
//                             // if (userIdVal3(uid3, 5, 12)) {
//                             //   if (passid_validation3(passid3, 7, 12)) {
//                             //     if (allLetters3(uname3)) {
//                             //       if (alphaNumeric3(uadd3)) {
//                             //       }
//                             //     }
//                             //   }
//                             // }

//                             // //uid stores and has access to element user id in the form registration
//                             // if (userIdVal4(uid4, 5, 12)) {
//                             //   if (passid_validation4(passid4, 7, 12)) {
//                             //     if (allLetters4(uname4)) {
//                             //       if (alphaNumeric4(uadd4)) {
//                             //       }
//                             //     }
//                             //   }
//                             // }

//                             //handling the first element 'uid' 7 to 45
//                             function userIdVal(sitterfirstname, mx, my) {
//                               var uidLen = sitterfirstname.value.length;
//                               //uidLen refers to the length of the element uid
//                               if (uidLen == 0 || uidLen >= my || uidLen < mx) {
//                                 uid.focus();
//                                 uid.style.border = "2px solid red";
//                                 alert("Please input your user ID");
//                                 return false;
//                               }
//                               return true;
//                             }

//                             // //handling the first element 'uid' 7 to 12
//                             // function userIdVal2(uid2, mx, my) {
//                             //   var uidLen = uid2.value.length;
//                             //   //uidLen refers to the length of the element uid
//                             //   if (uidLen == 0 || uidLen >= my || uidLen < mx) {
//                             //     uid2.focus();
//                             //     uid2.style.border = "2px solid red";
//                             //     alert("Please input your user ID");
//                             //     return false;
//                             //   }
//                             //   return true;
//                             // }

//                             // //handling the first element 'uid' 7 to 12
//                             // function userIdVal3(uid3, mx, my) {
//                             //   var uidLen = uid3.value.length;
//                             //   //uidLen refers to the length of the element uid
//                             //   if (uidLen == 0 || uidLen >= my || uidLen < mx) {
//                             //     uid3.focus();
//                             //     uid3.style.border = "2px solid red";
//                             //     alert("Please input your user ID");
//                             //     return false;
//                             //   }
//                             //   return true;
//                             // }

//                             // //handling the first element 'uid' 7 to 12
//                             // function userIdVal4(uid4, mx, my) {
//                             //   var uidLen = ui4d.value.length;
//                             //   //uidLen refers to the length of the element uid
//                             //   if (uidLen == 0 || uidLen >= my || uidLen < mx) {
//                             //     uid4.focus();
//                             //     uid4.style.border = "2px solid red";
//                             //     alert("Please input your user ID");
//                             //     return false;
//                             //   }
//                             //   return true;
//                             // }

//                             // //handling name validation
//                             // function allLetters(uname) {
//                             //   var letters = /^[A-Za-z]+$/; //something .................expression
//                             //   if (uname.value.match(letters)) {
//                             //     return true;
//                             //   } else {
//                             //     uname.focus();
//                             //     alert(
//                             //       "username must have alphabet characters only"
//                             //     );
//                             //     return false;
//                             //   }
//                             // }

//                             // //handling name validation
//                             // function allLetters2(uname2) {
//                             //   var letters = /^[A-Za-z]+$/; //something .................expression
//                             //   if (uname2.value.match(letters)) {
//                             //     return true;
//                             //   } else {
//                             //     uname2.focus();
//                             //     alert(
//                             //       "username must have alphabet characters only"
//                             //     );
//                             //     return false;
//                             //   }
//                             // }

//                             // //handling name validation
//                             // function allLetters3(uname3) {
//                             //   var letters = /^[A-Za-z]+$/; //something .................expression
//                             //   if (uname3.value.match(letters)) {
//                             //     return true;
//                             //   } else {
//                             //     uname3.focus();
//                             //     alert(
//                             //       "username must have alphabet characters only"
//                             //     );
//                             //     return false;
//                             //   }
//                             // }

//                             // //handling name validation
//                             // function allLetters4(uname4) {
//                             //   var letters = /^[A-Za-z]+$/; //something .................expression
//                             //   if (uname4.value.match(letters)) {
//                             //     return true;
//                             //   } else {
//                             //     uname4.focus();
//                             //     alert(
//                             //       "username must have alphabet characters only"
//                             //     );
//                             //     return false;
//                             //   }
//                             // }

//                             //handling password validation
//                             function passid_validation(sitterpassword, mx, my) {
//                               var passidlen = sitterpassword.value.length;
//                               if (
//                                 passidlen == 0 ||
//                                 passidlen >= my ||
//                                 passidlen < mx
//                               ) {
//                                 alert("please check your user password");
//                                 sitterpassword.focus();
//                                 return false;
//                               } else {
//                                 return true;
//                               }
//                             }

//                             // //handling password validation
//                             // function passid_validation2(passid2, mx, my) {
//                             //   var passidlen = passid2.value.length;
//                             //   if (
//                             //     passidlen == 0 ||
//                             //     passidlen >= my ||
//                             //     passidlen < mx
//                             //   ) {
//                             //     alert("please check your user password");
//                             //     passid2.focus();
//                             //     return false;
//                             //   } else {
//                             //     return true;
//                             //   }
//                             // }

//                             // //handling password validation
//                             // function passid_validation3(passid3, mx, my) {
//                             //   var passidlen = passid3.value.length;
//                             //   if (
//                             //     passidlen == 0 ||
//                             //     passidlen >= my ||
//                             //     passidlen < mx
//                             //   ) {
//                             //     alert("please check your user password");
//                             //     passid3.focus();
//                             //     return false;
//                             //   } else {
//                             //     return true;
//                             //   }
//                             // }

//                             // //handling password validation
//                             // function passid_validation4(passid4, mx, my) {
//                             //   var passidlen = passid4.value.length;
//                             //   if (
//                             //     passidlen == 0 ||
//                             //     passidlen >= my ||
//                             //     passidlen < mx
//                             //   ) {
//                             //     alert("please check your user password");
//                             //     passid4.focus();
//                             //     return false;
//                             //   } else {
//                             //     return true;
//                             //   }
//                             // }

//                             // // handler for the address
//                             // function alphaNumeric(uadd) {
//                             //   var letters = /^[0-9a-zA-Z]+$/;

//                             //   if (uadd.value.match(letters)) {
//                             //     return true;
//                             //   } else {
//                             //     alert("User address must be alpha numeric");
//                             //     uadd.focus();
//                             //     return false;
//                             //   }
//                             // }

//                             // // handler for the address
//                             // function alphaNumeric2(uadd2) {
//                             //   var letters = /^[0-9a-zA-Z]+$/;

//                             //   if (uadd2.value.match(letters)) {
//                             //     return true;
//                             //   } else {
//                             //     alert("User address must be alpha numeric");
//                             //     uadd2.focus();
//                             //     return false;
//                             //   }
//                             // }

//                             // // handler for the address
//                             // function alphaNumeric3(uadd3) {
//                             //   var letters = /^[0-9a-zA-Z]+$/;

//                             //   if (uadd3.value.match(letters)) {
//                             //     return true;
//                             //   } else {
//                             //     alert("User address must be alpha numeric");
//                             //     uadd3.focus();
//                             //     return false;
//                             //   }
//                             // }

//                             // // handler for the address
//                             // function alphaNumeric4(uadd4) {
//                             //   var letters = /^[0-9a-zA-Z]+$/;

//                             //   if (uadd4.value.match(letters)) {
//                             //     return true;
//                             //   } else {
//                             //     alert("User address must be alpha numeric");
//                             //     uadd4.focus();
//                             //     return false;
//                             //   }
//                             // }

//                             // //maria.y@gmail.com...... it's divided into 3 parts(maria.y)=anyword with . or -(@gmail)=should have @with anyword with . or -&(.com)= should have . and should be 2 or 3

//                             // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//                           }
 
