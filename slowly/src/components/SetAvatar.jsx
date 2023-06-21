import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import axios from "axios"
import loader from "../assets/loader.gif"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
import { setAvatarRoute } from "../utils/APIRoutes"

export default function SetAvatar(){
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedAvatar, setSelectedAvatar] = useState(undefined)
    const toastOptions = {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    }

    useEffect(async () => {
        if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
          navigate("/login");
    }, []);
    
    const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
          toast.error("Please set your avatar", toastOptions);
        } else {
          const user = await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
          );
    
          const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
            image: avatars[selectedAvatar],
          });
    
          if (data.isSet) {
            user.isAvatarImageSet = true;
            user.avatarImage = data.image;
            localStorage.setItem(
              process.env.REACT_APP_LOCALHOST_KEY,
              JSON.stringify(user)
            );
            navigate("/");
          } else {
            toast.error("Error setting avatar. Please try again.", toastOptions);
          }
        }
      }
    
      const [image, setImage] = useState("");
      const imageRef = useRef(null);
     
      const useDisplayImage = () => {
        const [result, setResult] = useState("");
        const uploader = (e) => {
          const imageFile = e.target.files[0];
          const reader = new FileReader();
          reader.addEventListener("load", (e) => {
            setResult(e.target.result);
          })
          reader.readAsDataURL(imageFile);
        }
     
        return { result, uploader };
      }
     
      const { result, uploader } = useDisplayImage();

    return (
        <>
         
            <Container>
              <div className="title-container">
                <h1>Set Avatar as your profile picture</h1>
              </div>
              <div className="avatars">
                
                <input 
                    type="file" 
                    onChange={(e) => {
                      setImage(e.target.value.files);
                      uploader(e)
                    }} 
                />
                {result && <img ref={imageRef} src={result} alt="" />}
              </div>
              <button onClick={setProfilePicture} className="submit-btn">
                Set as Profile Picture
              </button>
              <ToastContainer />
            </Container>
          
        </>
      )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 100%;
  }

  .title-container {
    h1 {
        background-image: linear-gradient(to right, #00ff99, #ff00bf, yellow, green, #ff00e1, #53da92, violet);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
    }

    img {
        border-radius: 50%;

        height: 6rem;
        transition: 0.5s ease-in-out;
      }

    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;