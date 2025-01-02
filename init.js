// Function to fetch the user's IP address
async function fetchIPAddress() {
  const ipContainer = document.getElementById("ipContainer");

  try {
    // Fetch IP address from the API
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) {
      throw new Error("Failed to fetch IP address.");
    }

    // Parse the response
    const data = await response.json();
    const ipAddress = data.ip;

    // Display the IP address
    ipContainer.innerHTML = `<h2>Your Public IP Address:</h2><p>${ipAddress}</p>`;
  } catch (error) {
    // Handle errors
    console.error("Error fetching IP address:", error);
    ipContainer.innerHTML = `<p>Error fetching your IP address. Please try again later.</p>`;
  }
}

// Call the function to fetch the IP address
fetchIPAddress();
