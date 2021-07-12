import React, { useState, useEffect, useRef } from "react";

export const useHover = functionName => {
    /*if(typeof functionName !== "function"){
      return;
    }*/
    const element = useRef();
    
    useEffect( () => {
      if(element.current){
        element.current.addEventListener("mouseenter", functionName);
      }
      
      return () => {
        if(element.current){
          element.current.removeEventListener("mouseenter", functionName);
        }
      };
  
    }, []);
  
    return element;
  }