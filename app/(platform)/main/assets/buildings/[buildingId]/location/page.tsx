"use client";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InformationPage = ({ params }: { params: { buildingId: string } }) => {
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
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box sx={{ px: 5, my: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
          <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>
            Information({params.buildingId})
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "background.paper", p: 6, overflow: "auto" }}>
          <Box sx={{ maxWidth: "36rem", display: "flex", flexDirection: "column", gap: 3 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" fontWeight="medium">
                  Pictures
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
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
              <Typography variant="body1" fontWeight="medium">
                Name
              </Typography>
              <TextField
                fullWidth
                id="name"
                name="name"
                placeholder="ex) 현대빌딩"
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

            {/* "Address" 필드 */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
              <Typography variant="body1" fontWeight="medium">
                Address
              </Typography>
              <TextField
                fullWidth
                id="address"
                name="address"
                placeholder="ex) 올림픽로 82"
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

            {/* "City & Postal Code" 필드 */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
              <Typography variant="body1" fontWeight="medium">
                City & Postal Code
              </Typography>
              <Box sx={{ display: "flex", gap: 4 }}>
                <TextField
                  fullWidth
                  id="city"
                  name="city"
                  placeholder="도시"
                  variant="outlined"
                  sx={{
                    bgcolor: "background.paper",
                    borderColor: "grey.300",
                    height: "40px",
                    ".MuiInputBase-root": { height: "40px", alignItems: "center" },
                    ".MuiOutlinedInput-input": { padding: "10px 14px" },
                  }}
                />
                <TextField
                  fullWidth
                  id="postal_code"
                  name="postal_code"
                  placeholder="우편번호"
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
            </Box>

            {/* "Country" 필드 */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
              <Typography variant="body1" fontWeight="medium">
                Country
              </Typography>
              <TextField
                fullWidth
                id="country"
                name="country"
                placeholder="ex) 대한민국"
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

            {/* "VAT Number" 필드 */}
            {/* <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
                            <Typography variant="body1" fontWeight="medium">
                                VAT Number
                            </Typography>
                            <TextField
                                fullWidth
                                id="vat"
                                name="vat"
                                placeholder="e.g. BE123456789B01"
                                variant="outlined"
                                sx={{ bgcolor: "background.paper", borderColor: "grey.300" }}
                            />
                        </Box> */}

            {/* "Contact Person" 필드 */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 6, alignItems: "center" }}>
              <Typography variant="body1" fontWeight="medium">
                Contact Person
              </Typography>
              <TextField
                fullWidth
                id="contact_person"
                name="contact_person"
                placeholder="ex) 홍길동"
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
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InformationPage;
