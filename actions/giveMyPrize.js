export default function giveMyPrize(context, payload, done) {
    context.dispatch('START_HACKATHON_SUCCESS', {});
    done();
}
