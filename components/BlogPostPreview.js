// NextJS Components
import Image from "next/image";
import Link from "next/link";

// Styles
import utilStyles from "../styles/utils.module.css";

export default function BlogPostPreview(props) {
    let { data } = props;
    return (
        <div className={utilStyles.BlogPostPreview + " bg-slate-100 rounded-xl p-8 dark:bg-slate-800"}>
            <Link href={"/posts/" + data.id}>
                <a className="text-cyan-800">
                    <Image 
                        className={"w-full h-full object-cover rounded-lg"}
                        src={data.url}
                        alt={data.alt}
                        width={"800px"}
                        height={"470px"}/>
                    <h4 className="relative p-3 text-slate-500 hover:text-cyan-800">{data.title}</h4>
                </a>
            </Link>
        </div>
    )
}