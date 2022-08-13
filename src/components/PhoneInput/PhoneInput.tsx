import React, { useEffect, useState } from "react";
import phoneData from "../../phoneData.json";

import "./PhoneInput.scss";

interface IProps {
  phoneCode: IPhoneCode;
  phoneNumber: string;
  onChangeValue: (key: string, newValue: string) => void
  onChangePhoneCode: (data: IPhoneCode) => void
}

const PhoneInput = ({ phoneCode, phoneNumber, onChangePhoneCode, onChangeValue }: IProps) => {
  const [phoneCodeandCountryList, setPhoneCodeandCountryList] = useState<
    IPhoneCode[]
  >([]);

  useEffect(() => {
    // fetch list of phone code and country. then setphonecode
    // for now using mock data json
    setPhoneCodeandCountryList(phoneData.data);

    // set Indonesia as default selected
    var result = phoneData.data.filter((obj) => {
      return obj.id === 1;
    });
    
    // change the default phone code to ID +62
    if (result.length > 0) {
      onChangePhoneCode(result[0])
    }
  }, []);

  return (
    <div className="phoneInput__wrapper">
      {/* phone code area */}
      <div className="phoneInput__phoneCodeWrapper">
        <div className="phoneInput__phoneCodeInputWrapper">
          <label>Phone Code</label>
          <input
            name="phoneCode"
            type="text"
            value={`(${phoneCode.phone_code})`}
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
          name="phoneNumber"
          type="number"
          value={phoneNumber}
          placeholder="Enter your phoneNumber"
          onChange={(e) => onChangeValue(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
