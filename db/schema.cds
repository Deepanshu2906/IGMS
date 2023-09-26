namespace db;

 

using { cuid,managed, sap.common.CodeList } from '@sap/cds/common';

 

entity contracts{

    key contractId: Integer;

    companyName: String;

    description: String;

    maxQty: Integer;

    minQty: Integer;

    contractType: String;

    contractNo: Integer;    

    date: Date;

    time: Time;

    dnq: Integer;

    uom: unitOfMeasusrement;

    event: String;

    pastNomination: Association to  many pastNomination on pastNomination.contractId = $self;

}

 

entity pastNomination{

    key id: Integer;

    key contractId : Association to contracts;

    gasDay: Date;

    approvedDNQ: Integer;

    approvedUoM: String;

    remarks: String;

}

 

type unitOfMeasusrement: String;

 

 