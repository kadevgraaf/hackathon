import React from 'react';
import { NavLink } from 'fluxible-router';
import {connectToStores} from 'fluxible-addons-react';
import UserNotificationsStore from '../../../stores/UserNotificationsStore';
import UserNotificationsItem from './UserNotificationsItem';
import loadNewUserNotifications from '../../../actions/user/loadNewUserNotifications';

class UserNotificationsBadge extends React.Component {
    componentDidMount() {
        this.context.executeAction(loadNewUserNotifications, {
            uid: 1//TODO get real user_id
        });
        this.enablePopup();
    }
    componentDidUpdate(){
        this.enablePopup();
    }
    enablePopup() {
        let notificationsBadge = this.refs.notificationsBadge;
        const visible = (this.props.UserNotificationsStore.newNotifications.length > 0);
        if (visible) {
            $(notificationsBadge).popup({
                inline   : true,
                hoverable: true,
                on: 'hover',
                position : 'bottom left',
                delay: {
                    show: 300,
                    hide: 300
                }
            });
        }
    }

    removePopupIfNeeded() {
        let notificationsBadge = this.refs.notificationsBadge;
        const visible = (this.props.UserNotificationsStore.newNotifications.length > 0);
        if (!visible) {
            $(notificationsBadge).popup('destroy');
        }
    }

    hidePopup() {
        let notificationsBadge = this.refs.notificationsBadge;
        $(notificationsBadge).popup('hide');
        return true;
    }

    render() {
        const selector = this.props.selector;

        let noNewNotificationsMessage = '';
        if (this.props.UserNotificationsStore.newNotifications.length === 0) {
            noNewNotificationsMessage = (<span><i className="ui big check circle outline icon" />There is no new notifications.</span>);
        }
        const newNotifications = this.props.UserNotificationsStore.newNotifications;
        const list = newNotifications.map((notification, index) => {
            return (
                <UserNotificationsItem notification={notification} key={index} selector={selector} />
            );
        });

        return (
          <div onMouseOver={this.removePopupIfNeeded.bind(this)}>
              <div ref="notificationsBadge" onClick={this.hidePopup.bind(this)}>
                  <NavLink className="item right" routeName="notifications" navParams={{uid:1}} activeClass="active">
                      <i className="large icons">
                        <i className="newspaper icon"></i>
                        {this.props.UserNotificationsStore.newNotifications.length ? <span className="ui mini floating red label ">{this.props.UserNotificationsStore.newNotifications.length}</span> : ''}
                      </i>
                  </NavLink>
              </div>
              <div id="popup" className="ui special flowing popup">
                  <h5>Notifications</h5>
                  <div ref="userNotificationsList">
                      <div className="ui relaxed divided list">
                          {list}
                      </div>
                      <div >
                          {noNewNotificationsMessage}
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

UserNotificationsBadge.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
UserNotificationsBadge = connectToStores(UserNotificationsBadge, [UserNotificationsStore], (context, props) => {
    return {
        UserNotificationsStore: context.getStore(UserNotificationsStore).getState()
    };
});
export default UserNotificationsBadge;
