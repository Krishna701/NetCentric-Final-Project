$(document).ready(function () {
    $('.deleteImg').click(function () {
        $(this).closest("tr").remove();
    });
});

function addRow(tableID, strGenderList, strDistrictList, strRelationList, strLangCode) {
    if (tableID == 'dataTable2') {
        var table = document.getElementById(tableID);
       
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');
        for (var i = 0; i < rowCount; i++) {
            $j('.hidedetail').css('display', '');
            $j('.hidedetail' + (i)).css('display', '');
        
        }
      
        var className = 'hidedetail' + (rowCount - 1);
        var cell1 = row.insertCell(0);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("label");
        element1.setAttribute('style', 'width:30px');
        var idd1 = "lbl_SNo" + (rowCount - 1);
        element1.id = idd1;
        cell1.innerHTML = '<b>' + (rowCount - 1).toString() + '</b>';

        var cell2 = row.insertCell(1);
        cell2.setAttribute('align', 'center');
        var element2 = document.createElement("input");
        element2.type = "text";
        element2.setAttribute('style', 'width:90px');
        var idd2 = "txt_BirthRegNo" + (rowCount - 1);
        element2.id = idd2;
        element2.setAttribute('name', 'txt_BirthRegNo1');
        element2.setAttribute('onkeyup', 'javascript:PopulateDetails(' + (rowCount - 1) + ');');
        cell2.appendChild(element2);


        var cell3 = row.insertCell(2);
        cell3.setAttribute('align', 'center')
        var element31 = document.createElement("input");
        element31.type = "text";
        element31.setAttribute('style', 'width:100px;margin-top:10px;');
        var idd31 = "txt_NameLoc" + (rowCount - 1);
        element31.setAttribute('name', 'txt_NameLoc1');
        element31.setAttribute('class', 'txt_NameLoc1 textbox_req');
        element31.setAttribute('onkeypress', 'return setUnicode(event, this);');
        element31.id = idd31;
        cell3.appendChild(element31);


        var element32 = document.createElement("input");
        element32.type = "hidden";
        var idd32 = "hdMemberID_" + (rowCount - 1);
        element32.setAttribute('name', 'hdMemberID_1');
        element32.id = idd32;
        cell3.appendChild(element32);

        var element33 = document.createElement("input");
        element33.type = "hidden";
        var idd33 = "hdMemberDefID_" + (rowCount - 1);
        element33.setAttribute('name', 'hdMemberDefID_1');
        element33.id = idd33;
        cell3.appendChild(element33);

        //        var element34 = document.createElement("a");
        //        element34.setAttribute('href', 'javascript:SearchMember("Member","imgMember' + (rowCount - 1) + '");');
        //        element34.setAttribute('class', 'select-pop');     

        var element341 = document.createElement("img");
        var idd341 = "imgMember_" + (rowCount - 1);
        element341.setAttribute('name', 'imgMember_1');
        element341.id = idd341;
        element341.setAttribute('class', 'btmoreImg');
        element31.setAttribute('style', 'margin-top:10px;');
        element341.setAttribute('memberid', '#' + idd32);
        element341.setAttribute('defmemberid', '#hdMemberDefID_' + (rowCount - 1));
        element341.setAttribute('membername', '#txt_Name' + (rowCount - 1));
        element341.setAttribute('membernameloc', '#txt_NameLoc' + (rowCount - 1));
        element341.setAttribute('birthyrloc', '#txt_BirthYearLoc' + (rowCount - 1));
        element341.setAttribute('birthmonloc', '#txt_BirthMonthLoc' + (rowCount - 1));
        element341.setAttribute('birthdayloc', '#txt_BirthDayLoc' + (rowCount - 1));
        element341.setAttribute('birthyreng', '#txt_BirthYear' + (rowCount - 1));
        element341.setAttribute('birthmoneng', '#txt_BirthMonth' + (rowCount - 1));
        element341.setAttribute('birthdayeng', '#txt_BirthDay' + (rowCount - 1));
        element341.setAttribute('src', '../../Content/images/select-pop.png');
        element341.setAttribute("style", "margin-top: 15px;");
        $j('select').bind('change');
        //element34.appendChild(element341);

        cell3.appendChild(element341);


        var cell4 = row.insertCell(3);

        cell4.setAttribute('align', 'center');
        cell4.setAttribute('class', className); 
        var element4 = document.createElement("input");
        element4.type = "text";
        element4.setAttribute('style', 'width:100px');
        var idd4 = "txt_Name" + (rowCount - 1);
        element4.setAttribute('name', 'txt_Name1');
        element4.setAttribute('class', 'txt_Name1 textbox_req');
        element4.id = idd4;
        cell4.appendChild(element4);

        var cell5 = row.insertCell(4);
        cell5.setAttribute('align', 'center');
        cell5.setAttribute('class', className); 
        var element5 = document.createElement("ul");

        var element51 = document.createElement("li");
        element51.setAttribute("style", "width:  234px; margin-top: 9px;");

        var element511 = document.createElement("label");
        element511.setAttribute("style", "width: 40px; margin-top: -2px;");
        if (strLangCode == "E") {
            element511.innerHTML = "(B.S.)";
        }
        else {
            element511.innerHTML = "(वि. सं.)";
        }
        element51.appendChild(element511);

        var element512 = document.createElement("div");
        element512.setAttribute("class", "input-calendar first");
        var element5121 = document.createElement("input");
        element5121.type = "text";
        element5121.setAttribute("class", "date1LOC year");
        var id5121 = "txt_BirthYearLoc" + (rowCount - 1);
        element5121.setAttribute('name', 'txt_BirthYearLoc1');
        element5121.setAttribute('placeholder', 'YYYY');
        element5121.id = id5121;
        element512.appendChild(element5121);

        //        var element5122 = document.createElement("span");
        //        element5122.setAttribute("class", "label-item");
        //        element5122.innerHTML = "YYYY";
        //        element512.appendChild(element5122);

        element51.appendChild(element512);

        //birth month Loc
        var element513 = document.createElement("div");
        element513.setAttribute("class", "input-calendar");
        var element5131 = document.createElement("input");
        element5131.type = "text";
        element5131.setAttribute("class", "date1LOC month");
        var id5131 = "txt_BirthMonthLoc" + (rowCount - 1);
        element5131.setAttribute('name', 'txt_BirthMonthLoc1');
        element5131.setAttribute('placeholder', 'MM');
        element5131.id = id5131;
        element513.appendChild(element5131);

        //        var element5132 = document.createElement("span");
        //        element5132.setAttribute("class", "label-item");
        //        element5132.innerHTML = "MM";
        //        element513.appendChild(element5132);

        element51.appendChild(element513);

        //birth day Loc
        var element514 = document.createElement("div");
        element514.setAttribute("class", "input-calendar");
        var element5141 = document.createElement("input");
        element5141.type = "text";
        element5141.setAttribute("class", "date1LOC day");
        var id5141 = "txt_BirthDayLoc" + (rowCount - 1);
        element5141.setAttribute('name', 'txt_BirthDayLoc1');
        element5141.setAttribute('placeholder', 'DD');
        element5141.id = id5141;
        element514.appendChild(element5141);

        //        var element5142 = document.createElement("span");
        //        element5142.setAttribute("class", "label-item");
        //        element5142.innerHTML = "DD";
        //        element514.appendChild(element5142);

        element51.appendChild(element514);

        //
        var element515 = document.createElement("label");
        element515.setAttribute("style", "display:none;width: 40px; margin-top: -2px;");

        if (strLangCode == "E") {
            element515.innerHTML = "(A.D.)";
        }
        else {
            element515.innerHTML = "(ई.सं.)";
        }
        element51.appendChild(element515);

        //birth day

        var element516 = document.createElement("div");
        element516.setAttribute("class", "input-calendar regdateeng");
        var element5161 = document.createElement("input");
        element5161.type = "text";
        element5161.setAttribute("class", "date1 day");
        var id5161 = "txt_BirthDay" + (rowCount - 1);
        element5161.setAttribute('name', 'txt_BirthDay1');
        element5161.setAttribute('placeholder', 'DD');
        element5161.id = id5161;
        element516.appendChild(element5161);

        //        var element5162 = document.createElement("span");
        //        element5162.setAttribute("class", "label-item");
        //        element5162.innerHTML = "DD";
        //        element516.appendChild(element5162);

        element51.appendChild(element516);

        //birth month Loc
        var element517 = document.createElement("div");
        element517.setAttribute("class", "input-calendar regdateeng");
        var element5171 = document.createElement("input");
        element5171.type = "text";
        element5171.setAttribute("class", "date1 month");
        var id5171 = "txt_BirthMonth" + (rowCount - 1);
        element5171.setAttribute('name', 'txt_BirthMonth1');
        element5171.setAttribute('placeholder', 'MM');
        element5171.id = id5171;
        element517.appendChild(element5171);

        //        var element5172 = document.createElement("span");
        //        element5172.setAttribute("class", "label-item");
        //        element5172.innerHTML = "MM";
        //        element517.appendChild(element5172);

        element51.appendChild(element517);

        //birth year
        var element518 = document.createElement("div");
        element518.setAttribute("class", "input-calendar first regdateeng");
        var element5181 = document.createElement("input");
        element5181.type = "text";
        element5181.setAttribute("class", "date1 year");
        element5181.setAttribute("style", "margin-left:7px;");
        var id5181 = "txt_BirthYear" + (rowCount - 1);
        element5181.setAttribute('name', 'txt_BirthYear1');
        element5181.setAttribute('placeholder', 'YYYY');
        element5181.id = id5181;
        element518.appendChild(element5181);

        //        var element5182 = document.createElement("span");
        //        element5182.setAttribute("class", "label-item");
        //        element5182.innerHTML = "YYYY";
        //        element518.appendChild(element5182);

        element51.appendChild(element518);

        element5.appendChild(element51);
        cell5.appendChild(element5);


        var cell6 = row.insertCell(5);
        cell6.setAttribute('left', 'center');
        cell6.setAttribute('class', className); 
        var element61 = document.createElement("div");
        element61.setAttribute("class", "member-registration-block");
        element61.setAttribute("style", "width: 667px !important;");
        var element611 = document.createElement("ul");

        var element6111 = document.createElement("li");

        var element61111 = document.createElement("label");

        if (strLangCode == "E") {
            element61111.innerHTML = "District:";
        }
        else {
            element61111.innerHTML = "जिल्ला:";
        }
        element6111.appendChild(element61111);

        var element61112 = document.createElement("input");
        element61112.type = "text";
        element61112.setAttribute('class', 'code-no dynamic2 txt_BirthDistrict1 textbox_req');
        var idd61112 = "txt_BirthPlaceDistrict" + (rowCount - 1);
        element61112.setAttribute('name', 'txt_BirthDistrict1');
        element61112.setAttribute('friend', 'ddl_BirthPlaceDistrict' + (rowCount - 1));
        element61112.id = idd61112;
        element6111.appendChild(element61112);

        var element61113 = document.createElement("select");
        var idd61113 = "ddl_BirthPlaceDistrict" + (rowCount - 1);
        element61113.id = idd61113;
        element61113.setAttribute('name', 'ddl_BirthDistrict1');
        element61113.setAttribute('friend', idd61112);
        element61113.setAttribute('class', 'dynamic');
        element61113.setAttribute('datatype', "District");
        element61113.setAttribute('child', "ddl_BirthPlaceVdcMun" + (rowCount - 1));
        element61113.innerHTML = strDistrictList;
        element6111.appendChild(element61113);

        var element61114 = document.createElement("a");
        element61114.setAttribute('href', 'javascript:ShowDetailsP("District","#ddl_BirthDistrict' + (rowCount - 1) + '","#ddl_BirthPlaceDistrict' + (rowCount - 1) + '");');
        element61114.setAttribute('class', 'select-pop');
        //        element61114.setAttribute('style', 'margin-top:-5px;');
        var element611141 = document.createElement("img");
        element611141.setAttribute('src', '../../Content/images/select-pop.png');
        element61114.appendChild(element611141);

        element6111.appendChild(element61114);

        element611.appendChild(element6111);


        var element6112 = document.createElement("li");

        var element61121 = document.createElement("label");
        element61121.innerHTML = "VDC/Municipality :";
        if (strLangCode == "E") {
            element61121.innerHTML = "VDC/Municipality:";
        }
        else {
            element61121.innerHTML = "गा वि स/न.पा.:";
        }
        element6112.appendChild(element61121);

        var element61122 = document.createElement("input");
        element61122.type = "text";
        element61122.setAttribute('class', 'code-no txt_BirthVdcMun1 textbox_req');
        var idd61122 = "txt_BirthPlaceVdcMun" + (rowCount - 1);
        element61122.setAttribute('name', 'txt_BirthVdcMun1');
        element61122.setAttribute('friend', 'ddl_BirthPlaceVdcMun' + (rowCount - 1));
        element61122.id = idd61122;
        element6112.appendChild(element61122);

        var element61123 = document.createElement("select");
        element61123.setAttribute('class', 'dynamic');
        var idd61123 = "ddl_BirthPlaceVdcMun" + (rowCount - 1);
        element61123.id = idd61123;
        element61123.setAttribute('name', 'ddl_BirthVdcMun1');
        element61123.setAttribute('child', "ddl_BirthPlaceWard" + (rowCount - 1));
        element61123.setAttribute('friend', idd61122);
        element61123.setAttribute('datatype', "VDC/Municipality");

        if (strLangCode == "E") {
            element61123.innerHTML = "<option value=''>--Select VDC/Municipality--</option>";
        }
        else {
            element61123.innerHTML = "<option value=''>--गा वि स/न.पा. छान्नुहोस्--</option>";
        }
        element6112.appendChild(element61123);

        var element61124 = document.createElement("a");
        element61124.setAttribute('href', 'javascript:ShowDetailsP("VDC/Municipality","#ddl_BirthDistrict' + (rowCount - 1) + '","#ddl_BirthPlaceVdcMun' + (rowCount - 1) + '");');
        element61124.setAttribute('class', 'select-pop');
        //        element61124.setAttribute('style', 'margin-top:-5px;');
        var element611241 = document.createElement("img");
        element611241.setAttribute('src', '../../Content/images/select-pop.png');
        element61124.appendChild(element611241);

        element6112.appendChild(element61124);

        element611.appendChild(element6112);



        var element6113 = document.createElement("li");

        var element61131 = document.createElement("label");

        if (strLangCode == "E") {
            element61131.innerHTML = "Ward No.:";
        }
        else {
            element61131.innerHTML = "वडा न.";
        }
        element6113.appendChild(element61131);

        var element61132 = document.createElement("input");
        element61132.type = "text";
        element61132.setAttribute('class', 'code-no dynamic txt_BirthWard1 textbox_req');
        var idd61132 = "txt_BirthPlaceWard" + (rowCount - 1);
        element61132.setAttribute('name', 'txt_BirthWard1');
        element61132.setAttribute('friend', 'ddl_BirthPlaceWard' + (rowCount - 1));
        element61132.id = idd61132;
        element6113.appendChild(element61132);

        var element61133 = document.createElement("select");
        var idd61133 = "ddl_BirthPlaceWard" + (rowCount - 1);
        element61133.id = idd61133;
        element61133.setAttribute('name', 'ddl_BirthWard1');
        element61133.setAttribute('class', 'code-no dynamic ddl_BirthPlaceWard');
        element61133.setAttribute('friend', idd61132);
        element61133.setAttribute('datatype', "Ward");
        if (strLangCode == "E") {
            element61133.innerHTML = "<option value=''>--Select Ward No.--</option>";
        }
        else {
            element61133.innerHTML = "<option value=''>--वडा नं. छान्नुहोस्--</option>";
        }
        element6113.appendChild(element61133);

        element611.appendChild(element6113);




        element61.appendChild(element611);



        var element612 = document.createElement("ul");
        var element6121 = document.createElement("li");

        var element61211 = document.createElement("label");

        if (strLangCode == "E") {
            element61211.innerHTML = "Street (In Nepali):";
        }
        else {
            element61211.innerHTML = "मार्ग(नेपालीमा):";
        }
        element6121.appendChild(element61211);

        var element61212 = document.createElement("input");
        element61212.type = "text";
        var idd61212 = "txt_BirthStreetLoc" + (rowCount - 1);
        element61212.setAttribute('name', 'txt_BirthStreetLoc1');
        element61212.setAttribute('onkeypress', 'return setUnicode(event, this);');
        element61212.id = idd61212;
        element6121.appendChild(element61212);


        element612.appendChild(element6121);


        var element6122 = document.createElement("li");

        var element61221 = document.createElement("label");

        if (strLangCode == "E") {
            element61221.innerHTML = "Street (In English):";
        }
        else {
            element61221.innerHTML = "मार्ग(अंग्रेजीमा):";
        }
        element6122.appendChild(element61221);
        var element61222 = document.createElement("input");
        element61222.type = "text";
        var idd61222 = "txt_BirthStreet" + (rowCount - 1);
        element61222.setAttribute('name', 'txt_BirthStreet1');
        element61222.id = idd61222;
        element6122.appendChild(element61222);
        element612.appendChild(element6122);


        var element6123 = document.createElement("li");

        var element61231 = document.createElement("label");
        element61231.innerHTML = "House No.:";
        if (strLangCode == "E") {
            element61231.innerHTML = "House No.:";
        }
        else {
            element61231.innerHTML = "घर नं.:";
        }
        element6123.appendChild(element61231);

        var element61232 = document.createElement("input");
        element61232.type = "text";
        var idd61232 = "txt_BirthHouseNo" + (rowCount - 1);
        element61232.setAttribute('name', 'txt_BirthHouseNo1');
        element61232.id = idd61232;
        element6123.appendChild(element61232);

        element612.appendChild(element6123);


        element61.appendChild(element612);



        var element613 = document.createElement("ul");
        var element6131 = document.createElement("li");

        var element61311 = document.createElement("label");
        if (strLangCode == "E") {
            element61311.innerHTML = "Village/Town (In Nepali):";
        }
        else {
            element61311.innerHTML = " गाउँ/टोल(नेपालीमा):";
        }
        element6131.appendChild(element61311);

        var element61312 = document.createElement("input");
        element61312.type = "text";
        var idd61312 = "txt_BirthVillageLoc" + (rowCount - 1);
        element61312.setAttribute('name', 'txt_BirthVillageLoc1');
        element61312.setAttribute('onkeypress', 'return setUnicode(event, this);');
        element61312.id = idd61312;
        element6131.appendChild(element61312);


        element613.appendChild(element6131);


        var element6132 = document.createElement("li");

        var element61321 = document.createElement("label");
        if (strLangCode == "E") {
            element61321.innerHTML = "Village/Town (In English):";
        }
        else {
            element61321.innerHTML = "गाउँ/टोल(अंग्रेजीमा):";
        }
        element6132.appendChild(element61321);

        var element61322 = document.createElement("input");
        element61322.type = "text";
        var idd61322 = "txt_BirthVillage" + (rowCount - 1);
        element61322.setAttribute('name', 'txt_BirthVillage1');
        element61322.setAttribute('onkeypress', 'return setUnicode(event, this);');
        element61322.id = idd61322;
        element6132.appendChild(element61322);

        element613.appendChild(element6132);


        element61.appendChild(element613);


        cell6.appendChild(element61);

        var cell7 = row.insertCell(6);
        cell7.setAttribute('align', 'center');
        cell7.setAttribute('class', className); 
        var element71 = document.createElement("input");
        element71.type = "text";
        element71.setAttribute('class', 'code-no dynamic2 txt_Gender1 textbox_req');
        var idd71 = "txt_Gender" + (rowCount - 1);
        element71.setAttribute('name', 'txt_Gender1');
        element71.setAttribute('friend', 'ddl_Gender' + (rowCount - 1));
        element71.id = idd71;
        cell7.appendChild(element71);

        var element72 = document.createElement("select");
        //element72.type = "text";
        element72.setAttribute('style', 'margin-left:3px;');
        element72.setAttribute('class', ' dynamic');
        element72.setAttribute('friend', idd71);
        element72.setAttribute('datatype', "Gender");
        var idd72 = "ddl_Gender" + (rowCount - 1);
        element72.setAttribute('name', 'ddl_Gender1');
        element72.id = idd72;
        element72.innerHTML = strGenderList;
        cell7.appendChild(element72);



        var cell8 = row.insertCell(7);
        cell8.setAttribute('align', 'left');
        cell8.setAttribute('class', className); 
        var element8 = document.createElement("input");
        element8.type = "text";
        element8.setAttribute('style', 'width:60px;margin-right:3px');
        var idd8 = "txt_CtzNo" + (rowCount - 1);
        element8.setAttribute('name', 'txt_CtzNo1');
        element8.setAttribute('onkeypress', 'return setUnicode(event, this);');
        element8.id = idd8;
        cell8.appendChild(element8);


        //ctz date
        var cell9 = row.insertCell(8);
        cell9.setAttribute('align', 'center');
        cell9.setAttribute('class', className); 
        var element9 = document.createElement("ul");

        var element91 = document.createElement("li");
        element91.setAttribute("style", "width: 235px; margin-top: 9px;");

        var element911 = document.createElement("label");
        element911.setAttribute("style", "width: 40px; margin-top: -2px;");
        if (strLangCode == "E") {
            element911.innerHTML = "(B.S.)";
        }
        else {
            element911.innerHTML = "(वि. सं.)";
        }
        element91.appendChild(element911);

        var element912 = document.createElement("div");
        element912.setAttribute("class", "input-calendar first");
        var element9121 = document.createElement("input");
        element9121.type = "text";
        element9121.setAttribute("class", "date1LOC year");
        var id9121 = "txt_CtzYearLoc" + (rowCount - 1);
        element9121.setAttribute('name', 'txt_CtzYearLoc1');
        element9121.setAttribute('placeholder', 'YYYY');
        element9121.id = id9121;
        element912.appendChild(element9121);

        //        var element9122 = document.createElement("span");
        //        element9122.setAttribute("class", "label-item");
        //        element9122.innerHTML = "YYYY";
        //        element912.appendChild(element9122);

        element91.appendChild(element912);

        //birth month Loc
        var element913 = document.createElement("div");
        element913.setAttribute("class", "input-calendar");
        var element9131 = document.createElement("input");
        element9131.type = "text";
        element9131.setAttribute("class", "date1LOC month");
        var id9131 = "txt_CtzMonthLoc" + (rowCount - 1);
        element9131.setAttribute('name', 'txt_CtzMonthLoc1');
        element9131.setAttribute('placeholder', 'MM');
        element9131.id = id9131;
        element913.appendChild(element9131);

        //        var element9132 = document.createElement("span");
        //        element9132.setAttribute("class", "label-item");
        //        element9132.innerHTML = "MM";
        //        element913.appendChild(element9132);

        element91.appendChild(element913);

        //birth day Loc
        var element914 = document.createElement("div");
        element914.setAttribute("class", "input-calendar");
        var element9141 = document.createElement("input");
        element9141.type = "text";
        element9141.setAttribute("class", "date1LOC day");
        var id9141 = "txt_CtzDayLoc" + (rowCount - 1);
        element9141.setAttribute('name', 'txt_CtzDayLoc1');
        element9141.setAttribute('placeholder', 'DD');
        element9141.id = id9141;
        element914.appendChild(element9141);

        //        var element9142 = document.createElement("span");
        //        element9142.setAttribute("class", "label-item");
        //        element9142.innerHTML = "DD";
        //        element914.appendChild(element9142);

        element91.appendChild(element914);

        //
        var element919 = document.createElement("label");
        element919.setAttribute("style", "display:none;width: 40px; margin-top: -2px;");
        if (strLangCode == "E") {
            element919.innerHTML = "(A.D.)";
        }
        else {
            element919.innerHTML = "(ई.सं.)";
        }
        element91.appendChild(element919);

        //birth day

        var element916 = document.createElement("div");
        element916.setAttribute("class", "input-calendar regdateeng");
        var element9161 = document.createElement("input");
        element9161.type = "text";
        element9161.setAttribute("class", "date1 day");
        var id9161 = "txt_CtzDay" + (rowCount - 1);
        element9161.setAttribute('name', 'txt_CtzDay1');
        element9161.setAttribute('placeholder', 'DD');
        element9161.id = id9161;
        element916.appendChild(element9161);

        //        var element9162 = document.createElement("span");
        //        element9162.setAttribute("class", "label-item");
        //        element9162.innerHTML = "DD";
        //        element916.appendChild(element9162);

        element91.appendChild(element916);

        //birth month Loc
        var element917 = document.createElement("div");
        element917.setAttribute("class", "input-calendar regdateeng");
        var element9171 = document.createElement("input");
        element9171.type = "text";
        element9171.setAttribute("class", "date1 month");
        var id9171 = "txt_CtzMonth" + (rowCount - 1);
        element9171.setAttribute('name', 'txt_CtzMonth1');
        element9171.setAttribute('placeholder', 'MM');
        element9171.id = id9171;
        element917.appendChild(element9171);

        //        var element9172 = document.createElement("span");
        //        element9172.setAttribute("class", "label-item");
        //        element9172.innerHTML = "MM";
        //        element917.appendChild(element9172);

        element91.appendChild(element917);

        //birth year
        var element918 = document.createElement("div");
        element918.setAttribute("class", "input-calendar first regdateeng");
        var element9181 = document.createElement("input");
        element9181.type = "text";
        element9181.setAttribute("class", "date1 year");
        element9181.setAttribute("style", "margin-left:7px;");
        var id9181 = "txt_CtzYear" + (rowCount - 1);
        element9181.setAttribute('name', 'txt_CtzYear1');
        element9181.setAttribute('placeholder', 'YYYY');
        element9181.id = id9181;
        element918.appendChild(element9181);

        //        var element9182 = document.createElement("span");
        //        element9182.setAttribute("class", "label-item");
        //        element9182.innerHTML = "YYYY";
        //        element918.appendChild(element9182);

        element91.appendChild(element918);

        element9.appendChild(element91);
        cell9.appendChild(element9);
        //End Ctz date
        var cell10 = row.insertCell(9);
        cell10.setAttribute('align', 'left');
        cell10.setAttribute('class', className); 
        var element101 = document.createElement("input");
        element101.type = "text";
        element101.setAttribute('align', 'right');
        element101.setAttribute('margin-right', '2px');
        element101.setAttribute('style', 'margin-top:10px;');
        element101.setAttribute('class', 'code-no dynamic2');
        element101.setAttribute('name', 'txt_CtzDistrict1');
        element101.setAttribute('friend', 'ddl_CtzDistrict' + (rowCount - 1));
        var idd101 = "txt_CtzDistrict" + (rowCount - 1);
        element101.id = idd101;
        cell10.appendChild(element101);




        var element102 = document.createElement("select");
        element102.setAttribute("class", "dynamic");
        element102.setAttribute('style', 'margin-top:10px;');
        var idd102 = "ddl_CtzDistrict" + (rowCount - 1);
        element102.id = idd102;
        element102.setAttribute('name', 'ddl_CtzDistrict1');
        element102.setAttribute('friend', idd101);
        element102.setAttribute('datatype', "District");
        element102.innerHTML = strDistrictList;
        cell10.appendChild(element102);

        var element103 = document.createElement("a");
        element103.setAttribute('href', 'javascript:ShowDetailsP("District","#ddl_CtzDistrict' + (rowCount - 1) + '","#ddl_CtzDistrict' + (rowCount - 1) + '");');
        element103.setAttribute('class', 'select-pop');
        var element1031 = document.createElement("img");
        element1031.setAttribute('src', '../../Content/images/select-pop.png');
        element103.appendChild(element1031);
        cell10.appendChild(element103);


        //        var cell11 = row.insertCell(10);
        //        cell11.setAttribute('align', 'center');
        //        var element11 = document.createElement("textarea");
        //        //        element11.type = "text";
        //        element11.setAttribute('rows', '5');
        //        element11.setAttribute('cols', '20');
        //        element11.setAttribute('style', 'width:200px');
        //        element11.setAttribute('name', 'txt_OtherIncRegLoc1');
        //        element11.setAttribute('onkeypress', 'return setUnicode(event, this);');
        //        var idd11 = "txt_OtherIncRegLoc" + (rowCount - 1);
        //        element11.id = idd11;
        //        cell11.appendChild(element11);


        var cell12 = row.insertCell(10);
        cell12.setAttribute('align', 'center');
        var element121 = document.createElement("input");
        element121.type = "text";
        element121.setAttribute('class', 'code-no dynamic2 txt_Relation1 textbox_req');
        var idd121 = "txt_Relation" + (rowCount - 1);
        element121.setAttribute('name', 'txt_Relation1');
        element121.setAttribute('friend', 'ddl_Relation' + (rowCount - 1));
        element121.id = idd121;
        cell12.appendChild(element121);

        var element122 = document.createElement("select");
        //element61.type = "text";
        element122.setAttribute('style', 'margin-left:3px;');
        element122.setAttribute('class', 'dynamic');
        var idd122 = "ddl_Relation" + (rowCount - 1);
        element122.id = idd122;
        element122.setAttribute('name', 'ddl_Relation1');
        element122.setAttribute('friend', idd121);
        element122.setAttribute('datatype', "Relation");
        element122.innerHTML = strRelationList;
        cell12.appendChild(element122);


        var cell13 = row.insertCell(11);
        cell13.setAttribute('align', 'center');
        var element13 = document.createElement("img");
        element13.setAttribute('src', '../../Content/images/delete.png');
        element13.setAttribute('class', 'deleteImg');
        var idd13 = "img_" + (rowCount - 1);
        element13.id = idd13;
        cell13.appendChild(element13);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
            for (var i = 3, rowss; rowss = table.rows[i]; i++) {
                //iterate through rows
                //rows would be accessed using the "rowss" variable assigned in the for loop
                for (var j = 0, colss; colss = rowss.cells[j]; j++) {
                    //iterate through columns
                    if (j == 0) {
                        colss.innerHTML = '<b>' + (i - 1).toString() + '</b>';
                    }
                    //columns would be accessed using the "colss" variable assigned in the for loop
                }
            }
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }
    else if (tableID == 'dataTable') {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        var cell1 = row.insertCell(0);
        cell1.setAttribute('align', 'center');
        var hdn1 = document.createElement("input");
        hdn1.type = "hidden";
        hdn1.setAttribute('name', 'hdnLstSpouseMemberID');
        var hdnid1 = "hdnLstSpouseMemberID" + (rowCount);
        hdn1.id = hdnid1;
        cell1.appendChild(hdn1);
        var hdn2 = document.createElement("input");
        hdn2.type = "hidden";
        hdn2.setAttribute('name', 'hdnLstSpouseDefinedID');
        var hdnId2 = "hdnLstSpouseDefinedID" + (rowCount);
        hdn2.id = hdnId2;
        cell1.appendChild(hdn2);

        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('style', 'width:150px');
        element1.setAttribute('onkeypress', 'return setUnicode(event, this);');
        element1.setAttribute('name', 'txt_SpouseFirstNameLoc1');
        var idd1 = "txt_SpouseFirstNameLoc" + (rowCount);
        element1.id = idd1;
        cell1.appendChild(element1);

        // var gap1 = row.insertCell(1);

        var cell2 = row.insertCell(1);
        cell2.setAttribute('align', 'center');
        var element2 = document.createElement("input");
        element2.type = "text";
        element2.setAttribute('style', 'width:150px');
        element2.setAttribute('onkeypress', 'return setUnicode(event, this);');
        element2.setAttribute('name', 'txt_SpouseMiddleNameLoc1');
        var idd2 = "txt_SpouseMiddleNameLoc" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);
        //var gap2 = row.insertCell(3);

        var cell3 = row.insertCell(2);
        cell3.setAttribute('align', 'center');
        var element3 = document.createElement("input");
        element3.type = "text";
        element3.setAttribute('style', 'width:150px');
        element3.setAttribute('onkeypress', 'return setUnicode(event, this);');
        element3.setAttribute('name', 'txt_SpouseLastNameLoc1');
        var idd3 = "txt_SpouseLastNameLoc" + (rowCount);
        element3.id = idd3;
        cell3.appendChild(element3);
        //var gap3 = row.insertCell(5);

        var cell4 = row.insertCell(3);
        cell4.setAttribute('align', 'center');
        var element4 = document.createElement("input");
        element4.type = "text";
        element4.setAttribute('style', 'width:150px');
        element4.setAttribute('name', 'txt_SpouseFirstNameEng1');
        var idd4 = "txt_SpouseFirstNameEng" + (rowCount);
        element4.id = idd4;
        cell4.appendChild(element4);
        // var gap4 = row.insertCell(7);

        var cell5 = row.insertCell(4);
        cell5.setAttribute('align', 'center');
        var element5 = document.createElement("input");
        element5.type = "text";
        element5.setAttribute('style', 'width:150px');
        element5.setAttribute('name', 'txt_SpouseMiddleNameEng1');
        var idd5 = "txt_SpouseMiddleNameEng" + (rowCount);
        element5.id = idd5;
        cell5.appendChild(element5);
        //var gap5 = row.insertCell(9);

        var cell6 = row.insertCell(5);
        cell6.setAttribute('align', 'center');
        cell6.setAttribute('width', '160px');
        var element15 = document.createElement("div");
        element15.className = 'td-dropdown';

        var element6 = document.createElement("input");
        element6.type = "text";
        element6.setAttribute('style', 'width:120px;margin-left: 0px');
        element6.setAttribute('name', 'txt_SpouseLastNameEng1');
        var idd6 = "txt_SpouseLastNameEng" + (rowCount);
        element6.id = idd6;
        element15.appendChild(element6);
        var element16 = document.createElement("div");
        element16.className = 'req-img-container';

        var element7 = document.createElement("img");
        element7.setAttribute('align', 'right');
        element7.setAttribute('src', '../../Content/images/select-pop.png');
        element7.setAttribute('class', 'btmoreImg');
        element7.setAttribute('memberId', '#' + hdnid1);
        element7.setAttribute('defMemberId', '#' + hdnId2);
        element7.setAttribute('firstName', '#' + idd4);
        element7.setAttribute('middleName', '#' + idd5);
        element7.setAttribute('lastName', '#' + idd6);
        element7.setAttribute('firstNameLoc', '#' + idd1);
        element7.setAttribute('middleNameLoc', '#' + idd2);
        element7.setAttribute('lastNameLoc', '#' + idd3);
        var idd7 = "imgSpouse_" + (rowCount);
        element7.id = idd7;
        element16.appendChild(element7);

        cell6.appendChild(element15);
        cell6.appendChild(element16);
        //var gap6 = row.insertCell(11);




        // var gap7 = row.insertCell(12);

        var cell8 = row.insertCell(6);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }
    else if (tableID == 'dtFamilyFolder') {
        var table = document.getElementById(tableID);
        strRelationList = strRelationList.replace(/&lt;/g, "<");
        strRelationList = strRelationList.replace(/&gt;/g, ">");
        strRelationList = strRelationList.replace(/&quot;/g, "'");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');


        var cell1 = row.insertCell(0);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("label");
        element1.setAttribute('style', 'width:50px');
        var idd1 = "lbl_SNo" + (rowCount);
        element1.id = idd1;
        cell1.innerHTML = '<b>' + (rowCount).toString() + '</b>';

        var cell2 = row.insertCell(1);
        cell2.setAttribute('align', 'center');
        var element21 = document.createElement("input");
        element21.type = "text";
        element21.setAttribute('style', 'width:120px;margin-top:10px;');
        var idd21 = "txt_MemberID" + (rowCount);
        element21.setAttribute('name', 'txt_MemberID1');
        element21.setAttribute('readonly', 'readonly');
        element21.setAttribute('class', 'txt_MemberID1 textbox_req');
        element21.id = idd21;
        cell2.appendChild(element21);

        var element22 = document.createElement("input");
        element22.type = "text";
        element22.setAttribute('style', 'width:300px;margin-top:10px;margin-left:5px');
        var idd22 = "txt_Name" + (rowCount);
        element22.setAttribute('name', 'txt_Name1');
        element22.setAttribute('readonly', 'readonly');
        element22.setAttribute('class', 'txt_Name1');
        element22.id = idd22;
        cell2.appendChild(element22);

        var element23 = document.createElement("input");
        element23.type = "hidden";
        var idd23 = "hdMemberID_" + (rowCount);
        element23.setAttribute('name', 'hdMemberID_1');
        element23.id = idd23;
        cell2.appendChild(element23);

        var element24 = document.createElement("input");
        element24.type = "hidden";
        var idd24 = "hdMemberDefID_" + (rowCount);
        element24.setAttribute('name', 'hdMemberDefID_1');
        element24.id = idd24;
        cell2.appendChild(element24);

        var element25 = document.createElement("img");
        var idd25 = "imgMember_" + (rowCount);
        element25.setAttribute('name', 'imgMember_1');
        element25.id = idd25;
        element25.setAttribute('class', 'btmoreImg');
        element25.setAttribute('style', 'margin-top:10px;');
        element25.setAttribute('memberId', '#' + idd23);
        element25.setAttribute('defMemberId', '#' + idd21);
        element25.setAttribute('fullName', '#' + idd22);
        element25.setAttribute('src', '../../Content/images/select-pop.png');
        element25.setAttribute("style", "margin-top: 12px;margin-left:-18px;");
        cell2.appendChild(element25);

        var cell3 = row.insertCell(2);
        cell3.setAttribute('align', 'center');
        var element31 = document.createElement("input");
        element31.type = "text";
        element31.setAttribute('class', 'code-no dynamic2 txt_Relation1 textbox_req');
        var idd31 = "txt_Relation" + (rowCount);
        element31.setAttribute('name', 'txt_Relation1');
        element31.setAttribute('friend', 'ddl_Relation' + (rowCount));
        element31.id = idd31;
        cell3.appendChild(element31);

        var element32 = document.createElement("select");
        element32.setAttribute('style', 'width:150px;margin-left:3px;');
        element32.setAttribute('class', 'dynamic');
        var idd32 = "ddl_Relation" + (rowCount);
        element32.id = idd32;
        element32.setAttribute('name', 'ddl_Relation1');
        element32.setAttribute('friend', idd31);
        element32.setAttribute('datatype', "Relation");
        element32.innerHTML = strRelationList;
        cell3.appendChild(element32);


        var cell4 = row.insertCell(3);
        cell4.setAttribute('align', 'center');
        var element4 = document.createElement("img");
        element4.setAttribute('src', '../../Content/images/delete.png');
        element4.setAttribute('class', 'deleteImg');
        var idd4 = "img_" + (rowCount);
        element4.id = idd4;
        cell4.appendChild(element4);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
            for (var i = 1, rowss; rowss = table.rows[i]; i++) {
                //iterate through rows
                //rows would be accessed using the "rowss" variable assigned in the for loop
                for (var j = 0, colss; colss = rowss.cells[j]; j++) {
                    //iterate through columns
                    if (j == 0) {
                        colss.innerHTML = '<b>' + (i).toString() + '</b>';
                    }
                    //columns would be accessed using the "colss" variable assigned in the for loop
                }
            }
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }
    else if (tableID == 'dataTableCaseChildDetail') {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        var cell1 = row.insertCell(0);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('style', 'width:100px');
        element1.setAttribute('onkeypress', 'return setUnicode(event, this);');
        var idd1 = "childFirstNameLoc_" + (rowCount);
        element1.id = idd1;
        cell1.appendChild(element1);

        
        // var gap1 = row.insertCell(1);

        var cell2 = row.insertCell(1);
        cell2.setAttribute('align', 'center');
        var element2 = document.createElement("input");
        element2.type = "text";
        element2.setAttribute('style', 'width:100px');
        element2.setAttribute('onkeypress', 'return setUnicode(event, this);');
        var idd2 = "childMiddleNameLoc_" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);
        //var gap2 = row.insertCell(3);

        var cell3 = row.insertCell(2);
        cell3.setAttribute('align', 'center');
        var element3 = document.createElement("input");
        element3.type = "text";
        element3.setAttribute('style', 'width:100px');
        element3.setAttribute('onkeypress', 'return setUnicode(event, this);');
        var idd3 = "childLastNameLoc_" + (rowCount);
        element3.id = idd3;
        cell3.appendChild(element3);
        //var gap3 = row.insertCell(5);

        var cell4 = row.insertCell(3);
        cell4.setAttribute('align', 'center');
        var element4 = document.createElement("input");
        element4.type = "text";
        element4.setAttribute('style', 'width:100px');
        var idd4 = "childFirstNameEng_" + (rowCount);
        element4.id = idd4;
        cell4.appendChild(element4);
        // var gap4 = row.insertCell(7);

        var cell5 = row.insertCell(4);
        cell5.setAttribute('align', 'center');
        var element5 = document.createElement("input");
        element5.type = "text";
        element5.setAttribute('style', 'width:100px');
        var idd5 = "childMiddleNameEng_" + (rowCount);
        element5.id = idd5;
        cell5.appendChild(element5);
        //var gap5 = row.insertCell(9);



        var cell6 = row.insertCell(5);
        cell6.setAttribute('align', 'center');
        cell6.setAttribute('width', '100px');
        var element15 = document.createElement("div");
        element15.className = 'td-dropdown';

        var element6 = document.createElement("input");
        element6.type = "text";
        element6.setAttribute('style', 'width:100px;margin-left: 0px');
        var idd6 = "childLastNameEng_" + (rowCount);
        element6.id = idd6;
        element15.appendChild(element6);
        var element16 = document.createElement("div");
        element16.className = 'req-img-container';

        var element7 = document.createElement("img");
        element7.setAttribute('align', 'right');
        element7.setAttribute('src', '../../Content/images/select-pop.png');
        element7.setAttribute('class', 'btmoreImg');
        element7.setAttribute('firstName', '#' + idd4);
        element7.setAttribute('middleName', '#' + idd5);
        element7.setAttribute('lastName', '#' + idd6);
        element7.setAttribute('firstNameLoc', '#' + idd1);
        element7.setAttribute('middleNameLoc', '#' + idd2);
        element7.setAttribute('lastNameLoc', '#' + idd3);
        var idd7 = "imgSpouse_" + (rowCount);
        element7.id = idd7;
        element16.appendChild(element7);

        cell6.appendChild(element15);
        cell6.appendChild(element16);
        //var gap6 = row.insertCell(11);




        // var gap7 = row.insertCell(12);
        var cell8 = row.insertCell(6);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }
    else if (tableID == 'dataTableDocumentBirth') {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        //Member Id
        var cell1111 = row.insertCell(0); 

        var element2111 = document.createElement("select");
        element2111.setAttribute('style', 'width:170px;margin-left:3px;');
        element2111.setAttribute('class', 'dynamic');
        var idd2111 = "ddl_MemberName" + (rowCount);
        element2111.id = idd2111;
        element2111.setAttribute('name', 'ddl_MemberName'); 
        element2111.setAttribute('datatype', "Document");
        element2111.innerHTML = strDistrictList;
        cell1111.appendChild(element2111);
        
        //End Member Number

        var cell123 = row.insertCell(1);
        cell123.setAttribute('align', 'center');
        var element223 = document.createElement("select");
        element223.setAttribute('style', 'width:120px;margin-left:3px;');
        element223.setAttribute('class', 'dynamic relTypeCls');
        var idd2 = "ddl_Relation" + (rowCount);
        element223.id = idd2;
        element223.setAttribute('name', 'ddl_Relation');
        element223.setAttribute('friend', idd1);
        element223.setAttribute('datatype', "Document");
        element223.innerHTML = strRelationList;
        cell123.appendChild(element223);

        var hdnelement24 = document.createElement("input");
        hdnelement24.type = "hidden";
        var hdnidd24 = "docTypeCd_" + (rowCount);
        hdnelement24.setAttribute('name', 'objBirthDoc1.docTypeCd');
        hdnelement24.id = hdnidd24;
        cell123.appendChild(hdnelement24);

        var hdnelement25 = document.createElement("input");
        hdnelement25.type = "hidden";
        var hdnidd25 = "docId_" + (rowCount);
        hdnelement25.setAttribute('name', 'objBirthDoc1.docId');
        hdnelement25.id = hdnidd25;
        cell123.appendChild(hdnelement25);

        var hdnelement26 = document.createElement("input");
        hdnelement26.type = "hidden";
        var hdnidd26 = "ImageLink_" + (rowCount);
        hdnelement26.setAttribute('name', 'objBirthDoc1.ImageLink');
        hdnelement26.id = hdnidd26;
        cell123.appendChild(hdnelement26);

        var hdnelement27 = document.createElement("input");
        hdnelement27.type = "hidden";
        var hdnidd27 = "sno_" + (rowCount);
        hdnelement27.setAttribute('name', 'objBirthDoc1.sno');
        hdnelement27.id = hdnidd27;
        cell123.appendChild(hdnelement27);

        var cell1 = row.insertCell(2);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('class', 'code-no dynamic2 txt_DocumentType textbox_req docTypeCls');
        var idd1 = "txt_DocumentType" + (rowCount);
        element1.setAttribute('name', 'txt_DocumentType');
        element1.setAttribute('friend', 'ddl_DocumentType' + (rowCount));
        element1.id = idd1;
        cell1.appendChild(element1); 

        var element2 = document.createElement("select");
        element2.setAttribute('style', 'width:120px;margin-left:3px;');
        element2.setAttribute('class', 'dynamic');
        var idd2 = "ddl_DocumentType" + (rowCount);
        element2.id = idd2;
        element2.setAttribute('name', 'ddl_DocumentType');
        element2.setAttribute('friend', idd1);
        element2.setAttribute('datatype', "Document");
        element2.innerHTML = strGenderList;
        cell1.appendChild(element2);

      

        var cell2 = row.insertCell(3);
        cell2.setAttribute('align', 'left');
        var element2 = document.createElement("input");
        element2.type = "file";
        element2.setAttribute('multiple', 'multiple');
        element2.setAttribute('name', 'DocFile');
        var idd2 = "DocFile" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);

        var cellnn = row.insertCell(4);


        // var gap7 = row.insertCell(12);
        var cell8 = row.insertCell(5);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }

    else if (tableID == 'dataTableDocumentDeath')
    {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        //Member Id
        var cell1111 = row.insertCell(0);

        var element2111 = document.createElement("select");
        element2111.setAttribute('style', 'width:170px;margin-left:3px;');
        element2111.setAttribute('class', 'dynamic');
        var idd2111 = "ddl_MemberName" + (rowCount);
        element2111.id = idd2111;
        element2111.setAttribute('name', 'ddl_MemberName');
        element2111.setAttribute('datatype', "Document");
        element2111.innerHTML = strDistrictList;
        cell1111.appendChild(element2111);

        //End Member Number

        var cell123 = row.insertCell(1);
        cell123.setAttribute('align', 'center');
        var element223 = document.createElement("select");
        element223.setAttribute('style', 'width:120px;margin-left:3px;');
        element223.setAttribute('class', 'dynamic relTypeCls');
        var idd2 = "ddl_Relation" + (rowCount);
        element223.id = idd2;
        element223.setAttribute('name', 'ddl_Relation');
        element223.setAttribute('friend', idd1);
        element223.setAttribute('datatype', "Document");
        element223.innerHTML = strRelationList;
        cell123.appendChild(element223);

        var hdnelement24 = document.createElement("input");
        hdnelement24.type = "hidden";
        var hdnidd24 = "docTypeCd_" + (rowCount);
        hdnelement24.setAttribute('name', 'objDeathDoc1.docTypeCd');
        hdnelement24.id = hdnidd24;
        cell123.appendChild(hdnelement24);

        var hdnelement25 = document.createElement("input");
        hdnelement25.type = "hidden";
        var hdnidd25 = "docId_" + (rowCount);
        hdnelement25.setAttribute('name', 'objDeathDoc1.docId');
        hdnelement25.id = hdnidd25;
        cell123.appendChild(hdnelement25);

        var hdnelement26 = document.createElement("input");
        hdnelement26.type = "hidden";
        var hdnidd26 = "ImageLink_" + (rowCount);
        hdnelement26.setAttribute('name', 'objDeathDoc1.ImageLink');
        hdnelement26.id = hdnidd26;
        cell123.appendChild(hdnelement26);

        var hdnelement27 = document.createElement("input");
        hdnelement27.type = "hidden";
        var hdnidd27 = "sno_" + (rowCount);
        hdnelement27.setAttribute('name', 'objDeathDoc1.sno');
        hdnelement27.id = hdnidd27;
        cell123.appendChild(hdnelement27);

        var cell1 = row.insertCell(2);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('class', 'code-no dynamic2 txt_DocumentType textbox_req docTypeCls');
        var idd1 = "txt_DocumentType" + (rowCount);
        element1.setAttribute('name', 'txt_DocumentType');
        element1.setAttribute('friend', 'ddl_DocumentType' + (rowCount));
        element1.id = idd1;
        cell1.appendChild(element1);

        var element2 = document.createElement("select");
        element2.setAttribute('style', 'width:120px;margin-left:3px;');
        element2.setAttribute('class', 'dynamic');
        var idd2 = "ddl_DocumentType" + (rowCount);
        element2.id = idd2;
        element2.setAttribute('name', 'ddl_DocumentType');
        element2.setAttribute('friend', idd1);
        element2.setAttribute('datatype', "Document");
        element2.innerHTML = strGenderList;
        cell1.appendChild(element2);



        var cell2 = row.insertCell(3);
        cell2.setAttribute('align', 'left');
        var element2 = document.createElement("input");
        element2.type = "file";
        element2.setAttribute('multiple', 'multiple');
        element2.setAttribute('name', 'DocFile');
        var idd2 = "DocFile" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);

        var cellnn = row.insertCell(4);


        // var gap7 = row.insertCell(12);
        var cell8 = row.insertCell(5);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }

    else if (tableID == 'dataTableDocumentMarriage') {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        //Member Id
        var cell1111 = row.insertCell(0);

        var element2111 = document.createElement("select");
        element2111.setAttribute('style', 'width:170px;margin-left:3px;');
        element2111.setAttribute('class', 'dynamic');
        var idd2111 = "ddl_MemberName" + (rowCount);
        element2111.id = idd2111;
        element2111.setAttribute('name', 'ddl_MemberName');
        element2111.setAttribute('datatype', "Document");
        element2111.innerHTML = strDistrictList;
        cell1111.appendChild(element2111);

        //End Member Number

        var cell123 = row.insertCell(1);
        cell123.setAttribute('align', 'center');
        var element223 = document.createElement("select");
        element223.setAttribute('style', 'width:120px;margin-left:3px;');
        element223.setAttribute('class', 'dynamic relTypeCls');
        var idd2 = "ddl_Relation" + (rowCount);
        element223.id = idd2;
        element223.setAttribute('name', 'ddl_Relation');
        element223.setAttribute('friend', idd1);
        element223.setAttribute('datatype', "Document");
        element223.innerHTML = strRelationList;
        cell123.appendChild(element223);

        var hdnelement24 = document.createElement("input");
        hdnelement24.type = "hidden";
        var hdnidd24 = "docTypeCd_" + (rowCount);
        hdnelement24.setAttribute('name', 'objMarriageDoc.docTypeCd');
        hdnelement24.id = hdnidd24;
        cell123.appendChild(hdnelement24);

        var hdnelement25 = document.createElement("input");
        hdnelement25.type = "hidden";
        var hdnidd25 = "docId_" + (rowCount);
        hdnelement25.setAttribute('name', 'objMarriageDoc.docId');
        hdnelement25.id = hdnidd25;
        cell123.appendChild(hdnelement25);

        var hdnelement26 = document.createElement("input");
        hdnelement26.type = "hidden";
        var hdnidd26 = "ImageLink_" + (rowCount);
        hdnelement26.setAttribute('name', 'objMarriageDoc.ImageLink');
        hdnelement26.id = hdnidd26;
        cell123.appendChild(hdnelement26);

        var hdnelement27 = document.createElement("input");
        hdnelement27.type = "hidden";
        var hdnidd27 = "sno_" + (rowCount);
        hdnelement27.setAttribute('name', 'objMarriageDoc.sno');
        hdnelement27.id = hdnidd27;
        cell123.appendChild(hdnelement27);

        var cell1 = row.insertCell(2);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('class', 'code-no dynamic2 txt_DocumentType textbox_req docTypeCls');
        var idd1 = "txt_DocumentType" + (rowCount);
        element1.setAttribute('name', 'txt_DocumentType');
        element1.setAttribute('friend', 'ddl_DocumentType' + (rowCount));
        element1.id = idd1;
        cell1.appendChild(element1);

        var element2 = document.createElement("select");
        element2.setAttribute('style', 'width:120px;margin-left:3px;');
        element2.setAttribute('class', 'dynamic');
        var idd2 = "ddl_DocumentType" + (rowCount);
        element2.id = idd2;
        element2.setAttribute('name', 'ddl_DocumentType');
        element2.setAttribute('friend', idd1);
        element2.setAttribute('datatype', "Document");
        element2.innerHTML = strGenderList;
        cell1.appendChild(element2);



        var cell2 = row.insertCell(3);
        cell2.setAttribute('align', 'left');
        var element2 = document.createElement("input");
        element2.type = "file";
        element2.setAttribute('multiple', 'multiple');
        element2.setAttribute('name', 'DocFile');
        var idd2 = "DocFile" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);

        var cellnn = row.insertCell(4);


        // var gap7 = row.insertCell(12);
        var cell8 = row.insertCell(5);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }

    else if (tableID == 'dataTableDocumentDivorce') {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        //Member Id
        var cell1111 = row.insertCell(0);

        var element2111 = document.createElement("select");
        element2111.setAttribute('style', 'width:170px;margin-left:3px;');
        element2111.setAttribute('class', 'dynamic');
        var idd2111 = "ddl_MemberName" + (rowCount);
        element2111.id = idd2111;
        element2111.setAttribute('name', 'ddl_MemberName');
        element2111.setAttribute('datatype', "Document");
        element2111.innerHTML = strDistrictList;
        cell1111.appendChild(element2111);

        //End Member Number

        var cell123 = row.insertCell(1);
        cell123.setAttribute('align', 'center');
        var element223 = document.createElement("select");
        element223.setAttribute('style', 'width:120px;margin-left:3px;');
        element223.setAttribute('class', 'dynamic relTypeCls');
        var idd2 = "ddl_Relation" + (rowCount);
        element223.id = idd2;
        element223.setAttribute('name', 'ddl_Relation');
        element223.setAttribute('friend', idd1);
        element223.setAttribute('datatype', "Document");
        element223.innerHTML = strRelationList;
        cell123.appendChild(element223);

        var hdnelement24 = document.createElement("input");
        hdnelement24.type = "hidden";
        var hdnidd24 = "docTypeCd_" + (rowCount);
        hdnelement24.setAttribute('name', 'objDivorceDoc.docTypeCd');
        hdnelement24.id = hdnidd24;
        cell123.appendChild(hdnelement24);

        var hdnelement25 = document.createElement("input");
        hdnelement25.type = "hidden";
        var hdnidd25 = "docId_" + (rowCount);
        hdnelement25.setAttribute('name', 'objDivorceDoc.docId');
        hdnelement25.id = hdnidd25;
        cell123.appendChild(hdnelement25);

        var hdnelement26 = document.createElement("input");
        hdnelement26.type = "hidden";
        var hdnidd26 = "ImageLink_" + (rowCount);
        hdnelement26.setAttribute('name', 'objDivorceDoc.ImageLink');
        hdnelement26.id = hdnidd26;
        cell123.appendChild(hdnelement26);

        var hdnelement27 = document.createElement("input");
        hdnelement27.type = "hidden";
        var hdnidd27 = "sno_" + (rowCount);
        hdnelement27.setAttribute('name', 'objDivorceDoc.sno');
        hdnelement27.id = hdnidd27;
        cell123.appendChild(hdnelement27);

        var cell1 = row.insertCell(2);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('class', 'code-no dynamic2 txt_DocumentType textbox_req docTypeCls');
        var idd1 = "txt_DocumentType" + (rowCount);
        element1.setAttribute('name', 'txt_DocumentType');
        element1.setAttribute('friend', 'ddl_DocumentType' + (rowCount));
        element1.id = idd1;
        cell1.appendChild(element1);

        var element2 = document.createElement("select");
        element2.setAttribute('style', 'width:120px;margin-left:3px;');
        element2.setAttribute('class', 'dynamic');
        var idd2 = "ddl_DocumentType" + (rowCount);
        element2.id = idd2;
        element2.setAttribute('name', 'ddl_DocumentType');
        element2.setAttribute('friend', idd1);
        element2.setAttribute('datatype', "Document");
        element2.innerHTML = strGenderList;
        cell1.appendChild(element2);



        var cell2 = row.insertCell(3);
        cell2.setAttribute('align', 'left');
        var element2 = document.createElement("input");
        element2.type = "file";
        element2.setAttribute('multiple', 'multiple');
        element2.setAttribute('name', 'DocFile');
        var idd2 = "DocFile" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);

        var cellnn = row.insertCell(4);


        // var gap7 = row.insertCell(12);
        var cell8 = row.insertCell(5);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }

    else if (tableID == 'dataTableDocumentMigration') {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        //Member Id
        var cell1111 = row.insertCell(0);

        var element2111 = document.createElement("select");
        element2111.setAttribute('style', 'width:170px;margin-left:3px;');
        element2111.setAttribute('class', 'dynamic');
        var idd2111 = "ddl_MemberName" + (rowCount);
        element2111.id = idd2111;
        element2111.setAttribute('name', 'ddl_MemberName');
        element2111.setAttribute('datatype', "Document");
        element2111.innerHTML = strDistrictList;
        cell1111.appendChild(element2111);

        //End Member Number

        var cell123 = row.insertCell(1);
        cell123.setAttribute('align', 'center');
        var element223 = document.createElement("select");
        element223.setAttribute('style', 'width:120px;margin-left:3px;');
        element223.setAttribute('class', 'dynamic relTypeCls');
        var idd2 = "ddl_Relation" + (rowCount);
        element223.id = idd2;
        element223.setAttribute('name', 'ddl_Relation');
        element223.setAttribute('friend', idd1);
        element223.setAttribute('datatype', "Document");
        element223.innerHTML = strRelationList;
        cell123.appendChild(element223);

        var hdnelement24 = document.createElement("input");
        hdnelement24.type = "hidden";
        var hdnidd24 = "docTypeCd_" + (rowCount);
        hdnelement24.setAttribute('name', 'objMigrationDoc.docTypeCd');
        hdnelement24.id = hdnidd24;
        cell123.appendChild(hdnelement24);

        var hdnelement25 = document.createElement("input");
        hdnelement25.type = "hidden";
        var hdnidd25 = "docId_" + (rowCount);
        hdnelement25.setAttribute('name', 'objMigrationDoc.docId');
        hdnelement25.id = hdnidd25;
        cell123.appendChild(hdnelement25);

        var hdnelement26 = document.createElement("input");
        hdnelement26.type = "hidden";
        var hdnidd26 = "ImageLink_" + (rowCount);
        hdnelement26.setAttribute('name', 'objMigrationDoc.ImageLink');
        hdnelement26.id = hdnidd26;
        cell123.appendChild(hdnelement26);

        var hdnelement27 = document.createElement("input");
        hdnelement27.type = "hidden";
        var hdnidd27 = "sno_" + (rowCount);
        hdnelement27.setAttribute('name', 'objMigrationDoc.sno');
        hdnelement27.id = hdnidd27;
        cell123.appendChild(hdnelement27);

        var cell1 = row.insertCell(2);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('class', 'code-no dynamic2 txt_DocumentType textbox_req docTypeCls');
        var idd1 = "txt_DocumentType" + (rowCount);
        element1.setAttribute('name', 'txt_DocumentType');
        element1.setAttribute('friend', 'ddl_DocumentType' + (rowCount));
        element1.id = idd1;
        cell1.appendChild(element1);

        var element2 = document.createElement("select");
        element2.setAttribute('style', 'width:120px;margin-left:3px;');
        element2.setAttribute('class', 'dynamic');
        var idd2 = "ddl_DocumentType" + (rowCount);
        element2.id = idd2;
        element2.setAttribute('name', 'ddl_DocumentType');
        element2.setAttribute('friend', idd1);
        element2.setAttribute('datatype', "Document");
        element2.innerHTML = strGenderList;
        cell1.appendChild(element2);



        var cell2 = row.insertCell(3);
        cell2.setAttribute('align', 'left');
        var element2 = document.createElement("input");
        element2.type = "file";
        element2.setAttribute('multiple', 'multiple');
        element2.setAttribute('name', 'DocFile');
        var idd2 = "DocFile" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);

        var cellnn = row.insertCell(4);


        // var gap7 = row.insertCell(12);
        var cell8 = row.insertCell(5);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }

    else if (tableID == 'dataTableChangeRequest') {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        //Member Id
//        var cell1111 = row.insertCell(0);

//        var element2111 = document.createElement("select");
//        element2111.setAttribute('style', 'width:170px;margin-left:3px;');
//        element2111.setAttribute('class', 'dynamic');
//        var idd2111 = "ddl_MemberName" + (rowCount);
//        element2111.id = idd2111;
//        element2111.setAttribute('name', 'ddl_MemberName');
//        element2111.setAttribute('datatype', "Document");
//        element2111.innerHTML = strDistrictList;
//        cell1111.appendChild(element2111);

        //End Member Number

//        var cell123 = row.insertCell(1);
//        cell123.setAttribute('align', 'center');
//        var element223 = document.createElement("select");
//        element223.setAttribute('style', 'width:120px;margin-left:3px;');
//        element223.setAttribute('class', 'dynamic relTypeCls');
//        var idd2 = "ddl_Relation" + (rowCount);
//        element223.id = idd2;
//        element223.setAttribute('name', 'ddl_Relation');
//        element223.setAttribute('friend', idd1);
//        element223.setAttribute('datatype', "Document");
//        element223.innerHTML = strRelationList;
//        cell123.appendChild(element223);

        var cell1 = row.insertCell(0);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('class', 'code-no dynamic2 txt_DocumentType textbox_req docTypeCls');
        var idd1 = "txt_DocumentType" + (rowCount);
        element1.setAttribute('name', 'txt_DocumentType');
        element1.setAttribute('friend', 'ddl_DocumentType' + (rowCount));
        element1.id = idd1;
        cell1.appendChild(element1);

        var element2 = document.createElement("select");
        element2.setAttribute('style', 'width:120px;margin-left:3px;');
        element2.setAttribute('class', 'dynamic');
        var idd2 = "ddl_DocumentType" + (rowCount);
        element2.id = idd2;
        element2.setAttribute('name', 'ddl_DocumentType');
        element2.setAttribute('friend', idd1);
        element2.setAttribute('datatype', "Document");
        element2.innerHTML = strGenderList;
        cell1.appendChild(element2);

        var hdnelement24 = document.createElement("input");
        hdnelement24.type = "hidden";
        var hdnidd24 = "docTypeCd_" + (rowCount);
        hdnelement24.setAttribute('name', 'objBirthDoc1.docTypeCd');
        hdnelement24.id = hdnidd24;
        cell1.appendChild(hdnelement24);

        var hdnelement25 = document.createElement("input");
        hdnelement25.type = "hidden";
        var hdnidd25 = "docId_" + (rowCount);
        hdnelement25.setAttribute('name', 'objBirthDoc1.docId');
        hdnelement25.id = hdnidd25;
        cell1.appendChild(hdnelement25);

        var hdnelement26 = document.createElement("input");
        hdnelement26.type = "hidden";
        var hdnidd26 = "ImageLink_" + (rowCount);
        hdnelement26.setAttribute('name', 'objBirthDoc1.ImageLink');
        hdnelement26.id = hdnidd26;
        cell1.appendChild(hdnelement26);

        var hdnelement27 = document.createElement("input");
        hdnelement27.type = "hidden";
        var hdnidd27 = "sno_" + (rowCount);
        hdnelement27.setAttribute('name', 'objBirthDoc1.sno');
        hdnelement27.id = hdnidd27;
        cell1.appendChild(hdnelement27);


        var cell2 = row.insertCell(1);
        cell2.setAttribute('align', 'left');
        var element2 = document.createElement("input");
        element2.type = "file";
        element2.setAttribute('multiple', 'multiple');
        element2.setAttribute('name', 'DocFile');
        var idd2 = "DocFile" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);

        var cellnn = row.insertCell(2);


        // var gap7 = row.insertCell(12);
        var cell8 = row.insertCell(3);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }

    else if (tableID == 'dataTableDocumentSSNP') {
        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.setAttribute('style', 'background-color: #babeb6');

        //Member Id
        var cell1111 = row.insertCell(0);

        var element2111 = document.createElement("select");
        element2111.setAttribute('style', 'width:170px;margin-left:3px;');
        element2111.setAttribute('class', 'dynamic');
        var idd2111 = "ddl_MemberName" + (rowCount);
        element2111.id = idd2111;
        element2111.setAttribute('name', 'ddl_MemberName');
        element2111.setAttribute('datatype', "Document");
        element2111.innerHTML = strDistrictList;
        cell1111.appendChild(element2111);

        //End Member Number

        var cell123 = row.insertCell(1);
        cell123.setAttribute('align', 'center');
        var element223 = document.createElement("select");
        element223.setAttribute('style', 'width:120px;margin-left:3px;');
        element223.setAttribute('class', 'dynamic relTypeCls');
        var idd2 = "ddl_Relation" + (rowCount);
        element223.id = idd2;
        element223.setAttribute('name', 'ddl_Relation');
        element223.setAttribute('friend', idd1);
        element223.setAttribute('datatype', "Document");
        element223.innerHTML = strRelationList;
        cell123.appendChild(element223);

        var hdnelement24 = document.createElement("input");
        hdnelement24.type = "hidden";
        var hdnidd24 = "docTypeCd_" + (rowCount);
        hdnelement24.setAttribute('name', 'objSSNPDoc1.docTypeCd');
        hdnelement24.id = hdnidd24;
        cell123.appendChild(hdnelement24);

        var hdnelement25 = document.createElement("input");
        hdnelement25.type = "hidden";
        var hdnidd25 = "docId_" + (rowCount);
        hdnelement25.setAttribute('name', 'objSSNPDoc1.docId');
        hdnelement25.id = hdnidd25;
        cell123.appendChild(hdnelement25);

        var hdnelement26 = document.createElement("input");
        hdnelement26.type = "hidden";
        var hdnidd26 = "ImageLink_" + (rowCount);
        hdnelement26.setAttribute('name', 'objSSNPDoc1.ImageLink');
        hdnelement26.id = hdnidd26;
        cell123.appendChild(hdnelement26);

        var hdnelement27 = document.createElement("input");
        hdnelement27.type = "hidden";
        var hdnidd27 = "sno_" + (rowCount);
        hdnelement27.setAttribute('name', 'objSSNPDoc1.sno');
        hdnelement27.id = hdnidd27;
        cell123.appendChild(hdnelement27);

        var cell1 = row.insertCell(2);
        cell1.setAttribute('align', 'center');
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.setAttribute('class', 'code-no dynamic2 txt_DocumentType textbox_req docTypeCls');
        var idd1 = "txt_DocumentType" + (rowCount);
        element1.setAttribute('name', 'txt_DocumentType');
        element1.setAttribute('friend', 'ddl_DocumentType' + (rowCount));
        element1.id = idd1;
        cell1.appendChild(element1);

        var element2 = document.createElement("select");
        element2.setAttribute('style', 'width:120px;margin-left:3px;');
        element2.setAttribute('class', 'dynamic');
        var idd2 = "ddl_DocumentType" + (rowCount);
        element2.id = idd2;
        element2.setAttribute('name', 'ddl_DocumentType');
        element2.setAttribute('friend', idd1);
        element2.setAttribute('datatype', "Document");
        element2.innerHTML = strGenderList;
        cell1.appendChild(element2);



        var cell2 = row.insertCell(3);
        cell2.setAttribute('align', 'left');
        var element2 = document.createElement("input");
        element2.type = "file";
        element2.setAttribute('multiple', 'multiple');
        element2.setAttribute('name', 'DocFile');
        var idd2 = "DocFile" + (rowCount);
        element2.id = idd2;
        cell2.appendChild(element2);

        var cellnn = row.insertCell(4);


        // var gap7 = row.insertCell(12);
        var cell8 = row.insertCell(5);
        cell8.setAttribute('align', 'center');
        var element8 = document.createElement("img");
        element8.setAttribute('src', '../../Content/images/delete.png');
        element8.setAttribute('class', 'deleteImg');
        var idd8 = "img_" + (rowCount);
        element8.id = idd8;
        cell8.appendChild(element8);
        $('.deleteImg').live('click', function () {
            $(this).closest("tr").remove();
        });

        $('.btmoreImg').live('click', function () {
            SearchMember("Member", $(this).attr('id'));
        });

        $('.btmoreImg').live('mouseover', function () {
            $(this).css('cursor', 'pointer');
        });
    }
}

