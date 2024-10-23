const subDomains = ['naedist', 'eudist', 'nawdist']
const domain = ['animemusicquiz.com']
const protocol = 'https'


// Planned to add support for fetching from optimal location

const fetchMP3 = async (path) => {
  const url = `${protocol}://${subDomains[1]}.${domain}/${path}`
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    return await response.blob()
  } catch(e) {
    console.error(`Error fetching file: ${e}`)
  }
} 

export default fetchMP3