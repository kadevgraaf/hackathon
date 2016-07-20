export default function getGiftFromTheService(context, payload, done) {
    context.service.read('hackathon.gift', payload, {}, (err, res) => {
        //you need to dispatch the right msg
        context.dispatch('WHAT_SUCCESS', res);
        done();
    });
}
