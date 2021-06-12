(function ($) {
    $(document).ready(function () {

        $('#MasterTabs').SBF({ width: '100%', height: 560, position: 'top' });      
        $('#MasterTabs').SBF({ selectionTracker: true });
        $('#MasterTabs').SBF({ animationType: 'fade' });

        $('#ControlAlertBox').SR({ width: 450, height: 100, isModal: true, draggable: false, resizable: false, autoOpen: false });

        $('#BtnNew').SBT({ width: '100' });
        $('#BtnEdit').SBT({ width: '100' });
        $('#BtnSearch').SBT({ width: '100' });
        $('#BtnDelete').SBT({ width: '100' });
        $('#BtnSave').SBT({ width: '100' });
        $('#BtnCancel').SBT({ width: '100' });
        $('#BtnDelete').SBT({ disabled: true });
        $('#BtnSave').SBT({ disabled: true });
        $('#BtnCancel').SBT({ disabled: true });

        $('#btnYes').SBT({ width: '50' });
        $('#btnNo').SBT({ width: '50' });

        $('#ddSlNo').on('change', function (event) {
            BindddlSLCode();
        });
      
        BindddNvocc();
        BindddlSLNo();
        BindddlSLCode();
        
        ValidateControl();
        BindDeliveryGrid();
        Disable_Save_Controls();

        $('#BtnNew').on('click', function () {
            $('#BtnNew').SBT({ disabled: true });
            $('#BtnEdit').SBT({ disabled: true });
            $('#BtnSearch').SBT({ disabled: true });
            $('#BtnDelete').SBT({ disabled: true });
            $('#BtnSave').SBT({ disabled: false });
            $('#BtnCancel').SBT({ disabled: false });
            Enable_Save_Controls();
            Clear_Save_Controls();
            
            $('#hidEntryMode').val('NEW');
        });

        $('#BtnCancel').on('click', function () {
            BtnCancelClick();
        });
        $('#BtnSearch').on('click', function () {
            $('#BtnNew').SBT({ disabled: true });
            $('#BtnEdit').SBT({ disabled: true });
            $('#BtnSearch').SBT({ disabled: true });
            $('#BtnDelete').SBT({ disabled: true });
            $('#BtnSave').SBT({ disabled: true });
            $('#BtnCancel').SBT({ disabled: false });

            Disable_Save_Controls();
            $('#hidSearchFlag').val('SEARCH');
        });

        $('#BtnDelete').on('click', function () {
            $('#ControlAlertBox').SR('open');
        });

        $('#BtnEdit').on('click', function () {
            $('#BtnNew').SBT({ disabled: true });
            $('#BtnEdit').SBT({ disabled: true });
            $('#BtnSearch').SBT({ disabled: true });
            $('#BtnDelete').SBT({ disabled: true });
            $('#BtnSave').SBT({ disabled: true });
            $('#BtnCancel').SBT({ disabled: false });

            Enable_Save_Controls();
            $('#hidSearchFlag').val('EDIT');
            $('#hidEntryMode').val('EDIT');

            $('#txtDeliveryCode').prop('disabled', true);
        });

        $('#BtnSave').on('click', function () {
            SaveUpdateDeliveryMaster();
        });

        $('#btnYes').click(function () {
            DeleteDeliveryMaster();            
        });
        $('#btnNo').click(function () {
            $("#ControlAlertBox").SR('close');
        });

        $('#dvDeliveryMaster').on('validationSuccess', function (event) {
            var entryMode = $('#hidEntryMode').val();
            var code = $('#txtDeliveryCode').val();
            var name = $('#txtDeliveryName').val();
            var address1 = $('#txtAddress1').val();
            var address2 = $('#txtAddress2').val();
            var address3 = $('#txtAddress3').val();
            var address4 = $('#txtAddress4').val();
            var city = $('#txtCity').val();
            var state = $('#txtState').val();
            var country = $('#txtCountry').val();
            var phone = $('#txtPhoneNo').val();
            var fax = $('#txtFax').val();
            var email = $('#txtEMail').val();
            var emailNomi = $('#txtEMailNomination').val();
            var contPer = $('#txtContPer').val();

            var nvocc = $('#ddNvocc').SQ('getSelectedItem').value;
            var slNo = $('#ddSlNo').SQ('getSelectedItem').value;
            var slCode = $('#ddSLCode').SQ('getSelectedItem').value;
            var location = $('#txtLocationInit').val();
            
            $.ajax({
                type: 'POST',
                url: 'DeliveryMaster.aspx/SaveDeliveryMaster',
                async: true,
                cache: true,
                data: "{'entryMode':'" + entryMode + "','code':'" + code + "','name':'" + name + "','address1':'" + address1 + "','address2':'" + address2 + "','address3':'" + address3 + "','address4':'" + address4 + "','city':'" + city + "','state':'" + state + "','country':'" + country + "','phone':'" + phone + "','fax':'" + fax + "','email':'" + email + "','emailNomi':'" + emailNomi + "','contPer':'" + contPer + "','nvocc':'" + nvocc + "','slNo':'" + slNo + "','slCode':'" + slCode + "','location':'" + location + "'}",

                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (response) {
                    if (parseInt(response.d) > 0) {
                        //MessageControl('#myMessage', 'myMessageSuccess', 'Delivery Master Saved Successfully.');
                        alert('Delivery Master Saved Successfully.');

                        BtnCancelClick();
                        BindDeliveryGrid();
                    }
                    else if (parseInt(response.d) == -1) {
                        alert('Delivery with same name already exists.');
                        // MessageControl('#myMessage', 'myMessageError', 'Delivery Master with same name already exists.');
                    }
                    else if (parseInt(response.d) == 0) {
                        //  MessageControl('#myMessage', 'myMessageError', 'Error during saving the Delivery Master.');
                    }
                },
                failure: function (response) {
                    MessageControl('#myMessage', 'myMessageError', 'Try Connecting');
                },
                error: function (xhr, errorType, exception) {
                    var errorMessage = exception || xhr.statusText;
                    // MessageControl('#myMessage', 'myMessageError', 'Try Connecting' + errorMessage);
                }
            });
        });


    });

    
    BindddlSLNo = function () {
        var stType = "01";
        var sourceddl =
            {
                datatype: "xml",
                datafields: [
                    { name: 'CODE_DESC1' },
                    { name: 'CODE' }
                ],
                record: 'OutputTable',
                data: { 'STTYPE': "'" + stType + "'" },
                url: 'DeliveryMaster.aspx/GetPMMast',
                async: false
            };

        var dataAdapterddl = new $.Control.dataAdapter(sourceddl, { contentType: 'application/json; charset=utf-8' });
        $('#ddSlNo').SQ({
            source: dataAdapterddl, filterable: true, searchMode: 'containsignorecase', displayMember: "CODE_DESC1", valueMember: "CODE", placeHolder: 'Select SL No.:', selectedIndex: 0, width: '90%'
        });
        $("#ddSlNo").SQ('insertAt', 'Select SL No.:', 0);
    };

    BindddlSLCode = function () {
        var slNo = $("#ddSlNo").SQ('getSelectedItem').value;
        var sourceddl =
            {
                datatype: "xml",
                datafields: [
                    { name: 'SL_CODE_DESC' },
                    { name: 'SL_CODE' }
                ],
                record: 'OutputTable',
                data: { 'SLNO': slNo },
                url: 'DeliveryMaster.aspx/GetSubLedgerMast',
                async: false
            };
        var dataAdapterddl = new $.Control.dataAdapter(sourceddl, { contentType: 'application/json; charset=utf-8' });
        $('#ddSLCode').SQ({
            source: dataAdapterddl, filterable: true, searchMode: 'containsignorecase', displayMember: "SL_CODE_DESC", valueMember: "SL_CODE", placeHolder: 'Select SL Code:', selectedIndex: 0, width: '90%'
        });
        $("#ddSLCode").SQ('insertAt', 'Select SL Code:', 0);
    };

    BindddNvocc = function () {                
        var sourceddl =
            {
                datatype: "xml",
                datafields: [
                    { name: 'P_CODE' },
                    { name: 'NAME' },
                ],
                record: 'OutputTable',                
                url: 'DeliveryMaster.aspx/GetNvoccList',
                async: false
            };
        var dataAdapterddl = new $.Control.dataAdapter(sourceddl, { contentType: 'application/json; charset=utf-8' });        
        $('#ddNvocc').SQ({
            source: dataAdapterddl, filterable: true, searchMode: 'containsignorecase', displayMember: "NAME", valueMember: "P_CODE", placeHolder: 'Select NVOCC Line.:', selectedIndex: 0, width: '90%'
        });        
        $("#ddNvocc").SQ('insertAt', 'Select NVOCC Line.:', 0);
    };


    BindDeliveryGrid = function () {
        var sourceGrid = {
            datatype: "xml",
            datafields: [
                { name: 'P_CODE' },
                { name: 'NAME' },
                { name: 'ADD_LINE_ONE' },
                { name: 'ADD_LINE_TWO' },
                { name: 'ADD_LINE_THREE' },
                { name: 'ADD_LINE_FOUR' },
                { name: 'CITY' },
                { name: 'STATE' },
                { name: 'COUNTRY' },
                { name: 'PHONE' },
                { name: 'FAX' },
                { name: 'E_MAIL' },
                { name: 'NOMINATEDEMAILID' },
                { name: 'CONT_PERSON' },
                { name: 'COMP_CODE' },
                { name: 'LOCATION' },
                { name: 'SL_NO' },
                { name: 'SL_CODE' }
                
            ],
            async: false,
            record: 'OutputTable',
            url: 'DeliveryMaster.aspx/GetDeliveryList',
        };

        var dataAdapterGrid = new $.Control.dataAdapter(sourceGrid, {
            contentType: 'application/json; charset=utf-8',
            loadError: function (ControlHR, status, error) {
                alert(error);
            }
        });

        $("#grdDeliveryList").SBG({
            source: dataAdapterGrid,
            width: "98%",
            height: "690px",
            filterable: true,
            sortable: true,
            enabletooltips: true,
            rowsheight: 30,
            altrows: true,
            virtualmode: false,
            rendergridrows: function (args) {
                return args.data;
            },

            columns: [
                { text: 'Code', dataField: 'P_CODE', width: "25%" },
                { text: 'Name', dataField: 'NAME', width: "75%" },

            ]
        });

        $('#grdDeliveryList').on('rowselect', function (event) {

            var enableFlag = '';
            if ($('#hidSearchFlag').val() == 'EDIT') {
                enableFlag = 'Y';
                $('#BtnSave').SBT({ disabled: false });
            }
            else if ($('#hidSearchFlag').val() == 'SEARCH') {
                enableFlag = 'Y';
                $('#BtnDelete').SBT({ disabled: false });
            }

            if (enableFlag == 'Y') {
                var rowData = args.row;
                $('#txtDeliveryCode').val(rowData.P_CODE);
                $('#txtDeliveryName').val(rowData.NAME);
                $('#txtAddress1').val(rowData.ADD_LINE_ONE);
                $('#txtAddress2').val(rowData.ADD_LINE_TWO);
                $('#txtAddress3').val(rowData.ADD_LINE_THREE);
                $('#txtAddress4').val(rowData.ADD_LINE_FOUR);
                $('#txtCity').val(rowData.CITY);
                $('#txtState').val(rowData.STATE);
                $('#txtCountry').val(rowData.COUNTRY);
                $('#txtPhoneNo').val(rowData.PHONE);
                $('#txtFax').val(rowData.FAX);
                $('#txtEMail').val(rowData.E_MAIL);
                $('#txtEMailNomination').val(rowData.NOMINATEDEMAILID);
                $('#txtContPer').val(rowData.CONT_PERSON);

                $('#ddNvocc').SQ('selectItem', rowData.COMP_CODE);
                $('#ddSlNo').SQ('selectItem', rowData.SL_NO);
                $('#ddSLCode').SQ('selectItem', rowData.SL_CODE);
                $('#txtLocationInit').val(rowData.LOCATION);
                
                //$('#txtLoginName').val();
                //$('#txtPassword').val();               
            }

        });

    };

    ValidateControl = function () {
        $('#dvDeliveryMaster').SA({
            hintType: 'label',
            animationDuration: 0,
            rules: [
                    { input: '#txtDeliveryCode', message: 'Please Enter Delivery Code', action: 'keyup, blur', rule: 'required' },
                    { input: '#txtDeliveryName', message: 'Please Enter Delivery Name', action: 'keyup, blur', rule: 'required' },

                    {
                        input: '#ddSlNo', message: 'SL No. is required!', action: 'select, blur', rule: function (input, commit) {
                            if ($("#ddSlNo").SQ('selectedIndex') <= 0) { return false; }
                            return true;
                        }
                    },
                    {
                        input: '#ddSLCode', message: 'SL Code. is required!', action: 'select, blur', rule: function (input, commit) {
                            if ($("#ddSLCode").SQ('selectedIndex') <= 0) { return false; }
                            return true;
                        }
                    },
            ]
        });
    };

    SaveUpdateDeliveryMaster = function () {
        $('#dvDeliveryMaster').SA('validate');
    };

    DeleteDeliveryMaster = function () {
        var code = $('#txtDeliveryCode').val();
        $.ajax({
            type: 'POST',
            url: 'DeliveryMaster.aspx/DeleteDeliveryMaster',
            async: true,
            cache: true,
            data: "{'code':'" + code + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (response) {
                if (parseInt(response.d) > 0) {
                    $('#ControlAlertBox').SR('close');
                    alert('Delivery Master Deleted Successfully.');
                    // MessageControl('#myMessage', 'myMessageSuccess', 'Delivery Master Deleted Successfully.');

                    BindDeliveryGrid();
                    BtnCancelClick();
                }
                else if (parseInt(response.d) == -1) {
                    alert('Can not deleted,Delivery Master already in used.');
                    //  MessageControl('#myMessage', 'myMessageError', 'Can not deleted,Delivery Master already in used.');
                    $("#ControlAlertBox").SR('close');
                }
                else if (parseInt(response.d) == 0) {
                    //MessageControl('#myMessage', 'myMessageError', 'Error during Delivery Master delete.');
                    alert('Error during Delivery Master delete.');
                }
            },
            failure: function (response) {
                // MessageControl('#myMessage', 'myMessageError', 'Try Connecting');
            },
            error: function (xhr, errorType, exception) {
                var errorMessage = exception || xhr.statusText;
                //MessageControl('#myMessage', 'myMessageError', 'Try Connecting ' + errorMessage);
            }
        });
    };


    Clear_Save_Controls = function () {
        $('#txtDeliveryCode').val('');
        $('#txtDeliveryName').val('');
        $('#txtAddress1').val('');
        $('#txtAddress2').val('');
        $('#txtAddress3').val('');
        $('#txtAddress4').val('');
        $('#txtCity').val('');
        $('#txtState').val('');
        $('#txtCountry').val('');
        $('#txtPhoneNo').val('');
        $('#txtFax').val('');
        $('#txtEMail').val('');
        $('#txtEMailNomination').val('');
        $('#txtContPer').val('');
        $('#txtLocationInit').val('');
        $('#ddSlNo').SQ('clearSelection');
        $('#ddSLCode').SQ('clearSelection');
        $('#ddNvocc').SQ('clearSelection');
        $('#txtLoginName').val('');
        $('#txtPassword').val('');

        //$('#txtLoginName').val();
        //$('#txtPassword').val();

        $('#hidSearchFlag').val('');
        $('#hidEntryMode').val('');

        $('#dvDeliveryMaster').SA('hide');
    };

    Disable_Save_Controls = function () {       
        $('#txtDeliveryCode').prop('disabled', true);
        $('#txtDeliveryName').prop('disabled', true);
        $('#txtAddress1').prop('disabled', true);
        $('#txtAddress2').prop('disabled', true);
        $('#txtAddress3').prop('disabled', true);
        $('#txtAddress4').prop('disabled', true);
        $('#txtCity').prop('disabled', true);
        $('#txtState').prop('disabled', true);
        $('#txtCountry').prop('disabled', true);
        $('#txtPhoneNo').prop('disabled', true);
        $('#txtFax').prop('disabled', true);
        $('#txtEMail').prop('disabled', true);
        $('#txtEMailNomination').prop('disabled', true);
        $('#txtContPer').prop('disabled', true);
        $('#txtLocationInit').prop('disabled', true);
        $('#ddSlNo').SQ({ disabled: true });
        $('#ddSLCode').SQ({ disabled: true });
        $('#ddNvocc').SQ({ disabled: true });
        $('#txtLoginName').prop('disabled', true);
        $('#txtPassword').prop('disabled', true);
       
    };

    Enable_Save_Controls = function () {                
        $('#txtDeliveryCode').prop('disabled', false);
        $('#txtDeliveryName').prop('disabled', false);
        $('#txtAddress1').prop('disabled', false);
        $('#txtAddress2').prop('disabled', false);
        $('#txtAddress3').prop('disabled', false);
        $('#txtAddress4').prop('disabled', false);
        $('#txtCity').prop('disabled', false);
        $('#txtState').prop('disabled', false);
        $('#txtCountry').prop('disabled', false);
        $('#txtPhoneNo').prop('disabled', false);
        $('#txtFax').prop('disabled', false);
        $('#txtEMail').prop('disabled', false);
        $('#txtEMailNomination').prop('disabled', false);
        $('#txtContPer').prop('disabled', false);
        $('#txtLocationInit').prop('disabled', false);
        $('#ddSlNo').SQ({ disabled: false });
        $('#ddSLCode').SQ({ disabled: false });
        $('#ddNvocc').SQ({ disabled: false });
        $('#txtLoginName').prop('disabled', false);
        $('#txtPassword').prop('disabled', false);
    };

    BtnCancelClick = function () {
        $('#BtnNew').SBT({ disabled: false });
        $('#BtnEdit').SBT({ disabled: false });
        $('#BtnSearch').SBT({ disabled: false });
        $('#BtnDelete').SBT({ disabled: true });
        $('#BtnSave').SBT({ disabled: true });
        $('#BtnCancel').SBT({ disabled: true });
        
        Disable_Save_Controls();
        Clear_Save_Controls();

    }

})(jQuery);