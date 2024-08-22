function changePage(newPage) {
  window.location.href = newPage;
};

function changeBySelection (){
const selectedOption = document.querySelector("select");
const optionImage = document.querySelector("#replcingImage");
const optionDescription = document.querySelector("#answer");
const changePageButton = document.querySelector(".changePageButton");

if(selectedOption.value==="none"){optionImage.src="images/question.gif", optionDescription.innerHTML=`<h2> Tell Us Why Are You Here</h2><br><p>Choose your relevant option and start investigating!</p> <button class="moreInfo"> <a href="index.html">Click For More</a></button>`}
else if(selectedOption.value==="learn"){optionImage.src="images/learn.gif", optionDescription.innerHTML=`<h2> Learning and Investigating Charts</h2><br><p>Mastering forex trading starts with learning and investigating charts. These charts display historical price movements and help traders predict future trends. Familiarize yourself with candlestick patterns, support and resistance levels, and technical indicators like moving averages and RSI. Consistent analysis of these elements allows traders to make informed decisions. Practice reading charts regularly and backtest your strategies to refine your skills. Effective chart analysis is crucial for identifying entry and exit points in the forex market.</p> <button class="moreInfo"> <a href="learn.html">Click For More</a></button>`}
else if(selectedOption.value==="follow"){optionImage.src="images/follow.gif", optionDescription.innerHTML=`<h2>Follow a Leader That Will Open and Close Position for Me</h2><br><p>For novice forex traders, following an experienced leader through copy trading can be beneficial. Copy trading platforms allow you to replicate the trades of seasoned traders in real time. By following a successful leader, you can leverage their expertise while learning the ropes. Ensure you choose a trader with a proven track record and risk management strategy. This approach can help you gain confidence and potentially achieve profits without making complex trading decisions independently.</p><button class="moreInfo"><a href="leaders.html">Click For More</a></button>`}
else if(selectedOption.value==="brokers"){optionImage.src="images/compare.gif", optionDescription.innerHTML=`<h2>Comparing Brokers</h2><br><p>Selecting the right forex broker is vital for your trading success. When comparing brokers, consider factors like regulatory compliance, trading platforms offered, spreads, commissions, and customer service. Look for brokers with a strong reputation, transparent fee structures, and robust security measures. Additionally, check for educational resources and demo accounts that can aid in your trading journey. Comparing these aspects helps ensure you choose a reliable broker that aligns with your trading needs and goals.</p><button class="moreInfo"><a href="brokers.html">Click For More</a></button>`}
else if(selectedOption.value==="mt"){optionImage.src="images/meta.gif", optionDescription.innerHTML=`<h2>Learning MT4 and MT5
</h2><br><p>MetaTrader 4 (MT4) and MetaTrader 5 (MT5) are popular trading platforms in the forex market. MT4 is known for its user-friendly interface and advanced charting tools, ideal for beginners. MT5 offers more sophisticated features like additional timeframes, advanced order types, and integrated economic calendars. Both platforms support automated trading through Expert Advisors (EAs). Start by exploring the basic functionalities, then delve into custom indicators and automated strategies to enhance your trading efficiency. Tutorials and online courses can accelerate your learning process.</p><button class="moreInfo"><a href="mt4mt5.html">Click For More</a></button>`}
else if(selectedOption.value==="leader"){optionImage.src="images/leader.gif", optionDescription.innerHTML=`<h2> Becoming a Leader So That Other Traders Can Follow Me</h2><br><p>Becoming a leader in forex trading requires a blend of expertise, consistency, and transparency. Develop a solid trading strategy and demonstrate consistent performance over time. Share your trading history and insights on social platforms or copy trading networks to attract followers. Maintain transparency in your trading decisions and risk management practices. Engage with your followers by providing regular updates and educational content. Building trust and a strong reputation will help you grow your follower base and establish yourself as a reputable trading leader.</p><button class="moreInfo"><a href="leaders.html">Click For More</a></button>`};

};


const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click",openLoginScreen);

const btnX = document.querySelector(".X");
btnX.addEventListener("click",closeLoginScreen);


function openLoginScreen (){
  const loginScreen = document.querySelector("#loginScreen");
  loginScreen.style.display = "flex";
}

function closeLoginScreen (){
  const loginScreen = document.querySelector("#loginScreen");
  loginScreen.style.display = "none";
}


const tryUS = document.querySelector("#TryUS");
tryUS.addEventListener("click",openRegScreen);

