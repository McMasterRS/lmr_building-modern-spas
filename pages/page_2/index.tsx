import styles from '@/styles/Home.module.css'
import Typography from '@mui/material/Typography'
import {useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function Home() {
    useEffect(() => {
        document.title = 'Page 2'
    }, [])
  return (
    <>
      <main className={styles.page}>
          <Container>
              <BreadCrumbs />
              <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center">
                  <Typography variant="h1">Page 2</Typography>
              </Box>
          </Container>
      </main>
    </>
  )
}
