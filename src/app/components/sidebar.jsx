import Nav from "./nav";

export default function Sidebar() {
    return (
        <>
            <div className="w-full lg:w-[15%] lg:block hidden fixed top-[35%] mb-40">
                <Nav />
            </div>
        </>
    )
}