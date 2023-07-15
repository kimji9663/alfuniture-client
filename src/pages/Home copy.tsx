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

// const Home = () => {
//   return (
//     <Container component="main" maxWidth="xs">
//       {/* <Layout>
//         <SingUpBtn></SingUpBtn>
//         <Headers></Headers>
//         <InputID></InputID>
//         <NavigationBar />
//       </Layout> */}
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Grid container>
//           <Grid item xs></Grid>
//           <Grid item>
//             <Link>Sing Up</Link>
//           </Grid>
//         </Grid>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Avatar sx={{ mt: 1, bgcolor: "secondary.main" }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <TextField
//           margin="normal"
//           label="아이디를 입력해주세요"
//           required
//           fullWidth
//           name="email"
//           autoComplete="email"
//           autoFocus
//         ></TextField>
//         <TextField
//           margin="normal"
//           label="비밀번호를 입력해주세요"
//           type="password"
//           name="password"
//           required
//           fullWidth
//           autoComplete="current-password"
//         ></TextField>
//         <FormControlLabel
//           control={<Checkbox value="remember" color="primary"></Checkbox>}
//           label="Remember me"
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           로그인
//         </Button>
//         비밀번호를 잊으셨나요?
//         <Link>비밀번호 찾으러가기</Link>
//       </Box>
//     </Container>
//   );
// };

// export default Home;
