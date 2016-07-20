export default function registerMeAsADeveloper(context, payload, done) {
    context.dispatch('REGISTER_HACKATHON_SUCCESS', payload);
    done();
}
