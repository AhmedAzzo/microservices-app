const e = require("express");

module.exports = {
  async up(db, client) {
    return db.collection('settings').insertOne({
      countries: countries,
      languages: languages,
      isdCodes: isdCodes,
    }).then(() => {
      console.log('settings data inserted');
    }).catch(err => {
      console.log('settings data insertion failed', err);
    });
  },

  async down(db, client) { }
};
const countries = [
  {
    "description": "Afghanistan",
    "code": "AF"
  },
  {
    "description": "Åland Islands",
    "code": "AX"
  },
  {
    "description": "Albania",
    "code": "AL"
  },
  {
    "description": "Algeria",
    "code": "DZ"
  },
  {
    "description": "American Samoa",
    "code": "AS"
  },
  {
    "description": "AndorrA",
    "code": "AD"
  },
  {
    "description": "Angola",
    "code": "AO"
  },
  {
    "description": "Anguilla",
    "code": "AI"
  },
  {
    "description": "Antarctica",
    "code": "AQ"
  },
  {
    "description": "Antigua and Barbuda",
    "code": "AG"
  },
  {
    "description": "Argentina",
    "code": "AR"
  },
  {
    "description": "Armenia",
    "code": "AM"
  },
  {
    "description": "Aruba",
    "code": "AW"
  },
  {
    "description": "Australia",
    "code": "AU"
  },
  {
    "description": "Austria",
    "code": "AT"
  },
  {
    "description": "Azerbaijan",
    "code": "AZ"
  },
  {
    "description": "Bahamas",
    "code": "BS"
  },
  {
    "description": "Bahrain",
    "code": "BH"
  },
  {
    "description": "Bangladesh",
    "code": "BD"
  },
  {
    "description": "Barbados",
    "code": "BB"
  },
  {
    "description": "Belarus",
    "code": "BY"
  },
  {
    "description": "Belgium",
    "code": "BE"
  },
  {
    "description": "Belize",
    "code": "BZ"
  },
  {
    "description": "Benin",
    "code": "BJ"
  },
  {
    "description": "Bermuda",
    "code": "BM"
  },
  {
    "description": "Bhutan",
    "code": "BT"
  },
  {
    "description": "Bolivia",
    "code": "BO"
  },
  {
    "description": "Bosnia and Herzegovina",
    "code": "BA"
  },
  {
    "description": "Botswana",
    "code": "BW"
  },
  {
    "description": "Bouvet Island",
    "code": "BV"
  },
  {
    "description": "Brazil",
    "code": "BR"
  },
  {
    "description": "British Indian Ocean Territory",
    "code": "IO"
  },
  {
    "description": "Brunei Darussalam",
    "code": "BN"
  },
  {
    "description": "Bulgaria",
    "code": "BG"
  },
  {
    "description": "Burkina Faso",
    "code": "BF"
  },
  {
    "description": "Burundi",
    "code": "BI"
  },
  {
    "description": "Cambodia",
    "code": "KH"
  },
  {
    "description": "Cameroon",
    "code": "CM"
  },
  {
    "description": "Canada",
    "code": "CA"
  },
  {
    "description": "Cape Verde",
    "code": "CV"
  },
  {
    "description": "Cayman Islands",
    "code": "KY"
  },
  {
    "description": "Central African Republic",
    "code": "CF"
  },
  {
    "description": "Chad",
    "code": "TD"
  },
  {
    "description": "Chile",
    "code": "CL"
  },
  {
    "description": "China",
    "code": "CN"
  },
  {
    "description": "Christmas Island",
    "code": "CX"
  },
  {
    "description": "Cocos (Keeling) Islands",
    "code": "CC"
  },
  {
    "description": "Colombia",
    "code": "CO"
  },
  {
    "description": "Comoros",
    "code": "KM"
  },
  {
    "description": "Congo",
    "code": "CG"
  },
  {
    "description": "Congo, The Democratic Republic of the",
    "code": "CD"
  },
  {
    "description": "Cook Islands",
    "code": "CK"
  },
  {
    "description": "Costa Rica",
    "code": "CR"
  },
  {
    "description": "Cote D'Ivoire",
    "code": "CI"
  },
  {
    "description": "Croatia",
    "code": "HR"
  },
  {
    "description": "Cuba",
    "code": "CU"
  },
  {
    "description": "Cyprus",
    "code": "CY"
  },
  {
    "description": "Czech Republic",
    "code": "CZ"
  },
  {
    "description": "Denmark",
    "code": "DK"
  },
  {
    "description": "Djibouti",
    "code": "DJ"
  },
  {
    "description": "Dominica",
    "code": "DM"
  },
  {
    "description": "Dominican Republic",
    "code": "DO"
  },
  {
    "description": "Ecuador",
    "code": "EC"
  },
  {
    "description": "Egypt",
    "code": "EG"
  },
  {
    "description": "El Salvador",
    "code": "SV"
  },
  {
    "description": "Equatorial Guinea",
    "code": "GQ"
  },
  {
    "description": "Eritrea",
    "code": "ER"
  },
  {
    "description": "Estonia",
    "code": "EE"
  },
  {
    "description": "Ethiopia",
    "code": "ET"
  },
  {
    "description": "Falkland Islands (Malvinas)",
    "code": "FK"
  },
  {
    "description": "Faroe Islands",
    "code": "FO"
  },
  {
    "description": "Fiji",
    "code": "FJ"
  },
  {
    "description": "Finland",
    "code": "FI"
  },
  {
    "description": "France",
    "code": "FR"
  },
  {
    "description": "French Guiana",
    "code": "GF"
  },
  {
    "description": "French Polynesia",
    "code": "PF"
  },
  {
    "description": "French Southern Territories",
    "code": "TF"
  },
  {
    "description": "Gabon",
    "code": "GA"
  },
  {
    "description": "Gambia",
    "code": "GM"
  },
  {
    "description": "Georgia",
    "code": "GE"
  },
  {
    "description": "Germany",
    "code": "DE"
  },
  {
    "description": "Ghana",
    "code": "GH"
  },
  {
    "description": "Gibraltar",
    "code": "GI"
  },
  {
    "description": "Greece",
    "code": "GR"
  },
  {
    "description": "Greenland",
    "code": "GL"
  },
  {
    "description": "Grenada",
    "code": "GD"
  },
  {
    "description": "Guadeloupe",
    "code": "GP"
  },
  {
    "description": "Guam",
    "code": "GU"
  },
  {
    "description": "Guatemala",
    "code": "GT"
  },
  {
    "description": "Guernsey",
    "code": "GG"
  },
  {
    "description": "Guinea",
    "code": "GN"
  },
  {
    "description": "Guinea-Bissau",
    "code": "GW"
  },
  {
    "description": "Guyana",
    "code": "GY"
  },
  {
    "description": "Haiti",
    "code": "HT"
  },
  {
    "description": "Heard Island and Mcdonald Islands",
    "code": "HM"
  },
  {
    "description": "Holy See (Vatican City State)",
    "code": "VA"
  },
  {
    "description": "Honduras",
    "code": "HN"
  },
  {
    "description": "Hong Kong",
    "code": "HK"
  },
  {
    "description": "Hungary",
    "code": "HU"
  },
  {
    "description": "Iceland",
    "code": "IS"
  },
  {
    "description": "India",
    "code": "IN"
  },
  {
    "description": "Indonesia",
    "code": "ID"
  },
  {
    "description": "Iran, Islamic Republic Of",
    "code": "IR"
  },
  {
    "description": "Iraq",
    "code": "IQ"
  },
  {
    "description": "Ireland",
    "code": "IE"
  },
  {
    "description": "Isle of Man",
    "code": "IM"
  },
  {
    "description": "Israel",
    "code": "IL"
  },
  {
    "description": "Italy",
    "code": "IT"
  },
  {
    "description": "Jamaica",
    "code": "JM"
  },
  {
    "description": "Japan",
    "code": "JP"
  },
  {
    "description": "Jersey",
    "code": "JE"
  },
  {
    "description": "Jordan",
    "code": "JO"
  },
  {
    "description": "Kazakhstan",
    "code": "KZ"
  },
  {
    "description": "Kenya",
    "code": "KE"
  },
  {
    "description": "Kiribati",
    "code": "KI"
  },
  {
    "description": "Korea, Democratic People(s) Republic of",
    "code": "KP"
  },
  {
    "description": "Korea, Republic of",
    "code": "KR"
  },
  {
    "description": "Kuwait",
    "code": "KW"
  },
  {
    "description": "Kyrgyzstan",
    "code": "KG"
  },
  {
    "description": "Lao People(s) Democratic Republic",
    "code": "LA"
  },
  {
    "description": "Latvia",
    "code": "LV"
  },
  {
    "description": "Lebanon",
    "code": "LB"
  },
  {
    "description": "Lesotho",
    "code": "LS"
  },
  {
    "description": "Liberia",
    "code": "LR"
  },
  {
    "description": "Libyan Arab Jamahiriya",
    "code": "LY"
  },
  {
    "description": "Liechtenstein",
    "code": "LI"
  },
  {
    "description": "Lithuania",
    "code": "LT"
  },
  {
    "description": "Luxembourg",
    "code": "LU"
  },
  {
    "description": "Macao",
    "code": "MO"
  },
  {
    "description": "Macedonia, The Former Yugoslav Republic of",
    "code": "MK"
  },
  {
    "description": "Madagascar",
    "code": "MG"
  },
  {
    "description": "Malawi",
    "code": "MW"
  },
  {
    "description": "Malaysia",
    "code": "MY"
  },
  {
    "description": "Maldives",
    "code": "MV"
  },
  {
    "description": "Mali",
    "code": "ML"
  },
  {
    "description": "Malta",
    "code": "MT"
  },
  {
    "description": "Marshall Islands",
    "code": "MH"
  },
  {
    "description": "Martinique",
    "code": "MQ"
  },
  {
    "description": "Mauritania",
    "code": "MR"
  },
  {
    "description": "Mauritius",
    "code": "MU"
  },
  {
    "description": "Mayotte",
    "code": "YT"
  },
  {
    "description": "Mexico",
    "code": "MX"
  },
  {
    "description": "Micronesia, Federated States of",
    "code": "FM"
  },
  {
    "description": "Moldova, Republic of",
    "code": "MD"
  },
  {
    "description": "Monaco",
    "code": "MC"
  },
  {
    "description": "Mongolia",
    "code": "MN"
  },
  {
    "description": "Montserrat",
    "code": "MS"
  },
  {
    "description": "Morocco",
    "code": "MA"
  },
  {
    "description": "Mozambique",
    "code": "MZ"
  },
  {
    "description": "Myanmar",
    "code": "MM"
  },
  {
    "description": "Namibia",
    "code": "NA"
  },
  {
    "description": "Nauru",
    "code": "NR"
  },
  {
    "description": "Nepal",
    "code": "NP"
  },
  {
    "description": "Netherlands",
    "code": "NL"
  },
  {
    "description": "Netherlands Antilles",
    "code": "AN"
  },
  {
    "description": "New Caledonia",
    "code": "NC"
  },
  {
    "description": "New Zealand",
    "code": "NZ"
  },
  {
    "description": "Nicaragua",
    "code": "NI"
  },
  {
    "description": "Niger",
    "code": "NE"
  },
  {
    "description": "Nigeria",
    "code": "NG"
  },
  {
    "description": "Niue",
    "code": "NU"
  },
  {
    "description": "Norfolk Island",
    "code": "NF"
  },
  {
    "description": "Northern Mariana Islands",
    "code": "MP"
  },
  {
    "description": "Norway",
    "code": "NO"
  },
  {
    "description": "Oman",
    "code": "OM"
  },
  {
    "description": "Pakistan",
    "code": "PK"
  },
  {
    "description": "Palau",
    "code": "PW"
  },
  {
    "description": "Palestinian Territory, Occupied",
    "code": "PS"
  },
  {
    "description": "Panama",
    "code": "PA"
  },
  {
    "description": "Papua New Guinea",
    "code": "PG"
  },
  {
    "description": "Paraguay",
    "code": "PY"
  },
  {
    "description": "Peru",
    "code": "PE"
  },
  {
    "description": "Philippines",
    "code": "PH"
  },
  {
    "description": "Pitcairn",
    "code": "PN"
  },
  {
    "description": "Poland",
    "code": "PL"
  },
  {
    "description": "Portugal",
    "code": "PT"
  },
  {
    "description": "Puerto Rico",
    "code": "PR"
  },
  {
    "description": "Qatar",
    "code": "QA"
  },
  {
    "description": "Reunion",
    "code": "RE"
  },
  {
    "description": "Romania",
    "code": "RO"
  },
  {
    "description": "Russian Federation",
    "code": "RU"
  },
  {
    "description": "RWANDA",
    "code": "RW"
  },
  {
    "description": "Saint Helena",
    "code": "SH"
  },
  {
    "description": "Saint Kitts and Nevis",
    "code": "KN"
  },
  {
    "description": "Saint Lucia",
    "code": "LC"
  },
  {
    "description": "Saint Pierre and Miquelon",
    "code": "PM"
  },
  {
    "description": "Saint Vincent and the Grenadines",
    "code": "VC"
  },
  {
    "description": "Samoa",
    "code": "WS"
  },
  {
    "description": "San Marino",
    "code": "SM"
  },
  {
    "description": "Sao Tome and Principe",
    "code": "ST"
  },
  {
    "description": "Saudi Arabia",
    "code": "SA"
  },
  {
    "description": "Senegal",
    "code": "SN"
  },
  {
    "description": "Serbia and Montenegro",
    "code": "CS"
  },
  {
    "description": "Seychelles",
    "code": "SC"
  },
  {
    "description": "Sierra Leone",
    "code": "SL"
  },
  {
    "description": "Singapore",
    "code": "SG"
  },
  {
    "description": "Slovakia",
    "code": "SK"
  },
  {
    "description": "Slovenia",
    "code": "SI"
  },
  {
    "description": "Solomon Islands",
    "code": "SB"
  },
  {
    "description": "Somalia",
    "code": "SO"
  },
  {
    "description": "South Africa",
    "code": "ZA"
  },
  {
    "description": "South Georgia and the South Sandwich Islands",
    "code": "GS"
  },
  {
    "description": "Spain",
    "code": "ES"
  },
  {
    "description": "Sri Lanka",
    "code": "LK"
  },
  {
    "description": "Sudan",
    "code": "SD"
  },
  {
    "description": "Suriname",
    "code": "SR"
  },
  {
    "description": "Svalbard and Jan Mayen",
    "code": "SJ"
  },
  {
    "description": "Swaziland",
    "code": "SZ"
  },
  {
    "description": "Sweden",
    "code": "SE"
  },
  {
    "description": "Switzerland",
    "code": "CH"
  },
  {
    "description": "Syrian Arab Republic",
    "code": "SY"
  },
  {
    "description": "Taiwan, Province of China",
    "code": "TW"
  },
  {
    "description": "Tajikistan",
    "code": "TJ"
  },
  {
    "description": "Tanzania, United Republic of",
    "code": "TZ"
  },
  {
    "description": "Thailand",
    "code": "TH"
  },
  {
    "description": "Timor-Leste",
    "code": "TL"
  },
  {
    "description": "Togo",
    "code": "TG"
  },
  {
    "description": "Tokelau",
    "code": "TK"
  },
  {
    "description": "Tonga",
    "code": "TO"
  },
  {
    "description": "Trinidad and Tobago",
    "code": "TT"
  },
  {
    "description": "Tunisia",
    "code": "TN"
  },
  {
    "description": "Turkey",
    "code": "TR"
  },
  {
    "description": "Turkmenistan",
    "code": "TM"
  },
  {
    "description": "Turks and Caicos Islands",
    "code": "TC"
  },
  {
    "description": "Tuvalu",
    "code": "TV"
  },
  {
    "description": "Uganda",
    "code": "UG"
  },
  {
    "description": "Ukraine",
    "code": "UA"
  },
  {
    "description": "United Arab Emirates",
    "code": "AE"
  },
  {
    "description": "United Kingdom",
    "code": "GB"
  },
  {
    "description": "United States",
    "code": "US"
  },
  {
    "description": "United States Minor Outlying Islands",
    "code": "UM"
  },
  {
    "description": "Uruguay",
    "code": "UY"
  },
  {
    "description": "Uzbekistan",
    "code": "UZ"
  },
  {
    "description": "Vanuatu",
    "code": "VU"
  },
  {
    "description": "Venezuela",
    "code": "VE"
  },
  {
    "description": "Viet Nam",
    "code": "VN"
  },
  {
    "description": "Virgin Islands, British",
    "code": "VG"
  },
  {
    "description": "Virgin Islands, U.S.",
    "code": "VI"
  },
  {
    "description": "Wallis and Futuna",
    "code": "WF"
  },
  {
    "description": "Western Sahara",
    "code": "EH"
  },
  {
    "description": "Yemen",
    "code": "YE"
  },
  {
    "description": "Zambia",
    "code": "ZM"
  },
  {
    "description": "Zimbabwe",
    "code": "ZW"
  }
];

