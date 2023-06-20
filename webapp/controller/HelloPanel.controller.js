sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap-ui5.controller.HelloPanel", {

       onHelloPress : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/user/name");
          var sMsg = oBundle.getText("MessageToBeDisplayed", [sRecipient]);
          MessageToast.show(sMsg);
       },

    //    _getDialog : function () {
    //       if (!this._oDialog) {
    //          this._oDialog = sap.ui.xmlfragment("sap-ui5.view.HelloDialog", this);
    //          this.getView().addDependent(this._oDialog);
    //       }
    //       return this._oDialog;
    //    },

    //    onOpenDialog : function () {
    //       this._getDialog().open();
    //    },
    
    //   onCloseDialog : function () {
    //      this._getDialog().close();
    //   }
    onOpenDialog : function () {
        this.getOwnerComponent().helloDialog.open(this.getView());
    }

    });
 });