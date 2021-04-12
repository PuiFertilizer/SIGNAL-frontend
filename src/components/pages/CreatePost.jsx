import React from 'react';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import '../../App.css';
import '../../Webflow.scss';
import '../../Tags.scss';
import { ReactComponent as LogoA } from '../../images/user.svg';
import { ReactComponent as LogoM } from '../../images/salary.svg';
import { ReactComponent as LogoC } from '../../images/calendar.svg';
import Thumbnail from '../../Thumbnail';
import TagsJSX from '../../Tags';

const Button = styled.button`
    margin-left: 20px;
    background-color: #0077ff;
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #3f51b5;
    }
`

const Cancel = styled.button`
    margin-top: 5em;
    margin-left: 59.4em;
    background-color: #ff3535;
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: ease background-color 250ms;
    
    &:hover {
        background-color: #c02020;
    }
`

function CreatePost() {
    const history = useHistory();

    function handleClick() {
        history.push("/");
    }
    
    return(
        <div className="App-skeleton-ground">
            <h1 className="App-skeleton-createpost"> Create Post </h1>
            <div className="App-skeleton-bg">
                <h3> Post Title </h3>
                <div className="webflow-style-input">
                    <input className="" type="text" placeholder='Board Game Party (Bring snacks)' maxLength='100' minLength='5' required></input>
                </div>
                <h3 style={{ marginTop: 50 }}> Post Description </h3>
                <textarea className="App-skeleton-textareadesc" placeholder='Rule: No anime' maxLength='3000'/>
            </div>
            <div className="App-skeleton-bga">
                <Thumbnail/>
                <h5 style={{ zIndex: 2, marginLeft: '49px', marginTop: '5px', position: 'relative', cursor: 'default' }}> Thumbnail </h5>
                <LogoC style={{height: '30px', width: '30px', position: 'absolute', display: 'block', marginTop: '30px'}}/>
                <h5 style={{ color: 'white', marginTop: '40px', marginLeft: '50px' }}> Event Date </h5>
            </div>
            <div className="App-skeleton-bg1">
                <LogoA style={{ height: '30px', width: '30px', marginBottom: '20px' }} />
                <h5 style={{ display: 'inline', marginLeft: '15px', position: 'absolute' }}> Max Atendee </h5>
                <div className="webflow-style-input1">
                    <input type="text" placeholder="5" maxLength='2' pattern='[0-9]{1,2}' required></input>
                </div>
                <LogoM style={{ height: '30px', width: '30px', marginTop: '25px', marginBottom: '15px' }} />
                <h5 style={{ display: 'inline', marginLeft: '20px', marginTop: '27px', position: 'absolute' }}> Max Estimated Cost </h5>
                <div className="webflow-style-input1">
                    <input type="text" placeholder="690" maxLength='4' pattern='[0-9]{1,4}'></input>
                </div>
            </div>
            <div className="App-skeleton-bg2">
                <TagsJSX />
            </div>
            <Cancel onClick={handleClick}> Cancel </Cancel>
            <Button> Post </Button>
        </div>
    );
}

export default CreatePost;