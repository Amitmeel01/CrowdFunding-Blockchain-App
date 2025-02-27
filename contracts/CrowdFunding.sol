// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CrowdFunding{
    struct Campigen{
        address owner;
        string desc;
        string title;
        uint collectAmount;
        uint target;
        uint deadline;
        address[] donaters;
        uint[] donation;
    } 

//mapping is a key value pair form
    mapping(uint=>Campigen) public campignes;
    // yha mene camingens ki mapping bnai hai  
     // yha  Campigen only 1 ke liye hai but hum bahut sare krenge toh yha mapping use
     //hui h beacuse evry  Campigen has a uniquue id

     uint numberofCampigens = 0;

     function createCampigen(address _owner,string memory _desc,string memory _title,uint _target,uint _deadline) public returns (uint){
          Campigen storage  campigen = campignes[numberofCampigens];
          require(campigen.deadline<block.timestamp,"The deadline should be a date in future");

          campigen.owner = _owner;
          campigen.desc = _desc;
          campigen.title = _title;
         campigen.target = _target;
        campigen.deadline = _deadline;
        campigen.collectAmount = 0;
        

        numberofCampigens++;

        return numberofCampigens-1;
     }

     function donateToCampigen(uint _id) public payable {
        uint  amount=msg.value;
        Campigen storage  campigen = campignes[_id];
        // require(amount>campigen.target,"Not Required so much");

        campigen.donaters.push(msg.sender);
       
        campigen.donation.push(amount);

        (bool sent,) = payable (campigen.owner).call{value:amount}("");

        if(sent){
             campigen.collectAmount+=amount;
        }
     }

     function getDonaers(uint _id) view public returns (address[] memory,uint[] memory){
        Campigen storage  campigen = campignes[_id];
        return (campigen.donaters,campigen.donation);

     }

     function getCampignes() public view returns(Campigen[] memory){
       // yha hmne storage use nhi kiya kyuki campignes kam jyada hote rehte hai so hme unhe permanant store nahi krana
       // so hum yha memory ka use krengee campgines ko temporery store krane ke liye
       Campigen[] memory allCampignes=new Campigen[](numberofCampigens);

    // yha this is array of Campigen[] this name is allCampignes

//     Campigen[] memory allCampignes; → यह Campigen structs का एक अस्थायी array बनाता है। jiska naam allcampigen hai
// ✅ इसका उपयोग ब्लॉकचेन से डेटा निकालकर फंक्शन के अंदर अस्थायी रूप से स्टोर करने के लिए किया जाता है।
// ✅ जब फंक्शन खत्म होगा, यह memory में बना array अपने आप हट जाएगा। 

       for(uint i=0;i<numberofCampigens;i++){
         Campigen storage  item = campignes[i];
         allCampignes[i]=item;
       }

       return allCampignes;
     }
}

