import Image from "next/image"
import { AiOutlineHeart } from "react-icons/ai"
import { BiMessageRounded, BiUpload } from "react-icons/bi"
import { FaRetweet, FaUser } from "react-icons/fa"

const Feedcard: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 hover:bg-slate-900 transition-all cursor-pointer p-2">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image
                        className="rounded-full"
                        src={"https://avatars.githubusercontent.com/u/123061802?v=4"}
                        alt="user-image"
                        height={50}
                        width={50}
                    />
                </div>
                <div className="col-span-10">
                    <h5>Harsh Kumar</h5>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate itaque fugit nemo eligendi voluptatibus quod possimus aliquam nulla consequatur sunt! Esse, nostrum illum ad, inventore odio enim dolorem eius aspernatur tempore quidem consequatur culpa, sunt quod fugiat harum repellendus ab ipsam cum! Facilis facere sequi sunt. Asperiores modi corrupti possimus rem magnam fugit porro error voluptas!
                    </p>
                    <div className="flex justify-between mt-5 text-xl items-center p-2">
                        <div><BiMessageRounded /></div>
                        <div><FaRetweet /></div>
                        <div><AiOutlineHeart /></div>
                        <div><BiUpload /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feedcard