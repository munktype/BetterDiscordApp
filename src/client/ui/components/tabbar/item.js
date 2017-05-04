/**
 * BetterDiscord Tab Bar Item Component
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
 */

'use strict';

const { React } = require('../../../vendor');
import { Component } from 'React';

class CTabBarItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
		let { selected, text } = this.props;
        return (
			<div className={`ui-tab-bar-item${selected ? ' selected' : ''}`} onClick={this.props.onClick}>{text}</div>
		);
    }

}

export default CTabBarItem;