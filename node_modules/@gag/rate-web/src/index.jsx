import '../style';
import React from 'react';
import PropTypes from 'prop-types';
import RcRate from 'rc-rate';
import Icon from '@gag/icon-web';

class Rate extends React.Component {
  render() {
    return <RcRate {...this.props} />;
  }
}
Rate.defaultProps = {
  prefixCls: 'ant-rate',
  character: <Icon type="star" />,
};
Rate.propTypes = {
  prefixCls: PropTypes.string,
  count: PropTypes.number,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  allowHalf: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onHoverChange:PropTypes.func,
  character:PropTypes.node,
  className: PropTypes.string,
};
Rate.displayName = "Rate";
module.exports=Rate;
