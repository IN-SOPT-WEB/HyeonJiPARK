import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

export default function Modal({ open, children, onClose }) {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <ModalBackground />
            <ModalContainer>
                {children}
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </ModalContainer>
        </>,
        document.getElementById("portal")
    );
}

// ----------------------------- style -----------------------------
const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    width: 250px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Galmuri9";
    background-color: #fff;
    padding: 50px;
    z-index: 1000;
    border-radius: 20px;
    border: 1px solid black;
`;

const CloseBtn = styled.button`
    margin: 5px auto;
    padding: 6px 12px;
    width: 250px;
    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 0px 5px 0px 0px #3b82f6;
    background-color: white;
    font-family: "Galmuri9";
    transition: 0.2s;
    &:hover {
        color: white;
        background-color: #3b82f6;
        cursor: pointer;
    }
`;
