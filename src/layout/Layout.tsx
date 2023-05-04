import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="">
            <Header />
            <main className="w-[1440px] m-auto mt-[30px] mb-[10px] ">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;