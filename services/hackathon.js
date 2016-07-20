export default {
    name: 'hackathon',
    // At least one of the CRUD methods is Required
    read: (req, resource, params, config, callback) => {
        if(resource === 'hackathon.gift'){
            /*********connect to microservices*************/
            //todo
            /*********received data from microservices*************/
            //do you know the name of the person who broke the system last time by doing a wrong commit?
            let badGuy = 'ali khalili';
            let gift = {'id': 122, 'url': 'http://test.com'};
            callback(null, {gift: gift, badGuy: badGuy});

        }else if (resource === 'hackathon.fake'){
            let gift = {'id': 0, 'url': 'not the correct service',};
            callback(null, {gift: gift});
        }
    }
    // other methods
    // create: (req, resource, params, body, config, callback) => {},
    // update: (req, resource, params, body, config, callback) => {}
    // delete: (req, resource, params, config, callback) => {}
};
