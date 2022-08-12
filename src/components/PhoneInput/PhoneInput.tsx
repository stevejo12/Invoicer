import React, { useEffect, useState } from "react";
import phoneData from "../../phoneData.json";

import "./PhoneInput.scss";

const PhoneInput = () => {
  const [phoneCodeandCountryList, setPhoneCodeandCountryList] = useState<
    IPhoneCodeandCountry[]
  >([]);
  const [phoneCodeSelected, setPhoneCodeSelected] = useState<
    IPhoneCodeandCountry
  >({
    id: 1,
    name: "Indonesiaaaa",
    phone_code: "+62"
  });
  const [phoneNumber, setPhoneNumber] = useState<number>();

  useEffect(() => {
    // fetch list of phone code and country. then setphonecode
    // for now using mock data json
    setPhoneCodeandCountryList(phoneData.data);

    // set Indonesia as default selected
    var result = phoneData.data.filter((obj) => {
      return obj.id === 1;
    });
    setPhoneCodeSelected(result[0]);
  }, []);

  console.log(phoneCodeSelected);

  return (
    <div className="phoneInput__wrapper">
      {/* phone code area */}
      <div className="phoneInput__phoneCodeWrapper">
        <div className="phoneInput__phoneCodeInputWrapper">
          <label>Phone Code</label>
          <input
            type="text"
            value={`(${phoneCodeSelected.phone_code})`}
            readOnly
          />
        </div>
        {/* dropdown list */}
        {/* <div>Dropdown will go here</div> */}
      </div>
      {/* phone number area */}
      <div className="phoneInput__phoneNumberWrapper">
        <label>Phone Number</label>
        <input
          type="number"
          value={phoneNumber}
          placeholder="Enter your phoneNumber"
          onChange={(e) => setPhoneNumber(parseInt(e.target.value, 10))}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
