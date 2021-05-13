import axios from 'axios';

import * as Config from '../constants/config';

export default function callApi(endpoint, method='GET',body){
    return axios({
        url:`${Config.API_URL}/${endpoint}`,
        method: method,
        data:body,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: 'mySecret',
            'content-type': 'multipart/form-data'
          },
    }).catch(err=>{
        console.log(err);
    })
}
