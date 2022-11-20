import React from 'react'

import { useRef } from "react";
import clsx from "clsx";
import useLazyLoad from "./useLazyLoad";
import { CardProfile } from './CardProfile';
import { LoadingPosts } from './LoadingPosts';
import postuser from './user.json';

const NUM_PER_PAGE = 1
const TOTAL_PAGES = 5


export const PostsUser = () => {


    let images = postuser["userdata"];

    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
            

        setTimeout(() => {
            const data = images.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            );
            console.log(data);
            resolve(data);
        }, 10);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return(
    <>
 
    <div className=" sm:grid sm:m-10 sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4 content-start bg-gray-600 p-11">
    
    {data.map(data => {

        return <CardProfile owner={data["username"]}  realname={data["name"]}  useremail={data["email"]} phone={data["phone"]} city={data["address[city]"]}/>
    })}
    </div>
    <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
        <LoadingPosts />
    </div>

    </>
);
}
