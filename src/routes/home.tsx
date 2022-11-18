
export default function Home() {

    return (
        <div>
            <ExampleOne />
        </div>
    );
}

function ExampleOne() {
    const condition = true;
    return (
        <div>
            <form className={`m-4 ${condition ? "flex" : "hidden"}`}>
                <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
                <button className="px-8 rounded-r-lg bg-yellow-400 md:bg-red-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
            </form>
        </div>
    );
}

