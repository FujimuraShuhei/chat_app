import React from 'react';

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">チャットルーム</span>
        <span className="title">ログイン</span>

        <form action="">
          <input type="email" placeholder="メールアドレス" />
          <input type="password" placeholder="パスワード" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <button>ログインする</button>
        </form>
        <p>まだ新規登録をされていない方はこちら</p>
      </div>
    </div>
  );
};

export default Login;
