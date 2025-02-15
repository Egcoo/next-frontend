import React from "react";
import "./index.css";

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="global-footer">
      <div>© {currentYear} 智能答题应用平台</div>
      <div>
        <a href="https://egcoo.github.io" target="_blank">
          作者：shengjie Fan
        </a>
      </div>
    </div>
  );
}
