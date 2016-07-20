import {BaseStore} from 'fluxible/addons';

class HackathonStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.steps = {'start': 0, 'register': 0, 'store': 0, 'gift': 0};
        this.developerName = '';
    }
    startHackathon(payload) {
        this.steps.register = 0;
        this.steps.store = 0;
        this.steps.gift = 0;
        this.steps.start = {'msg': 'Haha! It is not that easy! No pain, no gain...', 'task': 'You need to take some actions first! do register yourself by finding and then calling the right action in this component.'};
        this.emitChange();
    }
    registerHackathon(payload) {
        this.steps.start = 0;
        this.steps.gift = 0;
        if(payload && payload.name){
            this.steps.register = {'msg': 'Good job '+payload.name+'! You are now registered as a potential developer on SlideWiki.', 'task': 'However, I still have no memory of what you did! Time to work on a store... Can you update the state of this component by setting your name?'};
            //we need to update the states when a change on component occurs, do you want to set the developerName here?
            
            //----------------------------------
            if(this.developerName){
                this.steps.store = {'msg': 'Great job '+this.developerName+'! I remember you now :) I just cannot find your prize.', 'task': 'Can you call my service to bring you the gift?'};
            }
        }else{
            this.steps.register = {'msg': 'Good enough job unknown dude! Since we did not receive your name, you are now registered as an unknown developer on SlideWiki.', 'task': 'If you want go back and pass the name parameter to your action or keep on as anonymous. Next task: I still have no memory of what you did! Time to work on a store... Can you update the state of this component by setting unknown as your name?'};
        }
        this.emitChange();
    }
    getGift(payload) {
        this.steps.register = 0;
        this.steps.start = 0;
        this.steps.store = 0;
        if(payload.badGuy && payload.badGuy.length > 3){
            this.steps.gift = {'msg': 'WoW! Congrats... You did it. Go to the following link to take your prize:', 'task':  payload.gift.url};
        }else{
            this.steps.gift = {'msg': 'You still have not reported the guy who broke our CI/CD last time! Sorry, without knowing hime no prize is given!', 'task': ''};
        }
        this.emitChange();
    }
    getState() {
        return {
            steps: this.steps,
            developerName: this.developerName
        };
    }
    dehydrate() {
        return this.getState();
    }
    rehydrate(state) {
        this.steps = state.steps;
        this.developerName = state.developerName;
    }
}

HackathonStore.storeName = 'HackathonStore';
HackathonStore.handlers = {
    'START_HACKATHON_SUCCESS': 'startHackathon',
    'REGISTER_HACKATHON_SUCCESS': 'registerHackathon',
    'GETGIFT_SUCCESS': 'getGift'
};

export default HackathonStore;
