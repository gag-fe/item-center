import React from 'react';
import Form from '@gag/form-web';
import Input from '@gag/input-web';
import Button from '@gag/button-web';
import Row from '@gag/row-web';
import Col from '@gag/col-web';
import Select from '@gag/select-web';
import DatePicker from '@gag/date-picker-web';
import OrganizationTree from '../../components/organizationTree';
import moment from 'moment';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shopName: '',
      shopId: '',
      format:'',
      ruleStatus:'all',//状态
      orgId: '',
      updateAtTo: '',
      updateAtFrom: '',
      updateBy:'',
      storey:'',
      shopEntityName: '',
      endOpen: false,
      pageIndex: 1
    };
  }
  //重置按钮
  _resetSearch = () => {
    let item = {
      format:'',
      ruleStatus:'all',
      shopId: '',
      shopName: '',
      updateAtTo: '',
      updateAtFrom: '',
      updateBy:'',
      storey:'',
      shopEntityName: '',
      pageIndex: 1
    };
    this.setState({
      format:'',
      ruleStatus:'all',
      shopId: '',
      shopName: '',
      updateAtTo: '',
      updateAtFrom: '',
      updateBy:'',
      storey:'',
      shopEntityName: '',
      pageIndex: 1
    });
    this.props.setConfigSeachParams(item);
    //this.props.getConfigList();
  }

  //检索
  _clickSearch = () => {
    let item = this.state;
    this.props.setConfigSeachParams(item);
    this.props.getConfigList();
    this.props.setBatchButtonDisabled();
  }

  _onStartChange = (value,value2) => {
    this.setState({
      updateAtFrom: value
    });
  }

  _onEndChange = (value,value2) => {
    this.setState({
      updateAtTo: value
    });
  }

  _disabledStartDate = (startValue) => {
    const endValue = this.state.updateAtTo;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  _handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  _disabledEndDate = (endValue) => {
    const startValue = this.state.updateAtFrom;
    if (!endValue || !startValue) {
      return false;
    }

    return endValue.valueOf() <= startValue.valueOf();
  }

  _handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }
  //业态
  _onChageFormatHandleChange = (event) => {
    this.setState({
      format: event.target.value
    });
  }
  //状态
  _selectStateHandleChange = (value) => {
    this.setState({
      ruleStatus: value
    });
  }
  //商户名称
  _onChangeShopEntitiyName = (event) => {
    this.setState({
      shopEntityName: event.target.value
    });
  }
  //楼层
  _onChangeStoreyHandleChange = (event) =>{
    this.setState({
      storey: event.target.value
    });
  }
  //	设置账户
  _onChangeUpdateBy = (event) => {
    this.setState({
      updateBy: event.target.value
    });
  }

  _orgSelectInfo = (param) => {
    this.setState({
      shopId: param.shopId || '',
      shopName: param.shopName || ''
    });
  }

  render() {
    return (<div>
		<Form horizontal>
      <Row gutter={0} span={24}>
        <Col span={8}>
            <OrganizationTree {...this.props.org} calbackSelect={this._orgSelectInfo}></OrganizationTree>
        </Col>
        <Col span={8}>
          <FormItem
            label="商品名称: "
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 15 }}
            >
            <Input placeholder="请输入商品名称" value={this.state.shopEntityName}
            name="shopEntityName"
            onChange={this._onChangeShopEntitiyName}
          />
          </FormItem>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row gutter={0} span={24}>
        <Col span={8}>
          <FormItem
              label="匹配度: "
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
          >
            <Select style={{width:75, display:'inline-block'}} defaultValue="all" value={this.state.ruleStatus} onChange={this._selectStateHandleChange}>
              <Option value="all">选择</Option>
              <Option value="set">大于</Option>
              <Option value="default">小于</Option>
              <Option value="default2">等于</Option>
            </Select>
            <Input style={{width:80, display:'inline-block'}} placeholder="匹配度值" value={this.state.format}
                   name="format"
                   onChange={this._onChageFormatHandleChange}/>
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
          label="状态: "
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 15 }}
                  >
                <Select style={{width:85, display:'inline-block'}} defaultValue="all" value={this.state.ruleStatus} onChange={this._selectStateHandleChange}>
                      <Option value="all">全部</Option>
                    <Option value="set">未确认</Option>
                  <Option value="default">已确认</Option>
                </Select>
          </FormItem>
        </Col>
        <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={18}></Col>
        <Col span={6}>
            <Button type="danger" icon="search" onClick={this._clickSearch} className="">搜索</Button>
            <span style={{paddingRight:'10px',paddingLeft:'10px'}}></span>
            <Button onClick={this._resetSearch}>重置</Button>
          </Col>
        </Row>
				</Form>
		</div>);
  }
};
export default SearchBar;
