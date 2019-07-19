import React from "react";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import MyUploadAdapter from '../../commons/MyUploadAdapter';

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <CKEditor className="add-new-post__editor mb-1"
          editor={ClassicEditor}
          onInit={editor => {
              editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new MyUploadAdapter(loader);
              };
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={editor => {
            console.log('Blur.', editor);
          }}
          onFocus={editor => {
            console.log('Focus.', editor);
          }}
        />
      </Form>
    </CardBody>
  </Card>
);


export default Editor;

