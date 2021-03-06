//general app config
import {shortTitle, fullTitle} from '../configs/general';
//list of actions
import loadContent from '../actions/loadContent';
import loadContributors from '../actions/loadContributors';
import loadSearchResults from '../actions/search/loadSearchResults';
import loadAdvancedSearchResults from '../actions/search/updateUserResultsVisibility';
import loadDeck from '../actions/loadDeck';
import loadSlideView from '../actions/slide/loadSlideView';
import loadSlideEdit from '../actions/slide/loadSlideEdit';
import loadDeckView from '../actions/loadDeckView';
import loadDeckEdit from '../actions/loadDeckEdit';
import loadDataSources from '../actions/datasource/loadDataSources';
import loadActivities from '../actions/activityfeed/loadActivities';
import loadUserNotifications from '../actions/user/loadUserNotifications';
import loadDeckTree from '../actions/decktree/loadDeckTree';
import loadTranslations from '../actions/loadTranslations';
import loadContentHistory from '../actions/loadContentHistory';
import loadContentUsage from '../actions/loadContentUsage';
import loadContentQuestions from '../actions/loadContentQuestions';
import loadContentDiscussion from '../actions/activityfeed/contentdiscussion/loadContentDiscussion';
import loadSimilarContents from '../actions/loadSimilarContents';
import loadTabLinks from '../actions/loadTabLinks';
import loadImportFile from '../actions/loadImportFile';
import loadPresentation from '../actions/loadPresentation';

export default {
    //-----------------------------------HomePage routes------------------------------
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'SlideWiki -- Home',
        handler: require('../components/Home/Home'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: fullTitle
            });
            done();
        }
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'SlideWiki -- About',
        handler: require('../components/Home/About'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: shortTitle + ' | About'
            });
            done();
        }
    },
    import: {
        path: '/import',
        method: 'get',
        page: 'import',
        title: 'SlideWiki -- Import presentation',
        handler: require('../components/Import/Import'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: shortTitle + ' | Import presentation'
            });
            done();
        }
    },
    notifications: {
        path: '/notifications',
        method: 'get',
        page: 'notifications',
        title: 'SlideWiki -- User notifications',
        handler: require('../components/User/UserNotificationsPanel/UserNotificationsPanel'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: shortTitle + ' | User notifications'
            });
            done();
        }
    },