function ReArrangeData() {

}

function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    } catch (e) {
        alert(e);
    }
}


$('.dynamic').live('change', function () {
     var friendId = '#' + $(this).attr('friend');
    var ddlId = $j(this).attr('id');
    var attr = $j(this).attr('friend');
    $(friendId).val($(this).val());
    PopulateT($j(this).attr('id'));
    if (typeof attr !== 'undefined' && attr !== false) {
        $j('#' + attr).change(function () {
            $j('#' + ddlId).val($j(this).val()).trigger('change');
        });
    }
});

$('.dynamic2').live('change', function () {
    var friendId = '#' + $(this).attr('friend');
    var txtId = $j(this).attr('id');
    var attr = $j(this).attr('friend');
    $(friendId).val($(this).val());
    Populate($j(this).attr('friend'));
});

function PopulateT(ddlName) {
     var dataType = jQuery('#' + ddlName).attr('dataType');
    if (!dataType) {
        return;
    }
    else // data dropdown detected, hence PROCEED
    {
        var myId = jQuery('#' + ddlName).attr('id');
        var child = jQuery('#' + ddlName).attr('child');
        var url = "";
        switch (dataType) {
            case 'District':
                url = '../../Common/FillVDCMun/?isPopup=false&districtDefCd=';
                break;
            case 'VDCMun':
                url = '../../Common/FillWard/?isPopup=false&vdcMunDefCd=';
                break;
            case 'VDC/Municipality':
                url = '../../Common/FillWard/?isPopup=false&vdcMunDefCd=';
                break;
        }
        if (url.length > 5 && typeof child !== 'undefined') {
            url += jQuery('#' + myId).val();
            var childDdl = jQuery('#' + child);
            var grandChildDdl = jQuery('#' + childDdl.attr('child'));
            var greatgrandChildDdl = jQuery('#' + grandChildDdl.attr('child'));
            childDdl.empty();
            //jQuery('#' + childDdl.attr('id') + '> option:gt(0)').remove();
            jQuery('#' + grandChildDdl.attr('id') + '> option:gt(0)').remove();
            jQuery('#' + greatgrandChildDdl.attr('id') + '> option:gt(0)').remove();

            jQuery.getJSON(url, function (data) {
                jQuery(data).each(function (index, element) {
                    jQuery('<option>').val(element.Value).text(element.Text).appendTo('#' + child);
                });
                jQuery('#' + childDdl.attr('friend')).val('');
                jQuery('#' + grandChildDdl.attr('friend')).val('');
                jQuery('#' + greatgrandChildDdl.attr('friend')).val('');
            });

        }
    }
}



