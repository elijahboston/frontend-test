const axios = require('axios');

// Lambda that acts as a GraphQL proxy
exports.handler = function(event, context, callback) {

  // Handle response
  const res = (body, status=200) => {
    console.log('Response:', status, body);
    callback(null, {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: status,
      body: JSON.stringify(body)
    });
  }

  const post = () => {
    // Get env var values defined in our Netlify site
    const { API_TOKEN, API_URL } = process.env;
    
    console.log('API URL:', API_URL);
    console.log('Event Body:', event.body);
  
    axios.post(API_URL, event.body, {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    .then((response) =>
      {
        console.log(response.data);
        res(response.data);
      }
    )
    .catch(err => res(err, 500))
  }

  if(event.httpMethod === 'POST'){
    post()
  };
};