<%@ Page Title="" Language="C#" MasterPageFile="~/MainMaster.master" AutoEventWireup="true" CodeFile="DeliveryMaster.aspx.cs" Inherits="SeaExport_MasterSetup_DeliveryMaster" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
     <style>
        .lefttd {
            width: 30%;
            background-color: #E8E8E8;
            font-weight: bold;
        }

        .midttd {
            width: 1%;
            font-weight: bold;
        }

        .righttd {
            width: 69%;
        }

        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
            padding: 4px;
        }
    </style>
    <script type="text/javascript" src="../Javascript/MasterSetupDeliveryMaster.js"></script>

     <input type="hidden" id="hidSearchFlag" value="" />
     <input type="hidden" id="hidEntryMode" value="" />

   
    <div id='MasterTabs'>
            <ul>
                <li style="margin-left: 50px;">Delivery Agent Details</li>
                <li>Contact Details</li>               
            </ul>

    <div>
    <div class="forFieldset">
        <table style="width: 100%; vertical-align: top;">
            <tr>
                <td style="width: 39%; vertical-align: top; border-right: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000">
                    <div class="forFieldset">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr class="tr30">
                                    <td style="text-align: center; background-color: #7a869c; color: white; width: 100%; font-weight: bold">Delivery List
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="width: 100%; text-align: center">
                                        <input type="text" id="txtSearchDeliveryCodeName" placeholder="Search Delivery by Code/Name" style="width: 450px" maxlength="500" />
                                    </td>
                                </tr>

                                <tr>
                                    <td style="width: 100%">
                                        <div id="grdDeliveryList" style="width: 100%">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td style="width: 1%;"></td>

                <td style="width: 40%; vertical-align: top; border-right: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000">
                    <div id='Window'>    
                         <div id="dvDeliveryMaster">     
                             <div class="table-responsive" style="width: 100%;">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr class="tr30">
                                    <th class="lefttd" style="text-align: center; background-color: #7a869c; color: white;"></th>
                                    <th class="midttd" style="text-align: center; background-color: #7a869c; color: white;"></th>
                                    <th class="righttd" style="text-align: left; background-color: #7a869c; color: white;">Delivery Master</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tr30">
                                    <td class="lefttd" style="background-color: #E8E8E8;">Delivery Code:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td class="righttd">
                                        <input type="text" id="txtDeliveryCode" style="width: 350px" maxlength="4" />
                                    </td>
                                </tr>
                                <tr class="tr30">
                                    <td class="lefttd" style="background-color: #E8E8E8;">Delivery Name:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtDeliveryName" style="width: 350px" maxlength="40" />
                                    </td>
                                </tr>                                
                                <tr class="tr30">
                                    <td class="lefttd" style="background-color: #E8E8E8;">Address:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtAddress1" style="width: 350px" maxlength="50" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;"></td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtAddress2" style="width: 350px" maxlength="50" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;"></td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtAddress3" style="width: 350px" maxlength="50" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;"></td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtAddress4" style="width: 350px" maxlength="50" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">City:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtCity" style="width: 350px" maxlength="20" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">State:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtState" style="width: 350px" maxlength="30" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">Country:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtCountry" style="width: 350px" maxlength="30" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">Phone No.:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtPhoneNo" style="width: 350px" maxlength="50" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">Fax
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtFax" style="width: 350px" maxlength="30" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">E-Mail
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtEMail" style="width: 350px" maxlength="100" />
                                    </td>
                                </tr> 
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">E-Mail (Nomination)
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtEMailNomination" style="width: 350px" maxlength="100" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">Cont. Person
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtContPer" style="width: 350px" maxlength="30" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">NVOCC Line
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <div id="ddNvocc"></div>
                                        <%--<select id="ddNvocc" style="width: 350px;height: 28px;">
                                            <option></option>
                                        </select>--%>
                                    </td>
                                </tr>


                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">SL No.:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <div id="ddSlNo"></div>
                                        <%--<select id="ddSlNo" style="width: 350px;height: 28px;">
                                            <option></option>
                                        </select>--%>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">S.L.Code:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <div id="ddSLCode"></div>
                                        <%--<select id="ddSLCode" style="width: 350px;height: 28px;">
                                            <option></option>
                                        </select>--%>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">Location Initial:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtLocationInit" style="width: 350px" maxlength="30" />
                                    </td>
                                </tr>  
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">Login Name:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtLoginName" style="width: 350px" maxlength="30" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">Password:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtPassword" style="width: 350px" maxlength="30" />
                                    </td>
                                </tr>                                                           
                                <tr>
                                    <td style="width: 100%; text-align: center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td style="width: 100%; text-align: center" colspan="3">
                                        <input type="button" value="New" id='BtnNew' />
                                        <input type="button" value="Edit" id='BtnEdit' />
                                        <input type="button" value="Search" id='BtnSearch' />
                                        <input type="button" value="Delete" id='BtnDelete' /><br />
                                        <input type="button" value="Save" id='BtnSave' />
                                        <input type="button" value="Cancel" id='BtnCancel' />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    </div>
                    </div>   
                </td>
                <td style="width: 20%; vertical-align: top"></td>
            </tr>
        </table>
    </div>

    <div id='ControlAlertBox' style="display: none;">
        <div>
            <span style="font-weight: bold; font-size: 15px; font-family: Calibri">Delete Delivery Master</span>
        </div>
        <br />
        <div>
            Are You Sure, Do you want to delete ?&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" style="width: 50px" value="Yes" id="btnYes" />&nbsp;&nbsp;  
                <input type="button" style="width: 50px" value="No" id="btnNo" />
        </div>
    </div>
    
    </div>

    <div>
        <div class="forFieldset">
        <table style="width: 100%; vertical-align: top;">
            <tr>
                <td style="width: 39%; vertical-align: top; border-right: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000">
                    <div class="forFieldset">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr class="tr30">
                                    <td style="text-align: center; background-color: #7a869c; color: white; width: 100%; font-weight: bold">Delivery List
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <%--<tr>
                                    <td style="width: 100%; text-align: center">
                                        <input type="text" id="txtSearchDeliveryCodeName" placeholder="Search Delivery by Code/Name" style="width: 450px" maxlength="500" />
                                    </td>
                                </tr>--%>

                                <tr>
                                    <td style="width: 100%">
                                        <div id="grdDeliveryList2" style="width: 100%">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td style="width: 1%;"></td>

                <td style="width: 40%; vertical-align: top; border-right: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000">
                    <div id='Window2'>    
                         <div id="dvDeliveryMaster2">     
                             <div class="table-responsive" style="width: 100%;">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr class="tr30">
                                    <th class="lefttd" style="text-align: center; background-color: #7a869c; color: white;"></th>
                                    <th class="midttd" style="text-align: center; background-color: #7a869c; color: white;"></th>
                                    <th class="righttd" style="text-align: left; background-color: #7a869c; color: white;">Delivery Master</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tr30">
                                    <td class="lefttd" style="background-color: #E8E8E8;">Delivery Agent Code:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td class="righttd">
                                        <input type="text" id="txtDelAgentCo" style="width: 350px" maxlength="20" />
                                    </td>
                                </tr>
                                <tr class="tr30">
                                    <td class="lefttd" style="background-color: #E8E8E8;">Delivery Agent:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtDelAgent" style="width: 350px" maxlength="40" />
                                    </td>
                                </tr>                                
                                <tr class="tr30">
                                    <td class="lefttd" style="background-color: #E8E8E8;">Contect Person:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtContectPerson" style="width: 350px" maxlength="50" />
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">Phone No.:
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtPhoneNo2" style="width: 350px" maxlength="50" />
                                    </td>
                                </tr>                               
                                <tr>
                                    <td class="lefttd" style="background-color: #E8E8E8;">EMail Id (Nomination)
                                    </td>
                                    <td class="midttd" style="background-color: #E8E8E8;">:-</td>
                                    <td>
                                        <input type="text" id="txtEMailIdNomination" style="width: 350px" maxlength="40" />
                                    </td>
                                </tr>                                                                                       
                                <tr>
                                    <td style="width: 100%; text-align: center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td style="width: 100%; text-align: center" colspan="3">
                                        <input type="button" value="New" id='BtnNew1' />
                                        <input type="button" value="Edit" id='BtnEdit1' />
                                        <input type="button" value="Delete" id='BtnDelet1' /><br />
                                        <input type="button" value="Update" id='BtnSave1' />                                        
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    </div>
                    </div>   
                </td>
                <td style="width: 20%; vertical-align: top"></td>
            </tr>
        </table>
    </div>
    </div>
    </div>

</asp:Content>




