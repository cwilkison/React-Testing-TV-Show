import axios from 'axios';

const fetchShow = () => {
    return axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(res => {
            return res
        })
        .catch(err => {
            console.log("error in api", err);
            return err;
        });
    };

export default fetchShow;


        // .catch(err => {
        //     console.log("error fetching api", err.message)
        //     return err;
        // })

