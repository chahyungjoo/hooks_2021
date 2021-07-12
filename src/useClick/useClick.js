import React, { useState, useEffect, useRef } from "react";

export const useClick = functionName => {
    /*if(typeof functionName !== "function"){
      return;
    }*/
    const element = useRef();
    
    useEffect( () => {
      if(element.current){
        element.current.addEventListener("click", functionName);
      }
      
      return () => {
        if(element.current){
          element.current.removeEventListener("click", functionName);
        }
      };
  
    }, []);
  
    return element;
  }