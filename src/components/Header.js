import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [navBarStatus, setNavBarStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>

            <a>
                <img src="/images/logo.svg" alt="tesla-logo"/>
            </a>
            <Menu>
                {cars && cars.map((car, index) => {
                    <a key={index} href="#">{car}</a>

                })}
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <MenuButton onClick={() => setNavBarStatus(true)}>
                    Menu
                </MenuButton>
            </RightMenu>

            <NavBar show={navBarStatus}>
                <CloseWrapper>
                    <CloseButton onClick={() => setNavBarStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </NavBar>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 15px;

    a {
        font-weight: 600;
        padding: 5px 15px;
        border-radius: 10px;

        &:hover {
            background: hsla(0,0%,0%,.05);
            transition: transform 0.2s
        }

    }

    @media(max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 10px;

        &:hover {
            background: hsla(0,0%,0%,.05);
            transition: transform 0.2s
            }
        
    }

`;

const MenuButton = styled.text`
    font-weight: 600;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: hsla(0,0%,0%,.05);
        transition: transform 0.2s
        
        }

`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 4px;
    margin-bottom: 25px;
`;

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
    border-radius: 50%;

    &:hover {
        background: hsla(0,0%,0%,.05);
        transition: transform 0.2s
    }
`;

const NavBar = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

    li {
        padding: 8px 8px;
        border-radius: 10px;
        margin-bottom: 15px;
        margin-left: 10px;

        &:hover {
            background: hsla(0,0%,0%,.05);
            transition-timing-function: ease;
            transition-delay: 0.10s;

        }

        a {
            font-weight: 600;
            inline-size: auto;
            min-block-size: 32px;
            color: #393c41;
            width: 100%;

        }
    }

`;
