"use client";

import { Avatar, Box, Button, Divider, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const ProfilePage = () => {
  const theme = useTheme();
  const [image, setImage] = useState(
    "https://app.fixform.com/images/logo/8e7e5369-9b7e-4662-985d-2c8ebb98b722?p=logo&t=1709859358&signature=6e07d02fded9883e4eec985d39f589326c9de1c68ba25eb5a58f1a7ea50ff632"
  );
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        if (e.target && e.target.result) {
          setImage(e.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
      <Box sx={{ px: 5, my: 5, display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" fontWeight="bold">
          Profile
        </Typography>
        <Typography variant="body2">Update your photo and personal details here.</Typography>
      </Box>
      <Box sx={{ p: 5, overflow: "auto", width: "100%", height: "100vh", bgcolor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7" }}>
        <Box sx={{ maxWidth: "56rem", display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" fontWeight="bold">
                Your Photo
              </Typography>
              <Typography variant="body2" fontWeight="medium">
                A photo helps team members recognize you.
              </Typography>
            </Box>
            <Box sx={{ maxWidth: 400 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    position: "relative",
                    display: "inline-block",
                    borderRadius: "50%",
                    img: { objectFit: "cover" },
                  }}
                  src={image}
                  alt=""
                />
                <input type="file" accept="image/*" hidden onChange={handleImageChange} id="file-input" />
                <label htmlFor="file-input">
                  {" "}
                  {/* label을 사용하여 input과 버튼을 연결합니다. */}
                  <Button
                    variant="outlined"
                    component="span"
                    sx={{
                      p: 1,
                      textTransform: "none",
                      color: "text.primary",
                      bgcolor: "background.paper",
                      borderColor: "grey.300",
                      ":hover": { bgcolor: "background.paper", color: "text.secondary" },
                      fontWeight: "medium",
                    }}
                  >
                    Change
                  </Button>
                </label>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
            <Typography variant="body1" fontWeight="bold">
              First Name
            </Typography>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              placeholder="ex) 길동"
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                borderColor: "grey.300",
                height: "40px",
                ".MuiInputBase-root": { height: "40px", alignItems: "center" },
                ".MuiOutlinedInput-input": { padding: "10px 14px" },
              }}
            />
          </Box>
          <Divider />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
            <Typography variant="body1" fontWeight="bold">
              Last Name
            </Typography>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              placeholder="ex) 홍"
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                borderColor: "grey.300",
                height: "40px",
                ".MuiInputBase-root": { height: "40px", alignItems: "center" },
                ".MuiOutlinedInput-input": { padding: "10px 14px" },
              }}
            />
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button color="primary" variant="contained">
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