const regBtnX = document.querySelector(".closeReg");
regBtnX.addEventListener("click",closeRegScreen);

function openRegScreen (){
const regScreen = document.querySelector("#registrationScreen");
regScreen.style.display ="flex";
}

function closeRegScreen(){
  const regScreen = document.querySelector("#registrationScreen");
  regScreen.style.display = "none";
}

//json for brokers info:


const allBrokers =[
  {
  "companyStage":"funded",
  "companyName":"Axia",
  "location":"Seychells",
  "investorCount":"173",
  "foundedYear":"2005",
  "topInvestor":"New Enterprise",
  "totalFunding":"$5.73B",
  "leadersAmount":"87",
  "followersAmount":"123",
  "description":"Provides the right tools to fully support traders of all levels",
  "logo":"https://bcdn.axiainvestments.com/corp-axiabl-prod/wp-content/uploads/2023/07/logo.png"
  },
  {
    "companyStage":"Unfunded",
    "companyName":"TradeMarkets",
    "location":"London",
    "investorCount":"158",
    "foundedYear":"-",
    "topInvestor":"-",
    "totalFunding":"-",
    "leadersAmount":"110",
    "followersAmount":"239",
    "description":"offer compelling solutions for active and passive investors.",
    "logo":"https://www.trademarkets.eu/storage/app/media/trademarket/image001.png"
    },
    {
      "companyStage":"funded",
      "companyName":"T4Trade",
      "location":"South-Africa",
      "investorCount":"468",
      "foundedYear":"2012",
      "topInvestor":"New Enterprise",
      "totalFunding":"$3.18B",
      "leadersAmount":"217",
      "followersAmount":"353",
      "description":"provide both beginner and professional traders with access to various opportunities across global financial markets.",
      "logo":"https://www.t4trade.com/wp-content/uploads/2024/02/t4trade-logo-forex.png"
      },
      {
        "companyStage":"Unfunded",
        "companyName":"FXTrading",
        "location":"China",
        "investorCount":"2400",
        "foundedYear":"-",
        "topInvestor":"-",
        "totalFunding":"-",
        "leadersAmount":"497",
        "followersAmount":"852",
        "description":"Provides great trading solutions for all kinds of traders",
        "logo":"https://fxtrading.com/wp-content/themes/fxtrading/img/logo-white.svg"
        },
        {
          "companyStage":"funded",
          "companyName":"Tradear",
          "location":"Spain",
          "investorCount":"1630",
          "foundedYear":"2008",
          "topInvestor":"New Enterprise",
          "totalFunding":"$7.01B",
          "leadersAmount":"770",
          "followersAmount":"1420",
          "description":"provides trading solutions using progressing AI tools",
          "logo":"https://www.tradear.com/img/logo-new.svg"
          },
          {
            "companyStage":"Unfunded",
            "companyName":"CMTrading",
            "location":"Belgium",
            "investorCount":"571",
            "foundedYear":"-",
            "topInvestor":"-",
            "totalFunding":"-",
            "leadersAmount":"97",
            "followersAmount":"229",
            "description":"Groundbreaking trading technology at your fingertips. From real-time results to quick execution of positions, get the best trading tools on the market",
            "logo":"https://www.cmtrading.com/wp-content/uploads/2022/07/cm-trading-white-gold-logo-1.png"
            },
              {
                "companyStage":"Unfunded",
                "companyName":"Banxso",
                "location":"Brazil",
                "investorCount":"304",
                "foundedYear":"-",
                "topInvestor":"-",
                "totalFunding":"-",
                "leadersAmount":"407",
                "followersAmount":"863",
                "description":"The First Trading Platform That Pays Interest on Your Investments",
                "logo":"https://banxso.com/wp-content/uploads/2021/11/banxso_logo-full.png"
                },
                {
                  "companyStage":"funded",
                  "companyName":"Cerus Markets",
                  "location":"Argentina",
                  "investorCount":"429",
                  "foundedYear":"2002",
                  "topInvestor":"New Enterprise",
                  "totalFunding":"$8.11B",
                  "leadersAmount":"346",
                  "followersAmount":"678",
                  "description":"Buy and Sell cryptocurrencies securely and fast without the need of hardware wallets.",
                  "logo":"https://cerusmarkets.com/wp-content/uploads/2023/09/CerusMarketsLogo-Logo-TIGHT-Crop.png"
                  },
                  {
                    "companyStage":"funded",
                    "companyName":"FX-PESA",
                    "location":"France",
                    "investorCount":"4532",
                    "foundedYear":"2017",
                    "topInvestor":"New Enterprise",
                    "totalFunding":"$9.43B",
                    "leadersAmount":"2346",
                    "followersAmount":"3573",
                    "description":"Trade online on your mobile, tablet or desktop with a huge range of products, great rates and local support from a global broker.",
                    "logo":"https://eq-cdn.equiti-me.com/website/documents/fxpesa-logo-dark-header.svg"
                    },
                    {
                      "companyStage":"Unfunded",
                      "companyName":"F-Tag",
                      "location":"Italy",
                      "investorCount":"1452",
                      "foundedYear":"-",
                      "topInvestor":"",
                      "totalFunding":"",
                      "leadersAmount":"754",
                      "followersAmount":"462",
                      "description":"represents the core foundation that anchors our fast growing and diverse operations.",
                      "logo":"https://www.ftag.com/wp-content/uploads/2021/08/ftag.png"
                      },
                      {
                        "companyStage":"Unfunded",
                        "companyName":"Mena Evest",
                        "location":"Moroccow",
                        "investorCount":"574",
                        "foundedYear":"-",
                        "topInvestor":"-",
                        "totalFunding":"-",
                        "leadersAmount":"867",
                        "followersAmount":"943",
                        "description":"Benefit from AI insights for smarter and faster decisions",
                        "logo":"https://www.evest.com/_next/image?url=%2Fevestlogo.png&w=256&q=75"
                        },
                        {
                          "companyStage":"Unfunded",
                          "companyName":"iForex",
                          "location":"Georgia",
                          "investorCount":"643",
                          "foundedYear":"-",
                          "topInvestor":"-",
                          "totalFunding":"-",
                          "leadersAmount":"357",
                          "followersAmount":"832",
                          "description":"Watch real experts in action and make your move.",
                          "logo":"https://www.iforex.in/media/logo25.37d768cd82a319a3f74c.svg"
                          },
                          {
                            "companyStage":"Unfunded",
                            "companyName":"Foxi Markets",
                            "location":"Los Angeles",
                            "investorCount":"269",
                            "foundedYear":"-",
                            "topInvestor":"-",
                            "totalFunding":"-",
                            "leadersAmount":"23",
                            "followersAmount":"270",
                            "description":"Start trading with our modern and reliable trading platform. Explore 500+ stocks, indices, forex and commodities we have it all.",
                            "logo":"https://foximarkets.com/wp-content/uploads/2023/01/4-e1675765399410.png"
                            },
                              {
                                "companyStage":"Unfunded",
                                "companyName":"Margin1",
                                "location":"Manchester",
                                "investorCount":"323",
                                "foundedYear":"-",
                                "topInvestor":"-",
                                "totalFunding":"-",
                                "leadersAmount":"427",
                                "followersAmount":"833",
                                "description":"user-friendly design ensures that everyone can trade with confidence. It's trading made accessible without the complexities of Metatrader 4 and 5",
                                "logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEUWFhb///8AAAD8/PzIyMgiIiKdnZ3Dw8O8vLxra2sTExPu7u7p6em0tLTT09Px8fEMDAx1dXXf398zMzOIiIiVlZWrq6t9fX08PDxmZmajo6NTU1NCQkJZWVlISEhgYGCKGJANAAACGElEQVRoge2UiXKrMAxFsWQCYbEdAmRpQv//L6srTJv2hXk/oDOTjLxwjCXjojAMwzAMwzAMwzCM9yQSNGq+IwTNFoD0MxVD+bfNzY/mjlf3M3jfo7s5e+9rRNR7XxVip8mDal5UsNwrbZL3h1J+Ojf4iZpGBy5/7XR0wjXBJEEr4+mBLsyk2mVGKmjOMZNzvpTghCnO9ZTn3d/J2eHVqZXxDsGMrpDlwzB00sTa7Fxs27YjdlUpDZZ3Uvkttl107vBezpLDp9vk0QWvu4EcubxjI4ynlTLL3SCPQY5iHHfkFZ4l72KAHD3jRTcJeZMS1r18SC7WKjdZLjutaZXLnNOO/IQkXNnNqzzgddnFVX4+n6/SU5408Xo6snwK6IL8sSxpT/7Zi0PK+YA8ySqVluio/8ysBb3kGvvQ55zfmyhph1z2sOzJb7LluZMMQk4HaYyjFDWoXArl+qvmtF7LHjY53aRI/B/5keQ8sLydyrvt+PFZCzoh2fLVSM+NMPwjR6Xx5qHrrvvyEdsnlX/KYQ+CrDFBXtAgx6Lqqcdh8jW/yLU+OOfCvrxhnQO512STLrLK9ZuKlELe0SrX45TK6PQjKd7Lb8yy2z7GJVGIA7Ux6mVAXeSPObJEz9BGHOkxtDIaPbVcly3DRc8Y51XOcfr3ctFribb/ZruzEKS1ke+2ZrvGXi+uX5fdX7dhGIZhGIZhGIZhZL4AqSsY0WyX4HMAAAAASUVORK5CYII="
                                },
                                {
                                  "companyStage":"Unfunded",
                                  "companyName":"iron-FX",
                                  "location":"Germany",
                                  "investorCount":"521",
                                  "foundedYear":"-",
                                  "topInvestor":"-",
                                  "totalFunding":"-",
                                  "leadersAmount":"421",
                                  "followersAmount":"743",
                                  "description":"an unparalleled environment for online trading that enables us to provide access to a wide and highly diversified range of trading instruments from 6 different asset classes",
                                  "logo":"https://cdn-djcbh.nitrocdn.com/hLLygwqLexJbcUbPyIoouxWlzHkStqgF/assets/images/optimized/rev-3ac84ab/www.ironfx.com/wp-content/uploads/2021/03/ironfx-forex-broker-logo.svg"
                                  },
                                  {
                                    "companyStage":"Unfunded",
                                    "companyName":"investQhub",
                                    "location":"UK",
                                    "investorCount":"411",
                                    "foundedYear":"-",
                                    "topInvestor":"-",
                                    "totalFunding":"-",
                                    "leadersAmount":"512",
                                    "followersAmount":"732",
                                    "description":"UK premier online trading platform tailored for the audacious young investor.",
                                    "logo":"https://investqhub.co/wp-content/uploads/2023/10/InvestQhub-Logo-Official-Web-1.webp"
                                    }
];

