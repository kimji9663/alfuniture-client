import React from "react";
import { Layout, exampleStyle } from "./home.styles";
import NavigationBar from "../components/NavigationBar";
import { TextField, Typography } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Link } from "@mui/material";
import { Grid } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
        }}
      >
        <Grid
          container
          sx={{
            marginBottom: 8,
          }}
        >
          <Grid item xs></Grid>
          <Grid item>
            <Link>Sing Up</Link>
          </Grid>
        </Grid>
        <Typography>해외가구의 모든것</Typography>
        <img src={logo} alt="" />
        <TextField
          margin="normal"
          label="아이디를 입력해주세요"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
          sx={{
            marginTop: 6,
          }}
        ></TextField>
        <TextField
          margin="normal"
          label="비밀번호를 입력해주세요"
          type="password"
          name="password"
          required
          fullWidth
          autoComplete="current-password"
        ></TextField>
        <Box sx={{ marginLeft: 2, color: "red" }}>
          비밀번호가 일치하지 않습니다.
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
        >
          로그인
        </Button>

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          비밀번호를 잊으셨나요?
          <Link>비밀번호 찾으러가기</Link>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            textAlign: "center",
          }}
        >
          SNS로 간편하게 시작하기
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
