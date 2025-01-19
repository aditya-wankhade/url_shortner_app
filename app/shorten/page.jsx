"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [generate, setGenerate] = useState('')

    const handleSubmit = () => {
        console.log("Adi");

    }

    const Generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setShortUrl('')
                setUrl('')
                setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }
    return (
        <div className='w-1/2  mx-auto  flex flex-col items-center mt-9 bg-purple-200 p-6 rounded-lg'>
            <h1 className=' font-bold text-xl first-letter:text-purple-500'>Generate Your short URL's</h1>
            <div className='flex flex-col gap-4 mt-2 items-center w-full'>
                <input
                    type="text"
                    value={url}
                    placeholder='Enter Your URL'
                    onChange={e => { setUrl(e.target.value) }}
                    className='p-4 w-full focus:outline-dashed focus:outline-purple-400 rounded-lg'
                />

                <input
                    type="text"
                    placeholder='Enter Your Prefferd short  URL text'
                    value={shortUrl}
                    onChange={e => { setShortUrl(e.target.value) }}
                    className='w-full rounded-lg p-4 focus:outline-dashed focus:outline-purple-400'
                />

                <button className='bg-purple-600 text-white shadow-lg rounded-lg px-5 py-3 font-bold' onClick={Generate}>Generate</button>

                {Generate && <>
                    <h1>Your Links :-</h1>
                    <div><Link target='_blank' href={generate}>{generate}</Link></div>
                </>}
            </div>
        </div>
    )
}

export default page