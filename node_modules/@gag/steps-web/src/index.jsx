import '../style';
import React from 'react';
import PropTypes from 'prop-types';
import RcSteps from 'rc-steps';

class Steps extends React.Component {
  static Step = RcSteps.Step;

  static propTypes = {
    prefixCls: PropTypes.string,
    iconPrefix: PropTypes.string,
    current: PropTypes.number,
  };

  render() {
    return (
      <RcSteps {...this.props} />
    );
  }
}
Steps.defaultProps = {
  prefixCls: 'ant-steps',
  iconPrefix: 'ant',
  current: 0,
};
Steps.propTypes = {
  prefixCls: PropTypes.string,
  iconPrefix: PropTypes.string,
  current:PropTypes.number,
  status: PropTypes.oneOf([ 'wait','process','finish','error']),
  size: PropTypes.oneOf(['default','small']),
  direction: PropTypes.oneOf([ 'horizontal','vertical']),
  progressDot: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
    ]),
};
Steps.displayName = "Steps";
module.exports=Steps;
