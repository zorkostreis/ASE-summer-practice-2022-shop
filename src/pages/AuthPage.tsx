import {Button, TextField, Typography} from "@mui/material";
import {inject, observer} from "mobx-react";
import React, {ChangeEvent, useState} from "react";

import {ServicesNames} from "@/services/ServiceDictionary";

const AuthPage = inject(ServicesNames.AppService)(observer((props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function emailHandler(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function passwordHandler(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (email.trim() && password.trim()) {
      props.AppService.login(email, password);
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={submitHandler} className="auth-form">
        <Typography variant="h5">Sign In</Typography>
        <TextField value={email}
          label="Email"
          variant="outlined"
          type="email"
          onChange={emailHandler}
        />
        <TextField id="password"
          value={password}
          label="Password"
          variant="outlined"
          type="password"
          onChange={passwordHandler}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
      </form>
    </div>
  );
}));

export default AuthPage;
