import Container from "./Container";
const SearchUsers = ({submitHandler,onChangeHandler,username}) => {
  return <Container>
    <form onSubmit={submitHandler} className="mt-10 flex justify-center lg:gap-6 gap-3">
        <input value={username} onChange={onChangeHandler} placeholder="Enter Github username..." className="md:w-1/3 py-3 px-4 border-[2px] border-slate-400 rounded-xl font-medium focus-visible:outline-none" type="text" />
        <button type="submit" className="bg-black text-white shadow-xl w-auto px-3 sm:px-8 py-2 cursor-pointer rounded-xl border border-black hover:bg-white hover:text-black">Submit</button>
    </form>
  </Container>;
};

export default SearchUsers;