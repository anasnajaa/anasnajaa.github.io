import React from "react";
import Moment from "react-moment";
import { v4 } from "uuid";

import { Image } from "react-bootstrap";

export default function countriesTds({ filter, countries, selectedCountries }) {
  const f = filter.key;
  const currentCountries = [];
  countries.forEach((country) => {
    if (selectedCountries.find((x) => x === country.country.toLowerCase())) {
      currentCountries.push({ ...country });
    }
  });
  if (f !== "flag" && f !== "updated" && f !== "continent" && f !== "country") {
    let highestCountry = null;
    currentCountries.forEach((country) => {
      country[f] = {
        value: country[f],
        color: "success",
      };
      if (highestCountry) {
        if (highestCountry[f].value < country[f].value) {
          highestCountry[f].color = "success";
          country[f].color = "danger";
          highestCountry = country;
        }
      } else {
        highestCountry = country;
        highestCountry[f].color = "danger";
      }
    });
  }

  return currentCountries.map(
    (country) =>
      (f === "flag" && (
        <td key={v4()}>
          <Image src={country.countryInfo.flag} />
        </td>
      )) ||
      (f === "updated" && (
        <td key={v4()}>
          <Moment date={country.updated} format="DD/MM/YYYY hh:mm A" />
        </td>
      )) ||
      ((f === "continent" || f === "country") && (
        <td key={v4()}>{country[f]}</td>
      )) || (
        <td className={`text-${country[f].color}`} key={v4()}>
          {country[f].value}
        </td>
      )
  );
}
