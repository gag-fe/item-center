import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Row from '@gag/row-web';
import Col from '@gag/col-web';
import RuleList from './components/ruleList';
import RuleParams from './components/ruleParams';
import DefaultRuleList from './components/defaultRuleList';
import TableList from './components/tableList';
import SearchBar from './components/searchBar';
import DefaultRuleParams from './components/defaultRuleParams';
import * as ConfigActions from '../../actions/item.js';

class ConfigList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 20,
      pageIndex: 1,
      total: 20,
      format: '',
      ruleStatus: 'all',
      shopEntityName: '',
      shopId:'',
      shopName: '',
      storey: '',
      updateAtFrom: '',
      updateAtTo:'',
      updateBy: ''
    };
  }

  componentDidMount(){
    let resetData = {
      pageSize: 20,
      pageIndex: 1,
      total: 20,
      format: '',
      ruleStatus: 'all',
      shopEntityName: '',
      shopId:'',
      shopName: '',
      storey: '',
      updateAtFrom: '',
      updateAtTo:'',
      updateBy: ''
    };

    this.props.setConfigSeachParams(resetData);
    this.props.getConfigList();
  }

  render() {
    const props = this.props;
    return (<div className="content-page">
			<Row>
				<Col>
          <div className="wrapper-box util-clearfix">
            <SearchBar {...props}></SearchBar>
          </div>
				</Col>
			</Row>
			<Row>
				<Col>
          <div className="wrapper-box util-clearfix">
            <TableList {...props}/>
          </div>
          <div>
              <RuleList {...props}></RuleList>
              <DefaultRuleList {...props}></DefaultRuleList>
              <RuleParams {...props}></RuleParams>
              <DefaultRuleParams {...props}></DefaultRuleParams>

          </div>
        </Col>
			</Row>
		</div>);
  }
};
ConfigList.defaultProps = {
  loading: false,
  visible: false,
  visibleParams: false,
  rows: [],
  editor: {
    ruleParams: []
  },
  editorAll:{
      ruleParams: []
  },
  seachParams: {
    pageSize: 20,
    pageIndex: 1,
    total: 50,
    format: '',
    ruleStatus: 'all',
    shopEntityName: '',
    shopId:'',
    shopName: '',
    storey: '',
    updateAtFrom: '',
    updateAtTo:'',
    updateBy: ''
  },
  shopEntityId: '',
  defaultRuleIds: [],
  defaultRuleParams: [],
  defaultVisible: false,
  defaultMonitoring: false
};
ConfigList.propTypes = {
  action: PropTypes.string,
  loading: PropTypes.bool,
  receivers: PropTypes.string,
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  pageSize: PropTypes.number,
  pageIndex: PropTypes.number,
  total: PropTypes.number,
  visible: PropTypes.bool
};

function mapStateToProps(state, props) {
  return {
    ruleParamsEdit: state.item.ruleParamsEdit,
    ruleIds: state.item.ruleIds,
    shopEntityId: state.item.shopEntityId,
    batchButtonDisabled: state.item.batchButtonDisabled,
    defaultRuleParamsEdit: state.item.defaultRuleParamsEdit,
    loading: state.item.loading,
    visible: state.item.visible,
    visibleParams: state.item.visibleParams,
    rows: state.item.rows,
    editor: state.item.editor,
    editorAll:state.item.editorAll,
    seachParams: state.item.seachParams,
    org: state.org,
    defaultRuleIds: state.item.defaultRuleIds,
    defaultRuleParams: state.item.defaultRuleParams,
    defaultVisible: state.item.defaultVisible,
    defaultMonitoring: state.item.defaultMonitoring,
    defaultVisibleParams: state.item.defaultVisibleParams
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ConfigActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigList);
