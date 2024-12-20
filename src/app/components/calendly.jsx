"use client"
import React, { useState, useEffect } from "react"
import { InlineWidget, PopupButton } from 'react-calendly';

export default function Calendly() {
    return (
        <div className="my-20">
            <div className="lg:w-[50%]">
                <h2 className="font-bold text-[20px] sm:text-[30px] md:text-[40px] max-[768px]:mb-6">Schedule a call with me</h2>
            </div>
            <div className="h-[10px] mb-[900px] calen">
                <InlineWidget url="https://calendly.com/godwinnwfr" />
            </div>

            <a
                href="https://calendly.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontSize: '16px',
                    textAlign: 'center',
                }}
            >
                Schedule a Meeting
            </a>
        </div>
    )
}