function searchBrandInfo() {
let SearchValue = document.querySelector("#brokerSearch").value;

for (i=0;i<allBrokers.length;i++){
  if (SearchValue.toLowerCase() === allBrokers[i].companyName.toLowerCase())
    {
      for (j=0;j<allBrokers[i].length;j++)
        {document.querySelector("#broStage") = companyStage.value;
         document.querySelector("#broName") = companyName.value;
         document.querySelector("#broLocation") = location.value;
         document.querySelector("#broInvCount") = investorCount.value;
         document.querySelector("#broFoundYear") = foundedYear.value;
         document.querySelector("#broInvestors") = topInvestor.value;
         document.querySelector("#broFund") = totalFunding.value;
         document.querySelector("#broLeadAmount") = leadersAmount.value;
         document.querySelector("#broFollAmount") = followersAmount.value;
         document.querySelector("#broDesc") = description.value;





         }
    }
}
}

const seachButtonBroker = document.querySelector("#brokerInfoButton");
seachButtonBroker.addEventListener("click",searchBrandInfo());


//===============================API PAGE FUNCTIONS:

// function getAllTheClients (){
//   fetch("http://localhost:3001/clients/1")
//   .then((theClientInfo)=>{return theClientInfo.json()})
//   .then((theClientInfoAsOBJ)=>{
//     console.log(theClientInfoAsOBJ);

