import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, appBarClasses } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const ItemsCard = ({ item, ...rest }) => {
  const [imageURI, setImageURI] = useState('')

  useEffect(() => {
    axios
      .get(`http://192.168.1.92:5000/Item/getItemMainImageFile?path=${item.image_path.path}`, {
        responseType: "blob",
      })
      .then((res) => {
        const reader = new FileReader();
        reader.readAsDataURL(res.data);
        reader.onloadend = () => setImageURI(reader.result);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return(
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '100%'
    }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <img
          alt="item"
          src={imageURI}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%"
          }}
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {item.name}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {item.unit_price}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <DownloadIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Stock:
            {' '}
            {item.quantity}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);
        }

ItemsCard.propTypes = {
  item: PropTypes.object.isRequired
};
