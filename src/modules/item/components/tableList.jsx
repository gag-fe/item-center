import React from 'react';
import Table from '@gag/table-web';
import Button from '@gag/button-web';
import Popconfirm from '@gag/popconfirm-web';
import Pagination from '@gag/pagination-web';

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopEntityId: [],
      pageSize: 10,
      pageIndex: 1,
      total: 50,
      visible: false,
      ruleParams:[],//报警规则列表
      ruleId:'',//已选中的规则
      monitoring: false
    };
  }
  _columns = () => {
    return [{
      title: '商品ID',
      dataIndex: 'serialNo',
      key: 'serialNo'
    },{
      title: '商品名称',
      dataIndex: 'shopEntityName',
      key: 'shopEntityName'
    }, {
      title: '商品条形码',
      dataIndex: 'shopName',
      key: 'shopName'
    }, {
      title: '品类',
      dataIndex: 'format',
      key: 'format'
    },{
      title: '规格型号',
      dataIndex: 'ruleStatus',
      key: 'ruleStatus'
    },{
      title: '计量单位',
        key: 'storey',
        render: (text, record) => {
            return ('瓶');
        }
    },{
      title: '税率',
      dataIndex: 'updateBy',
      key: 'updateBy'
    },{
      title: '税收分类',
      dataIndex: 'updateAt',
      key: 'updateAt'
    },{
        title: '税收分类大类',
        dataIndex: 'ruleStatus',
        key: 'updateAt',
        render: (text, record) => {
          return '货物';
        }
    },{
        title: '税收分类编码',
        dataIndex: 'ruleStatus',
        key: 'updateAt',
        render: (text, record) => {
            return ('1090240030000000000');
        }
    },{
        title: '审核状态',
        dataIndex: 'ruleStatus',
        key: 'updateAt',
        render: (text, record) => {
            return '未确认';
        }
    },{
        title: '匹配度',
        dataIndex: 'ruleStatus',
        key: 'updateAt',
        render: (text, record) => {
            return ('60');
        }
    },{
        title: '编码推荐',
        dataIndex: 'ruleStatus',
        key: 'updateAt',
        render: (text, record) => {
            return ('推荐');
        }
    },{
      title: '操作',
      render: (text, record) => {
        let disabled = false;
        if(record.ruleParams){
          disabled = false;
        }else{
          disabled = true;
        }
        return (<div>
              <Button disabled={disabled} type="primary" icon="edit"  size="small" onClick={this._getRuleListParams.bind(this, record)}></Button>
              <Button disabled={disabled} type="primary" icon="delete" size="small" onClick={this._getRuleListParams.bind(this, record)}></Button>
        </div>
        );
      }
    }];
  }

  _getRuleListParams = (data) => {
      this.props.editConfigParams(data);
      this.props.setConfigVisibleTrue();
  }

  _paginationOnChange = (pageIndex) => {
    this.setState({
      pageIndex: pageIndex
    });

    this.props.setConfigSeachParamsPageIndex(pageIndex);
    this.props.getConfigList();
    this.props.setBatchButtonDisabled();
  }

  _onRowSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({
      shopEntityId: selectedRowKeys
    });
    this.props.setShopEntityId(selectedRowKeys);
    this.props.setBatchButtonDisabled();
  }

  //批量设置
  _batchSetConfig = () => {
    this.props.getDefaultTypeList();
    this.props.setConfigDefaultVisibleTrue();
  }

  render() {
    const rowSelection = {
      type: 'checkbox',
      selectedRowKeys: this.props.shopEntityId,
      onChange: this._onRowSelectChange
    };

    return (
      <div>
        <div className="util-clearfix" style={{textAlign:'right', paddingBottom:20}}>
          <Button disabled={!this.props.batchButtonDisabled} type="primary" onClick={this._batchSetConfig}>新增商品</Button>
          <Button disabled={!this.props.batchButtonDisabled} type="primary" onClick={this._batchSetConfig}>商品导入</Button>
          <Button disabled={!this.props.batchButtonDisabled} type="primary" onClick={this._batchSetConfig}>批量确认</Button>
          <Button disabled={!this.props.batchButtonDisabled} type="primary" onClick={this._batchSetConfig}>批量删除</Button>
        </div>
        <div className="util-clearfix">
        <Table rowSelection={rowSelection} loading={this.props.loading} columns={this._columns()} dataSource={this.props.rows} pagination={false} />
        <Pagination showQuickJumper showTotal={(total, range) => `显示第 ${(range[0] && range[1])?range[0]:0} 到第 ${range[1]} 条记录，总共 ${total} 条记录`} defaultCurrent={1} pageSize={this.props.seachParams.pageSize} current={this.props.seachParams.pageIndex} total={this.props.seachParams.total} onChange={this._paginationOnChange} />
        </div>
      </div>

		);
  }
};
export default TableList;
