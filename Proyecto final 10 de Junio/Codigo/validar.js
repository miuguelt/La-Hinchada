/**
 * @author stip
 */
		
		
		//Validacion de la contraseña
		
function checkPw(form) {
pw1 =document.forms[0].pw1.value;
pw2 = document.forms[0].pw2.value;
if(pw1=='')
{
   alert('Introduzca su clave');
   document.forms[0].pw1.focus();
   return false;
}
else if(pw2=='')
{
   alert('Introduzca la repeticion de su clave');
   document.forms[0].pw2.focus();
   return false;
}
else if (pw1 != pw2) {
alert ("\nlas contraseqas introducidas no coinciden. Por favor, vuelva a introducirlas.")
return false;
}

}
			//Función para validar el email
			
function emailCheck (emailStr) {
/* The following pattern is used to check if the entered e-mail address
   fits the user@domain format.  It also is used to separate the username
   from the domain. */
var emailPat=/^(.+)@(.+)$/
/* The following string represents the pattern for matching all special
   characters.  We don't want to allow special characters in the address. 
   These characters include ( ) < > @ , ; : \ " . [ ]    */
var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
/* The following string represents the range of characters allowed in a 
   username or domainname.  It really states which chars aren't allowed. */
var validChars="\[^\\s" + specialChars + "\]"
/* The following pattern applies if the "user" is a quoted string (in
   which case, there are no rules about which characters are allowed
   and which aren't; anything goes).  E.g. "jiminy cricket"@disney.com
   is a legal e-mail address. */
var quotedUser="(\"[^\"]*\")"
/* The following pattern applies for domains that are IP addresses,
   rather than symbolic names.  E.g. joe@[123.124.233.4] is a legal
   e-mail address. NOTE: The square brackets are required. */
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
/* The following string represents an atom (basically a series of
   non-special characters.) */
var atom=validChars + '+'
/* The following string represents one word in the typical username.
   For example, in john.doe@somewhere.com, john and doe are words.
   Basically, a word is either an atom or quoted string. */
var word="(" + atom + "|" + quotedUser + ")"
// The following pattern describes the structure of the user
var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
/* The following pattern describes the structure of a normal symbolic
   domain, as opposed to ipDomainPat, shown above. */
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")


/* Finally, let's start trying to figure out if the supplied address is
   valid. */

/* Begin with the coarse pattern to simply break up user@domain into
   different pieces that are easy to analyze. */
var matchArray=emailStr.match(emailPat)
if (matchArray==null) {
  /* Too many/few @'s or something; basically, this address doesn't
     even fit the general mould of a valid e-mail address. */
	alert("La entrada de e-mail parece ser incorrecta (chequee @ y .'s)")
	return false
}
var user=matchArray[1]
var domain=matchArray[2]

// See if "user" is valid 
if (user.match(userPat)==null) {
    // user is not valid
    alert("El nombre de usuario parace no ser correcto.")
    return false
}

/* if the e-mail address is at an IP address (as opposed to a symbolic
   host name) make sure the IP address is valid. */
var IPArray=domain.match(ipDomainPat)
if (IPArray!=null) {
    // this is an IP address
	  for (var i=1;i<=4;i++) {
	    if (IPArray[i]>255) {
	        alert("Direccion IP no valida!")
		return false
	    }
    }
    return true
}

// Domain is symbolic name
var domainArray=domain.match(domainPat)
if (domainArray==null) {
	alert("El nombre de dominio parace no ser correcto.")
    return false
}

/* domain name seems valid, but now make sure that it ends in a
   three-letter word (like com, edu, gov) or a two-letter word,
   representing country (uk, nl), and that there's a hostname preceding 
   the domain or country. */

/* Now we need to break up the domain to get a count of how many atoms
   it consists of. */
var atomPat=new RegExp(atom,"g")
var domArr=domain.match(atomPat)
var len=domArr.length
if (domArr[domArr.length-1].length<2 || 
    domArr[domArr.length-1].length>3) {
   // the address must end in a two letter or three letter word.
   alert("La direccion de correo debe acabar en 3 letras de dominio o 2 de un pais.")
   return false
}

// Make sure there's a host name preceding the domain.
if (len<2) {
   var errStr="Esta direccion es desconocida como IP!"
   alert(errStr)
   return false
}

return true;
}
//Funcion que elimina espacion en la caja
function ignoreSpaces(string) {
var temp = "";
string = '' + string;
splitstring = string.split(" ");
for(i = 0; i < splitstring.length; i++)
temp += splitstring[i];
return temp;
}
			//funcion para borrar cuando este el foco en un elemento
			function clearText(thefield){
			if (thefield.defaultValue==thefield.value)
			thefield.value = ""
			} 
			
			//validar el formulario
			function validarF(F) {
							
				if(F.nombre.value==""||F.email.value==""||F.apellido.value==""||F.usuario.value==""||F.pw1.value==""||F.pw2.value==""||F.tele.value=="")
				{
					alert("Faltan datos");
					return false;
				}
				/*if(F.email.value.indexOf("@")==-1){
					alert("Email no valido");
					return false;
				}*/
				ver=emailCheck(F.email.value);
				if(ver==false){
					F.email.focus();
					return false;}
					
				con= checkPw(F);
				if(con==false){
					F.email.focus();
					return false;}
					
			    if (F.concontra.value != F.concontra.value){
			    	alert("Las contraseñas nos coinciden");
			    	F.contra.focus();
					return false;
				}
				
				t=parseInt(F.tele.value);
				if(isNaN(t)){
					alert("Verifique el teléfono");
					F.tele.focus();
					return false;
				}
				
				
				alert("Es correcto!!!");
					return  true;
				
		}	
		
		
		
		
		//las 2 siguentes funciones muestran la hora
		
function showMilitaryTime() {
if (document.F.showMilitary[0].checked) {
return true;
}
return false;
}
function showTheHours(theHour) {
if (showMilitaryTime() || (theHour > 0 && theHour < 13)) {
if (theHour == "0") theHour = 12;
return (theHour);
}
if (theHour == 0) {
return (12);
}
return (theHour-12);
}
function showZeroFilled(inValue) {
if (inValue > 9) {
return "" + inValue;
}
return "0" + inValue;
}
function showAmPm() {
if (showMilitaryTime()) {
return ("");
}
if (now.getHours() < 12) {
return (" am");
}
return (" pm");
}
function showTheTime() {
now = new Date
document.F.showTime.value = showTheHours(now.getHours()) + ":" + showZeroFilled(now.getMinutes()) + ":" + showZeroFilled(now.getSeconds()) + showAmPm()
setTimeout("showTheTime()",1000)
}	

//fución resaltar bordes	
				
