import React from 'react';
import Icon from '@gag/icon-web';

// modules
//报警类型
import Item from '../modules/item/index';

const menus = [{
  key: 'item',
  title: '商品管理页面',
  component: Item,
  icon: <Icon type="setting" />
}];

export default menus;