//     // document.querySelector('#clientsFullInfo').innerHTML=theClientInfoAsOBJ[0].first_name;
//     let allClientsFullInfo = "";
//     for (let i=0; i<theClientInfoAsOBJ.length;i++){
//       allClientsFullInfo += `<div id="clientsResults">
//       <h2>${theClientInfoAsOBJ[i].first_name} ${theClientInfoAsOBJ[i].last_name}</h2>
//       <h2>${theClientInfoAsOBJ[i].email}</h2>
//       <h2>${theClientInfoAsOBJ[i].phone_number}</h2>


//       </div>`;
//       document.querySelector('#clientsFullInfo').innerHTML=allClientsFullInfo;

//     }
//   })
// };


//============================

//the original work function:

// function getAllTheClients() {
//   fetch("http://localhost:3001/clients/2")
//     .then((theClientInfo) => theClientInfo.json())
//     .then((theClientInfoAsOBJ) => {
//       console.log(theClientInfoAsOBJ);

//       // Create the table
//       let tableHTML = `
//         <table id="clientInfoTable" border="1">
//           <tr>
//             <th>Client Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//       `;

//       // Add rows for each client
//       theClientInfoAsOBJ.forEach(client => {
//         tableHTML += `
//           <tr>
//             <td>${client.first_name} ${client.last_name}</td>
//             <td>${client.email}</td>
//             <td>${client.phone_number}</td>
//           </tr>
//         `;
//       });

