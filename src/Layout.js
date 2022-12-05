import { Header } from "components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout () {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </>   
    )
}