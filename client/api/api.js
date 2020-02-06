import request from 'superagent'

const goatUrl = '/200/200'

//export functions independently

export function getGoat(){
    return request
    .get(goatUrl)
    .then(res => res.body)
}