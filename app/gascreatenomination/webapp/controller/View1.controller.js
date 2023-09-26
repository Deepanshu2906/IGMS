sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter, FilterOperator) {
        "use strict";

        return Controller.extend("gascreatenomination.controller.View1", {
            onInit: function () {
                 // The router object is readily available with component.js
              this.Router = this.getOwnerComponent().getRouter();
            },
            // onNext: function () {
            //   // var oAppCon = this.getView().getParent().getParent();
            //   /// Step 1 : get the parent control Object
            //   // oAppCon.to("idView2");
            // },
            // onItemClick: function () {
            //   console.log("item selectd");
            //     this.onNext();
            //   },
            //   onNavNext: function () {
            //     this.onNext();
            //   },
              onContractSelect : function(oEvent){
                var oSelectedItem = oEvent.getParameter("listItem");
                // console.log(oSelectedItem);
                // console.log(oSelectedItem.getBindingContextPath().split('/'));
                this.Router.navTo("second",{
                  contractId :oSelectedItem.getBindingContextPath().split('/')[1].slice(10,-1)
                });
          
              },
              onSearch : function (oEvent) {
                // step1: what is the user type in serach fields
                var oSearch = oEvent.getParameter("query");
                // for goole like search i.e live change
                if(oSearch ==="" || oSearch === undefined){
                  oSearch = oEvent.getParameter("newValue");
                }
        
                // step 2 : constructor the filter object with operand and opearator
                var oFilter = new Filter("name", FilterOperator.Contains, oSearch);
                var oFilter2 = new Filter("taste", FilterOperator.Contains, oSearch);
                var arrFilter = [oFilter, oFilter2];
                var oMaster = new Filter({
                  filters: arrFilter,
                  and: false,
                });
                // step 3: get the List Object
                var oList = this.getView().byId("idLST");
                // step 4: inject the filter to the List
                oList.getBinding("items").filter(oMaster);
            } 
        });
    });
