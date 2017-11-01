import React from 'react';
import PropTypes from 'prop-types';
import Upload from './Upload';
export default class Dragger extends React.Component {
  render() {
    const { props } = this;
    return <Upload {...props} type="drag" style={{ height: props.height }}/>;
  }
}
Dragger.propTypes = {
  type: PropTypes.oneOf([ 'drag','select']),
  name: PropTypes.string,
  defaultFileList:PropTypes.array,
  fileList:PropTypes.array,
  action: PropTypes.string.isRequired,
  data:PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
      ]),
  headers: PropTypes.any,// HttpRequestHeader;
  showUploadList:PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
          showRemoveIcon: PropTypes.bool,
          showPreviewIcon: PropTypes.bool,
            })
      ]),
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  beforeUpload: PropTypes.any,
  onChange:PropTypes.func,
  listType: PropTypes.oneOf(['text','picture','picture-card']),
  className: PropTypes.string,
  onPreview:PropTypes.func,
  onRemove:PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
      ]),
  supportServerRender: PropTypes.bool,
  disabled: PropTypes.bool,
  prefixCls: PropTypes.string,
  customRequest:PropTypes.func,
  withCredentials: PropTypes.bool,
  locale:PropTypes.shape({
    uploading: PropTypes.string,
    removeFile: PropTypes.string,
    uploadError: PropTypes.string,
    previewFile: PropTypes.string,
  }),
  height:PropTypes.number,
};
