const { default: axios } = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')

app.get("/api", (req, res) =>{
res.json({users: ["userOne", "userTwo", "userThree"]})
})
  
// Route to fetch data from an external API
app.get('/api/ex', async (req, res) => {
    try {
      // Replace with the external API URL you want to fetch data from
      const externalApiUrl = 'https://fantasy.premierleague.com/api/element-summary/310/';
      
      // Fetch data from the external API using axios
      console.log("hhhh")
      const response = await axios.get(externalApiUrl);
      console.log(response)
      
      // Send the fetched data back to the client
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from external API:', error.message);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

// route to fetch all players
app.get('/api/players', async (req, res) => {
    try {
      // Replace with the external API URL you want to fetch data from
      const externalApiUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/';
      
      // Fetch data from the external API using axios
      const response = await axios.get(externalApiUrl);
      
      // Send the fetched data back to the client
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from external API:', error.message);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

app.get('/api/:team_id/:current_gameweek', async (req, res) => {
    const team_id = parseInt(req.params.team_id);
    const current_gameweek = parseInt(req.params.current_gameweek);
    try{
        const fixturesUrl = "https://fantasy.premierleague.com/api/fixtures/"
        const fixturesResponse = await axios.get(fixturesUrl);
        fixtures = fixturesResponse.data;
        const externalApiUrl = 'https://fantasy.premierleague.com/api/entry/' + team_id + "/event/" + current_gameweek + "/picks/"
        const response = await axios.get(externalApiUrl);
        res.json(response.data)
    } catch(error){
        console.error('Error fectching data from external API:', error.message);
        res.status(500).json({error: "Failed to fetch data"})
    }
})
  
app.listen(5000, () => {console.log("Server started on port 5000")})


// OptanonConsent=consentId=330cd79f-9dfd-432d-b27b-c1945c574e3e&datestamp=Sun+Aug+25+2024+02%3A25%3A41+GMT-0700+(Pacific+Daylight+Time)&version=202302.1.0&interactionCount=2&isGpcEnabled=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=US%3BCA; _ga=GA1.2.876755052.1724571011; _ga_844XQSF4K8=GS1.1.1724577390.2.1.1724577941.43.0.0; _gid=GA1.2.309859032.1724577390; fdp-fingerprint=e83b34866166b0f367ed7c7e9b7c18d1; datadome=Wgm4f2UZ00qTQhZK_sWEUTDSYNVY3i441QJ4IMzSQA5Naqiwhgipn1ZDe6pjyPefy~mOmOyBzdeI9xQ~YxQEibhs1ziS7XGigQ53jznJQCrM_agWx_VXLhWFjRiANG0T; _cb=Cc6tmoBz238IDedfVB; _cb_svref=external; _chartbeat2=.1724577897866.1724577934761.1.BQ7KbsCcsgDn1FtPRS2gLMBtqL5Z.1; _dc_gtm_UA-33785302-1=1; _chartbeat5=280|134|%2Fhome|https%3A%2F%2Fwww.premierleague.com%2Ffantasy|Dp-y6QDODzkoBuJ6xBB_S1CIDys8FT||c|RxyHNDiRLJju9wQZBHui8BfwqK2|premierleague.com|; fdp-session=f0db4783-5e57-49ef-b1e5-6584c6c2311d; __eoi=ID=0198e69b3c52352c:T=1724577415:RT=1724577855:S=AA-Afjb3M5yDlWPF9DLkY4IyQrQu; __gads=ID=a4c442f5ca442f24:T=1724577415:RT=1724577855:S=ALNI_MackTo_-KCxYA1B7MHPzuO2mBgaOA; __gpi=UID=00000ed502bb401e:T=1724577415:RT=1724577855:S=ALNI_MYblPP0YRJ2lsFSclRG3A87b7IchQ; OptanonAlertBoxClosed=2024-08-25T09:17:05.873Z; csrftoken=KkYSElVVFGWJvybZQcQWZKILkGeaISwd; sessionid=.eJxVy7sKAjEQheF3SS1LMpkko529oLBYh1xmiLjI4rqV-O5mOy0P3_nfKqb11eK68DPeqjooDEBaE6rdL-VU7vzYfJ5knoZNhsvp2m0Zx_Oxz_-gpaX1dwbO2RbQzGAEyWIJgpkI0AiLr8UQ4j57GwwUzU7IueBBegJSi_p8AQmUMy8:1si9Mu:KcoTbOFpbPiPWvLgzih1tK3pv3jTGvmXF-lLz1xMcLA; pl_profile="eyJzIjogIld6SXNORGN5T0RBd09EUmQ6MXNpOU1zOkJaNkZqWjN2X1VsejRyZFhFNnl2dmdGYVJOdlJoMHd0UmtlUzZLaDNNTDAiLCAidSI6IHsiaWQiOiA0NzI4MDA4NCwgImZuIjogIkFiZHVsIFJhdWYiLCAibG4iOiAiQWJkdWwgS2FyaW0iLCAiZmMiOiAxfX0="