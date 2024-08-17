'use client';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  return (
    <AppBar position="static" sx={{ bgcolor: 'black', color: 'white', px: 4 }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', height: 64 }}>
        {/* Logo */}
        <Box onClick={() => router.push('/')} sx={{ cursor: 'pointer' }}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={100}
            priority
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />

        {/* Sign Up and Log In Buttons */}
        <SignedOut>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'grey',
              color: 'white',
              mx: 2,
              '&:hover': {
                backgroundColor: 'rgb(160, 16, 50)',
                borderColor: 'grey',
              },
            }}
            onClick={() => router.push('/sign-up')}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgb(190, 18, 60)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(160, 16, 50)',
              },
            }}
            onClick={() => router.push('/sign-in')}
          >
            Log In
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
}
