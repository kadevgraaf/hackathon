export default {
    name: 'discussion',
    // At least one of the CRUD methods is Required
    read: (req, resource, params, config, callback) => {
        let args = params.params? params.params : params;
        let selector= {'id': args.id, 'spath': args.spath, 'sid': args.sid, 'stype': args.stype, 'mode': args.mode};
        if(resource === 'discussion.list'){
            /*********connect to microservices*************/
            //todo
            /*********received data from microservices*************/
            let discussion = [
                {'id': 12, 'title': 'title for question 1', 'Date': 'Yesterday'},
                {'id': 35, 'title': 'title for question 2', 'Date': '2 hours ago'}
            ];
            callback(null, {discussion: discussion, selector: selector});
        }
    }
    // other methods
    // create: (req, resource, params, body, config, callback) => {},
    // update: (req, resource, params, body, config, callback) => {}
    // delete: (req, resource, params, config, callback) => {}
};