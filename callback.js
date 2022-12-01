// Using async/await with Fetch
// let url = "https://www.fishwatch.gov/api/species"

const FishFunction = async (idx) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log("error")
    } 
}
// FishFunction()

// Using async/await with axios

const FishFunctionAxios = async () => {
    try {
        const response = await axios.get(url)
        console.log(response.data)

    } catch (error) {
        console.log("Error")
    }
}

// FishFunctionAxios()

// $.getJSON(url).then(data => console.log(data))