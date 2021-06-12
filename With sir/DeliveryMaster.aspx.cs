using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Web.Script.Services;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Serialization;
using SavvyShippingDataFramework;
using SeaExportBusinessFramework;
using SeaExportObjectFramework;

public partial class SeaExport_MasterSetup_DeliveryMaster : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [WebMethod]
    [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Xml)]
    public static string GetDeliveryList()
    {
        DeliveryMaster objDeliveryMaster = new DeliveryMaster();
        DataTable dt = objDeliveryMaster.GetDeliveryMaster();
        System.IO.StringWriter writer = new System.IO.StringWriter();
        dt.WriteXml(writer, XmlWriteMode.WriteSchema, false);
        return writer.ToString();
    }


    [WebMethod]
    [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Xml)]
    public static string GetNvoccList()
    {
        NvoccMaster objNvoccMaster = new NvoccMaster();
        DataTable dt = objNvoccMaster.GetNvoccMaster();
        System.IO.StringWriter writer = new System.IO.StringWriter();
        dt.WriteXml(writer, XmlWriteMode.WriteSchema, false);
        return writer.ToString();
    }

    [WebMethod]
    [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Xml)]
    public static string GetSubLedgerMast(string SLNO)
    {
        DeliveryMaster objDeliveryMaster = new DeliveryMaster();
        DataTable dt = objDeliveryMaster.GetSubLedgerMast(SLNO);
        System.IO.StringWriter writer = new System.IO.StringWriter();
        dt.WriteXml(writer, XmlWriteMode.WriteSchema, false);
        return writer.ToString();
    }

    [WebMethod]
    [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Xml)]
    public static string GetPMMast(string STTYPE)
    {
        DeliveryMaster objDeliveryMaster = new DeliveryMaster();
        DataTable dt = objDeliveryMaster.GetPMMast(STTYPE);
        System.IO.StringWriter writer = new System.IO.StringWriter();
        dt.WriteXml(writer, XmlWriteMode.WriteSchema, false);
        return writer.ToString();
    }


    [WebMethod()]
    public static string SaveDeliveryMaster(string entryMode, string code, string name, string address1, string address2, string address3, string address4, string city, string state, string country, string phone, string fax, string email, string emailNomi, string contPer, string nvocc, string slNo, string slCode, string location)
    {

        DeliveryMaster objDeliveryMaster = new DeliveryMaster();
        DeliveryMasterObject objDeliveryMasterObject = new DeliveryMasterObject();
        objDeliveryMasterObject.entryMode = HttpUtility.UrlDecode(entryMode) ?? "";
        objDeliveryMasterObject.code = HttpUtility.UrlDecode(code) ?? "";
        objDeliveryMasterObject.name = HttpUtility.UrlDecode(name) ?? "";
        objDeliveryMasterObject.address1 = HttpUtility.UrlDecode(address1) ?? "";
        objDeliveryMasterObject.address2 = HttpUtility.UrlDecode(address2) ?? "";
        objDeliveryMasterObject.address3 = HttpUtility.UrlDecode(address3) ?? "";
        objDeliveryMasterObject.address4 = HttpUtility.UrlDecode(address4) ?? "";
        objDeliveryMasterObject.city = HttpUtility.UrlDecode(city) ?? "";
        objDeliveryMasterObject.state = HttpUtility.UrlDecode(state) ?? "";
        objDeliveryMasterObject.country = HttpUtility.UrlDecode(country) ?? "";
        objDeliveryMasterObject.phone = HttpUtility.UrlDecode(phone) ?? "";
        objDeliveryMasterObject.fax = HttpUtility.UrlDecode(fax) ?? "";
        objDeliveryMasterObject.email = HttpUtility.UrlDecode(email) ?? "";

        objDeliveryMasterObject.emailNomi = HttpUtility.UrlDecode(emailNomi) ?? "";
        objDeliveryMasterObject.contPer = HttpUtility.UrlDecode(contPer) ?? "";
        objDeliveryMasterObject.nvocc = HttpUtility.UrlDecode(nvocc) ?? "";

        objDeliveryMasterObject.slNo = Convert.ToInt32(HttpUtility.UrlDecode(slNo) == "" ? "0" : HttpUtility.UrlDecode(slNo));
        objDeliveryMasterObject.slCode = HttpUtility.UrlDecode(slCode) ?? "";
        objDeliveryMasterObject.location = HttpUtility.UrlDecode(location) ?? "";

        string UserId = "";

        string result = "";
        result = Convert.ToString(objDeliveryMaster.SaveDeliveryMasterData(objDeliveryMasterObject, UserId));
        return result;
    }


    [WebMethod()]
    public static string DeleteDeliveryMaster(string code)
    {
        DeliveryMaster objDeliveryMaster = new DeliveryMaster();
        DeliveryMasterObject objDeliveryMasterObject = new DeliveryMasterObject();
        objDeliveryMasterObject.code = HttpUtility.UrlDecode(code) ?? "";

        string UserId = ""; //Applicationfields.Login_User_Id;

        string result = "";
        result = Convert.ToString(objDeliveryMaster.DeleteDeliveryMasterData(objDeliveryMasterObject, UserId));
        return result;
    }

}