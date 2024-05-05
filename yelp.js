import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer FNuEmBWoiTV0UTF1sR26Ytdzn38dEvhm3XPtFUh9NDxNCaZrU1ZXMFL-AWULY-7zYSOP5cVwQZNbzUyz4EYS6UupxlWXsmDMyxBxo_uIA5XPqoiJgjcuYJk_rn4YZnYx',
    },
    
});

