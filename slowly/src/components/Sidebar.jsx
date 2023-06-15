import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Logo from "../assets/logo.jpg"
import Logout from "./Logout"

export default function Sidebar() {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    useEffect(async () => {
      const data = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      setCurrentUserName(data.username);
      setCurrentUserImage(data.avatarImage);
    }, []);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
    }

    return (
        <>
            <Container>
                <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h3>slowly</h3>
                </div>

                <div className="action">

                    <button>
                        Random Pairing
                    </button>

                    <button>
                        Manual Pairing
                    </button>

                </div>

                <div className="current-user">
                    <div className="avatar">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeBUsGNJYoouXRyD5Y4sBjiqtTNIXeTz76GnPlHEnCA&s"
                            alt="avatar"
                        />
                    </div>
                    <div className="username">
                        <h2>{currentUserName}</h2>
                    </div>
                    
                    <Logout/>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 75% 15%;
    overflow: hidden;
    background-color: #080420;
    .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      background-color: #151238;
      img {
        height: 2rem;
        border-radius: 50%;
      }
      h3 {
        font-size: 1.5rem;
        background-image: linear-gradient(to right, #00ff99, #ff00bf, yellow, green, #ff00e1, #005082, violet);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
      }
    }

    .action{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        button{
            margin-top: 2rem;
            width: 70%;
            padding: 1rem;
            border-radius: 15px;
            background-color:  #ffffff34;
            color: white;
            opacity: 0.8;
            &:hover{
                cursor: pointer;
                color: #00ffbb;
                background-color: #005082;
            }

            &:focus{
                background-color: #9a86f3;
                color: white;
                opacity: 1;
            }
        }
    }
  
    .current-user {
      background-color: #242487;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .avatar {
        img {
          height: 3rem;
          max-inline-size: 100%;
          border-radius: 50%;
        }
      }
      .username {
        h2 {
          color: white;
        }
      }
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        gap: 0.5rem;
        .username {
          h2 {
            font-size: 1rem;
          }
        }
      }
    }
  `;