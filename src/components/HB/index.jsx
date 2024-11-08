import React from "react";

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    '@keyframes cakeCherry': {
        '0%': {
            transform: 'translate(-50%,-5000%)'
        },
        '100%': {
            transform: 'translate(-50%,0%)'
        }
    },
    '@keyframes cakeTopLeft': {
        '0%': {
            height: '0%',
        },
        '100%': {
            height: '140%'
        },
    },

    '@keyframes cakeTopRight': {
        '0%': {
            height: '0%',
        },
        '100%': {
            height: '230%'
        },
    },

    '@keyframes birthdayContainer': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        }
    },

    wrap: {
        maxHeight: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(0,0,0,0.2)',
        '& > *': {
            boxSizing: 'border-box'
        },

        '& .birthday-container': {
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ededed',
        },
        '& .birthday-container__text': {
            fontFamily: 'Pacifico, cursive',
            letterSpacing: '.1rem',
            color: '#D0378C',
            position: 'absolute',
            zIndex: '100',
            top: '0',
            fontSize: '15vmin',
            padding: '2vmin',
            margin: '0',
            textAlign: 'center',
            transform: 'translate(-50%, 0%)',
            left: '50%',
            opacity: 0,
            animation: `$birthdayContainer 1s 2s forwards`
        },
        '& .birthday-container__graphic': {
            width: '100vmin',
            height: '100vmin',
            background: '#ededed',
            position: 'relative',
        },
        '& .cake': {
            width: '50%',
            height: '45%',
            position: 'absolute',
            transform: 'translate(-50%,0%)',
            border: '2vmin solid black',
            bottom: '3vmin',
            left: '50%',
            borderRadius: '10vmin 10vmin 0 0',
            background: 'linear-gradient(to right, rgba(254,229,203,1) 0%,rgba(254,229,203,1) 8%,rgba(250,204,147,1) 9%,rgba(250,204,147,1) 100%)',
        },
        '& .cake__bottom': {
            height: '15%',
            width: '100%',
            position: 'absolute',
            bottom: '0px',
            borderTop: '1.5vmin solid black',
            background: 'linear-gradient(to bottom, rgba(233,153,196,1) 0%, rgba(233,153,196,1) 20%, rgba(208,55,140,1) 25%, rgba(208,55,140,1) 100%)',
            '&::before': {
                content: ' ""',
                position: 'absolute',
                width: '9%',
                height: '100%',
                left: '0',
                background: '#FEE5CB',
            }
        },
        '& .cake__top': {
            position: 'absolute',
            width: '100%',
            height: '20%',
            background: '#32B9EC',
            borderRadius: '10vmin 10vmin 0 0',
            borderBottom: '2vmin solid black',

            '&::before': {
                content: " ''",
                width: '6%',
                height: '0%',
                position: 'absolute',
                background: '#32B9EC',
                borderRadius: '0 0 10vmin 10vmin',
                border: '2vmin solid black',
                borderTop: 'none',
                top: '100%',
                left: '20%',
                animation: `$cakeTopLeft 1.5s 1s forwards`,
            },

            '&::after': {
                content: "' '",
                width: '6%',
                height: '0%',
                position: 'absolute',
                background: '#32B9EC',
                borderRadius: '0 0 10vmin 10vmin',
                border: '2vmin solid black',
                borderTop: 'none',
                top: '100%',
                left: '37%',
                animation: `$cakeTopRight 2s 1s forwards`,
            }
        },
        '& .cake__cherry': {
            position: 'absolute',
            width: '17%',
            height: '17%',
            background: '#D0378C',
            borderRadius: '50%',
            border: '1.5vmin solid black',
            top: '-18%',
            left: '50%',
            transform: 'translate(-50%,0%)',
            animation: `$cakeCherry 1s forwards`,

            '&::before': {
                content: '"" ',
                width: '80%',
                height: '60%',
                position: 'absolute',
                borderRight: '1.5vmin solid black',
                borderBottom: '1.5vmin solid black',
                borderBottomRightRadius: '150% ',
                bottom: '100%',
                left: '90%',
                transform: 'rotate(-20deg)'
            }
        },
    }
});

const HB = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            <div className="birthday-container">
                <h1 className="birthday-container__text">Happy Birthday!</h1>
                <div className="birthday-container__graphic">
                    <div className="cake">
                        <div className="cake__bottom"></div>
                        <div className="cake__top"></div>
                        <div className="cake__cherry"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HB;
