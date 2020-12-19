function validate(){
		var username=document.getElementById("username").value;
		var password=document.getElementById("password").value;
		if(username=="ronnel"&& password=="iamronnel")
		{
			alert("Logged in successfully!");
			location.replace('dashboard.html');
			return true;

		}
		else
		{
			alert("Incorrect username/password");
			return false;
		}
}