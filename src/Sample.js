import React from 'react'
import {
    AppBar,
    Box ,
    Toolbar ,
    Typography ,
    Button ,
    IconButton,
    Card ,
    CardActions ,
    CardContent ,
    Accordion ,
    AccordionDetails,
    Grid,
    AccordionSummary 


} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useNavigate} from 'react-router-dom'





function Sample() {
  const navigate = useNavigate();
  return (
    <div>

       

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
             view details
          </Typography>
          <Button color="inherit" onClick={() => navigate('Login')} > Login </Button>
        </Toolbar>
      </AppBar>
    </Box>
    <br/> <br/>
    <div className="secound">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
           this is some thing big
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate('LearnMore')}>Learn More</Button>
      </CardActions>
    </Card>
    </div>

    <Grid container spacing={5}>
        <Grid item>
          <Button variant="contained" onClick={() => navigate('admin')} sx={{ mr: 50}} >Admin Login</Button>
        </Grid>
        <Grid item>
          <Button variant="contained"  onClick={() => navigate('ContactUs')} >CONTACTUS</Button>
        </Grid>
      </Grid>


    <div>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }} >
              REACT
            
          </Typography>
          <Typography variant="h6"  sx={{ color: 'text.secondary' }}> learn basics of react </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <ol> 
                  <li>PROPS</li>
                  <li>CLASS</li>
                  <li>FUNCTIONS</li>
             </ol>
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Accordion  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

 </div>
  )
}

export default Sample