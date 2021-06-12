using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SavvyShippingDataFramework;
using SeaExportObjectFramework;
using System.Data.SqlClient;
using System.Data;

namespace SeaExportBusinessFramework
{
    public class DeliveryMaster
    {
        List<SqlParameter> objSqlParameterList = null;

        public DataTable GetDeliveryMaster()
        {
            DataTable objTable = null;
            objSqlParameterList = new List<SqlParameter>();
            try
            {
                objTable = SqlDBManager.SelectDataset(objSqlParameterList, "UDSP_GET_DBA_DELIVERY_MASTER", CommandType.StoredProcedure, MySqlConnection.CustomConnectionString).Tables[0];
            }
            catch (Exception ex)
            {
                // throw ex;
            }
            return objTable;
        }

        public DataTable GetSubLedgerMast(string SLNO)
        {
            DataTable objTable = null;
            objSqlParameterList = new List<SqlParameter>();
            try
            {
                //Get data from finance database connection
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@SL_NO", SLNO);
                objTable = SqlDBManager.SelectDataset(objSqlParameterList, "UDSP_GET_SUB_LED_MAST", CommandType.StoredProcedure, MySqlConnection.DefaultFinance).Tables[0];
            }
            catch (Exception ex)
            {
                // throw ex;
            }
            return objTable;
        }

        public DataTable GetPMMast(string STTYPE)
        {
            DataTable objTable = null;
            objSqlParameterList = new List<SqlParameter>();
            try
            {
                //Get data from finance database connection
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@STTYPE", STTYPE);
                objTable = SqlDBManager.SelectDataset(objSqlParameterList, "UDSP_GET_PMMAST", CommandType.StoredProcedure, MySqlConnection.DefaultFinance).Tables[0];
            }
            catch (Exception ex)
            {
                // throw ex;
            }
            return objTable;
        }




        public int SaveDeliveryMasterData(DeliveryMasterObject objSM, string Userid)
        {
            int Result;
            try
            {
                objSqlParameterList = new List<SqlParameter>();

                AddSqlParameter.AddNewParameter(objSqlParameterList, "@ENTRY_MODE", objSM.entryMode);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@P_CODE", objSM.code);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@NAME", objSM.name);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@ADD_LINE_ONE", objSM.address1);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@ADD_LINE_TWO", objSM.address2);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@ADD_LINE_THREE", objSM.address3);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@ADD_LINE_FOUR", objSM.address4);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@CITY", objSM.city);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@STATE", objSM.state);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@COUNTRY", objSM.country);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@PHONE", objSM.phone);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@FAX", objSM.fax);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@E_MAIL", objSM.email);

                AddSqlParameter.AddNewParameter(objSqlParameterList, "@NOMINATEDEMAILID", objSM.emailNomi);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@CONT_PERSON", objSM.contPer);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@COMP_CODE", objSM.nvocc);

                AddSqlParameter.AddNewParameter(objSqlParameterList, "@SL_NO", objSM.slNo);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@SL_CODE", objSM.slCode);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@LOCATION", objSM.location);


                Result = Convert.ToInt32(SqlDBManager.SelectScalarData(objSqlParameterList, "UDSP_SAVE_DELIVERY_MASTER", CommandType.StoredProcedure, MySqlConnection.CustomConnectionString));
            }
            catch (Exception ex)
            {
                throw;
            }
            return Result;
        }

        public int DeleteDeliveryMasterData(DeliveryMasterObject objSM, string Userid)
        {
            int Result;
            try
            {
                objSqlParameterList = new List<SqlParameter>();
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@P_CODE", objSM.code);
                AddSqlParameter.AddNewParameter(objSqlParameterList, "@USER_ID", Userid);
                Result = Convert.ToInt32(SqlDBManager.SelectScalarData(objSqlParameterList, "UDSP_DELETE_DELIVERY_MASTER", CommandType.StoredProcedure, MySqlConnection.CustomConnectionString));
            }
            catch (Exception)
            {
                throw;
            }
            return Result;
        }

    }
}
