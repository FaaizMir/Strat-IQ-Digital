"use client";

import { useEffect, useState } from "react";

export default function IntroLoader({ finishLoading }) {

    const brand = "Strat IQ Digital";

    const words = [
        "Strategy",
        "Intelligence",
        "Digital",
        "Data Driven",
    ];


    const [letters, setLetters] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);



    // Reset animation when mounted
    useEffect(() => {

        setLetters(0);
        setWordIndex(0);

    }, []);



    // Letter by letter animation

    useEffect(() => {

        if (letters < brand.length) {

            const timer = setTimeout(() => {

                setLetters((prev) => prev + 1);

            }, 120);


            return () => clearTimeout(timer);

        }


    }, [letters]);





    // Words animation

    useEffect(() => {


        if (letters !== brand.length) return;


        const timer = setInterval(() => {


            setWordIndex((prev) => {


                if (prev < words.length - 1) {

                    return prev + 1;

                }


                clearInterval(timer);


                setTimeout(() => {

                    finishLoading();

                }, 700);



                return prev;


            });



        }, 800);



        return () => clearInterval(timer);



    }, [letters]);





    return (

        <div className="loader">


            <div className="loader-content">


                <div className="brand">

                    {brand.substring(0, letters)}

                </div>



                <div className="word-container">


                    {
                        words.map((word, index) => (

                            <div
                                key={word}
                                className={`word ${index === wordIndex ? "active" : ""
                                    }`}
                            >

                                {word}

                            </div>


                        ))
                    }


                </div>


            </div>





            <style jsx>{`

.loader{

position:fixed;
inset:0;
background:#050505;
z-index:999999;

display:flex;
align-items:center;
justify-content:center;

}



.loader-content{

display:flex;
align-items:center;
gap:10px;

font-family:Inter, sans-serif;

font-size:22px;
font-weight:600;

}



.brand{

color:white;
white-space:nowrap;

}



.word-container{

position:relative;
height:30px;
width:180px;

overflow:hidden;

}



.word{

position:absolute;

top:40px;
left:0;

opacity:0;

color:#222;

transform:translateY(30px);

transition:
all .45s ease;


}



.word.active{

top:0;

opacity:1;

color:white;

transform:translateY(0);


}




.loader.hide{

opacity:0;

}





@media(max-width:768px){

.loader-content{

font-size:18px;

}

.word-container{

width:130px;

}


}



`}</style>


        </div>


    );


}