const languages = [
  {
    "description": "Arabic",
    "code": "ar"
  },
  {
    "description": "English",
    "code": "en"
  }
];

const isdCodes = [
  {
    "code": "+93",
    "description": "Afghanistan (+93)",
    "name": "Afghanistan [AF]"
  },
  {
    "code": "+355",
    "description": "Albania (+355)",
    "name": "Albania [AL]"
  },
  {
    "code": "+213",
    "description": "Algeria (+213)",
    "name": "Algeria [DZ]"
  },
  {
    "code": "+1-684",
    "description": "American Samoa (+1-684)",
    "name": "American Samoa [AS]"
  },
  {
    "code": "+376",
    "description": "Andorra (+376)",
    "name": "Andorra [AD]"
  },
  {
    "code": "+244",
    "description": "Angola (+244)",
    "name": "Angola [AO]"
  },
  {
    "code": "+1-264",
    "description": "Anguilla (+1-264)",
    "name": "Anguilla [AI]"
  },
  {
    "code": "+672",
    "description": "Antarctica (+672)",
    "name": "Antarctica [AQ]"
  },
  {
    "code": "+1-268",
    "description": "Antigua and Barbuda (+1-268)",
    "name": "Antigua and Barbuda [AG]"
  },
  {
    "code": "+54",
    "description": "Argentina (+54)",
    "name": "Argentina [AR]"
  },
  {
    "code": "+374",
    "description": "Armenia (+374)",
    "name": "Armenia [AM]"
  },
  {
    "code": "+297",
    "description": "Aruba (+297)",
    "name": "Aruba [AW]"
  },
  {
    "code": "+61",
    "description": "Australia (+61)",
    "name": "Australia [AU]"
  },
  {
    "code": "+43",
    "description": "Austria (+43)",
    "name": "Austria [AT]"
  },
  {
    "code": "+994",
    "description": "Azerbaijan (+994)",
    "name": "Azerbaijan [AZ]"
  },
  {
    "code": "+1-242",
    "description": "Bahamas (+1-242)",
    "name": "Bahamas [BS]"
  },
  {
    "code": "+973",
    "description": "Bahrain (+973)",
    "name": "Bahrain [BH]"
  },
  {
    "code": "+880",
    "description": "Bangladesh (+880)",
    "name": "Bangladesh [BD]"
  },
  {
    "code": "+1-246",
    "description": "Barbados (+1-246)",
    "name": "Barbados [BB]"
  },
  {
    "code": "+375",
    "description": "Belarus (+375)",
    "name": "Belarus [BY]"
  },
  {
    "code": "+32",
    "description": "Belgium (+32)",
    "name": "Belgium [BE]"
  },
  {
    "code": "+501",
    "description": "Belize (+501)",
    "name": "Belize [BZ]"
  },
  {
    "code": "+229",
    "description": "Benin (+229)",
    "name": "Benin [BJ]"
  },
  {
    "code": "+1-441",
    "description": "Bermuda (+1-441)",
    "name": "Bermuda [BM]"
  },
  {
    "code": "+975",
    "description": "Bhutan (+975)",
    "name": "Bhutan [BT]"
  },
  {
    "code": "+591",
    "description": "Bolivia (+591)",
    "name": "Bolivia [BO]"
  },
  {
    "code": "+387",
    "description": "Bosnia and Herzegovina (+387)",
    "name": "Bosnia and Herzegovina [BA]"
  },
  {
    "code": "+267",
    "description": "Botswana (+267)",
    "name": "Botswana [BW]"
  },
  {
    "code": "+55",
    "description": "Brazil (+55)",
    "name": "Brazil [BR]"
  },
  {
    "code": "+246",
    "description": "British Indian Ocean Territory (+246)",
    "name": "British Indian Ocean Territory [IO]"
  },
  {
    "code": "+1-284",
    "description": "British Virgin Islands (+1-284)",
    "name": "British Virgin Islands [VG]"
  },
  {
    "code": "+673",
    "description": "Brunei (+673)",
    "name": "Brunei [BN]"
  },
  {
    "code": "+359",
    "description": "Bulgaria (+359)",
    "name": "Bulgaria [BG]"
  },
  {
    "code": "+226",
    "description": "Burkina Faso (+226)",
    "name": "Burkina Faso [BF]"
  },
  {
    "code": "+257",
    "description": "Burundi (+257)",
    "name": "Burundi [BI]"
  },
  {
    "code": "+855",
    "description": "Cambodia (+855)",
    "name": "Cambodia [KH]"
  },
  {
    "code": "+237",
    "description": "Cameroon (+237)",
    "name": "Cameroon [CM]"
  },
  {
    "code": "+1",
    "description": "Canada (+1)",
    "name": "Canada [CA]"
  },
  {
    "code": "+238",
    "description": "Cape Verde (+238)",
    "name": "Cape Verde [CV]"
  },
  {
    "code": "+1-345",
    "description": "Cayman Islands (+1-345)",
    "name": "Cayman Islands [KY]"
  },
  {
    "code": "+236",
    "description": "Central African Republic (+236)",
    "name": "Central African Republic [CF]"
  },
  {
    "code": "+235",
    "description": "Chad (+235)",
    "name": "Chad [TD]"
  },
  {
    "code": "+56",
    "description": "Chile (+56)",
    "name": "Chile [CL]"
  },
  {
    "code": "+86",
    "description": "China (+86)",
    "name": "China [CN]"
  },
  {
    "code": "+61",
    "description": "Christmas Island (+61)",
    "name": "Christmas Island [CX]"
  },
  {
    "code": "+61",
    "description": "Cocos Islands (+61)",
    "name": "Cocos Islands [CC]"
  },
  {
    "code": "+57",
    "description": "Colombia (+57)",
    "name": "Colombia [CO]"
  },
  {
    "code": "+269",
    "description": "Comoros (+269)",
    "name": "Comoros [KM]"
  },
  {
    "code": "+682",
    "description": "Cook Islands (+682)",
    "name": "Cook Islands [CK]"
  },
  {
    "code": "+506",
    "description": "Costa Rica (+506)",
    "name": "Costa Rica [CR]"
  },
  {
    "code": "+385",
    "description": "Croatia (+385)",
    "name": "Croatia [HR]"
  },
  {
    "code": "+53",
    "description": "Cuba (+53)",
    "name": "Cuba [CU]"
  },
  {
    "code": "+599",
    "description": "Curacao (+599)",
    "name": "Curacao [CW]"
  },
  {
    "code": "+357",
    "description": "Cyprus (+357)",
    "name": "Cyprus [CY]"
  },
  {
    "code": "+420",
    "description": "Czech Republic (+420)",
    "name": "Czech Republic [CZ]"
  },
  {
    "code": "+243",
    "description": "Democratic Republic of the Congo (+243)",
    "name": "Democratic Republic of the Congo [CD]"
  },
  {
    "code": "+45",
    "description": "Denmark (+45)",
    "name": "Denmark [DK]"
  },
  {
    "code": "+253",
    "description": "Djibouti (+253)",
    "name": "Djibouti [DJ]"
  },
  {
    "code": "+1-767",
    "description": "Dominica (+1-767)",
    "name": "Dominica [DM]"
  },
  {
    "code": "+1-809, 1-829, 1-849",
    "description": "Dominican Republic (+1-809, 1-829, 1-849)",
    "name": "Dominican Republic [DO]"
  },
  {
    "code": "+670",
    "description": "East Timor (+670)",
    "name": "East Timor [TL]"
  },
  {
    "code": "+593",
    "description": "Ecuador (+593)",
    "name": "Ecuador [EC]"
  },
  {
    "code": "+20",
    "description": "Egypt (+20)",
    "name": "Egypt [EG]"
  },
  {
    "code": "+503",
    "description": "El Salvador (+503)",
    "name": "El Salvador [SV]"
  },
  {
    "code": "+240",
    "description": "Equatorial Guinea (+240)",
    "name": "Equatorial Guinea [GQ]"
  },
  {
    "code": "+291",
    "description": "Eritrea (+291)",
    "name": "Eritrea [ER]"
  },
  {
    "code": "+372",
    "description": "Estonia (+372)",
    "name": "Estonia [EE]"
  },
  {
    "code": "+251",
    "description": "Ethiopia (+251)",
    "name": "Ethiopia [ET]"
  },
  {
    "code": "+500",
    "description": "Falkland Islands (+500)",
    "name": "Falkland Islands [FK]"
  },
  {
    "code": "+298",
    "description": "Faroe Islands (+298)",
    "name": "Faroe Islands [FO]"
  },
  {
    "code": "+679",
    "description": "Fiji (+679)",
    "name": "Fiji [FJ]"
  },
  {
    "code": "+358",
    "description": "Finland (+358)",
    "name": "Finland [FI]"
  },
  {
    "code": "+33",
    "description": "France (+33)",
    "name": "France [FR]"
  },
  {
    "code": "+689",
    "description": "French Polynesia (+689)",
    "name": "French Polynesia [PF]"
  },
  {
    "code": "+241",
    "description": "Gabon (+241)",
    "name": "Gabon [GA]"
  },
  {
    "code": "+220",
    "description": "Gambia (+220)",
    "name": "Gambia [GM]"
  },
  {
    "code": "+995",
    "description": "Georgia (+995)",
    "name": "Georgia [GE]"
  },
  {
    "code": "+49",
    "description": "Germany (+49)",
    "name": "Germany [DE]"
  },
  {
    "code": "+233",
    "description": "Ghana (+233)",
    "name": "Ghana [GH]"
  },
  {
    "code": "+350",
    "description": "Gibraltar (+350)",
    "name": "Gibraltar [GI]"
  },
  {
    "code": "+30",
    "description": "Greece (+30)",
    "name": "Greece [GR]"
  },
  {
    "code": "+299",
    "description": "Greenland (+299)",
    "name": "Greenland [GL]"
  },
  {
    "code": "+1-473",
    "description": "Grenada (+1-473)",
    "name": "Grenada [GD]"
  },
  {
    "code": "+1-671",
    "description": "Guam (+1-671)",
    "name": "Guam [GU]"
  },
  {
    "code": "+502",
    "description": "Guatemala (+502)",
    "name": "Guatemala [GT]"
  },
  {
    "code": "+44-1481",
    "description": "Guernsey (+44-1481)",
    "name": "Guernsey [GG]"
  },
  {
    "code": "+224",
    "description": "Guinea (+224)",
    "name": "Guinea [GN]"
  },
  {
    "code": "+245",
    "description": "Guinea-Bissau (+245)",
    "name": "Guinea-Bissau [GW]"
  },
  {
    "code": "+592",
    "description": "Guyana (+592)",
    "name": "Guyana [GY]"
  },
  {
    "code": "+509",
    "description": "Haiti (+509)",
    "name": "Haiti [HT]"
  },
  {
    "code": "+504",
    "description": "Honduras (+504)",
    "name": "Honduras [HN]"
  },
  {
    "code": "+852",
    "description": "Hong Kong (+852)",
    "name": "Hong Kong [HK]"
  },
  {
    "code": "+36",
    "description": "Hungary (+36)",
    "name": "Hungary [HU]"
  },
  {
    "code": "+354",
    "description": "Iceland (+354)",
    "name": "Iceland [IS]"
  },
  {
    "code": "+91",
    "description": "India (+91)",
    "name": "India [IN]"
  },
  {
    "code": "+62",
    "description": "Indonesia (+62)",
    "name": "Indonesia [ID]"
  },
  {
    "code": "+98",
    "description": "Iran (+98)",
    "name": "Iran [IR]"
  },
  {
    "code": "+964",
    "description": "Iraq (+964)",
    "name": "Iraq [IQ]"
  },
  {
    "code": "+353",
    "description": "Ireland (+353)",
    "name": "Ireland [IE]"
  },
  {
    "code": "+44-1624",
    "description": "Isle of Man (+44-1624)",
    "name": "Isle of Man [IM]"
  },
  {
    "code": "+972",
    "description": "Israel (+972)",
    "name": "Israel [IL]"
  },
  {
    "code": "+39",
    "description": "Italy (+39)",
    "name": "Italy [IT]"
  },
  {
    "code": "+225",
    "description": "Ivory Coast (+225)",
    "name": "Ivory Coast [CI]"
  },
  {
    "code": "+1-876",
    "description": "Jamaica (+1-876)",
    "name": "Jamaica [JM]"
  },
  {
    "code": "+81",
    "description": "Japan (+81)",
    "name": "Japan [JP]"
  },
  {
    "code": "+44-1534",
    "description": "Jersey (+44-1534)",
    "name": "Jersey [JE]"
  },
  {
    "code": "+962",
    "description": "Jordan (+962)",
    "name": "Jordan [JO]"
  },
  {
    "code": "+7",
    "description": "Kazakhstan (+7)",
    "name": "Kazakhstan [KZ]"
  },
  {
    "code": "+254",
    "description": "Kenya (+254)",
    "name": "Kenya [KE]"
  },
  {
    "code": "+686",
    "description": "Kiribati (+686)",
    "name": "Kiribati [KI]"
  },
  {
    "code": "+383",
    "description": "Kosovo (+383)",
    "name": "Kosovo [XK]"
  },
  {
    "code": "+965",
    "description": "Kuwait (+965)",
    "name": "Kuwait [KW]"
  },
  {
    "code": "+996",
    "description": "Kyrgyzstan (+996)",
    "name": "Kyrgyzstan [KG]"
  },
  {
    "code": "+856",
    "description": "Laos (+856)",
    "name": "Laos [LA]"
  },
  {
    "code": "+371",
    "description": "Latvia (+371)",
    "name": "Latvia [LV]"
  },
  {
    "code": "+961",
    "description": "Lebanon (+961)",
    "name": "Lebanon [LB]"
  },
  {
    "code": "+266",
    "description": "Lesotho (+266)",
    "name": "Lesotho [LS]"
  },
  {
    "code": "+231",
    "description": "Liberia (+231)",
    "name": "Liberia [LR]"
  },
  {
    "code": "+218",
    "description": "Libya (+218)",
    "name": "Libya [LY]"
  },
  {
    "code": "+423",
    "description": "Liechtenstein (+423)",
    "name": "Liechtenstein [LI]"
  },
  {
    "code": "+370",
    "description": "Lithuania (+370)",
    "name": "Lithuania [LT]"
  },
  {
    "code": "+352",
    "description": "Luxembourg (+352)",
    "name": "Luxembourg [LU]"
  },
  {
    "code": "+853",
    "description": "Macao (+853)",
    "name": "Macao [MO]"
  },
  {
    "code": "+389",
    "description": "Macedonia (+389)",
    "name": "Macedonia [MK]"
  },
  {
    "code": "+261",
    "description": "Madagascar (+261)",
    "name": "Madagascar [MG]"
  },
  {
    "code": "+265",
    "description": "Malawi (+265)",
    "name": "Malawi [MW]"
  },
  {
    "code": "+60",
    "description": "Malaysia (+60)",
    "name": "Malaysia [MY]"
  },
  {
    "code": "+960",
    "description": "Maldives (+960)",
    "name": "Maldives [MV]"
  },
  {
    "code": "+223",
    "description": "Mali (+223)",
    "name": "Mali [ML]"
  },
  {
    "code": "+356",
    "description": "Malta (+356)",
    "name": "Malta [MT]"
  },
  {
    "code": "+692",
    "description": "Marshall Islands (+692)",
    "name": "Marshall Islands [MH]"
  },
  {
    "code": "+222",
    "description": "Mauritania (+222)",
    "name": "Mauritania [MR]"
  },
  {
    "code": "+230",
    "description": "Mauritius (+230)",
    "name": "Mauritius [MU]"
  },
  {
    "code": "+262",
    "description": "Mayotte (+262)",
    "name": "Mayotte [YT]"
  },
  {
    "code": "+52",
    "description": "Mexico (+52)",
    "name": "Mexico [MX]"
  },
  {
    "code": "+691",
    "description": "Micronesia (+691)",
    "name": "Micronesia [FM]"
  },
  {
    "code": "+373",
    "description": "Moldova (+373)",
    "name": "Moldova [MD]"
  },
  {
    "code": "+377",
    "description": "Monaco (+377)",
    "name": "Monaco [MC]"
  },
  {
    "code": "+976",
    "description": "Mongolia (+976)",
    "name": "Mongolia [MN]"
  },
  {
    "code": "+382",
    "description": "Montenegro (+382)",
    "name": "Montenegro [ME]"
  },
  {
    "code": "+1-664",
    "description": "Montserrat (+1-664)",
    "name": "Montserrat [MS]"
  },
  {
    "code": "+212",
    "description": "Morocco (+212)",
    "name": "Morocco [MA]"
  },
  {
    "code": "+258",
    "description": "Mozambique (+258)",
    "name": "Mozambique [MZ]"
  },
  {
    "code": "+95",
    "description": "Myanmar (+95)",
    "name": "Myanmar [MM]"
  },
  {
    "code": "+264",
    "description": "Namibia (+264)",
    "name": "Namibia [NA]"
  },
  {
    "code": "+674",
    "description": "Nauru (+674)",
    "name": "Nauru [NR]"
  },
  {
    "code": "+977",
    "description": "Nepal (+977)",
    "name": "Nepal [NP]"
  },
  {
    "code": "+31",
    "description": "Netherlands (+31)",
    "name": "Netherlands [NL]"
  },
  {
    "code": "+599",
    "description": "Netherlands Antilles (+599)",
    "name": "Netherlands Antilles [AN]"
  },
  {
    "code": "+687",
    "description": "New Caledonia (+687)",
    "name": "New Caledonia [NC]"
  },
  {
    "code": "+64",
    "description": "New Zealand (+64)",
    "name": "New Zealand [NZ]"
  },
  {
    "code": "+505",
    "description": "Nicaragua (+505)",
    "name": "Nicaragua [NI]"
  },
  {
    "code": "+227",
    "description": "Niger (+227)",
    "name": "Niger [NE]"
  },
  {
    "code": "+234",
    "description": "Nigeria (+234)",
    "name": "Nigeria [NG]"
  },
  {
    "code": "+683",
    "description": "Niue (+683)",
    "name": "Niue [NU]"
  },
  {
    "code": "+850",
    "description": "North Korea (+850)",
    "name": "North Korea [KP]"
  },
  {
    "code": "+1-670",
    "description": "Northern Mariana Islands (+1-670)",
    "name": "Northern Mariana Islands [MP]"
  },
  {
    "code": "+47",
    "description": "Norway (+47)",
    "name": "Norway [NO]"
  },
  {
    "code": "+968",
    "description": "Oman (+968)",
    "name": "Oman [OM]"
  },
  {
    "code": "+92",
    "description": "Pakistan (+92)",
    "name": "Pakistan [PK]"
  },
  {
    "code": "+680",
    "description": "Palau (+680)",
    "name": "Palau [PW]"
  },
  {
    "code": "+970",
    "description": "Palestine (+970)",
    "name": "Palestine [PS]"
  },
  {
    "code": "+507",
    "description": "Panama (+507)",
    "name": "Panama [PA]"
  },
  {
    "code": "+675",
    "description": "Papua New Guinea (+675)",
    "name": "Papua New Guinea [PG]"
  },
  {
    "code": "+595",
    "description": "Paraguay (+595)",
    "name": "Paraguay [PY]"
  },
  {
    "code": "+51",
    "description": "Peru (+51)",
    "name": "Peru [PE]"
  },
  {
    "code": "+63",
    "description": "Philippines (+63)",
    "name": "Philippines [PH]"
  },
  {
    "code": "+64",
    "description": "Pitcairn (+64)",
    "name": "Pitcairn [PN]"
  },
  {
    "code": "+48",
    "description": "Poland (+48)",
    "name": "Poland [PL]"
  },
  {
    "code": "+351",
    "description": "Portugal (+351)",
    "name": "Portugal [PT]"
  },
  {
    "code": "+1-787, 1-939",
    "description": "Puerto Rico (+1-787, 1-939)",
    "name": "Puerto Rico [PR]"
  },
  {
    "code": "+974",
    "description": "Qatar (+974)",
    "name": "Qatar [QA]"
  },
  {
    "code": "+242",
    "description": "Republic of the Congo (+242)",
    "name": "Republic of the Congo [CG]"
  },
  {
    "code": "+262",
    "description": "Reunion (+262)",
    "name": "Reunion [RE]"
  },
  {
    "code": "+40",
    "description": "Romania (+40)",
    "name": "Romania [RO]"
  },
  {
    "code": "+7",
    "description": "Russia (+7)",
    "name": "Russia [RU]"
  },
  {
    "code": "+250",
    "description": "Rwanda (+250)",
    "name": "Rwanda [RW]"
  },
  {
    "code": "+590",
    "description": "Saint Barthelemy (+590)",
    "name": "Saint Barthelemy [BL]"
  },
  {
    "code": "+290",
    "description": "Saint Helena (+290)",
    "name": "Saint Helena [SH]"
  },
  {
    "code": "+1-869",
    "description": "Saint Kitts and Nevis (+1-869)",
    "name": "Saint Kitts and Nevis [KN]"
  },
  {
    "code": "+1-758",
    "description": "Saint Lucia (+1-758)",
    "name": "Saint Lucia [LC]"
  },
  {
    "code": "+590",
    "description": "Saint Martin (+590)",
    "name": "Saint Martin [MF]"
  },
  {
    "code": "+508",
    "description": "Saint Pierre and Miquelon (+508)",
    "name": "Saint Pierre and Miquelon [PM]"
  },
  {
    "code": "+1-784",
    "description": "Saint Vincent and the Grenadines (+1-784)",
    "name": "Saint Vincent and the Grenadines [VC]"
  },
  {
    "code": "+685",
    "description": "Samoa (+685)",
    "name": "Samoa [WS]"
  },
  {
    "code": "+378",
    "description": "San Marino (+378)",
    "name": "San Marino [SM]"
  },
  {
    "code": "+239",
    "description": "Sao Tome and Principe (+239)",
    "name": "Sao Tome and Principe [ST]"
  },
  {
    "code": "+966",
    "description": "Saudi Arabia (+966)",
    "name": "Saudi Arabia [SA]"
  },
  {
    "code": "+221",
    "description": "Senegal (+221)",
    "name": "Senegal [SN]"
  },
  {
    "code": "+381",
    "description": "Serbia (+381)",
    "name": "Serbia [RS]"
  },
  {
    "code": "+248",
    "description": "Seychelles (+248)",
    "name": "Seychelles [SC]"
  },
  {
    "code": "+232",
    "description": "Sierra Leone (+232)",
    "name": "Sierra Leone [SL]"
  },
  {
    "code": "+65",
    "description": "Singapore (+65)",
    "name": "Singapore [SG]"
  },
  {
    "code": "+1-721",
    "description": "Sint Maarten (+1-721)",
    "name": "Sint Maarten [SX]"
  },
  {
    "code": "+421",
    "description": "Slovakia (+421)",
    "name": "Slovakia [SK]"
  },
  {
    "code": "+386",
    "description": "Slovenia (+386)",
    "name": "Slovenia [SI]"
  },
  {
    "code": "+677",
    "description": "Solomon Islands (+677)",
    "name": "Solomon Islands [SB]"
  },
  {
    "code": "+252",
    "description": "Somalia (+252)",
    "name": "Somalia [SO]"
  },
  {
    "code": "+27",
    "description": "South Africa (+27)",
    "name": "South Africa [ZA]"
  },
  {
    "code": "+82",
    "description": "South Korea (+82)",
    "name": "South Korea [KR]"
  },
  {
    "code": "+211",
    "description": "South Sudan (+211)",
    "name": "South Sudan [SS]"
  },
  {
    "code": "+34",
    "description": "Spain (+34)",
    "name": "Spain [ES]"
  },
  {
    "code": "+94",
    "description": "Sri Lanka (+94)",
    "name": "Sri Lanka [LK]"
  },
  {
    "code": "+249",
    "description": "Sudan (+249)",
    "name": "Sudan [SD]"
  },
  {
    "code": "+597",
    "description": "Suriname (+597)",
    "name": "Suriname [SR]"
  },
  {
    "code": "+47",
    "description": "Svalbard and Jan Mayen (+47)",
    "name": "Svalbard and Jan Mayen [SJ]"
  },
  {
    "code": "+268",
    "description": "Swaziland (+268)",
    "name": "Swaziland [SZ]"
  },
  {
    "code": "+46",
    "description": "Sweden (+46)",
    "name": "Sweden [SE]"
  },
  {
    "code": "+41",
    "description": "Switzerland (+41)",
    "name": "Switzerland [CH]"
  },
  {
    "code": "+963",
    "description": "Syria (+963)",
    "name": "Syria [SY]"
  },
  {
    "code": "+886",
    "description": "Taiwan (+886)",
    "name": "Taiwan [TW]"
  },
  {
    "code": "+992",
    "description": "Tajikistan (+992)",
    "name": "Tajikistan [TJ]"
  },
  {
    "code": "+255",
    "description": "Tanzania (+255)",
    "name": "Tanzania [TZ]"
  },
  {
    "code": "+66",
    "description": "Thailand (+66)",
    "name": "Thailand [TH]"
  },
  {
    "code": "+228",
    "description": "Togo (+228)",
    "name": "Togo [TG]"
  },
  {
    "code": "+690",
    "description": "Tokelau (+690)",
    "name": "Tokelau [TK]"
  },
  {
    "code": "+676",
    "description": "Tonga (+676)",
    "name": "Tonga [TO]"
  },
  {
    "code": "+1-868",
    "description": "Trinidad and Tobago (+1-868)",
    "name": "Trinidad and Tobago [TT]"
  },
  {
    "code": "+216",
    "description": "Tunisia (+216)",
    "name": "Tunisia [TN]"
  },
  {
    "code": "+90",
    "description": "Turkey (+90)",
    "name": "Turkey [TR]"
  },
  {
    "code": "+993",
    "description": "Turkmenistan (+993)",
    "name": "Turkmenistan [TM]"
  },
  {
    "code": "+1-649",
    "description": "Turks and Caicos Islands (+1-649)",
    "name": "Turks and Caicos Islands [TC]"
  },
  {
    "code": "+688",
    "description": "Tuvalu (+688)",
    "name": "Tuvalu [TV]"
  },
  {
    "code": "+1-340",
    "description": "U.S. Virgin Islands (+1-340)",
    "name": "U.S. Virgin Islands [VI]"
  },
  {
    "code": "+256",
    "description": "Uganda (+256)",
    "name": "Uganda [UG]"
  },
  {
    "code": "+380",
    "description": "Ukraine (+380)",
    "name": "Ukraine [UA]"
  },
  {
    "code": "+971",
    "description": "United Arab Emirates (+971)",
    "name": "United Arab Emirates [AE]"
  },
  {
    "code": "+44",
    "description": "United Kingdom (+44)",
    "name": "United Kingdom [GB]"
  },
  {
    "code": "+1",
    "description": "United States (+1)",
    "name": "United States [US]"
  },
  {
    "code": "+598",
    "description": "Uruguay (+598)",
    "name": "Uruguay [UY]"
  },
  {
    "code": "+998",
    "description": "Uzbekistan (+998)",
    "name": "Uzbekistan [UZ]"
  },
  {
    "code": "+678",
    "description": "Vanuatu (+678)",
    "name": "Vanuatu [VU]"
  },
  {
    "code": "+379",
    "description": "Vatican (+379)",
    "name": "Vatican [VA]"
  },
  {
    "code": "+58",
    "description": "Venezuela (+58)",
    "name": "Venezuela [VE]"
  },
  {
    "code": "+84",
    "description": "Vietnam (+84)",
    "name": "Vietnam [VN]"
  },
  {
    "code": "+681",
    "description": "Wallis and Futuna (+681)",
    "name": "Wallis and Futuna [WF]"
  },
  {
    "code": "+212",
    "description": "Western Sahara (+212)",
    "name": "Western Sahara [EH]"
  },
  {
    "code": "+967",
    "description": "Yemen (+967)",
    "name": "Yemen [YE]"
  },
  {
    "code": "+260",
    "description": "Zambia (+260)",
    "name": "Zambia [ZM]"
  },
  {
    "code": "+263",
    "description": "Zimbabwe (+263)",
    "name": "Zimbabwe [ZW]"
  }
];