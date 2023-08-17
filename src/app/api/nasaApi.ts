const settings = {
    baseURL: 'https://api.nasa.gov/neo/rest/v1/feed',
    withCredentials: true,
    apiKey: 'ewEjeYg1fSccJrOFjFKQ0n09geNidFYqa6btKU43'

}

const startDate = '2015-09-07';
const endDate = '2015-09-12';

const apiUrl = `${settings.baseURL}?start_date=${startDate}&end_date=${endDate}&api_key=${settings.apiKey}`;

export async function getAsteroidsData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}