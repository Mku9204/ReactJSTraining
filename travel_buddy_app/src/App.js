import './App.css';
import NavBar from './components/navbar/navbar';
import Card1 from './components/card/card';
import banner_bg from './assests/img/banner_bg.png'
import event_bg from './assests/img/event_bg.png'
import Vector from './assests/icons/Vector.svg'
import { Box, Button, Card, CardContent, Container, Rating, Typography } from '@mui/material';
import Topvist from './components/topvist/topvist';
import Subnav from './components/subnav/subnav';
import A1 from './assests/img/a1.png'
import A2 from './assests/img/a2.png'
import A3 from './assests/img/a3.png'
import A4 from './assests/img/a4.png'
import H1 from './assests/img/h1.png'
import H2 from './assests/img/h2.png'
import H3 from './assests/img/h3.png'
import T1 from './assests/img/t1.png'
import T2 from './assests/img/t2.png'
import T3 from './assests/img/t3.png'
import Topoffres from './components/topvist/topOffer';
import Whatis from './components/util/what';
import Tophotel from './components/topvist/topHotel';
import Footer from './components/footer/footes';
function App() {
  return (
    <div className="App">
      <Container maxWidth='false' fullWidth>
        <NavBar vector={Vector} />
        <Card1 image={banner_bg} >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
            <Typography variant="h2" gutterBottom>
              Travel Buddy
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Let’s start your journey with us, your dream will come true
            </Typography>
            <Button variant="contained"
              sx={{
                backgroundColor: '#ff5733',
                padding: '15px 30px'

              }}
            >Discover Now
            </Button>
          </Box>
        </Card1>
        <Subnav />
        <Topvist a1={A1} a2={A2} a3={A3} a4={A4}
          text='Top Places To Visit'
          text2='The Best Place to Stay in Indonesia'
          gCol='6'
        />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          padding: '50px',
        }}>
          <Button variant="contained"
            sx={{
              backgroundColor: '#ff5733',
              padding: '15px 30px'

            }}
          >Discover More
          </Button>
        </Box>

        <Card1 image={event_bg} pd='30px'>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: 'white',
            padding: '25px 30px',
          }}>
            <Box sx={{
              color: 'black'
            }}>
              <Typography variant="subtitle1" gutterBottom
                sx={{

                }}
              >
                Upcoming Event
              </Typography>
              <Typography variant="h4" gutterBottom>
                India - Himachal
              </Typography>
              <Box sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '170%',
                /* or 31px */
                letterSpacing: '0.02em',
                color: '#626262',
              }}>
                <Typography variant="subtitle1" gutterBottom>
                  Waters make fish every without firmament saw had. Morning <br />
                  air subdue. Our, air very one. Whales grass is fish whales<br />
                  winged.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  date : 12 Aug 2020
                </Typography>
                <Typography variant="body2" gutterBottom>
                  cost : Start from Rp3000.000,00
                </Typography>
                <Typography variant="body2" gutterBottom>
                  organizer : TravelBuddy
                </Typography>
              </Box>
              <Box sx={{
                display: 'inline-flex'
              }}>
                <Typography>Rating : </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
              <Box sx={{
                paddingTop: '20px'
              }}>
                <Button variant="contained"
                  sx={{
                    backgroundColor: '#ff5733',
                    padding: '15px 30px'
                  }}
                >Plan Details
                </Button>
              </Box>
            </Box>
          </Box>
        </Card1>
        <Tophotel
          a1={H1} a2={H2} a3={H3}
          text='Top Hotel & Restorants'
          text2='The Best Hotel & Restorants in India'
          gCol='4'
        />
        <Whatis />
        <Box>
          <Topoffres
            a1={T1} a2={T2} a3={T3}
            text='We offered best services'
            text2='The Best Service'
            gCol='4'
          />
        </Box>
        <Footer gCol='6' />
      </Container >
    </div >
  );
}

export default App;
