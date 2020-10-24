import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
const CLINET_KEY = "6LfHtdoZAAAAAJxtjaPSqyy4bX57G8YIx-ngomeW";

export default ({onChange}) => {
  return <ReCAPTCHA sitekey={CLINET_KEY} onChange={(value)=>{
    onChange(value);
  }} />
}