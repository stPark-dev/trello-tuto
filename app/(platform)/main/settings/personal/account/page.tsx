"use client";

import { Avatar, Box, Button, Divider, ListItemIcon, ListItemText, MenuItem, Select, SelectChangeEvent, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const AccoutPage = () => {
  const theme = useTheme();
  const [language, setLanguage] = useState("");

  const languages = [
    { code: "KR", label: "한국어" },
    { code: "US", label: "English" },
    { code: "JP", label: "日本語" },
    { code: "CN", label: "中文" },
    { code: "VN", label: "Tiếng Việt" },
  ];

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
      <Box sx={{ px: 5, my: 5, display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" fontWeight="bold">
          Account Settings
        </Typography>
        <Typography variant="body2">Update your email, password and preferences here.</Typography>
      </Box>
      <Box sx={{ p: 5, overflow: "auto", width: "100%", height: "100vh", bgcolor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7" }}>
        <Box sx={{ maxWidth: "56rem", display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
            <Typography variant="body1" fontWeight="bold">
              Email
            </Typography>
            <TextField
              fullWidth
              id="email"
              name="email"
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
              New password
            </Typography>
            <TextField
              fullWidth
              id="newPassword"
              name="newPassword"
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
              Confirm new password
            </Typography>
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
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
              Password
            </Typography>
            <TextField
              fullWidth
              id="password"
              name="password"
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
              Language
            </Typography>
            <Select
              value={language}
              onChange={handleLanguageChange}
              size="small"
              displayEmpty
              fullWidth
              sx={{ bgcolor: "background.paper" }}
              renderValue={selected => {
                const selectedItem = languages.find(lang => lang.code === selected);
                return (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {selectedItem && (
                      <>
                        <ReactCountryFlag countryCode={selectedItem.code} svg style={{ fontSize: "1.5em", lineHeight: "2em" }} />
                        <Typography variant="body2" noWrap>
                          {selectedItem.label}
                        </Typography>
                      </>
                    )}
                  </Box>
                );
              }}
            >
              {languages.map(({ code, label }) => (
                <MenuItem value={code} key={code}>
                  <ListItemIcon>
                    <ReactCountryFlag countryCode={code} svg style={{ fontSize: "2em" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: 1 }}>{label}</ListItemText>
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Divider />
          <Box sx={{ display: "grid", gap: 6, alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" fontWeight="bold">
                Delete account
              </Typography>
              <Typography variant="body2" fontWeight="medium">
                Deleting your account can not be undone. All personal information will be erased and a new account needs to be created to use FixForm again.
                <Button
                  component="span"
                  onClick={() => {
                    /* 삭제 로직 */
                  }}
                  sx={{ color: "red", textTransform: "none", p: 0, minWidth: "auto", fontWeight: "bold" }}
                >
                  Delete my account.
                </Button>
              </Typography>
            </Box>
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

export default AccoutPage;
