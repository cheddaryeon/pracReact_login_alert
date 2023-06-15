import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div>
      <div>
        아이디 :
        <input
          type="text"
          value={id}
          onChange={function (event) {
            setId(event.target.value);
          }}
        />
      </div>
      <div>
        비밀번호 :
        <input
          type="password"
          value={pw}
          onChange={function (event) {
            setPw(event.target.value);
          }}
        />
      </div>
      <button
        onClick={function () {
          alert(
            `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`
          );
          setId("");
          setPw("");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default App;
