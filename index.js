fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      document.getElementById('my-ip').textContent = 
        `Your public IP address is: ${ipAddress}`
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
    });