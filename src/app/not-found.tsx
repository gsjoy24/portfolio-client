import notFound from "@/assets/not-found.svg";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Stack
      area-label="Page Not Found"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 64px)",
        textAlign: "center",
        pb: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "350px",
          width: "100%",
        }}
      >
        <Image
          src={notFound}
          alt="Not Found"
          width={300}
          height={300}
          className="w-full"
        />
      </Box>
      <Box>
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          Page Not Found
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </Typography>
        <Button component={Link} href="/" sx={{ mt: 2 }}>
          Go back to Home
        </Button>
      </Box>
    </Stack>
  );
};

export default NotFoundPage;