//       // Close the table
//       tableHTML += `</table>`;

//       // Insert the table into the HTML
//       document.querySelector('#clientsFullInfo').innerHTML = tableHTML;
//     })
//     .catch((error) => {
//       console.error('Error fetching client info:', error);
//     });
// }

// === the end of it

function getAllTheClients() {
  let brand_id = document.querySelector('#searchBrandsClients').value;
  fetch(`http://localhost:3001/clients/${brand_id}`)
    .then((theClientInfo) => theClientInfo.json())
    .then((theClientInfoAsOBJ) => {
      console.log(theClientInfoAsOBJ);

      // Create the table
      let tableHTML = `
        <table id="clientInfoTable" border="1">
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
      `;

      // Add rows for each client
      theClientInfoAsOBJ.forEach(client => {
        tableHTML += `
          <tr>
            <td>${client.first_name} ${client.last_name}</td>
            <td>${client.email}</td>
            <td>${client.phone_number}</td>
          </tr>
        `;
      });

      // Close the table
      tableHTML += `</table>`;

      // Insert the table into the HTML
      document.querySelector('#clientsFullInfo').innerHTML = tableHTML;
    })
    .catch((error) => {
      console.error('Error fetching client info:', error);
    });
}

//========

function deleteAclient () {
let client_id = document.querySelector('#deleteClientForGood').value;
fetch(`http://localhost:3001/clients/deleteclients/${client_id}`,{method : "DELETE"})
.then((theClientInfo) => { return theClientInfo})
.then((theClientInfoAsObj) => {
    console.log("this is what i got from server: ", theClientInfoAsObj);
})
}

//=============

function displayClientDetailsById() {
  let client_id = document.querySelector("#clientIdToUpdate").value;
  fetch(`http://localhost:3001/clients/clientbyid/${client_id}`)
      .then((data) => { return data.json(); })
      .then((dataAsObj) => {
        console.log(dataAsObj);

          document.querySelector("#fNameToUpdate").value = dataAsObj[0].first_name;
          document.querySelector("#lNameToUpdate").value = dataAsObj[0].last_name;
          document.querySelector("#emailToUpdate").value = dataAsObj[0].email;
          document.querySelector("#phoneToUpdate").value = dataAsObj[0].phone_number;

      })
}

function updateClientFunction (){
  let client_id = document.querySelector("#clientIdToUpdate").value;
  let a = document.querySelector("#fNameToUpdate").value;
  let b = document.querySelector("#lNameToUpdate").value;
  let c = document.querySelector("#emailToUpdate").value;
  let d = document.querySelector("#phoneToUpdate").value;
  fetch(`http://localhost:3001/clients/updateclients/${client_id}`
    , {
      method: "PUT",
      body: JSON.stringify({ first_name: a, last_name: b, email: c,phone_number: d }),
      headers: {
          "Content-Type": "application/json",
      },
  })
  
  .then((response) => response.json())
  .then((updatedData) => {
    console.log('Client updated successfully:', updatedData);

      }) 
}

//========


// document.getElementById('getForm').addEventListener('submit', async function(event) {
//   event.preventDefault();
//   const brandId = document.getElementById('getBrandId').value;
//   const response = await fetch(`/clients/${brandId}`);
//   const result = await response.json();
//   document.getElementById('getResult').textContent = JSON.stringify(result, null, 2);
// });

// document.getElementById('postForm').addEventListener('submit', async function(event) {
//   event.preventDefault();
//   const brandId = document.getElementById('postBrandId').value;
//   const data = {
//       client_status: document.getElementById('postClientStatus').value,
//       first_name: document.getElementById('postFirstName').value,
//       last_name: document.getElementById('postLastName').value,
//       email: document.getElementById('postEmail').value,
//       phone_number: document.getElementById('postPhoneNumber').value,
//       client_id: document.getElementById('postClientId').value
//   };
//   const response = await fetch(`/postclient/${brandId}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//   });
//   const result = await response.json();
//   document.getElementById('postResult').textContent = JSON.stringify(result, null, 2);
// });

