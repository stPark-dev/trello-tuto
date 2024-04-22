import { Box, Switch, Typography } from "@mui/material";

const NotificationPage = ({ params }: { params: { buildingId: string } }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box sx={{ px: 5, my: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
          <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>
            Notifications
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
            maxWidth: "4xl",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                New problem or upvote
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.500", fontWeight: "medium" }}>
                You will receive a notification when a new problem is reported or an existing problem is upvoted.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "end",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium" }}>
                  E-Mail Notifications
                </Typography>
                {/* Switch Component from MUI */}
                <Switch defaultChecked={false} color="primary" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium" }}>
                  Push Notifications
                </Typography>
                <Switch defaultChecked={false} color="primary" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
            maxWidth: "4xl",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                New comment
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.500", fontWeight: "medium" }}>
                You will receive a notification when someone comments on a problem assigned to you.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "end",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium" }}>
                  E-Mail Notifications
                </Typography>
                {/* Switch Component from MUI */}
                <Switch defaultChecked={false} color="primary" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium" }}>
                  Push Notifications
                </Typography>
                <Switch defaultChecked={false} color="primary" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
            maxWidth: "4xl",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                Problem assigned
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.500", fontWeight: "medium" }}>
                You will receive a notification when a problem is assigned to you.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "end",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium" }}>
                  E-Mail Notifications
                </Typography>
                {/* Switch Component from MUI */}
                <Switch defaultChecked={false} color="primary" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium" }}>
                  Push Notifications
                </Typography>
                <Switch defaultChecked={false} color="primary" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
            maxWidth: "144rem",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                Tagged in comment
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.500", fontWeight: "medium" }}>
                You will receive a notification when you are tagged in a comment.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "end",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium" }}>
                  E-Mail Notifications
                </Typography>
                {/* Switch Component from MUI */}
                <Switch defaultChecked={false} color="primary" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium" }}>
                  Push Notifications
                </Typography>
                <Switch defaultChecked={false} color="primary" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NotificationPage;
