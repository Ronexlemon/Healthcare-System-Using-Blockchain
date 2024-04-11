// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
// import "@openzeppelin/contracts/utils/Counters.sol";

contract Health{
    //define the counter lib
//    using Counters for Counters.Counter;
//     Counters.Counter private _index;
    uint256 private _tokenids;
    //enum status
    event change(uint _change);
    enum Status { Waiting, Match, Issue }

    //struct contains claim details
    struct ClaimDetail{
        uint256 caseNumber;
        string patientName;
        uint256 charges;
        string userType;
        uint256 patientId;
        uint256 hospitalId;
        string time;
        uint  claimIndex;
       Status status;


    }

    //mapping struct to case number on specific patient id from a specific hospitalid
    /**@dev casenumber=>patientId=>hospitalId => claimDetail
    */
    mapping(uint=>mapping(uint=>mapping(uint=>ClaimDetail))) public claimPerPatient;
    //get all claims
    mapping(uint =>ClaimDetail)public allClaims;

    //function add claim
    function addClaim(uint256 _caseNumber,string memory _patientName,uint256 _charges,string memory _userType,uint256 _patientId,uint256 _hospitalId,string memory _time)external {
       
            // _index.increment();
     uint256 claimIndex = _tokenids; //_index.current();
     ClaimDetail memory claim = ClaimDetail(_caseNumber,_patientName,_charges,_userType,_patientId,_hospitalId,_time,claimIndex,Status.Waiting);

     allClaims[claimIndex] = claim;
     claimPerPatient[_caseNumber][_patientId][_hospitalId] =claim;
     _tokenids ++;

     



    }

    //function check usertype
    function checkUserType(string memory _userType)private  pure returns(bool){
        if(keccak256(bytes(_userType))==keccak256(bytes("hospital"))){
            return true;
        }
        return false;
    }

    
    // patient should put this to compare the details
   function compareClaimdetails(
    uint256 _caseNumber,
    string memory _patientName,
    uint256 _charges,
    // string memory _userType,
    uint256 _patientId,
    uint256 _hospitalId
    // string memory _time
) public {
    // Retrieve details from storage
    ClaimDetail storage claim = claimPerPatient[_caseNumber][_patientId][_hospitalId];

    // Compare each parameter with corresponding stored details
    if (
        claim.caseNumber == _caseNumber &&
        keccak256(bytes(claim.patientName)) == keccak256(bytes(_patientName)) &&
        claim.charges == _charges &&
        
        claim.patientId == _patientId &&
        claim.hospitalId == _hospitalId 
        // keccak256(bytes(claim.time)) != keccak256(bytes(_time))
    ) {
        // If any detail does not match, update status to "Issue"
        
        allClaims[claim.claimIndex].status = Status.Match;
        claim.status = Status.Match;
        emit change(1);
       
    } else {
        // If all details match, update status to "Match"
          allClaims[claim.claimIndex].status = Status.Issue;
    claim.status = Status.Issue;
    emit change(2);
    }
}
// Retrieve all claims
function getAllClaims() public view returns (ClaimDetail[] memory claimsAll) {
    claimsAll = new ClaimDetail[](_tokenids);
    uint index = 0;

    for (uint i = 0; i < _tokenids; ++i) {
        claimsAll[index] = allClaims[i];
        index++;
    }

    return claimsAll;
}

//get all claims from a specific hospital

function getAllClaimsFromAHospital(uint _hospitalId)public view returns(ClaimDetail[] memory hospitalClaim){
    uint count=0;
    for (uint i =0; i < _tokenids; ++i) {
       if(allClaims[i].hospitalId == _hospitalId){
        count ++;
       }

    }

    hospitalClaim = new ClaimDetail[](count);

    uint indx=0;
    for (uint i =0; i < _tokenids; ++i) {
       if(allClaims[i].hospitalId == _hospitalId){
        hospitalClaim[indx] = allClaims[i];
        indx ++;
       }

    }
    return hospitalClaim;



}



}

