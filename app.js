import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/* 

AppLayout : (Planning)

Header
    -Logo
    -NavItems(Right Side)
    -Cart

Body
    -SearchBar
    -RestaurantList
        -RestaurantCard
            -Image
            -Name
            -Cuisine
            -Distance

Footer 
    -Links
    -Copyright

*/

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="/">
          <img src={require("./images/logo.png")} alt="logo" />
        </a>
      </div>
      <div className="nav-link">
        <ul>
          <li className="nav-items">Offers</li>
          <li className="nav-items">Help</li>
          <li className="nav-items">Sign In</li>
          <li className="nav-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "557939",
      "name": "Chai Sutta Bar",
      "uuid": "da679ed1-3510-4979-8701-c3ad652d70cc",
      "city": "10436",
      "area": "Balaghat Locality",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "cjvp28sclm8yxe438m7w",
      "cuisines": [
        "Fast Food",
        "Italian",
        "Beverages",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "chai-sutta-bar-balaghat-balaghat",
        "city": "balaghat"
      },
      "cityState": "10436",
      "address": "WARD NO.22, C H ROAD, NEAR SAHARA PHOTOCOPY, BALAGHAT MADHYA PRADESH (481001), BALAGHAT, BALAGHAT, BALAGHAT, MADHYA PRADESH - 481001",
      "locality": "C H Road",
      "parentId": 14909,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6286938~p=1~eid=00000187-8f2e-4c72-1e31-e7ac00b10144",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "557939",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "625213",
      "name": "Asati Chaat House",
      "uuid": "a70bb35c-8a39-4a44-a745-ec1b13a3189c",
      "city": "10436",
      "area": "Balaghat Locality",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "dsofspspcyssihwhca4x",
      "cuisines": [
        "Chaat",
        "South Indian",
        "Chinese",
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "asati-chaat-house-balaghat-balaghat",
        "city": "balaghat"
      },
      "cityState": "10436",
      "address": "WARD 18 ,CH ROAD , BALAGHAT, MP",
      "locality": "CH Road",
      "parentId": 371899,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "625213",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "202510",
      "name": "Manoj Sandwich",
      "uuid": "347cbd7c-8ae6-49e2-9b79-b1c0a2879927",
      "city": "10436",
      "area": "Balaghat Locality",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "cxicrazkgydciyi4v80q",
      "cuisines": [
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "manoj-sandwich-balaghat-balaghat",
        "city": "balaghat"
      },
      "cityState": "10436",
      "address": "Manoj Sandwich Gondia Road Mitali Hospital Ke Samne Balaghat",
      "locality": "Gondia Road",
      "parentId": 132206,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "202510",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "589318",
      "name": "ASHOK BAKERY",
      "uuid": "065c36d9-43eb-43f6-af88-f7e6d830272a",
      "city": "10436",
      "area": "Balaghat Locality",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "lxcqv6gjbite1tznltzr",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1.2000000476837158,
      "slugs": {
        "restaurant": "ashok-bakery-balaghat-balaghat",
        "city": "balaghat"
      },
      "cityState": "10436",
      "address": "WARD NO 16 DEVI TALAB, Balaghat,  Balaghat, Balaghat, Madhya Pradesh -  481001",
      "locality": "Devi Talab",
      "parentId": 36918,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6286951~p=4~eid=00000187-8f2e-4c72-1e31-e7ad00b10435",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "589318",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1.2000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "642494",
      "name": "Dwarika The Rooftop Restaurant",
      "uuid": "3e9846d0-b0ba-4dff-8fa6-8bb5c3d9b807",
      "city": "10436",
      "area": "Balaghat Locality",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "v9ebyujmeeikmw6sjqrn",
      "cuisines": [
        "Chinese",
        "South Indian",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "dwarika-the-rooftop-restaurant-balaghat-balaghat-2",
        "city": "balaghat"
      },
      "cityState": "10436",
      "address": "KALIPUTLI CHOWK BALAGHAT BALAGHAT MADHYA PRADESH",
      "locality": "Kaliputli chowk",
      "parentId": 75548,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹100 on orders above ₹400 | Use code JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹100 on orders above ₹400 | Use code JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "642494",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "201937",
      "name": "Cake Hub",
      "uuid": "a39e7f56-dbcb-4c66-b50b-200663253544",
      "city": "10436",
      "area": "Chitragupt Nagar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "z0bjxnf6iatuzbohumkk",
      "cuisines": [
        "Bakery"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "cake-hub-balaghat-balaghat",
        "city": "balaghat"
      },
      "cityState": "10436",
      "address": "Ward no. 21, Near Tanvi gift, Darji mohalla, Balaghat MP",
      "locality": "Darji Mohalla",
      "parentId": 54917,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹199",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "201937",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  }
]

// Receiving data from dominos object
/* 
const Dominos = {
    cloudinaryImageId : "hxhddq5lravcvcxmujbl",
    name : "Domino's Pizza" ,
    cuisines : ["Pizzas", "Italian", "Pastas", "Desserts"],
    rating : 4.3

}
 */

// Hard coded data
/*
const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hxhddq5lravcvcxmujbl"} alt="Dominos-pic" />
            <h2>Domino's Pizza</h2>
            <h4>Pizzas, Italian, Pastas, Desserts</h4>
            <h4>Rating : 4.3</h4>
        </div>
    );
};
 */

/* 
const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantList[0].data?.cloudinaryImageId} alt="Dominos-pic" />
            <h2>{restaurantList[0].data?.name}</h2>
            <h4>{restaurantList[0].data?.cuisines.join(", ")}</h4>
            <h4>Distance : {restaurantList[0].data?.lastMileTravel} km</h4>
        </div>
    );
}; 

 */


/* 
const RestaurantCard = (props) =>{
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant.data?.cloudinaryImageId} />
            <h2>{props.restaurant.data?.name}</h2>
            <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
            <h4>Distance : {props.restaurant.data?.lastMileTravel} km</h4>
        </div>
    );
};
 */

//object destructuring
/* 
const RestaurantCard = ({restaurant}) =>{
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant.data?.cloudinaryImageId} />
            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines.join(", ")}</h3>
            <h4>Distance : {restaurant.data?.lastMileTravel} km</h4>
        </div>
    );
};
 */
/* 
const RestaurantCard = ({restaurant}) =>{
    const {name, cloudinaryImageId, cuisines, lastMileTravel} = restaurant.data;
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Distance : {lastMileTravel} km</h4>
        </div>
    );
};
 */

const RestaurantCard = ({name, cloudinaryImageId, cuisines, deliveryTime}) =>{
    
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Delivery Time : {deliveryTime} min</h4>
        </div>
    );
};

// using spread operator
/* 
const Body = () => {
  return (
    <>
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search" />
      </div>
      <div className="restaurant-list">
        <RestaurantCard   {...restaurantList[0].data} />
        <RestaurantCard   {...restaurantList[2].data} />
        <RestaurantCard   {...restaurantList[3].data} />
        <RestaurantCard   {...restaurantList[4].data} />
        <RestaurantCard   {...restaurantList[5].data} />
        <RestaurantCard   {...restaurantList[1].data} />
        
      </div>
    </>
  );
}; 
*/

const Body = () => {
    return (
      <>
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search" value="" />
        </div>
        <div className="restaurant-list">
        {
          restaurantList.map((restaurant) => {
            return (
               <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            );
          })
        }
        </div>
      </>
    );
  };

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Footer /> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
