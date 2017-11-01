import React from 'react';
import {Link} from 'react-router';
import Menu from '@gag/menu-web';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
import Utils from '../../utils/index';
const isEmptyObject = Utils.common.isEmptyObject;
class Navi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: this.props.currentPathname,
      defaultOpenKeys: this.props.defaultOpenKeys || [],
      mode: this.props.mode || 'inline',
      collapsed: false
    };
  }

  hasVisibleChildren(menu) {
    let has = false;
    if (menu.children && menu.children.length) {
      // 只要有一个节点的visible不为false，has就为true
      has = !menu.children.every((item) => {
        return item.visible === false;
      });
    }
    return has;
  }

  targetUrl(url, ev) {
    ev.nativeEvent.stopImmediatePropagation();
    window.location.href = url;
    //window.history.pushState({},'xx', url);
    //return false;
  }

  generateMenuDom(menus, path) {
    const menuDoms = [];
    menus = menus || this.props.menus;
    path = path || '';

    menus.map((item) => {
      let href = item.key.length ? (`${path}/${item.key}`) : path;
      const toObj = {
        pathname: href
      };

      if (item.visible != false) {
        if (this.hasVisibleChildren(item)) {
          if (item.icon && item.icon !== '') {
            menuDoms.push(
              <SubMenu key={item.key} title={<span>{item.icon}<span className="nav-text">{item.title}</span></span>}>
                {this.generateMenuDom(item.children, href)}
              </SubMenu>
            );
          } else {
            menuDoms.push(
              <SubMenu key={item.key} title={item.title}>
                {this.generateMenuDom(item.children, href)}
              </SubMenu>
            );
          }
        } else {
          if (item.icon && item.icon !== '') {
            menuDoms.push(
              <Item key={item.key}>
                  <span className="nav-text">
                    <Link title={item.title} to={toObj}>{item.title}</Link>
                  </span>
              </Item>
            );
          }
        }
      }
    });

    return menuDoms;
  }

  handleClick(e, key) {
    let currentArr = [];
    key = e.key;
    currentArr.push(key);
    this.setState({
      current: currentArr
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentPathname != nextProps.currentPathname || this.props.mode != nextProps.mode) {
      this.setState({
        current: nextProps.currentPathname,
        mode: nextProps.mode,
        defaultOpenKeys: nextProps.defaultOpenKeys,
        collapsed: nextProps.collapsed
      });
    }
  }

  render() {
    console.log(this.state);
    if (isEmptyObject(this.props.funcAuthoritiesObj)) {
      return false;
    }
    return (
      <Menu theme={this.props.theme} mode={this.state.mode}
            defaultOpenKeys={this.state.defaultOpenKeys}
            openKeys={this.state.defaultOpenKeys}
            onClick={this.handleClick.bind(this)}
            selectedKeys={this.state.current}
            inlineCollapsed={this.state.collapsed}
      >

        {this.generateMenuDom()}
      </Menu>);
  }
}

module.exports = Navi;
