import {AppBar, Container, Toolbar, Button, Typography,Box} from '@mui/material';
import Link from 'next/link';
import {SignIn} from '@clerk/nextjs';

export default function SignUpPage() {
    return <Container maxWidth="100vw">
        <AppBar position="static" >
            <Toolbar>
            <Typography variant="h6" sx={{flexGrow:1}}>
                FlashCard Saas
            </Typography>
            <Button color="inherit">
                <Link href="/sign-in" passHref>Login</Link>
            </Button>
            <Button color="inherit">
                <Link href="/sign-up" passHref>Sign up</Link>
            </Button>
            </Toolbar>
        </AppBar>

        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        >
        <Typography variant="h4" gutterBottom>
            Sign In
        </Typography>
        <SignIn />
            
        </Box>
        </Container>
}