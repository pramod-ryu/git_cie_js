function toggle(i)
    {
        var cell_id=i.replace(/but_/g,"");
        var name_element_id="name_"+cell_id;
        var name_element=document.getElementById(name_element_id);
        var name_element_style=window.getComputedStyle(name_element);
        var name_element_visibility=name_element_style.visibility;
        var name='';
        switch (cell_id)
            {
                case "co1":name="Pramod";break;
                case "co2":name="Anvitha";break;
                case "22022":name="Kavyashree";break;
                case "22060":name="virajith";break;
                case "22047":name="sumukha s";break;
                case "22024":name="Likhith Raj B";break;
                case "22005":name="Amshik";break; 
                case "22013":name="Gowtham";break;
                case "22019":name="nishanth";break;
                 case "22020":name="Karthik";break;

                default:name="";
            }
        if (name_element_visibility==="hidden")
            {
                document.getElementById(i).style.background="green";
                document.getElementById(name_element_id).style.visibility="visible";
                document.getElementById(name_element_id).innerHTML=name;
            }
        else
            {
                document.getElementById(i).style.background="red";
                document.getElementById(name_element_id).style.visibility="hidden";
                document.getElementById(name_element_id).innerHTML="";
            }
    }
