import { hot } from 'react-hot-loader/root';
import React from 'react';

// Append Element with `autofocus` attribute

function HtmlAutofocus() {
  const [removed, setRemoved] = React.useState(false);
  const autoFocusFormRef = React.useRef(null);
  const autoFocusInputRef = React.useRef(null);
  React.useEffect(() => {
    autoFocusFormRef.current = document.getElementById('html-autofocus-form');
    autoFocusInputRef.current = document.getElementById('html-autofocus-input');
    if (!autoFocusFormRef.current) {
      console.warn('Fail to get `autoFocusFormRef.current`');
    }
    if (!autoFocusInputRef.current) {
      console.warn('Fail to get `autoFocusInputRef.current`');
    }
  }, []);
  const removeInput = () => {
    autoFocusInputRef.current.remove();
    setRemoved(true);
  };
  const appendInput = () => {
    autoFocusFormRef.current.appendChild(autoFocusInputRef.current);
    setRemoved(false);
  };
  return (
    <>
      {!removed && (
        <button onClick={removeInput}>Remove HtmlAutofocus input</button>
      )}
      {removed && (
        <button onClick={appendInput}>Restore HtmlAutofocus input</button>
      )}
    </>
  );
}

// setAttribute('autofocus', true)

function SetAttribute() {
  const inputRef = React.useRef(null);
  const [autofocus, setAutofocus] = React.useState(false);
  const setHtmlAutofocus = () => {
    inputRef.current.setAttribute('autofocus', !autofocus);
    setAutofocus(!autofocus);
  };
  return (
    <div>
      <h2>{`input.setAttribute('autofocus', true)`}</h2>
      <form>
        <input ref={inputRef} type="text"></input>
      </form>
      <button
        onClick={setHtmlAutofocus}
      >{`Set autofocus to ${!autofocus}`}</button>
    </div>
  );
}

// React autoFocus on mount

function ReactAutoFocusOnMount() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <h2>React autoFocus on mount</h2>
      <form>{show && <input autoFocus type="text"></input>}</form>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

// React autoFocus on re-render

function ReactAutoFocusOnReRender() {
  const [show, setShow] = React.useState(false);
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>React autoFocus on re-render</h2>
      <form>{show && <input autoFocus type="text" value={count}></input>}</form>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Hide' : 'Show'}
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count +1
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <HtmlAutofocus />
      <SetAttribute />
      <ReactAutoFocusOnMount />
      <ReactAutoFocusOnReRender />
    </>
  );
}

export default hot(App);
