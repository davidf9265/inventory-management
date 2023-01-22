import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
//import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ItemsCard } from '../components/product/items-card';

// {
//   id: uuid(),
//   createdAt: '27/03/2019',
//   description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
//   media: '/static/images/products/product_1.png',
//   title: 'Dropbox',
//   totalDownloads: '594'
// },

const Page = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://192.168.1.92:5000/Item/getAll")
      .then((response) => {
        console.log(response.data.data);
        setItems(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Products | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {items.map((item) => (
                <Grid item key={item.id} lg={4} md={6} xs={12}>
                  <ItemsCard item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
