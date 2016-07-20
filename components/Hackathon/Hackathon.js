import React from 'react';
import {connectToStores} from 'fluxible-addons-react';
import HackathonStore from '../../stores/HackathonStore';
import giveMyPrize from '../../actions/giveMyPrize';

class Hackathon extends React.Component {
    //this calls the right action when clicked on the button
    handleButtonClick() {
        this.context.executeAction(giveMyPrize, {});
    }
    render() {
        let addition = '';
        if(this.props.HackathonStore.steps.gift){
            addition='postfix';
        }
        return (
            <div className="ui page grid" ref="hackathon">
                <div className="ui row">
                    <div className="column">
                        <div className="ui content">
                            <h2 className="ui header">Welcome to the SlideWiki Hackathon...</h2>
                            <p>
                                We hope you have had a nice <i title="travel" className="ui big plane orange icon animated wobble"></i><i title="travel" className="ui big road orange icon animated wobble"></i><i title="travel" className="ui big travel orange icon animated wobble"></i> to <b className="animated bounce"> A m s t e r d a m </b>!
                            </p>
                            <p>
                               Are you a developer? <br/>
                           {this.props.HackathonStore.steps.start ? <a className="ui circular primary button" onClick={this.handleButtonClick.bind(this)}> Do Register me! </a>: (this.props.HackathonStore.steps.register ? <a className="ui circular button" onClick={this.handleButtonClick.bind(this)}><i className="ui diamond icon"></i> Remember me! </a> : <a className="ui circular button" onClick={this.handleButtonClick.bind(this)}><i className="ui diamond icon"></i> Yes, give me my prize!</a>)}
                            </p>

                            <div>
                                {this.props.HackathonStore.steps.start ? <div className="ui warning animated flash message"><i className="warning circle icon"></i>{this.props.HackathonStore.steps.start.msg} <br/>  {this.props.HackathonStore.steps.start.task}</div> :''}
                            </div>
                            <div>
                                {this.props.HackathonStore.steps.register && !this.props.HackathonStore.steps.store ? <div className="ui success animated flash message"><i className="checkmark box icon"></i>{this.props.HackathonStore.steps.register.msg} <br/>  {this.props.HackathonStore.steps.register.task}</div> :''}
                            </div>
                            <div>
                                {this.props.HackathonStore.steps.store ? <div className="ui success animated flash message"><i className="checkmark circle icon"></i>{this.props.HackathonStore.steps.store.msg} <br/>  {this.props.HackathonStore.steps.store.task}</div> :''}
                            </div>
                            <div>
                                {this.props.HackathonStore.steps.gift ? <div className="ui success animated flash message"><i className="checkmark circle icon"></i>{this.props.HackathonStore.steps.gift.msg} <br/><a href={this.props.HackathonStore.steps.gift.task + ''+ addition}>{this.props.HackathonStore.steps.gift.task + '' + addition}</a></div> :''}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Hackathon.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
Hackathon = connectToStores(Hackathon, [HackathonStore], (context, props) => {
    return {
        HackathonStore: context.getStore(HackathonStore).getState()
    };
});
export default Hackathon;
