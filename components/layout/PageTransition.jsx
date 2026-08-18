"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import IntroLoader from "./IntroLoader";


export default function PageTransition({ children }) {


    const pathname = usePathname();


    const [loading, setLoading] = useState(false);



    useEffect(() => {


        setLoading(true);



    }, [pathname]);





    return (

        <>


            {
                loading && (

                    <IntroLoader
                        finishLoading={() => setLoading(false)}
                    />

                )

            }



            {children}


        </>


    );


}