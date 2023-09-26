using db from '../db/schema';

 

service GasManagementService {

 

    entity Contracts as projection on db.contracts;

    entity pastNomination as projection on db.pastNomination;

 

}