//-----------------------------------Search routes------------------------------
    searchresults: {
        path: '/search/:searchstatus/:searchstring?/:entity?/:searchlang?',
        method: 'get',
        page: 'search',
        title: 'SlideWiki -- Search',
        handler: require('../components/Search/SearchResultsPanel/SearchPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadSearchResults, payload, done);
        }
    },



    //-----------------------------------DeckPage routes------------------------------
    // selector {id: 'id of parent deck', stype: 'type of selected content e.g. slide, deck or question', sid: 'id of selected content', spath: 'path of the content in deck tree, separated by semi-colon and colon for its position e.g. 67:3;45:1;45:4', mode: 'interaction mode e.g. view or edit'}
    deck: {
        path: '/deck/:id/:stype?/:sid?/:spath?/:mode?',
        method: 'get',
        page: 'deck',
        handler: require('../components/Deck/Deck'),
        action: (context, payload, done) => {
            context.executeAction(loadDeck, payload, done);
        }
    },
    contributors: {
        path: '/contributors/:stype/:sid',
        method: 'get',
        page: 'contributors',
        handler: require('../components/Deck/ContributorsPanel/ContributorsPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadContributors, payload, done);
        }
    },
    similarcontent: {
        path: '/similarcontent/:stype/:sid',
        method: 'get',
        page: 'similarcontent',
        handler: require('../components/Deck/SimilarContentPanel/SimilarContentPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadSimilarContents, payload, done);
        }
    },
    content: {
        path: '/content/:stype/:sid/:mode?',
        method: 'get',
        page: 'content',
        handler: require('../components/Deck/ContentPanel/ContentPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadContent, payload, done);
        }
    },
    slideview: {
        path: '/slideview/:sid',
        method: 'get',
        page: 'slideview',
        handler: require('../components/Deck/ContentPanel/SlideModes/SlideViewPanel/SlideViewPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadSlideView, payload, done);
        }
    },
    slideedit: {
        path: '/slideedit/:sid',
        method: 'get',
        page: 'slideedit',
        handler: require('../components/Deck/ContentPanel/SlideModes/SlideEditPanel/SlideEditPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadSlideEdit, payload, done);
        }
    },
    deckview: {
        path: '/deckview/:sid',
        method: 'get',
        page: 'deckview',
        handler: require('../components/Deck/ContentPanel/DeckModes/DeckViewPanel/DeckViewPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadDeckView, payload, done);
        }
    },
    deckedit: {
        path: '/deckedit/:sid',
        method: 'get',
        page: 'deckedit',
        handler: require('../components/Deck/ContentPanel/DeckModes/DeckEditPanel/DeckEditPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadDeckEdit, payload, done);
        }
    },
    datasource: {
        path: '/datasource/:stype/:sid',
        method: 'get',
        page: 'datasources',
        handler: require('../components/Deck/DataSourcePanel/DataSourcePanel'),
        action: (context, payload, done) => {
            context.executeAction(loadDataSources, payload, done);
        }
    },
    activities: {
        path: '/activities/:stype/:sid',
        method: 'get',
        page: 'activities',
        handler: require('../components/Deck/ActivityFeedPanel/ActivityFeedPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadActivities, payload, done);
        }
    },
    translations: {
        path: '/translations/:stype/:sid',
        method: 'get',
        page: 'translations',
        handler: require('../components/Deck/TranslationPanel/TranslationPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadTranslations, payload, done);
        }
    },
    history: {
        path: '/history/:stype/:sid',
        method: 'get',
        page: 'history',
        handler: require('../components/Deck/ActivityFeedPanel/ContentHistoryPanel/ContentHistoryPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadContentHistory, payload, done);
        }
    },
    usage: {
        path: '/usage/:stype/:sid',
        method: 'get',
        page: 'usage',
        handler: require('../components/Deck/ActivityFeedPanel/ContentUsagePanel/ContentUsagePanel'),
        action: (context, payload, done) => {
            context.executeAction(loadContentUsage, payload, done);
        }
    },
    questions: {
        path: '/questions/:stype/:sid',
        method: 'get',
        page: 'questions',
        handler: require('../components/Deck/ContentPanel/ContentQuestionsPanel/ContentQuestionsPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadContentQuestions, payload, done);
        }
    },
    discussion: {
        path: '/discussion/:stype/:sid',
        method: 'get',
        page: 'discussion',
        handler: require('../components/Deck/ActivityFeedPanel/ContentDiscussionPanel/ContentDiscussionPanel'),
        action: (context, payload, done) => {
            context.executeAction(loadContentDiscussion, payload, done);
        }
    },
    decktree: {
        path: '/decktree/:id/:spath?',
        method: 'get',
        page: 'decktree',
        handler: require('../components/Deck/TreePanel/TreePanel'),
        action: (context, payload, done) => {
            context.executeAction(loadDeckTree, payload, done);
        }
    },
    contentmode: {
        path: '/contentmode/:stype/:sid/:mode?',// '/contentmode/:stype/:sid/:spath?/:mode?',
        method: 'get',
        page: 'contentmode',
        handler: require('../components/Deck/ContentPanel/ContentModeMenu/ContentModeMenu'),
        action: (context, payload, done) => {
            context.executeAction(loadTabLinks, payload, done);
        }
    },
    presentation: {
        path: '/presentation/:id/',
        method: 'get',
        page: 'presentation',
        handler: require('../components/Deck/Presentation/Presentation'),
        action: (context, payload, done) => {
            context.executeAction(loadDeckTree, payload, done);
            //context.executeAction(loadPresentation, payload, done);
            context.executeAction(loadDeck, payload, done);
        }
    },
    hackathon: {
        path: '/hackathon',
        method: 'get',
        page: 'hackathon',
        
        handler: require('../components/Hackathon/Hackathon'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: fullTitle + '--> Hackathon'
            });
            done();
        }

    }
};
