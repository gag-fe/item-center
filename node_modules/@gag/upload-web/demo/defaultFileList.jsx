import React from 'react';
import ReactDOM from 'react-dom';
import Upload from '../src';
import Button from '@gag/button-web';
import Icon from '@gag/icon-web';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500',  // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500',  // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
};

ReactDOM.render(
  <Upload {...props}>
    <Button>
      <Icon type="upload" /> Upload
    </Button>
  </Upload>
, document.getElementById('sk-root'));
