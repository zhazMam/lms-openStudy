import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useAuthAction } from "../../Store/AuthStore";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useController, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { signUp } = useAuthAction();
  const navigate = useNavigate();

  const signUpFormSchema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required(),
  });

  const methods = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signUpFormSchema),
  });

  const usernameController = useController({
    name: "username",
    control: methods.control,
  });

  const emailController = useController({
    name: "email",
    control: methods.control,
  });
  const passwordController = useController({
    name: "password",
    control: methods.control,
  });
  const confirmPasswordController = useController({
    name: "confirmPassword",
    control: methods.control,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  type SignUpFormData = Yup.InferType<typeof signUpFormSchema>;

  const onSubmit = async (data: SignUpFormData) => {
    console.log('data', data)
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    const success = await signUp(newUser);
    if (success) {
      navigate("/main");
      console.log("User successfully signed up and is being redirected.");
    } else {
      console.error(
        "Sign up failed. Please check your information and try again."
      );
    }
  };

  return (
    <Box sx={{ paddingTop: "150px" }}>
      <Container>
        <Typography variant="h3" textAlign={"center"} fontWeight={700}>
          Sign Up
        </Typography>
        <form>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            sx={{ width: "500px", margin: "0 auto" }}
          >
            <TextField
              label="*User Name"
              type="text"
              variant="outlined"
              value={usernameController.field.value}
              onChange={usernameController.field.onChange}
              helperText={usernameController.fieldState.error?.message}
              error={Boolean(usernameController.fieldState.error)}
            />
            <TextField
              label="*Email Address"
              type="email"
              variant="outlined"
              value={emailController.field.value}
              onChange={emailController.field.onChange}
              helperText={emailController.fieldState.error?.message}
              error={Boolean(emailController.fieldState.error)}
            />
            <TextField
              label="*Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={passwordController.field.value}
              onChange={passwordController.field.onChange}
              helperText={passwordController.fieldState.error?.message}
              error={Boolean(passwordController.fieldState.error)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="*Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              value={confirmPasswordController.field.value}
              onChange={confirmPasswordController.field.onChange}
              helperText={confirmPasswordController.fieldState.error?.message}
              error={Boolean(confirmPasswordController.fieldState.error)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              type="submit"
              onClick={methods.handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};
export default SignUpPage;
