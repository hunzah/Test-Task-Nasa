
const settings = {
    baseURL: 'https://api.nasa.gov/neo/rest/v1/feed',
    withCredentials: true,
    headers: {
        'API-KEY': '6d618c5c-24f1-48e7-9694-a9a2e7863199'
    }
}




export const getAsteroidsData = async ():Promise<any> => {
    debugger
    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2018-09-08&6d618c5c-24f1-48e7-9694-a9a2e7863199`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
