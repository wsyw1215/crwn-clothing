import React, { Component } from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from "./ErrorBoundary.styles";

export default class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  };
  // 當一個 component 在 render 的過程、生命週期、或在某個 child component 的 constructor 中發生錯誤時，
  // getDerivedStateFromError、componentDidCatch被呼叫
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }
  // react hook 用於截取 child component tree 中 JavaScript 錯誤、記錄錯誤、
  // 並顯示一個 fallback UI元件 而非壞掉的 component
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}
