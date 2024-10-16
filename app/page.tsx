export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2 md:flex-row  *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-100">
        <input
          className="w-full rounded-full py-3 bg-gray-200 pl-5 ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="text"
          placeholder="Email address"
          required
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium  md:px-10">
          Log in
        </button>
      </div>
    </main>
  );
}
