// Local countries list (no external API required)

const countries = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Burundi",
  "Ethiopia",
  "Nigeria",
  "Ghana",
  "South Africa",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
];

const codes = {
  Kenya: "+254",
  Uganda: "+256",
  Tanzania: "+255",
  Rwanda: "+250",
  Burundi: "+257",
  Ethiopia: "+251",
  Nigeria: "+234",
  Ghana: "+233",
  "South Africa": "+27",
  "United States": "+1",
  "United Kingdom": "+44",
  Canada: "+1",
  Australia: "+61",
  Germany: "+49",
  France: "+33",
};

export async function loadCountries() {
  return {
    countries,
    codes,
  };
}

export function getCode(name, countryCodes) {
  return countryCodes?.[name] || "";
}