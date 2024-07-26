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
                case "22042": name="Shashwath";break;
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
