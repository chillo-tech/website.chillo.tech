import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="h-screen w-full p-5 bg-blue-chillo">
        <div className="bg-white h-screen flex justify-center flex-col w-full">
            <div className="w-full h-max flex justify-center py-5 shadow-lg px-3">
                <div className="container h-max w-full">
                    <Header/>
                </div>
            </div>
            <div className="h-full w-full">
                <Banner/>
            </div>
        </div>
    </main>
  );
}
