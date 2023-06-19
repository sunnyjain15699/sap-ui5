sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("sap-ui5.App", {
        onTryLoad : function(){
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sUser = this.getView().getModel().getProperty("/user/name");
            var sMsg = oBundle.getText("MessageToBeDisplayed", [sUser]);
            MessageToast.show(sMsg);
        }
    })
});