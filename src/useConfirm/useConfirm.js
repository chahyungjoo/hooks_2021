import React, { useState, useEffect, useRef } from "react";


export const useConfirm = (message = "", callback, rejection) => {
  const confirmAction = () => {
    if(window.confirm(message)){
      callback();
    } else{
      rejection();
    }
  }

  return confirmAction;
}