import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import SearchInput from './SearchInput';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



// const Home = i18next.t('Home', {joinArrays: ' ='})
// const Pricing = i18next.t('Pricing', {joinArrays: "="})
// const Sales = i18next.t('Contact Sales', {joinArrays: ' ='})



const navItemAr: string[] = ['الرئيسية', 'الأسعار', " كلم المبيعات"];
const navItem: string[] = ['Home', 'Pricing', "Contact Sales"];


export default function Navbar({shipment}) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [language, setLanguage] = React.useState<'en' | 'ar' | ''>('ar');
    const [direction, setDirection] = React.useState<'rtl' | 'ltr' | ''>('');
    const [display, setDisplay] = React.useState(false);
    const { t } = useTranslation();



    const handLanguage = () => {

        i18next.changeLanguage(language)
        if (language === 'en') {
            setLanguage((ar)=> ar='ar')
            setDirection((ltr)=> ltr='ltr')
            if (document.querySelector("html") != null ) {
                document.querySelector("html")?.setAttribute("lang", language) && 
                document.querySelector("html")?.setAttribute("dir", direction)
              }
        } else {
            setLanguage((en)=> en='en')
            setDirection((rtl)=> rtl='rtl')
          if (document.querySelector("html") != null ) {
            document.querySelector("html")?.setAttribute("lang", language) && 
            document.querySelector("html")?.setAttribute("dir", direction)
          }
        }
    }


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const removeShipmentBox = () => {
        setDisplay((show) => !show)
    };



    return (


        <Grid spacing={2} xs={10}>

            <Toolbar className=" border-b-2">

                <Grid item xs={3}>
                    <Grid sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >

                        <img src='/logo.png' alt='bosta logo' className='h-16' />

                        <Typography
                            variant="h6"
                            className="text-red-600 flex items-center nav-font"

                        >
                            {t("Bosta")}
                        </Typography>
                    </Grid>
                </Grid>



                <Box sx={{ flexGrow: 1, display: { md: 'flex', lg: 'none' }, color: 'red' }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { md: 'block', lg: 'none' },
                            color: 'red'
                        }}
                    >

                        {document.querySelector("html")?.lang === 'ar' ? (navItemAr.map((item) => (
                            <Button
                                key={item}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, color: 'black', display: 'block'
                                }}

                                className='hover:text-red-600 nav-font'
                            >
                                {item}
                            </Button>
                        ))

                        ) : (navItem.map((item) => (
                            <Button
                                key={item}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, color: 'black', display: 'block'
                                }}

                                className='hover:text-red-600 nav-font'
                            >
                                {item}
                            </Button>
                        )

                        ))

                        }
                    </Menu>
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                    <Typography
                        variant="h6"
                        className="text-red-600 flex items-center nav-font"
                    >
                        {t("Bosta")}
                    </Typography>
                </Box>


                <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }} className="flex justify-evenly  w-1/5">
                    {document.querySelector("html")?.lang === 'ar' ? (navItemAr.map((item) => (
                        <Button
                            key={item}
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2, color: 'black', display: 'block'
                            }}

                            className='hover:text-red-600 nav-font'
                        >
                            {item}
                        </Button>
                    ))

                    ) : (navItem.map((item) => (
                        <Button
                            key={item}
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2, color: 'black', display: 'block'
                            }}

                            className='hover:text-red-600 nav-font'
                        >
                            {item}
                        </Button>
                    )

                    ))

                    }


                </Box>



                <div className='relative'>
                    <Button onClick={handleCloseNavMenu} onMouseUp={removeShipmentBox} sx={{ my: 2, mx: 4, color: 'black', display: 'block' }} className='hover:text-red-600 nav-font '>
                        {t("Track Shipment")}
                    </Button>



                    <Box className={`absolute shipment-box p-6 border ${display ? 'block' : 'hidden'} `}>
                        <Typography className="pb-3">{t("Track your shipment")}</Typography>

                        <Box className="">
                            <SearchInput />
                        </Box>
                    </Box>
                </div>

                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }} className='hover:text-red-600 nav-font'>
                    {t("Sign In")}
                </Button>

                <Box >
                    <Button className="nav-font" variant="text" sx={{ my: 2, color: 'red', display: 'block' }} onClick={handLanguage}>{language}</Button>
                </Box>

            </Toolbar>
        </Grid>
        // </AppBar>

    );
}
