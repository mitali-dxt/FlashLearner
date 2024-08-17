'use client';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import HeroSection from '../components/HeroSection';
import { Container } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>FlashCard Saas</title>
        <meta name="description" content="Create FlashCards from your text" />
      </Head>
      <Navbar />
      <HeroSection />
      <Features />
      <Pricing />
    </Container>
  );
}
