import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between items-center md:max-w-6xl mx-auto p-4 border-b-2">
            <h2 className="text-3xl font-bold">Konwledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );

}
export default Header;