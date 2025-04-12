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
    <div className="max-w-[1400px] mx-auto mt-5 border border-gray-300 rounded-xl shadow-md overflow-hidden font-sans">
      <div className="flex justify-between items-center border-b border-gray-200 bg-gray-100 p-3">
        <div id="custom-toolbar" className="flex flex-wrap gap-2">
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
        <button
          onClick={handleShare}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Share
        </button>
      </div>

      <div
        ref={editorRef}
        className="h-[600px] overflow-y-auto"
      ></div>
    </div>
  );
};

export default Editor;
