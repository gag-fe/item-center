import '../style';
import React from 'react';
import PropTypes from 'prop-types';
import RcSelect, { Option, OptGroup } from 'rc-select';
import classNames from 'classnames';
import warning from '@gag/util-web/warning';
const SelectContext=PropTypes.shape({
      antLocale:PropTypes.shape({
        Select: PropTypes.any,
      })
    });


// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

class Select extends React.Component{
  static Option = Option;
  static OptGroup = OptGroup;

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(['default', 'large', 'small']),
    combobox: PropTypes.bool,
    notFoundContent: PropTypes.any,
    showSearch: PropTypes.bool,
    optionLabelProp: PropTypes.string,
    transitionName: PropTypes.string,
    choiceTransitionName: PropTypes.string,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  context: SelectContext;

  getLocale() {
    const { antLocale } = this.context;
    if (antLocale && antLocale.Select) {
      return antLocale.Select;
    }
    return {
      notFoundContent: '无匹配结果',
    };
  }

  render() {
    const {
      prefixCls,
      className = '',
      size,
      mode,
      // @deprecated
      multiple,
      tags,
      combobox,
      ...restProps,
    } = this.props;
    warning(
      !multiple && !tags && !combobox,
      '`Select[multiple|tags|combobox]` is deprecated, please use `Select[mode]` instead.',
    );

    const cls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
    }, className);

    const locale = this.getLocale();
    let { notFoundContent = locale.notFoundContent, optionLabelProp } = this.props;
    const isCombobox = mode === 'combobox' || combobox;
    if (isCombobox) {
      notFoundContent = null;
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }

    const modeConfig = {
      multiple: mode === 'multiple' || multiple,
      tags: mode === 'tags' || tags,
      combobox: isCombobox,
    };

    return (
      <RcSelect
        {...restProps}
        {...modeConfig}
        prefixCls={prefixCls}
        className={cls}
        optionLabelProp={optionLabelProp || 'children'}
        notFoundContent={notFoundContent}
      />
    );
  }
}
Select.defaultProps = {
  prefixCls: 'ant-select',
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom',
};
Select.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([ 'default','large','small']),
  notFoundContent: PropTypes.node,
  transitionName: PropTypes.string,
  choiceTransitionName: PropTypes.string,
  showSearch: PropTypes.bool,
  allowClear: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,

  value: PropTypes.any,
  defaultValue: PropTypes.any,
  mode: PropTypes.oneOf([ 'default','multiple','tags','combobox']),
  multiple: PropTypes.bool,
  tags: PropTypes.bool,
  combobox: PropTypes.bool,
  optionLabelProp: PropTypes.string,
  dropdownClassName:PropTypes.string,
  filterOption:PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
    ]),
  onChange:PropTypes.func,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onSearch: PropTypes.func,
  dropdownMatchSelectWidth: PropTypes.bool,
  optionFilterProp: PropTypes.string,
  defaultActiveFirstOption: PropTypes.bool,
  labelInValue: PropTypes.bool,
  getPopupContainer:PropTypes.func,
  tokenSeparators: PropTypes.arrayOf(PropTypes.string),
  getInputElement: PropTypes.func,
};
Select.displayName = "Select";
module.exports=Select;
