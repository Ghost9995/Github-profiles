import Container from "./Container";
import moment from "moment";
const User = ({user,repos}) => {
  return <Container>
    <div className="flex flex-col md:flex-row mt-10 gap-10">
        <div className="md:w-1/2 lg:w-1/4 border-[2px] border-slate-400 rounded-2xl p-5 flex flex-col gap-2">
            <img className="w-[75%] mx-auto lg:w-full" src={user.avatar_url}/>
            <h1 className="text-3xl font-semibold">{user.name}</h1>
            <p className="font-medium text-lg text-gray-500">Created at {moment(user.created_at).format('Do MMMM YYYY')}</p>
            <div className="flex flex-col gap-1">
                <p className="font-medium text-lg text-black/75 flex items-center gap-2 dark:text-white">Followers 
                    <div className="border-[2px] px-3 py-1 border-black/75 rounded-xl font-semibold dark:border-white">
                        {user.followers}
                    </div>
                </p>
                <p className="font-medium text-lg text-black/75 flex items-center gap-2 dark:text-white">Following 
                    <div className="border-[2px] px-3 py-1 border-black/75 rounded-xl font-semibold dark:border-white">
                        {user.following}
                    </div>
                </p>
            </div>
        </div>
        <div className="md:w-1/2 lg:w-3/4 border-[2px] border-slate-400 rounded-2xl p-5 ">
            <h1 className="text-5xl font-semibold mb-4">Repositories</h1>
            <div className="grid xl:grid-cols-4 gap-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {repos?.map((repo,idx) => (
                    <a key={idx} href={repo.html_url} className="border-[2px] block border-zinc-500 rounded-xl p-2 cursor-pointer text-zinc-500 text-xl font-medium hover:bg-zinc-500 hover:text-white">
                        {repo.name}
                    </a>
                ))}
            </div>
        </div>
    </div>
  </Container>;
};

export default User;