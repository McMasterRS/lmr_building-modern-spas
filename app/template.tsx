'use client';

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Template({children}: {children?: React.ReactNode} ) {


    return <>
        <Navbar />
        <CssBaseline />
        {children}
        <Footer />
    </>
}
