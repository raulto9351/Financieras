function mostrar(id)
{
	switch (id)
	{
		case "0":
			document.getElementById("Formulario").style.display="inherit";
			document.getElementById("RSimples").style.display="none";
			document.getElementById("ILiq").style.display="none";
			document.getElementById("IEnd").style.display="none";
			document.getElementById("Rot").style.display="none";
		break;
		case "1":
			document.getElementById("Formulario").style.display="none";
			document.getElementById("RSimples").style.display="inherit"
			document.getElementById("ILiq").style.display="none";
			document.getElementById("IEnd").style.display="none";
			document.getElementById("Rot").style.display="none";
		break;
		case "2":
			document.getElementById("Formulario").style.display="none";
			document.getElementById("RSimples").style.display="none"
			document.getElementById("ILiq").style.display="inherit";
			document.getElementById("IEnd").style.display="none";
			document.getElementById("Rot").style.display="none";
		break;
		case "3":
			document.getElementById("Formulario").style.display="none";
			document.getElementById("RSimples").style.display="none"
			document.getElementById("ILiq").style.display="none";
			document.getElementById("IEnd").style.display="inherit";
			document.getElementById("Rot").style.display="none";
		break;
		case "4":
			document.getElementById("Formulario").style.display="none";
			document.getElementById("RSimples").style.display="none"
			document.getElementById("ILiq").style.display="none";
			document.getElementById("IEnd").style.display="none";
			document.getElementById("Rot").style.display="inherit";
		break;
		default:
			document.getElementById("Formulario").style.display="inherit";
			document.getElementById("RSimples").style.display="inherit";

		break;
	}
}

function start()
{
	var a=document.setElementById("Empresa0");
	document.getElementById("RSE0").innerHTML=a;
}