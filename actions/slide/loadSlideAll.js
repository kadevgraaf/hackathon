import {shortTitle} from '../../configs/general';
export default function loadSlideAll(context, payload, done) {
    context.service.read('slide.all', payload, {timeout: 20 * 1000}, (err, res) => {
        if (err) {
            context.dispatch('LOAD_SLIDE_ALL_FAILURE', err);
        } else {
            context.dispatch('LOAD_SLIDE_ALL_SUCCESS', res);
        }
        //let pageTitle = shortTitle + ' | Slide View | ' + payload.params.sid;
        let pageTitle = shortTitle + ' | Slide View | ';
        context.dispatch('UPDATE_PAGE_TITLE', {
            pageTitle: pageTitle
        });
        done();
    });
}
