import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const Editor = () => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: '#custom-toolbar',
        },
      });
    }
  }, []);

  const handleShare = () => {
    //
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.toolbarWrapper}>
        <div id="custom-toolbar" style={styles.toolbar}>
          <select className="ql-header" defaultValue="">
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="" />
          </select>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
          <select className="ql-color" />
          <select className="ql-background" />
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
          <select className="ql-align" />
          <button className="ql-blockquote" />
          <button className="ql-code-block" />
          <button className="ql-link" />
          <button className="ql-image" />
          <button className="ql-clean" />
        </div>
        <button style={styles.shareButton} onClick={handleShare}>Share </button>
      </div>

      <div
        ref={editorRef}
        style={styles.editorContainer}
      ></div>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '1400px',
    margin: '20px auto',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    fontFamily: `'Segoe UI', sans-serif`,
  },
  toolbarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
    padding: '8px 12px',
  },
  toolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
  },
  shareButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 14px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  editorContainer: {
    height: '600px',
    overflowY: 'auto',
  },
};

export default Editor;
