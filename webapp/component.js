sap.ui.define([
    "sap/ui/core/UIComponent",
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function name(UIComponent, ResourceModel, JSONModel) {
    "user strict";
    return UIComponent.extend("sap-ui5.Component", {
        metadata : {
            rootView: {
            "viewName":"sap-ui5.view.App",
            "type": "XML",
            "async": true,
            "id":"app"
            },
        },
        init: function(){
            UIComponent.prototype.init.apply(this, arguments);
            const oData = {
                user:{
                    name: "Sunny Jain"
                }
            };
            const oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel);

            var i18nModel = new sap.ui.model.resource.ResourceModel({
                bundleName : "sap-ui5.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");
        }
    })
})