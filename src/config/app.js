
//FireBase
exports.firebaseConfig = {
  apiKey: "AIzaSyCXqSp74O42zPKIhS8wUOuiq07TAf85_R0",
  authDomain: "carry-your-cross-ministries.firebaseapp.com",
  databaseURL: "https://carry-your-cross-ministries.firebaseio.com",
  projectId: "carry-your-cross-ministries",
  storageBucket: "carry-your-cross-ministries.appspot.com",
  messagingSenderId: "196047912175",
  appId: "1:196047912175:web:e8e1e8095e9f5191aa2f1a",
  measurementId: "G-8V2P4Y0SF7"
};


//App setup
exports.adminConfig={
  "appName": "Carry Your Cross Ministries",
  "slogan":"Admin Panel.",

  "design":{
    "sidebarBg":"sidebar-1.jpg", //sidebar-1, sidebar-2, sidebar-3
    "dataActiveColor":"red", //"purple | blue | green | orange | red | rose"
    "dataBackgroundColor":"black", // "white | black"
  },

  "codeversion": "1.0",
  "allowedUsers":null, //If null, allow all users, else it should be array of allowd users
  "fieldBoxName": "Fields",
  "maxNumberOfTableHeaders":5,
  "prefixForJoin":["-event"],
  "methodOfInsertingNewObjects":"timestamp", //timestamp (key+time) | push - use firebase keys
  "urlSeparator":"+",


  "fieldsTypes":{
    "photo":["photo","image","thumbnail","icon","shareImage"],
    "dateTime":["datetime","start"],
    "time":["time"],
    "maps":["map","latlng"],
    "textarea":["description"],
    "html":["content","description","info"],
    "radio":["radio"],
    "checkbox":["checkbox"],
    "dropdowns":["status","dropdowns"],
    "file":["video"],
    "rgbaColor":['rgba'],
    "hexColor":['color'],
    "relation":['type'],
  },
  "optionsForSelect":[
      {"key":"dropdowns","options":["new","processing","rejected","completed"]},
      {"key":"checkbox","options":["Skopje","Belgrade","New York"]},
      {"key":"status","options":["just_created","confirmed","canceled"]},
      {"key":"radio","options":["no","maybe","yes"]}
  ],
  "optionsForRelation":[
      {"key":"type","path":"/static/genres/items","value":"name","display":"name","isValuePath":false,"produceRelationKey":true,"relationKey":"type_eventid","relationJoiner":"-"},
  ],

  "paging":{
    "pageSize": 20,
    "finite": true,
    "retainLastPage": false
  }
}

//Navigation
exports.navigation=[
    {
      "link": "/",
      "name": "Dashboard",
      "schema":null,
      "icon":"home",
      isIndex:true,
      "path": "",
    },
    {
      "link": "fireadmin",
      "path": "about",
      "name": "About Us",
      "icon":"contacts",
      "tableFields":["image","title","heading"]
    },
    {
      "link": "fireadmin",
      "path": "events",
      "name": "Events",
      "icon":"list",
      "tableFields":["photo","title","day"],
    },
    {
      "link": "fireadmin",
      "path": "videos",
      "name": "Videos",
      "icon":"playlist_play",
      "tableFields":["image","title"]
    },
    {
      "link": "fireadmin",
      "path": "profiles",
      "name": "Profiles",
      "icon":"people",
      "tableFields":["title","photo","date"],
    },
    {
      "link": "fireadmin",
      "path": "more",
      "name": "More",
      "icon":"apps",
      "tableFields":["name","description"],
        "subMenus": [{
          "link": "fireadmin",
          "path": "more/conferences",
          "name": "Conferences",
          "icon":"record_voice_over",
          "tableFields":["title","photo","description"],
        },{
          "link": "fireadmin",
          "path": "more/bible",
          "name": "Bible",
          "icon":"import_contacts",
          "tableFields":["BibleURL"],
        },{
          "link": "fireadmin",
          "path": "more/branches",
          "name": "Branches",
          "icon":"business",
          "tableFields":["image","title","heading"]
        },{
          "link": "fireadmin",
          "path": "more/leaders",
          "name": "Leaders",
          "icon":"people",
          "tableFields":["image","title"]
        },{
          "link": "fireadmin",
          "path": "more/ministries",
          "name": "Ministries",
          "icon":"call_split",
          "tableFields":["image","title"]
        },{
          "link": "fireadmin",
          "path": "more/connect",
          "name": "Connect",
          "icon":"transform",
          "tableFields":["image","title","heading"]
        },{
          "link": "fireadmin",
          "path": "more/giving",
          "name": "Giving",
          "icon":"local_florist",
          "tableFields":["image","title","heading", "paypal_client_ID"]
        },{
          "link": "fireadmin",
          "path": "more/social",
          "name": "Social",
          "icon":"forum",
          "tableFields":["image","title"]
        }]
    },
    {
      "link": "push",
      "path": "",
      "name": "Push Notifications",
      "icon":"notifications_active",
      "tableFields":[],
    }
  ];

exports.pushSettings={
  "pushType":"onesignal", //firebase or onesignal
  "Firebase_AuthorizationPushKey":"", //Firebase push authorization ket
  "pushTopic":"news", //Only for firebase push
  "oneSignal_REST_API_KEY":"your_APIkey_goes_in_here",
  "oneSignal_APP_KEY":"your_APPkey_goes_in_here",
  "included_segments":"Active Users", //Only for onesignal push
}

exports.userDetails={

}