$j(".date1").live('click', function () {
    $j(this).datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        onSelect: function (dateText, instance) {
            var pieces = dateText.split("/");
            var t = '#' + $j(this).attr("id");
            $j(t).parents('li:first').find('.date1:eq(0)').val(pieces[0])
            $j(t).parents('li:first').find('.date1:eq(1)').val(pieces[1])
            $j(t).parents('li:first').find('.date1:eq(2)').val(pieces[2])
            var $this1 = $j(t).parents('li:first').find('.date1:eq(0)');
            var $this2 = $j(t).parents('li:first').find('.date1:eq(1)');
            var $this3 = $j(t).parents('li:first').find('.date1:eq(2)');
            if ($this1.val() == '' || $this2.val() == '' || $this3.val() == '') {

            }
            else {

                var val1 = "";
                var val1 = "";
                var val3 = "";
                var val1 = $j(t).parents('li:first').find('.date1LOC:eq(0)');
                var val2 = $j(t).parents('li:first').find('.date1LOC:eq(1)');
                var val3 = $j(t).parents('li:first').find('.date1LOC:eq(2)');
                var url1 = '../../Home/ChangeDate?id=' + $this2.val() + "-" + $this1.val() + "-" + $this3.val();
                $j.ajax({
                    url: url1,
                    type: "POST",
                    data: null,
                    success: function (data) {
                        var nepDate = data.newNepaliDate.split('-');
                        val1.val(nepDate[0]);
                        val2.val(nepDate[1]);
                        val3.val(nepDate[2]);
                    }
                });
            }
        }
    })

    $j(this).change(function () {
        var t = '#' + $j(this).attr("id");
        var $this1 = $j(t).parents('li:first').find('.date1:eq(0)');
        var $this2 = $j(t).parents('li:first').find('.date1:eq(1)');
        var $this3 = $j(t).parents('li:first').find('.date1:eq(2)');

        if ($this1.val() != '') {
            if ($this1.val().length < 2) {
                $(t).val("0" + $this1.val());

            }
        }
        if ($this2.val() != '') {
            if ($this2.val().length < 2) {
                $(t).val("0" + $this2.val());
            }
        }

        if ($this1.val() == '' || $this2.val() == '' || $this3.val() == '') {

        }
        else {

            if ($j(this).attr('copyTo')) {
                var copyToId = $(this).attr('copyTo');
            }

            var val1 = "";
            var val1 = "";
            var val3 = "";
            var val1 = $j(t).parents('li:first').find('.date1LOC:eq(0)');
            var val2 = $j(t).parents('li:first').find('.date1LOC:eq(1)');
            var val3 = $j(t).parents('li:first').find('.date1LOC:eq(2)');
            var url1 = '../../Home/ChangeDate?id=' + $this2.val() + "-" + $this1.val() + "-" + $this3.val();
            $j.ajax({
                url: url1,
                type: "POST",
                data: null,
                success: function (data) {
                    var nepDate = data.newNepaliDate.split('-');
                    val1.val(nepDate[0]);
                    val2.val(nepDate[1]);
                    val3.val(nepDate[2]);
                    if (copyToId == 'Yearfrom' || copyToId == 'monthfrom' || copyToId == 'dayfrom') {
                        if ($('#DobDayFrom').val().length == 0) {
                            $('#DobDayFrom').val(nepDate[2]);
                        }
                        if ($('#DobMonthFrom').val().length == 0) {
                            $('#DobMonthFrom').val(nepDate[1]);
                        }
                        if ($('#DobYearFrom').val().length == 0) {
                            $('#DobYearFrom').val(nepDate[0]);
                        }
                    }
                    else if (copyToId == 'YearTo' || copyToId == 'MonthTo' || copyToId == 'DayTo') {
                        if ($('#DobDayTo').val().length == 0) {
                            $('#DobDayTo').val(nepDate[2]);
                        }
                        if ($('#DobMonthTo').val().length == 0) {
                            $('#DobMonthTo').val(nepDate[1]);
                        }
                        if ($('#DobYearTo').val().length == 0) {
                            $('#DobYearTo').val(nepDate[0]);
                        }
                    }

                }
            });
        }
    });

});

