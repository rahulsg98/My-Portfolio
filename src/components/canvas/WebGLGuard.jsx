import { Component } from "react";

let supported;
export const hasWebGL = () => {
  if (supported !== undefined) return supported;
  try {
    const c = document.createElement("canvas");
    const gl = window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"));
    supported = !!gl;
    gl?.getExtension("WEBGL_lose_context")?.loseContext(); // free the probe context
  } catch {
    supported = false;
  }
  return supported;
};

/** Renders 3D children only when WebGL works; otherwise shows `fallback` and never crashes the page. */
class WebGLGuard extends Component {
  state = { failed: !hasWebGL() };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(err) {
    console.warn("3D scene disabled:", err?.message);
  }
  render() {
    return this.state.failed ? this.props.fallback ?? null : this.props.children;
  }
}

export default WebGLGuard;
