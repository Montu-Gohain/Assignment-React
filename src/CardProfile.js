import React, { useEffect, useState } from 'react'

export const CardProfile = ({owner, useremail, realname ,phone, city}) => {



        const [picurl, setPicurl] = useState("https://avatars.dicebear.com/api/miniavs/variant01/short16/.svg");

        // Todo : --------------------- Random Image from Dicebear API-----------

    
        const random_sprite = (sprites) => {
    
            return sprites[Math.floor(Math.random()*sprites.length)];
        
         }
        const lnk1 = "https://avatars.dicebear.com/api/";
        
        const sprites = [
        
            "male", "female", "human", "adventurer",
             "adventurer-neutral","bottts", "avataaars" ,
             "gridy" ,"micah", "avataaars","big-ears", "big-smile", "croodles",
             "miniavs","open-peeps","personas","pixel-art","pixel-art-neutral"
            ]
        
        
        
        
        const spritesvariants = [
        
            "variant30", "variant29", "variant28", "variant27", "variant26", "variant25", "variant24",
             "variant23", "variant22", "variant21", "variant20", "variant19", 
             "variant18", "variant17", "variant16", "variant15", "variant14",
              "variant13", "variant12", "variant11", "variant10", "variant09", 
              "variant08", "variant07", "variant06", "variant05", "variant04", "variant03", "variant02", "variant01"
        ];
        
        const hair = [
            "short16", "short15", "short14", "short13", "short12", "short11", "short10", "short09", 
            "short08", "short07", "short06", "short05", "short04", "short03", "long20", "short02",
             "short01", "long19", "long18", "long17", "long16", "long15", "long14", "long13", "long12", 
             "long11", "long10", "long09", "long08", "long07", "long06", "long05", "long04", "long03", "long02", "long01",
             "catEars", "glasses", "sailormoonCrown", "clownNose", "sleepMask", "sunglasses", "faceMask", "mustache"
        ];
        
        let lnk2 = "/"+ random_sprite(spritesvariants)+"/"+random_sprite(hair) +"/.svg";

        let mylink = lnk1.concat(random_sprite(sprites),lnk2); 


        // Todo : This hook sets the profile image only for the first render of the card.

        useEffect(() => {  // ? componentDidMount Alternative
            setPicurl(mylink);
        },[]);

      
    return (
        <>
            <div class="sm:flex flex-shrink-0  w-auto mt-5 md:flex rounded overflow-hidden shadow-lg m-2 px-9 bg-gray-200">
            <div className=' m-auto rounded-full w-52 bg-rose-100 h-52 '>
                <img class="w-full h-full object-center" src={picurl} alt="dicebearimages" />
            </div>
                    <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{owner}</div>
                            <hr className=' h-2 bg-gray-600'/>
                            <div className=' text-rose-500 font-medium'>{realname}</div>
                            <div>{useremail}</div>
                            <div>{phone}</div>
                            <div>{city}</div>
                    </div>
            </div>
        </> 
    );
}