$j(".date1LOC").live('change', function () {


    var $this1 = $j(this).parents('li:first').find('.date1LOC:eq(0)');
    var $this2 = $j(this).parents('li:first').find('.date1LOC:eq(1)');
    var $this3 = $j(this).parents('li:first').find('.date1LOC:eq(2)');
    var t = '#' + $j(this).attr("id");
    if ($this2.val() != '') {
        if ($this2.val().length < 2) {
            $(t).val("0" + $this2.val());

        }
    }
    if ($this3.val() != '') {
        if ($this3.val().length < 2) {
            $(t).val("0" + $this3.val());
        }
    }

    if ($this1.val() == '' || $this2.val() == '' || $this3.val() == '') {

    }
    else {

        if ($j(this).attr('copyTo')) {
            var copyToId = $(this).attr('copyTo');

        }
        var val1 = $j(t).parents('li:first').find('.date1:eq(0)');
        var val2 = $j(t).parents('li:first').find('.date1:eq(1)');
        var val3 = $j(t).parents('li:first').find('.date1:eq(2)');
        var url1 = '../../Home/ChangeDateToEnglish?id=' + $this1.val() + "-" + $this2.val() + "-" + $this3.val();
        $j.ajax({
            url: url1,
            type: "POST",
            data: null,
            success: function (data) {
                var nepDate = data.newEnglishDate.split('-');
                val3.val(nepDate[2]);
                var url2 = '../../Home/ConvertMonth?id=' + nepDate[1];
                $j.ajax({
                    url: url2,
                    type: "POST",
                    data: null,
                    success: function (data) {
                        val2.val(data.convertedMonth);
                        val1.val(nepDate[0]);
                        if (copyToId == 'DobYearFrom' || copyToId == 'DobMonthFrom' || copyToId == 'DobDayFrom') {
                            if ($('#dayfrom').val().length == 0) {
                                $('#dayfrom').val(val1.val());
                            }
                            if ($('#monthfrom').val().length == 0) {
                                $('#monthfrom').val($('#MonthTo').val());
                            }
                            if ($('#Yearfrom').val().length == 0) {
                                $('#Yearfrom').val(val3.val());
                            }
                        }
                        else if (copyToId == 'DobYearTo' || copyToId == 'DobMonthTo' || copyToId == 'DobDayTo') {
                            if ($('#DayTo').val().length == 0) {
                                $('#DayTo').val(val1.val());
                            }
                            if ($('#MonthTo').val().length == 0) {
                                $('#MonthTo').val($('#monthfrom').val());
                            }
                            if ($('#YearTo').val().length == 0) {
                                $('#YearTo').val(val3.val());
                            }
                        }
                    }
                });


            }
        });
    }
});