// document.getElementById('putForm').addEventListener('submit', async function(event) {
//   event.preventDefault();
//   const clientId = document.getElementById('putClientId').value;
//   const data = {
//       client_status: document.getElementById('putClientStatus').value,
//       first_name: document.getElementById('putFirstName').value,
//       last_name: document.getElementById('putLastName').value,
//       email: document.getElementById('putEmail').value,
//       phone_number: document.getElementById('putPhoneNumber').value
//   };
//   const response = await fetch(`/updateclients/${clientId}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//   });
//   const result = await response.json();
//   document.getElementById('putResult').textContent = JSON.stringify(result, null, 2);
// });

// document.getElementById('deleteForm').addEventListener('submit', async function(event) {
//   event.preventDefault();
//   const clientId = document.getElementById('deleteClientId').value;
//   const response = await fetch(`/deleteclients/${clientId}`, { method: 'DELETE' });
//   const result = await response.json();
//   document.getElementById('deleteResult').textContent = JSON.stringify(result, null, 2);
// });
//  //end of API FUNCTIONS






//last attempt aboveeeee


//fUNCTION TO UPDATE THE CONENT:


// function brokerInfo (brokerValue){
//   const brokerValue = document.querySelector("#brokerSearch").value;
//   for (i=0;i<allBrokers.length;i++)
//     {
//       if (allBrokers[i].companyName.toLowerCase() === brokerValue.toLowerCase()){
//         document.querySelector("#broStage").innerHTML = allBrokers[i].companyStage;
//         document.querySelector("#broName").innerHTML = allBrokers[i].companyName;
//         document.querySelector("#broLocation").innerHTML = allBrokers[i].location;
//         document.querySelector("#broInvCount").innerHTML = allBrokers[i].investorCount;
//         document.querySelector("#broFoundYear").innerHTML = allBrokers[i].foundedYear;
//         document.querySelector("#broInvestors").innerHTML = allBrokers[i].topInvestor;
//         document.querySelector("#broFund").innerHTML = allBrokers[i].totalFunding;
//         document.querySelector("#broLeadAmount").innerHTML = allBrokers[i].leadersAmount;
//         document.querySelector("#broFollAmount").innerHTML = allBrokers[i].followersAmount;
//         document.querySelector("#broDesc").innerHTML = allBrokers[i].description;

//       }
//     }
// }
// const broButton = document.querySelector("#brokerInfoButton");
// broButton.addEventListener("click",brokerInfo);






//ANOTHER TRY TO UPDATE THE CONENT:


// function brokerInfo () {
//   const brokerValue = document.querySelector("#brokerSearch").value.trim();
//   let brokerFound = false;

//   for (let i = 0; i < allBrokers.length; i++) {
//     if (allBrokers[i].companyName.toLowerCase() === brokerValue.toLowerCase()) {
//       document.querySelector("#broStage").innerHTML = allBrokers[i].companyStage;
//       document.querySelector("#broName").innerHTML = allBrokers[i].companyName;
//       document.querySelector("#broLocation").innerHTML = allBrokers[i].location;
//       document.querySelector("#broInvCount").innerHTML = allBrokers[i].investorCount;
//       document.querySelector("#broFoundYear").innerHTML = allBrokers[i].foundedYear;
//       document.querySelector("#broInvestors").innerHTML = allBrokers[i].topInvestor;
//       document.querySelector("#broFund").innerHTML = allBrokers[i].totalFunding;
//       document.querySelector("#broLeadAmount").innerHTML = allBrokers[i].leadersAmount;
//       document.querySelector("#broFollAmount").innerHTML = allBrokers[i].followersAmount;
//       document.querySelector("#broDesc").innerHTML = allBrokers[i].description;
//       document.querySelector("#broLogo").src = allBrokers[i].logo;

//       brokerFound = true;
//       break;
//     }
//   }

//   if (!brokerFound) {
//     alert('Broker not found');
//   }
// }

// const brokerButton = document.querySelector("#brokerInfoButton");
// brokerButton.addEventListener("click", brokerInfo);



//End of json for brokers info











// setTimeout (function(){
// const tryUS = document.querySelector('#tryUsButton');
// tryUS.addEventListener('click',tryUsFunction);

// function tryUsFunction (){
//   document.querySelector('#introductionDiv').innerHTML='<div id="registrationPOPup"><h4>Register and start improving your trading skills!</h4></div>';
// }}, 100);


