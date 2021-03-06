import {shortTitle} from '../../../configs/general';
export default function loadContentDiscussion(context, payload, done) {
    context.service.read('discussion.list', payload, {timeout: 20 * 1000}, (err, res) => {
        if (err) {
            context.dispatch('LOAD_CONTENT_DISCUSSION_FAILURE', err);
        } else {
            context.dispatch('LOAD_CONTENT_DISCUSSION_SUCCESS', res);
            context.dispatch('UPDATE_ACTIVITY_TYPE_SUCCESS', {activityType: 'discussion'});
        }
        let pageTitle = shortTitle + ' | Content Discussion | ' + payload.params.stype + ' | ' + payload.params.sid;
        context.dispatch('UPDATE_PAGE_TITLE', {
            pageTitle: pageTitle
        });
        done();
    });
}
