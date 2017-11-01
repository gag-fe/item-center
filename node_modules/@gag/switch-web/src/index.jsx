import React from 'react';
import '../style';
import RcSwitch from 'rc-switch';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Switch extends React.Component{
  static propTypes = {
    prefixCls: PropTypes.string,
    // HACK: https://github.com/ant-design/ant-design/issues/5368
    // size=default and size=large are the same
    size: PropTypes.oneOf(['small', 'default', 'large']),
    className: PropTypes.string,
  };

  render() {
    const { prefixCls, size, className = '' } = this.props;
    const classes = classNames(className, {
      [`${prefixCls}-small`]: size === 'small',
    });
    return <RcSwitch {...this.props} className={classes} />;
  }
}
Switch.defaultProps = {
    prefixCls: 'ant-switch',
};
Switch.propTypes = {
  prefixCls: PropTypes.string,
  size:PropTypes.oneOf(['small','default']),
  className: PropTypes.string,
  checked:PropTypes.bool,
  defaultChecked:PropTypes.bool,
  onChange:PropTypes.func,
  checkedChildren: PropTypes.node,
  unCheckedChildren: PropTypes.node,
  disabled:PropTypes.bool,
};
Switch.displayName = "Switch";
module.exports=Switch;
