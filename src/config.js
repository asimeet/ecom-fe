const config = {
    PDP_BASEURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5001': process.env.REACT_APP_PDP_BASEURL,
    PDP_API_KEY: process.env.NODE_ENV === 'development' ? 'ext-ecom-002': process.env.REACT_APP_PDP_API_KEY
}

export default config;