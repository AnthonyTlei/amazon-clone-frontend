import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { FC, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/input/use-input";
import { validateEmail } from "../../../shared/utils/validation/email";
import { validatePasswordLength } from "../../../shared/utils/validation/length";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { login, reset } from "../authSlice";
import { LoginUser } from "../models/LoginUser.interface";

const SigninFormComponent: FC = () => {
  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    cleanHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    cleanHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const dispatch = useAppDispatch();

  const { isLoading, isSuccess, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (!isAuthenticated) return;
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailHasError || passwordHasError) return;
    if (email.length === 0 || password.length === 0) return;

    const loginUser: LoginUser = { email, password };

    dispatch(login(loginUser));
  };

  if (isLoading)
    return <CircularProgress sx={{ marginTop: "64px" }} color="primary" />;

  return (
    <>
      <Box
        sx={{
          border: 1,
          padding: 2,
          borderColor: "#cccccc",
          width: "350px",
          marginTop: 2,
        }}
      >
        <form onSubmit={onSubmitHandler}>
          <Grid container direction="column" justifyContent="flex-star">
            <Typography variant="h4" component="h1">
              Sign-In
            </Typography>
            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
              htmlFor="email"
            >
              Email
            </InputLabel>
            <TextField
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailHasError}
              helperText={emailHasError ? "Enter your email" : ""}
              type="email"
              name="email"
              id="email"
              variant="outlined"
              size="small"
            />
            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
              htmlFor="password"
            >
              Password
            </InputLabel>
            <TextField
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={
                passwordHasError
                  ? "Password must be between 6 and 20 characters"
                  : ""
              }
              type="password"
              name="password"
              id="password"
              variant="outlined"
              size="small"
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                marginTop: 16,
                height: "31px",
                backgroundColor: "#f0c14b",
                color: "black",
                borderColor: "#a88734 #9c7e31 #846a29",
                textTransform: "none",
              }}
            >
              Sign-In
            </Button>
          </Grid>
        </form>
        <div style={{ marginTop: "30px" }}>
          <small>
            <span>By continuing, you agree to Amazon's </span>
          </small>
        </div>
        <div>
          <small>
            <a
              href="https://github.com/AnthonyTlei"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Conditions of use
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/AnthonyTlei"
              style={{ textDecoration: "none" }}
            >
              Privacy policy
            </a>
          </small>
        </div>
      </Box>
      <div style={{ marginTop: "16px" }}>
        <Divider>
          <small style={{ color: "#767676" }}>New to Amazon?</small>
        </Divider>
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#0000ee" }}
        >
          <Button
            variant="contained"
            style={{
              width: "100%",
              marginTop: "12px",
              height: "31px",
              backgroundColor: "#f1f1f1",
              color: "black",
              textTransform: "none",
            }}
          >
            Register
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SigninFormComponent;
